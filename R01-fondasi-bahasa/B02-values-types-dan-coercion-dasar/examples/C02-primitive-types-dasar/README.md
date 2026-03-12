# Example C02

Contoh runnable untuk bab **C02 - Primitive Types Dasar**.

## Tujuan Example

Folder ini membantu pembaca mengenali primitive types utama, melihat sifat immutability pada string, dan memahami batas presisi number dibanding BigInt.

## Daftar File

- `example.js` memperkenalkan primitive types dasar dan contoh copy by value.
- `example-02.js` menunjukkan bahwa string bersifat immutable.
- `example-03.js` membandingkan `Number` dan `BigInt` pada angka besar.

## Penjelasan Per File

### `example.js`

File utama ini mencetak label, hasil `typeof`, dan representasi string dari beberapa primitive:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

Bagian akhirnya:

```js
let a = 10;
let b = a;
b = 99;
```

menunjukkan bahwa primitive disalin sebagai nilai terpisah. Mengubah `b` tidak mengubah `a`.

### `example-02.js`

Contoh ini sangat penting untuk string:

```js
const name = 'Arta';
name[0] = 'B';
```

Meskipun tampak seperti array karakter, string di JavaScript tidak bisa diubah di tempat. Operasi seperti `toUpperCase()` menghasilkan value baru, bukan memodifikasi string awal.

### `example-03.js`

File ini menunjukkan batas aman `Number`:

```js
const safe = Number.MAX_SAFE_INTEGER;
const overflow = safe + 1;
const overflow2 = safe + 2;
```

Lalu pembaca bisa melihat bahwa dua hasil besar bisa dianggap sama karena batas presisi number. Setelah itu, BigInt dipakai untuk menunjukkan integer besar dengan presisi yang tetap.

## Catatan Belajar

- Primitive biasanya lebih mudah diprediksi karena tidak berbagi reference.
- String tampak bisa diakses per indeks, tetapi tetap immutable.
- Jika butuh integer sangat besar dan presisi tetap, gunakan BigInt dengan sadar.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `6.1.1`
- `6.1.4`
- `6.1.5`
- `6.1.6`

Referensi chapter: `../../chapters/C02-primitive-types-dasar.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
