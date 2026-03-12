# Example C10

Contoh runnable untuk bab **C10 - Built-in `Object.keys`, `Object.values`, dan `Object.entries` Dasar**.

## Tujuan Example

Folder ini menunjukkan tiga built-in object yang sangat berguna untuk mengubah isi object menjadi bentuk array agar lebih mudah dibaca, ditampilkan, atau diiterasi.

## Daftar File

- `example.js` menunjukkan pengambilan daftar nama property dengan `Object.keys()`.
- `example-02.js` menunjukkan pengambilan daftar nilai dengan `Object.values()`.
- `example-03.js` menunjukkan iterasi pasangan key-value dengan `Object.entries()`.

## Penjelasan Per File

### `example.js`

Potongan utamanya:

```js
console.log(Object.keys(user));
```

`Object.keys()` menghasilkan array berisi nama property milik object. Bentuk ini cocok saat kita perlu daftar field tanpa peduli nilainya dulu.

### `example-02.js`

File ini menampilkan:

```js
console.log(Object.values(user));
```

`Object.values()` fokus pada isi data, bukan nama property. Ini berguna saat kita ingin memproses nilai-nilai object seperti koleksi biasa.

### `example-03.js`

Pola yang diperlihatkan:

```js
for (const [key, value] of Object.entries(user)) {
  console.log(key, '->', value);
}
```

`Object.entries()` memberi array pasangan `[key, value]`, sehingga destructuring bisa dipakai untuk membaca nama property dan nilainya sekaligus dalam satu langkah iterasi.

## Catatan Belajar

- Ketiga built-in ini membantu menjembatani object ke pola kerja array.
- Pilih `keys`, `values`, atau `entries` sesuai informasi apa yang paling dibutuhkan.
- `Object.entries()` sering terasa paling praktis saat kita ingin melakukan iterasi penuh terhadap isi object.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
