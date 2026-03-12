# Example C07

Contoh runnable untuk bab **C07 - Multiplicative Operators**.

## Tujuan Example

Folder ini memperlihatkan `*`, `/`, `%`, coercion numerik dasar, serta edge case hasil pembagian.

## Daftar File

- `example.js` menunjukkan perkalian, pembagian, modulus, coercion string-number, `Infinity`, dan `NaN`.
- `example-02.js` memakai modulus untuk pola genap-ganjil.
- `example-03.js` memeriksa hasil pembagian dengan `Number.isFinite`.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan tiga operator inti:

- `*` untuk perkalian
- `/` untuk pembagian
- `%` untuk sisa bagi

Lalu contoh ini menunjukkan sesuatu yang penting untuk JavaScript:

```js
'8' * 2
'8' / 2
```

Operator multiplicative cenderung mendorong coercion ke number. Setelah itu file ini juga menunjukkan dua edge case:

- `0 / 0` menghasilkan `NaN`
- `1 / 0` menghasilkan `Infinity`

### `example-02.js`

Contoh ini membawa `%` ke kasus yang sangat umum:

```js
i % 2 === 0 ? 'genap' : 'ganjil'
```

Ini membantu pembaca melihat bahwa modulus bukan hanya teori matematika, tetapi alat praktis untuk pola berulang.

### `example-03.js`

File ini memeriksa apakah hasil pembagian masih finite:

```js
Number.isFinite(v)
```

Contoh ini berguna untuk membangun kebiasaan validasi, terutama ketika hasil operasi numerik bisa menyentuh `Infinity` atau `NaN`.

## Catatan Belajar

- Jangan anggap semua hasil operator numerik pasti aman dipakai lanjutan.
- `%` sangat berguna untuk pola paritas dan siklus.
- Jika input tidak sepenuhnya terkontrol, validasi hasil pembagian adalah kebiasaan yang baik.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
