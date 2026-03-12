# Example C22

Contoh runnable untuk bab **C22 - if Statement**.

## Tujuan Example

Folder ini menunjukkan percabangan dasar `if`, `else if`, `else`, serta gaya guard clause untuk menyederhanakan alur fungsi.

## Daftar File

- `example.js` menunjukkan if/else if/else pada klasifikasi sederhana.
- `example-02.js` menunjukkan if/else yang paling dasar.
- `example-03.js` menunjukkan guard clause style dengan early return.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan percabangan bertingkat:

```js
if (score >= 90) {
  ...
} else if (score >= 75) {
  ...
} else {
  ...
}
```

Contoh ini membantu pembaca melihat bagaimana `if` dipakai untuk memilih satu dari beberapa jalur yang saling eksklusif.

### `example-02.js`

Contoh ini lebih sederhana:

```js
if (age >= 18) {
  console.log('adult');
} else {
  console.log('minor');
}
```

Tujuannya untuk memperkuat pola dasar sebelum masuk ke percabangan yang lebih panjang.

### `example-03.js`

File ini memperkenalkan guard clause:

```js
if (!user) return 'no user';
if (!user.active) return 'inactive';
return 'ok';
```

Gaya ini sangat berguna agar function cepat keluar pada kondisi invalid tanpa menambah nesting yang tidak perlu.

## Catatan Belajar

- `if` adalah alat utama untuk control flow berbasis kondisi.
- Semakin banyak nesting, semakin berat dibaca.
- Guard clause sering membuat fungsi lebih lurus dan mudah dipindai.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
