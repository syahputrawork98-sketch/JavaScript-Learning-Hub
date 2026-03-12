# Example C06

Contoh runnable untuk bab **C06 - Iterasi Array Dasar dengan Loop dan `forEach`**.

## Tujuan Example

Folder ini menunjukkan tiga cara dasar membaca seluruh isi array: loop index manual, `for...of`, dan `forEach()`, sehingga pembaca bisa melihat trade-off bentuk iterasi yang paling sering dipakai.

## Daftar File

- `example.js` menunjukkan iterasi array dengan loop `for` berbasis index.
- `example-02.js` menunjukkan iterasi array dengan `for...of`.
- `example-03.js` menunjukkan iterasi array dengan `forEach()` dan callback.

## Penjelasan Per File

### `example.js`

Struktur utamanya:

```js
for (let i = 0; i < fruits.length; i += 1) {
  console.log(i, '->', fruits[i]);
}
```

Loop `for` memberi kontrol penuh terhadap index. Bentuk ini cocok saat kita butuh posisi elemen dan ingin mengatur langkah iterasi secara eksplisit.

### `example-02.js`

Contoh ini lebih ringkas:

```js
for (const fruit of fruits) {
  console.log(fruit);
}
```

`for...of` langsung memberi nilai elemen tanpa perlu mengelola index manual. Ini enak dipakai saat fokusnya hanya membaca isi array satu per satu.

### `example-03.js`

File ini menampilkan pola callback:

```js
fruits.forEach((fruit, index) => {
  console.log(index, '->', fruit.toUpperCase());
});
```

`forEach()` cocok saat kita ingin menjalankan aksi untuk setiap elemen dengan gaya deklaratif. Callback-nya bisa menerima elemen sekaligus index.

## Catatan Belajar

- Tidak ada satu gaya iterasi yang selalu paling benar; pilih sesuai kebutuhan context.
- Loop `for` paling fleksibel, `for...of` paling bersih untuk membaca nilai, dan `forEach()` enak untuk aksi per elemen.
- `length` tetap menjadi batas aman saat memakai loop index manual.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
