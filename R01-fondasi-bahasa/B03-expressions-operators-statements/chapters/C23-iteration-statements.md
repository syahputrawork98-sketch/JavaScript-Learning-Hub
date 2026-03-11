# C23 - [14.7] Iteration Statements

## Tujuan

Bab ini bertujuan memahami struktur iterasi utama (`for`, `while`, `do...while`, `for...of`, `for...in`) secara praktis.

## Kenapa Bab Ini Penting

Loop adalah mekanisme inti untuk memproses data berulang dan membangun flow program yang dinamis.

## Konsep Inti

### 1. `for` untuk Iterasi Berbasis Counter

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

### 2. `while` untuk Kondisi Dinamis

`while` cocok saat jumlah iterasi tidak diketahui sejak awal.

### 3. `do...while` Minimal Jalan Sekali

Body dijalankan dulu, kondisi dicek belakangan.

### 4. `for...of` vs `for...in`

- `for...of`: iterasi nilai iterable (array, string, dsb.)
- `for...in`: iterasi key enumerable object

## Praktik yang Direkomendasikan

- Pilih jenis loop sesuai bentuk data.
- Pastikan kondisi berhenti jelas untuk menghindari infinite loop.
- Gunakan nama variabel iterasi yang bermakna.

## Kesalahan Umum

- Salah pakai `for...in` pada array saat butuh nilai.
- Lupa update counter/condition di `while`.
- Menulis loop panjang tanpa memecah tanggung jawab.

## Checkpoint Cepat

1. Kapan pakai `for` vs `while`?
2. Apa beda `for...of` dan `for...in`?
3. Kenapa `do...while` unik dibanding loop lain?

## Analogi Singkat

Iteration statement itu seperti proses berulang di lini kerja yang terus berjalan sampai syarat berhenti tercapai. Bentuknya familiar, walau detail tiap jenis loop bisa berbeda.

## Ringkasan

- JavaScript punya beberapa bentuk iteration statement.
- Pemilihan loop yang tepat meningkatkan kejelasan dan keamanan flow.
- Hindari infinite loop dengan kontrol kondisi yang disiplin.

## Visual Map

![C23 - [14.7] Iteration Statements Map](../assets/C23-iteration-statements-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C23-iteration-statements/example.js
- Panduan: ../examples/C23-iteration-statements/README.md
