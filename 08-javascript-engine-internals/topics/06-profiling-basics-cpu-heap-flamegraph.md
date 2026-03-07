# 06 - Profiling Basics: CPU, Heap, Flamegraph

## Tujuan Pembelajaran
- Memilih alat profiling yang tepat berdasarkan gejala performa.
- Memahami perbedaan sinyal bottleneck CPU vs memory.
- Bisa menjalankan workflow profiling yang repeatable untuk validasi perbaikan.

## Konsep Utama
- CPU profile
- Heap snapshot
- Flamegraph
- Hotspot
- Baseline and retest

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar buku: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`6` pada Buku 08.
- Prasyarat langsung: `05-garbage-collection-generational-dasar.md`.
- Lanjut setelah ini: `07-engine-friendly-javascript-patterns.md`.

Prasyarat topik:
- Sudah paham hot path, shape stability, dan deopt trigger dasar.
- Sudah paham konsep reachability memory level tinggi.

Kamus mini topik:
- `[baru]` Baseline profile: rekaman awal sebagai pembanding sebelum perbaikan.
- `[baru]` Retention path: jalur referensi yang menahan object tetap hidup.
- `[baru]` Self time: waktu yang dihabiskan fungsi itu sendiri (tanpa child calls).

## 1) Big Picture
Banyak optimasi gagal karena dilakukan berdasarkan intuisi, bukan data. Profiling memberi bukti objektif: fungsi mana yang benar-benar mahal di CPU, object mana yang tertahan di heap, dan call stack mana yang menyerap waktu eksekusi terbesar.

Workflow profiling yang baik selalu berbentuk: baseline -> hipotesis -> perubahan kecil -> retest setara.

## 2) Memilih Alat Berdasarkan Gejala
Jika gejala utamanya:
- Latency CPU naik: mulai dari CPU profile + flamegraph.
- Memory terus bertambah: mulai dari heap snapshot + retention path.
- Keduanya naik: mulai dari CPU (hotspot), lanjut heap untuk validasi leak/retention.

## 3) Workflow Profiling Repeatable
1. Definisikan skenario reproduksi yang konsisten.
2. Rekam baseline (CPU/heap) pada skenario itu.
3. Identifikasi kandidat hotspot atau object retention dominan.
4. Terapkan patch kecil pada area paling relevan.
5. Rekam profile ulang dengan skenario yang sama.
6. Bandingkan before/after dan simpan catatan metode.

## 4) Membaca Flamegraph Secara Praktis
Aturan cepat:
1. Frame lebih lebar biasanya berarti konsumsi waktu lebih besar.
2. Cari cabang stack yang dominan secara konsisten.
3. Bedakan self time tinggi vs total time tinggi.
4. Hindari optimasi fungsi yang jarang muncul di skenario nyata.

## 5) Contoh Mini Kasus CPU
```text
Gejala:
- Endpoint /report p95 naik dari 120ms ke 340ms.

Langkah:
1) Rekam CPU profile saat trafik normal dan saat skenario berat.
2) Flamegraph menunjukkan fungsi normalizeRows dominan.
3) Audit menemukan input shape campuran memicu jalur lambat.
4) Normalisasi shape di awal pipeline.
5) Retest: p95 turun ke 170ms.
```

## 6) Contoh Mini Kasus Memory
```text
Gejala:
- Memory proses naik dari 200MB ke 600MB dalam 40 menit.

Langkah:
1) Ambil heap snapshot A (awal stabil).
2) Jalankan skenario buka-tutup panel 100x.
3) Ambil snapshot B dan bandingkan object yang terus naik.
4) Retention path menunjuk listener yang tidak di-dispose.
5) Tambah cleanup; verifikasi snapshot C.
```

## 7) Eksperimen Kode
Contoh fungsi kandidat hotspot untuk latihan CPU profiling:

```js
function normalize(rows) {
  return rows.map((r) => ({
    id: Number(r.id),
    name: String(r.name),
    active: Boolean(r.active),
  }));
}

const rows = Array.from({ length: 50000 }, (_, i) => ({
  id: i,
  name: "user-" + i,
  active: i % 2,
}));

console.time("normalize");
normalize(rows);
console.timeEnd("normalize");
```

Tugas:
1. Jadikan ini baseline.
2. Ubah implementasi normalize.
3. Ukur ulang pada input yang sama.

## 8) Jebakan Umum
- Menebak optimasi tanpa baseline profile.
- Mencampur hasil dari skenario yang tidak sebanding.
- Memperbaiki symptom, bukan hotspot/retention path utama.
- Mengandalkan satu run tunggal untuk keputusan final.

## 9) Prediksi Output Drill
```js
const data = Array.from({ length: 3 }, (_, i) => i + 1);
const out = data.map((x) => x * 2);
console.log(out);
```

### Kunci Jawaban Drill
- Output: `[2, 4, 6]`.
- Pada profiling, correctness seperti ini belum cukup; fokusnya adalah biaya runtime dari transformasi saat data besar.

## 10) Debug Story
Kasus: tim mengoptimasi cache dulu, tetapi latensi tetap tinggi.
Langkah:
1. CPU profile memperlihatkan bottleneck ada di serialisasi, bukan cache miss.
2. Heap snapshot tidak menunjukkan leak signifikan.
3. Perbaikan dialihkan ke fungsi serialisasi + normalisasi input.
4. Retest pada skenario yang sama menunjukkan p95 membaik nyata.
5. Tim menyimpan playbook profiling agar investigasi berikutnya lebih cepat.

## 11) Cakupan dan Batasan
- Dibahas: strategi profiling dasar yang portable lintas tool.
- Tidak dibahas: tutorial UI detail untuk setiap profiler spesifik.

## 12) Checkpoint
- [ ] Bisa memilih alat profiling sesuai gejala.
- [ ] Bisa membedakan bottleneck CPU vs memory secara bukti.
- [ ] Bisa menjalankan loop baseline -> patch -> retest secara repeatable.

## 13) Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik `04-optimization-dan-deoptimization-triggers.md`.
2. Ulangi topik `05-garbage-collection-generational-dasar.md`.
3. Praktikkan satu kasus kecil sampai bisa menunjukkan before/after profile.

## Ringkasan
- Profiling adalah proses berbasis bukti, bukan intuisi.
- CPU profile dan heap snapshot menjawab pertanyaan yang berbeda.
- Perbaikan performa yang kredibel selalu divalidasi dengan retest setara.

## Lanjut Setelah Ini
- [07-engine-friendly-javascript-patterns.md](./07-engine-friendly-javascript-patterns.md)
