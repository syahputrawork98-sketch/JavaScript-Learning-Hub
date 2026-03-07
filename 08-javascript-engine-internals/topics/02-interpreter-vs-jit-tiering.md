# 02 - Interpreter vs JIT Tiering

## Tujuan
Memahami peran interpreter dan kompilasi bertingkat (tiering) dalam engine modern.

## Fokus Istilah
- Interpreter
- Baseline tier
- Optimizing tier
- Warm-up
- Hot path

## Mapping Konsep
- Kode biasanya mulai dieksekusi di tier awal (interpreter/baseline).
- Jalur panas (hot path) dipromosikan ke tier optimasi.
- Jika asumsi optimasi rusak, engine bisa deopt.

## Workflow Baca (Topik Ini)
1. Jalankan fungsi kecil sekali dan amati bahwa tidak semua fungsi langsung "ngebut".
2. Ulangi pemanggilan fungsi berkali-kali (warm-up).
3. Bandingkan gejala sebelum/sesudah warm-up dengan profiling sederhana.
4. Identifikasi kapan jalur kembali lambat karena deopt signal.

## Mini Mapping Contoh
```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
}

for (let i = 0; i < 1_000; i++) sum([1, 2, 3, 4]);
```
Cara baca:
1. Pemanggilan awal cenderung lewat tier awal.
2. Repetisi tinggi meningkatkan peluang optimasi jalur ini.
3. Jika pola input stabil, optimasi lebih mungkin efektif.

## Checkpoint
- [ ] Bisa menjelaskan kenapa warm-up sering muncul di benchmark JS.
- [ ] Bisa menjelaskan perbedaan tier awal vs tier optimasi.
- [ ] Bisa menyebutkan satu alasan umum jalur teroptimasi di-deopt.

## Jebakan Umum
- Membandingkan performa dari satu kali run lalu menyimpulkan final.
- Menganggap JIT pasti aktif optimal untuk semua jalur kode.
