# Example C08

Contoh runnable untuk bab **C08 - Array `map`, `filter`, dan `find` Dasar**.

## Tujuan Example

Folder ini menunjukkan tiga built-in array yang sangat penting untuk mengolah data: membuat hasil baru dari tiap elemen, menyaring elemen tertentu, dan mencari elemen pertama yang cocok.

## Daftar File

- `example.js` menunjukkan transformasi data dengan `map()`.
- `example-02.js` menunjukkan penyaringan data dengan `filter()`.
- `example-03.js` menunjukkan pencarian elemen dengan `find()`.

## Penjelasan Per File

### `example.js`

Contoh intinya:

```js
const doubled = numbers.map((number) => number * 2);
```

`map()` menjalankan callback untuk setiap elemen lalu membentuk array baru dari hasilnya. Array asli tetap dipertahankan, sehingga pembaca bisa melihat perbedaan input dan output dengan jelas.

### `example-02.js`

Pola dasarnya:

```js
const passed = scores.filter((score) => score >= 70);
```

`filter()` hanya menyimpan elemen yang membuat callback bernilai truthy. Hasilnya adalah array baru yang berisi subset dari data awal.

### `example-03.js`

Bagian pentingnya:

```js
const foundUser = users.find((user) => user.startsWith('S'));
const missingUser = users.find((user) => user.startsWith('Z'));
```

`find()` mengembalikan satu elemen pertama yang cocok. Jika tidak ada yang cocok, hasilnya `undefined`, bukan array kosong.

## Catatan Belajar

- `map()`, `filter()`, dan `find()` sama-sama memakai callback, tetapi tujuan hasilnya berbeda.
- `map()` dan `filter()` menghasilkan array baru, sedangkan `find()` menghasilkan satu nilai atau `undefined`.
- Memahami bentuk output tiap built-in membantu menghindari kesalahan chaining atau logging.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
