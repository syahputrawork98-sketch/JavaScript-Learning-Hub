# Example C30

Contoh runnable untuk bab **C30 - throw Statement**.

## Tujuan Example

Folder ini menunjukkan cara melempar error untuk menandai kondisi tidak valid secara eksplisit.

## Daftar File

- `example.js` menunjukkan `throw` pada validasi pembagian.
- `example-02.js` menunjukkan `throw` untuk validasi angka positif.
- `example-03.js` menunjukkan custom error class sederhana.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan pola validasi yang sangat umum:

```js
if (b === 0) {
  throw new Error('pembagi tidak boleh 0');
}
```

Lalu pemanggilan fungsi dibungkus `try...catch`, sehingga pembaca bisa melihat jalur normal dan jalur error dalam satu tempat.

### `example-02.js`

Contoh ini memperluas pola validasi:

```js
if (n <= 0) throw new Error('must be positive');
```

Tujuannya agar pembaca melihat bahwa `throw` bukan hanya untuk pembagian, tetapi untuk semua kondisi input yang dianggap melanggar kontrak fungsi.

### `example-03.js`

File ini memperkenalkan custom error class:

```js
class ValidationError extends Error {}
```

Dengan ini, pembaca mulai melihat bahwa error bisa diberi jenis yang lebih spesifik daripada sekadar `Error` umum.

## Catatan Belajar

- `throw` memindahkan alur ke error path.
- Validasi input adalah salah satu tempat paling wajar untuk `throw`.
- Custom error membantu membedakan jenis kegagalan secara lebih rapi.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
