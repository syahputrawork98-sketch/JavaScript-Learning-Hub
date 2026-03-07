# 04 - Optimization dan Deoptimization Triggers

## Tujuan
Mengidentifikasi pola kode yang membantu atau merusak jalur optimasi engine.

## Fokus Istilah
- Optimization
- Deoptimization
- Assumption invalidation
- Bailout

## Mapping Konsep
- Optimizer bekerja dengan asumsi tertentu tentang tipe/bentuk data.
- Jika asumsi patah saat runtime, engine fallback (deopt).
- Deopt bukan error, tapi sinyal jalur optimasi tidak valid lagi.

## Workflow Baca (Topik Ini)
1. Tentukan fungsi kandidat hot path.
2. Jaga input stabil, lalu amati performa baseline.
3. Masukkan variasi input ekstrem yang melanggar asumsi.
4. Cek apakah ada gejala deopt (latensi naik, hotspot berubah).

## Mini Mapping Contoh
```js
function inc(v) {
  return v + 1;
}

for (let i = 0; i < 10000; i++) inc(i);
inc("100"); // pola input berubah
```
Cara baca:
1. Awal fungsi cenderung melihat input numerik stabil.
2. Input string dapat memicu jalur berbeda.
3. Pergeseran pola ini bisa memukul asumsi optimasi.

## Checkpoint
- [ ] Bisa menyebutkan deopt sebagai mekanisme normal engine.
- [ ] Bisa menjelaskan konsep assumption invalidation.
- [ ] Bisa mendesain eksperimen kecil untuk menguji trigger deopt.

## Jebakan Umum
- Menganggap semua deopt itu bug fatal aplikasi.
- Mencampur benchmark sebelum/sesudah tanpa kontrol input.
