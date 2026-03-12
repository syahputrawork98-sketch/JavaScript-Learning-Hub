# Example C04

Contoh runnable untuk bab **C04 - Pemeriksaan Property dan Iterasi Object Dasar**.

## Tujuan Example

Folder ini menunjukkan beberapa cara dasar untuk mengecek keberadaan property dan membaca isi object secara bertahap, termasuk perbedaan penting antara property yang tidak ada dan property yang ada tetapi nilainya `undefined`.

## Daftar File

- `example.js` menunjukkan operator `in` dan `Object.hasOwn()` untuk memeriksa property.
- `example-02.js` menunjukkan iterasi object lewat `Object.keys()`.
- `example-03.js` menunjukkan perbedaan antara property yang bernilai `undefined` dan property yang memang tidak ada.

## Penjelasan Per File

### `example.js`

Potongan intinya:

```js
'name' in user
Object.hasOwn(user, 'age')
```

Kedua pengecekan ini sama-sama berguna untuk kasus dasar. Contoh ini membantu pembaca mengenali bahwa pengecekan property sebaiknya dilakukan secara eksplisit, bukan hanya mengandalkan truthy atau falsy value.

### `example-02.js`

File ini memakai pola:

```js
for (const key of Object.keys(user)) {
  console.log(key, '->', user[key]);
}
```

`Object.keys()` mengubah daftar nama property menjadi array, lalu array itu diiterasi. Ini membuat proses membaca object terasa lebih mirip membaca koleksi data biasa.

### `example-03.js`

Perbandingan utamanya:

```js
user.name === undefined
'name' in user
'age' in user
```

`user.name === undefined` belum cukup untuk menyimpulkan property hilang, karena property bisa saja memang ada tetapi nilainya `undefined`. Operator `in` membantu membedakan dua situasi itu.

## Catatan Belajar

- Pemeriksaan property dan pemeriksaan nilai adalah dua hal yang berbeda.
- `Object.keys()` cocok dipakai saat kita ingin membaca daftar property milik object sendiri.
- Bug data object sering muncul saat `undefined` langsung dianggap berarti property tidak ada.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
