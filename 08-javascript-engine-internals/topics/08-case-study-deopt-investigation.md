# 08 - Case Study: Deopt Investigation

## Tujuan Pembelajaran
- Melatih investigasi performa berbasis bukti dari gejala ke root cause.
- Bisa memisahkan baseline, hipotesis, aksi, verifikasi, dan guard.
- Bisa menutup investigasi dengan keputusan yang dapat direplikasi tim.

## Konsep Utama
- Baseline benchmark
- Deopt signal
- Controlled patch
- Retest parity
- Regression guard

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`8` pada Buku 08.
- Prasyarat langsung: `07-engine-friendly-javascript-patterns.md`.
- Topik ini menutup buku 08.

Prasyarat topik:
- Sudah paham tiering, shape stability, deopt trigger, dan profiling dasar.
- Sudah memahami pentingnya benchmark repeatable.

Kamus mini topik:
- `[baru]` Repro recipe: langkah reproduksi gejala yang stabil.
- `[baru]` Patch isolation: perubahan kecil agar sebab-akibat jelas.
- `[baru]` Perf guard: mekanisme mencegah regresi performa di iterasi berikutnya.

## 1) Big Picture
Investigasi performa yang efektif bukan lomba menebak optimasi, tetapi proses ilmiah kecil: ukur dulu, bentuk hipotesis, ubah satu variabel, ukur lagi. Tanpa disiplin ini, tim mudah menghabiskan waktu pada "perbaikan" yang tidak menyentuh akar masalah.

Case study ini merangkum pola kerja yang bisa dipakai berulang untuk kasus deoptimization.

## 2) Skenario Kasus
Gejala produksi:
- Endpoint `/items/list` p95 naik dari `140ms` ke `360ms` setelah data source baru diaktifkan.
- CPU penggunaan naik, memory relatif stabil.

Konteks teknis:
- Fungsi transform item dipanggil sangat sering.
- Payload dari source baru memiliki shape object lebih heterogen.

Hipotesis awal:
- Call-site akses properti berubah dari mostly monomorphic menjadi polymorphic/megamorphic.

## 3) Baseline dan Reproduksi
Repro recipe:
1. Gunakan dataset tetap (`N=50k`) dari source lama.
2. Jalankan 30 request sintetis dan catat p50/p95.
3. Ulangi dengan dataset campuran source lama + baru.

Contoh baseline hasil:
```text
Dataset lama:
- p50 78ms
- p95 142ms

Dataset campuran:
- p50 170ms
- p95 358ms
```

Observasi awal:
- Lonjakan signifikan muncul hanya saat shape campuran masuk jalur transform.

## 4) Profiling dan Sinyal Deopt
Langkah profiling:
1. Rekam CPU profile pada skenario dataset campuran.
2. Buka flamegraph dan temukan hotspot dominan.
3. Audit fungsi hotspot terhadap stabilitas tipe/shape input.

Temuan contoh:
- Hotspot utama: `normalizeItems`.
- Di call-site `readPrice(item)` terdapat beberapa shape object berbeda.
- Tidak ada leak memory dominan pada heap snapshot.

## 5) Patch Kecil Terukur
Prinsip patch:
- Ubah seminimal mungkin, target langsung pada sumber instabilitas shape.

Before:
```js
function normalizeItems(rawItems) {
  return rawItems.map((item) => ({
    id: item.id,
    price: item.price,
    category: item.category,
  }));
}
```

After (normalisasi kontrak input):
```js
function toCanonicalItem(item) {
  return {
    id: Number(item.id ?? 0),
    price: Number(item.price ?? 0),
    category: String(item.category ?? "unknown"),
  };
}

function normalizeItems(rawItems) {
  return rawItems.map(toCanonicalItem);
}
```

Alasan patch:
- Menstabilkan shape dan tipe di jalur panas.
- Membuat call-site akses properti lebih konsisten.

## 6) Retest dan Verifikasi
Retest aturan:
- Skenario, jumlah data, dan kondisi eksekusi harus sama dengan baseline.

Contoh hasil retest:
```text
Sesudah patch:
- p50 92ms
- p95 186ms

CPU hotspot normalizeItems turun signifikan.
```

Interpretasi:
- Patch tidak sekadar mengubah angka satu run, tetapi memperbaiki tren pada skenario yang sama.

## 7) Regression Guard
Guard minimum yang disarankan:
1. Micro-benchmark untuk `normalizeItems` dengan dataset campuran tetap.
2. Test kontrak canonical item (tipe + shape field wajib).
3. Perf note di PR template: baseline vs retest metric.

Contoh pseudo-guard:
```js
if (canonicalItemHasMissingKeys) {
  throw new Error("Canonical item shape tidak lengkap");
}
```

## 8) Eksperimen Kode
Simulasikan dampak input stabil vs campuran:

```js
function readPrice(item) {
  return item.price + 1;
}

function run(label, items) {
  const t0 = performance.now();
  let sum = 0;
  for (let i = 0; i < 300000; i++) {
    sum += readPrice(items[i % items.length]);
  }
  const t1 = performance.now();
  console.log(label, (t1 - t0).toFixed(2), "ms", sum);
}

run("stable", [{ price: 10, id: 1 }, { price: 20, id: 2 }]);
run("mixed", [{ price: 10, id: 1 }, { id: 2, price: 20, extra: true }, { price: 30 }]);
```

Tugas:
1. Catat selisih tren waktu.
2. Tambah canonical normalization lalu ukur ulang.

## 9) Jebakan Umum
- Mengubah banyak komponen sekaligus sehingga root cause tidak jelas.
- Menilai keberhasilan dari satu kali pengukuran.
- Menyimpulkan deopt tanpa data profiling.
- Tidak menyimpan guard sehingga regresi terulang di sprint berikutnya.

## 10) Checkpoint
- [ ] Bisa menulis repro recipe yang stabil.
- [ ] Bisa memisahkan gejala, hipotesis, aksi, dan verifikasi.
- [ ] Bisa mendesain patch kecil yang relevan dengan sinyal profiling.
- [ ] Bisa menambahkan regression guard setelah fix.

## 11) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `03-hidden-classes-shapes-dan-inline-cache.md`.
2. Ulangi `04-optimization-dan-deoptimization-triggers.md`.
3. Ulangi `06-profiling-basics-cpu-heap-flamegraph.md`.

## 12) Cakupan dan Batasan
- Dibahas: pola investigasi deopt yang engine-agnostic dan praktis.
- Tidak dibahas: detail tooling flag internal spesifik per engine.

## Ringkasan
- Investigasi deopt harus berbasis baseline dan retest yang setara.
- Stabilitas shape/tipedata di hot path sering menjadi pembeda performa besar.
- Regression guard adalah syarat agar hasil perbaikan bertahan.

## Lanjut Setelah Ini
- Kembali audit topik 01-07 dengan satu kasus performa nyata dari codebase kamu.
- Dokumentasikan playbook investigasi sebagai standar tim.
