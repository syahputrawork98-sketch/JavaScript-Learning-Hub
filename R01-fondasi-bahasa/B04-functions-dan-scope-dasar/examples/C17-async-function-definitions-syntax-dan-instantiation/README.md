# Example C17

Contoh runnable untuk bab **C17 - Async Function Definitions Syntax dan Instantiation**.

## Tujuan Example

Folder ini memperlihatkan bahwa async function selalu menghasilkan Promise, baik dalam bentuk declaration, expression, maupun method.

## Daftar File

- `example.js` menunjukkan async function mengembalikan Promise.
- `example-02.js` menunjukkan async declaration tetap menghasilkan Promise.
- `example-03.js` menunjukkan async method pada object.

## Poin Penting

- Async function mengubah hasil return menjadi Promise resolve.
- Bentuk deklarasinya bisa beragam, tetapi kontrak runtime dasarnya sama.
- Async method tetap method, hanya body-nya berjalan dengan model async.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.8`
- `15.8.1`
- `15.8.2`

Referensi chapter: `../../chapters/C17-async-function-definitions-syntax-dan-instantiation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
