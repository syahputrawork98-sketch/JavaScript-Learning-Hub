# C10 - [13.10] Relational Operators

## Tujuan

Bab ini bertujuan memahami operator relasional (`<`, `>`, `<=`, `>=`, `in`, `instanceof`) pada konteks praktis.

## Kenapa Bab Ini Penting

Operator relasional sering dipakai di kondisi `if`, filter data, dan validasi tipe object.

Tanpa pemahaman yang tepat, hasil kondisi bisa menyesatkan karena coercion atau salah asumsi struktur object.

## Konsep Inti

### 1. Operator Perbandingan Nilai

```js
5 > 3;   // true
5 <= 5;  // true
```

### 2. Perbandingan String Bersifat Lexicographic

```js
'apple' < 'banana'; // true
```

### 3. Operator `in` untuk Cek Properti

```js
const user = { name: 'Arta' };
'name' in user; // true
```

### 4. Operator `instanceof` untuk Cek Rantai Prototype

```js
[] instanceof Array; // true
new Date() instanceof Date; // true
```

## Praktik yang Direkomendasikan

- Gunakan `in` hanya untuk cek keberadaan properti, bukan validasi nilai.
- Gunakan `instanceof` untuk object/class dari runtime yang sama.
- Untuk angka dari input, lakukan coercion eksplisit sebelum dibandingkan.

## Kesalahan Umum

- Mengira `in` mengecek value, padahal mengecek key.
- Mengandalkan `instanceof` lintas realm tanpa antisipasi.
- Membandingkan string numerik tanpa konversi (`'10' < '2'`).

## Checkpoint Cepat

1. Apa beda `in` dan `instanceof`?
2. Kenapa `'10' < '2'` bisa `true`?
3. Kapan wajib konversi ke number sebelum perbandingan?

## Analogi Singkat

Relational operator itu seperti menyusun urutan peserta lalu mengecek siapa lebih depan atau lebih belakang. JavaScript tetap membandingkan berdasarkan aturan tipe dan representasi nilainya, bukan sekadar intuisi manusia.

## Ringkasan

- Relational operators mencakup perbandingan nilai, cek properti, dan cek instans.
- `in` dan `instanceof` punya tujuan berbeda.
- Coercion dan tipe operand sangat memengaruhi hasil evaluasi.

## Visual Map

![C10 - [13.10] Relational Operators Map](../assets/C10-relational-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C10-relational-operators/example.js
- Panduan: ../examples/C10-relational-operators/README.md
