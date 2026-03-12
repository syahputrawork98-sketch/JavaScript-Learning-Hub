# Example C27

Contoh runnable untuk bab **C27 - with Statement**.

## Tujuan Example

Folder ini menjelaskan mengapa `with` dihindari pada code modern dan menunjukkan alternatif eksplisit yang lebih aman.

## Daftar File

- `example.js` menunjukkan alternatif aman melalui destructuring dan access eksplisit.
- `example-02.js` menunjukkan safe alternative lain tanpa `with`.
- `example-03.js` memperkuat kebiasaan access object yang eksplisit.

## Penjelasan Per File

### `example.js`

File utama ini sengaja **tidak** memakai `with`, melainkan alternatif yang lebih aman:

```js
const { theme, lang } = settings;
```

Tujuannya adalah mengajarkan praktik modern, bukan sekadar menunjukkan syntax lama yang membingungkan.

### `example-02.js`

Contoh ini memperkuat ide yang sama:

```js
const { first, last } = user;
```

Destructuring menjadi salah satu jalan yang paling jelas untuk menggantikan kebutuhan membaca banyak property tanpa harus memakai `with`.

### `example-03.js`

File ini memperlihatkan access eksplisit:

```js
console.log(env.host + ':' + env.port);
```

Contoh ini penting karena keterbacaan dan kejelasan asal nilai jauh lebih baik daripada pola `with`.

## Catatan Belajar

- `with` dihindari karena membuat name resolution sulit ditebak.
- Destructuring dan explicit property access adalah alternatif yang lebih jelas.
- Pada materi belajar modern, memahami alasan menghindari `with` lebih penting daripada membiasakan pemakaiannya.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
