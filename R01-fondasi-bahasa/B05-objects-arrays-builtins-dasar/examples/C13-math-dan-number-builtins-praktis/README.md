# Example C13

Contoh runnable untuk bab **C13 - `Math` dan `Number` Built-ins Praktis**.

## Tujuan Example

Folder ini menunjukkan built-in numerik yang paling sering berguna di level dasar: pembulatan angka, pencarian nilai maksimum atau minimum, angka acak, dan pengecekan karakteristik nilai number.

## Daftar File

- `example.js` menunjukkan pembulatan dengan `Math.floor()`, `Math.ceil()`, dan `Math.round()`.
- `example-02.js` menunjukkan `Math.max()`, `Math.min()`, dan `Math.random()`.
- `example-03.js` menunjukkan pengecekan dengan `Number.isNaN()` dan `Number.isInteger()`.

## Penjelasan Per File

### `example.js`

Contoh dasarnya:

```js
Math.floor(4.8)
Math.ceil(4.2)
Math.round(4.5)
```

Tiga method ini tampak mirip, tetapi hasilnya berbeda karena aturan pembulatannya berbeda. File ini membantu pembaca membangun intuisi dasar sebelum memakai angka dalam logika praktis.

### `example-02.js`

File ini menampilkan:

```js
Math.max(10, 4, 18)
Math.min(10, 4, 18)
Math.random()
```

`Math.max()` dan `Math.min()` berguna untuk mencari batas nilai, sedangkan `Math.random()` menghasilkan angka acak antara `0` dan kurang dari `1`, sehingga sering perlu diproses lagi sesuai kebutuhan.

### `example-03.js`

Kasus pentingnya:

```js
Number.isNaN(NaN)
Number.isNaN('hello')
Number.isInteger(10.5)
```

Contoh ini menegaskan bahwa pengecekan numerik sebaiknya memakai built-in yang spesifik. Tidak semua nilai aneh adalah `NaN`, dan tidak semua number adalah integer.

## Catatan Belajar

- Built-in numerik kecil seperti ini sering muncul di banyak program sehari-hari.
- Jangan menyamakan semua operasi pembulatan, karena masing-masing punya aturan sendiri.
- `Number.isNaN()` dan `Number.isInteger()` membantu membuat pengecekan angka lebih eksplisit dan aman dibaca.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
