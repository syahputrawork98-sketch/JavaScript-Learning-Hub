# Example C15

Contoh runnable untuk bab **C15 - Assignment Operators**.

## Tujuan Example

Folder ini memperlihatkan assignment biasa, compound assignment, dan destructuring assignment sebagai bagian dari expression JavaScript sehari-hari.

## Daftar File

- `example.js` menunjukkan compound assignment, assignment expression, dan destructuring dasar.
- `example-02.js` fokus pada compound assignment.
- `example-03.js` fokus pada destructuring assignment.

## Penjelasan Per File

### `example.js`

File utama ini menampilkan beberapa pola assignment yang penting:

```js
total += 5;
total *= 2;
const b = (a = 5);
const [x, y] = [1, 2];
const { id } = { id: 10 };
```

Contoh ini menunjukkan bahwa assignment bukan hanya “isi variabel”, tetapi juga bisa:

- memodifikasi nilai sebelumnya
- muncul di dalam expression lain
- bekerja lewat destructuring

### `example-02.js`

File ini fokus pada compound assignment:

```js
points += 5;
points -= 2;
points *= 3;
```

Tujuannya adalah menunjukkan bentuk ringkas dari pola update yang sangat umum.

### `example-03.js`

Contoh ini menyorot destructuring assignment:

```js
({ id, name } = payload);
```

Ini membantu pembaca membedakan antara destructuring declaration dan destructuring assignment pada binding yang sudah ada.

## Catatan Belajar

- Assignment di JavaScript lebih fleksibel dari yang sering dibayangkan pemula.
- Compound assignment membuat update state lebih ringkas.
- Destructuring assignment sangat berguna, tetapi syntax-nya perlu dibaca dengan hati-hati.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
