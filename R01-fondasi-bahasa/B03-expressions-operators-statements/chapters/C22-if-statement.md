# C22 - [14.6] if Statement

## Tujuan

Bab ini bertujuan memahami `if` sebagai struktur percabangan utama untuk control flow.

## Kenapa Bab Ini Penting

Hampir semua keputusan runtime dasar di JavaScript ditulis dengan `if`.

## Konsep Inti

### 1. Bentuk Dasar `if`

```js
if (score >= 75) {
  console.log('Lulus');
}
```

### 2. `if/else` untuk Dua Cabang

```js
if (isMember) {
  price = 90000;
} else {
  price = 120000;
}
```

### 3. `else if` untuk Multi Kondisi

Gunakan berurutan dari kondisi paling spesifik ke paling umum.

### 4. Kondisi Menggunakan Boolean Context

Expression kondisi dievaluasi dengan aturan truthy/falsy.

## Praktik yang Direkomendasikan

- Tulis kondisi ringkas dan eksplisit.
- Hindari nested `if` terlalu dalam; ekstrak fungsi bila perlu.
- Gunakan guard clause untuk mengurangi indentasi berlapis.

## Kesalahan Umum

- Kondisi panjang tanpa variabel antara.
- Salah urutan kondisi sehingga cabang spesifik tidak pernah kena.
- Menaruh assignment di kondisi tanpa sengaja.

## Checkpoint Cepat

1. Kapan pakai `else if` vs `switch`?
2. Apa manfaat guard clause pada fungsi?
3. Kenapa urutan kondisi penting?

## Analogi Singkat

If statement itu seperti petugas yang memilih jalur masuk atau keluar berdasarkan satu kondisi. Konsepnya dekat dengan keputusan sehari-hari sehingga cukup butuh jembatan intuitif singkat.

## Ringkasan

- `if` adalah alat utama percabangan.
- Kualitas kondisi menentukan kualitas alur program.
- Susun cabang agar mudah dibaca dan diuji.

## Visual Map

![C22 - [14.6] if Statement Map](../assets/C22-if-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C22-if-statement/example.js
- Panduan: ../examples/C22-if-statement/README.md
