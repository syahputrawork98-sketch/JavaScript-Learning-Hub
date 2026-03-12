# Example C11

Contoh runnable untuk bab **C11 - Async Generator Functions Dasar**.

## Tujuan Example

Folder ini memperlihatkan dasar async generator: `yield` bertahap dalam konteks async dan konsumsi dengan `for await...of`.

## Daftar File

- `example.js` menunjukkan async generator dasar dengan `for await...of`.
- `example-02.js` menunjukkan kombinasi `await` dan `yield`.
- `example-03.js` membandingkan async function dengan async generator.

## Poin Penting

- Async generator menggabungkan konsep generator dan async function.
- Konsumsinya biasanya memakai `for await...of`.
- Nilai dapat dihasilkan bertahap sambil tetap menunggu proses async.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.6`
- `15.6.1`
- `15.6.2`

Referensi chapter: `../../chapters/C11-async-generator-functions-dasar.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
