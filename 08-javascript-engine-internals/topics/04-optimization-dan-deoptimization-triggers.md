# 04 - Optimization dan Deoptimization Triggers

## Tujuan Pembelajaran
- Mengidentifikasi pola kode yang membantu atau merusak jalur optimasi engine.
- Memahami konsep assumption invalidation sebagai akar deoptimization.
- Bisa menyusun eksperimen kecil untuk memverifikasi trigger deopt.

## Konsep Utama
- Optimization
- Deoptimization (deopt)
- Assumption invalidation
- Bailout / fallback
- Input stability

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`4` pada Buku 08.
- Prasyarat langsung: `03-hidden-classes-shapes-dan-inline-cache.md`.
- Lanjut setelah ini: `05-garbage-collection-generational-dasar.md`.

Prasyarat topik:
- Sudah paham tiering dan warm-up.
- Sudah paham shape stability dan inline cache dasar.

Kamus mini topik:
- `[baru]` Assumption invalidation: kondisi saat asumsi optimizer tidak lagi benar di runtime.
- `[baru]` Bailout: perpindahan jalur eksekusi dari optimized path ke jalur lebih aman.

## 1) Big Picture
Optimasi engine bekerja berdasarkan asumsi yang dipelajari dari runtime: tipe input, bentuk object, pola call-site. Selama asumsi stabil, jalur optimized bisa bertahan. Ketika asumsi patah, engine harus fallback demi correctness. Inilah deoptimization.

Deopt bukan error fatal. Deopt adalah mekanisme normal agar hasil program tetap benar walau performa bisa turun.

## 2) Trigger Deopt yang Sering Muncul
1. Input type berubah drastis di hot path.
2. Shape object campur-aduk pada call-site yang sama.
3. Pola akses properti tidak konsisten.
4. Benchmark dengan skenario input tidak terkontrol.

## 3) Contoh Trigger Sederhana
```js
function inc(v) {
  return v + 1;
}

for (let i = 0; i < 10000; i++) inc(i);
inc("100"); // pola input berubah
```

Observasi:
- Fase awal melihat input angka stabil.
- Input string mengubah jalur operasi.
- Optimasi sebelumnya bisa tidak relevan lagi.

## 4) Contoh Trigger Shape Instability
```js
function readX(o) {
  return o.x;
}

const a = { x: 1, y: 2 };
const b = { y: 3, x: 4, z: 5 };
const c = { x: 6 };

for (let i = 0; i < 30000; i++) {
  const obj = i % 3 === 0 ? a : i % 3 === 1 ? b : c;
  readX(obj);
}
```

Observasi:
- Call-site `readX` menerima beberapa shape berbeda.
- Optimizer lebih sulit menjaga jalur cepat stabil.

## 5) Mitigasi Praktis
1. Stabilkan kontrak input fungsi hot path.
2. Normalisasi shape object sebelum masuk jalur panas.
3. Pisahkan jalur input ekstrem dari jalur umum.
4. Uji performa dengan skenario benchmark yang repeatable.

Contoh normalisasi ringan:
```js
function normalizeUser(raw) {
  return {
    id: raw.id ?? 0,
    name: raw.name ?? "",
    tier: raw.tier ?? "basic",
  };
}
```

## 6) Eksperimen Kode
Bandingkan dua skenario: input stabil vs campuran.

```js
function addOne(v) {
  return v + 1;
}

function run(label, values) {
  const t0 = performance.now();
  let total = 0;
  for (let i = 0; i < 500000; i++) {
    total += addOne(values[i % values.length]);
  }
  const t1 = performance.now();
  console.log(label, (t1 - t0).toFixed(2), "ms", "total:", total);
}

run("stable-number", [1, 2, 3, 4]);
run("mixed", [1, 2, "3", 4]);
```

Tugas:
1. Jalankan beberapa kali.
2. Bandingkan tren, bukan satu hasil.
3. Ulangi setelah normalisasi input.

## 7) Jebakan Umum
- Menganggap semua deopt adalah bug aplikasi.
- Menyimpulkan root cause tanpa baseline profile.
- Mengukur before/after dengan input atau beban yang berbeda.

## 8) Prediksi Output Drill
```js
function merge(a, b) {
  return a + b;
}

console.log(merge(2, 3));
console.log(merge("2", 3));
```

### Kunci Jawaban Drill
- Output benar secara logika: `5` lalu `23`.
- Latihan ini menunjukkan correctness tetap benar walau pola tipe berubah.
- Perubahan pola input seperti ini sering menjadi sinyal deopt di jalur panas.

## 9) Debug Story
Kasus: endpoint scoring tiba-tiba melambat setelah integrasi data partner baru.
Langkah debug:
1. Ambil baseline CPU profile untuk request normal.
2. Bandingkan profile saat payload partner masuk.
3. Temukan hotspot di fungsi agregasi dengan input campuran.
4. Tambahkan normalisasi input sebelum hot path.
5. Retest p95 latency dan simpan regression check.

## 10) Cakupan dan Batasan
- Dibahas: trigger deopt praktis dan strategi mitigasi umum.
- Tidak dibahas: detail flag/debug internal engine tertentu.

## 11) Checkpoint
- [ ] Bisa menjelaskan deopt sebagai mekanisme normal engine.
- [ ] Bisa memberi 2 contoh assumption invalidation.
- [ ] Bisa menyusun eksperimen kecil untuk menguji trigger deopt.

## 12) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik `02-interpreter-vs-jit-tiering.md`.
2. Ulangi topik `03-hidden-classes-shapes-dan-inline-cache.md`.
3. Uji ulang contoh ini dengan input yang makin terkontrol.

## Ringkasan
- Optimasi engine bergantung pada asumsi runtime yang stabil.
- Ketika asumsi patah, deopt terjadi untuk menjaga correctness.
- Stabilitas input/shape adalah kunci menjaga hot path tetap cepat.

## Lanjut Setelah Ini
- [05-garbage-collection-generational-dasar.md](./05-garbage-collection-generational-dasar.md)
