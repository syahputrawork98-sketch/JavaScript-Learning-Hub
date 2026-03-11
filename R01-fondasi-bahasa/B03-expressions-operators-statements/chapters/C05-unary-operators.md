# C05 - [13.5] Unary Operators

## Tujuan

Bab ini bertujuan memahami operator unary utama dan efeknya pada coercion maupun nilai akhir.

## Kenapa Bab Ini Penting

Unary operator sering dipakai di code real, tapi perilakunya berbeda-beda: ada yang mengubah tipe, ada yang sekadar inspeksi.

## Konsep Inti

### 1. Unary Plus dan Minus

```js
+'42'; // 42
- '5';  // -5
```

Unary plus sering dipakai untuk coercion ke number.

### 2. Logical NOT

```js
!0;     // true
!!'ok'; // true
```

`!` bekerja di konteks boolean.

### 3. `typeof`, `void`, dan `delete`

```js
typeof 123;      // 'number'
void 0;          // undefined
delete obj.key;  // hapus properti object
```

### 4. Bitwise NOT (`~`)

Operator ini bekerja pada representasi 32-bit integer.

## Praktik yang Direkomendasikan

- Gunakan `Number(value)` bila butuh konversi yang lebih eksplisit dari `+value`.
- Pakai `typeof` untuk guard sederhana.
- Hindari `~` kecuali memang paham konteks bitwise.

## Kesalahan Umum

- Menganggap `delete` bekerja untuk semua jenis binding (mis. variabel lokal).
- Menggunakan `+value` tanpa validasi hasil `NaN`.
- Memakai `!` berlapis berlebihan yang menurunkan keterbacaan.

## Checkpoint Cepat

1. Apa beda `+value` dan `Number(value)` dari sisi intent?
2. Kenapa `delete` cocok untuk properti object, bukan variabel `let/const`?
3. Kapan `!!value` layak dipakai?

## Analogi Singkat

Unary operator itu seperti satu tombol transformasi yang bekerja pada satu nilai sekaligus. Satu input bisa diubah bentuk, tanda, atau perilakunya tergantung operator yang dipakai.

## Ringkasan

- Unary operator memproses satu operand dengan efek berbeda-beda.
- Beberapa unary memicu coercion, sebagian lain untuk inspeksi/operasi struktur.
- Pilih operator yang paling jelas intent-nya.

## Visual Map

![C05 - [13.5] Unary Operators Map](../assets/C05-unary-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C05-unary-operators/example.js
- Panduan: ../examples/C05-unary-operators/README.md
