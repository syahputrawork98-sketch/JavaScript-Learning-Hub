# C07 - [13.7] Multiplicative Operators

## Tujuan

Bab ini bertujuan memahami operator `*`, `/`, dan `%` beserta perilaku coercion-nya.

## Kenapa Bab Ini Penting

Operator multiplicative sering muncul pada perhitungan bisnis dan iterasi, serta berinteraksi langsung dengan coercion number.

## Konsep Inti

### 1. Operator Dasar

```js
6 * 3; // 18
6 / 3; // 2
7 % 3; // 1
```

### 2. Operand String Bisa Ter-Coerce ke Number

```js
'8' * 2; // 16
'8' / 2; // 4
```

### 3. Hasil Khusus: `NaN`, `Infinity`

```js
0 / 0; // NaN
1 / 0; // Infinity
```

### 4. Modulus untuk Pola Siklik

`index % panjang` sering dipakai untuk rotasi/siklus.

## Praktik yang Direkomendasikan

- Validasi input numerik sebelum operasi.
- Gunakan `Number.isFinite` untuk menjaga hasil perhitungan tetap aman.
- Jelaskan intent penggunaan `%` lewat nama variabel yang jelas.

## Kesalahan Umum

- Mengira `%` berarti persentase.
- Mengabaikan kemungkinan `NaN` dan `Infinity`.
- Mengandalkan coercion implicit dari data input user.

## Checkpoint Cepat

1. Apa fungsi utama `%`?
2. Kenapa `0 / 0` tidak menghasilkan `0`?
3. Kapan coercion implicit pada `*`/`/` harus dihindari?

## Analogi Singkat

Multiplicative operator itu seperti menghitung isi kardus, membaginya, lalu melihat apakah masih ada sisa. Konsep dasarnya familiar, tetapi JavaScript tetap punya aturan hasil yang perlu diperhatikan.

## Ringkasan

- Operator multiplicative mencakup perkalian, pembagian, dan sisa bagi.
- Coercion number sering terjadi otomatis.
- Validasi hasil numerik penting untuk mencegah bug lanjutan.

## Visual Map

![C07 - [13.7] Multiplicative Operators Map](../assets/C07-multiplicative-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C07-multiplicative-operators/example.js
- Panduan: ../examples/C07-multiplicative-operators/README.md
