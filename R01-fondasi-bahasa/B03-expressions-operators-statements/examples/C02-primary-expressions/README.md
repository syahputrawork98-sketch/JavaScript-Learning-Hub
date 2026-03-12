# Example C02

Contoh runnable untuk bab **C02 - Primary Expressions**.

## Tujuan Example

Folder ini membantu pembaca melihat bentuk expression paling dasar yang sering menjadi bahan baku expression lain: literal, grouping, object literal, dan method call.

## Daftar File

- `example.js` memperlihatkan literal number, string, array, object, dan grouping expression.
- `example-02.js` menekankan peran grouping dan object literal expression.
- `example-03.js` menunjukkan method object yang memakai `this`.

## Penjelasan Per File

### `example.js`

File utama ini memperkenalkan beberapa primary expression paling umum:

```js
const literalNumber = 42;
const literalString = 'hello';
const literalArray = [1, 2, 3];
const literalObject = { id: 1 };
```

Lalu ada grouping expression:

```js
const grouped = (1 + 2) * 3;
```

Contoh ini penting karena pembaca melihat bahwa expression dasar bukan hanya angka atau string, tetapi juga array, object, dan expression yang dibungkus tanda kurung.

### `example-02.js`

File ini menguatkan dua hal:

- tanda kurung dapat mengubah hasil evaluasi
- object literal juga bisa diposisikan sebagai expression

```js
const value = (2 + 3) * 4;
const obj = ({ id: 1, active: true });
```

Tanda kurung pada object literal membantu pembaca melihat object sebagai hasil expression yang langsung dipakai.

### `example-03.js`

Contoh ini menghubungkan primary expression dengan object method:

```js
const user = {
  name: 'Arta',
  say() {
    console.log(this.name);
  },
};
```

Saat `user.say()` dipanggil, method tersebut menjadi expression yang berjalan dalam context object `user`.

## Catatan Belajar

- Primary expression adalah blok bangunan paling dasar untuk expression yang lebih kompleks.
- Tanda kurung bukan hiasan; ia bisa mengubah prioritas evaluasi.
- Object literal dan method call penting dipahami sejak awal karena muncul di hampir semua kode JavaScript nyata.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
