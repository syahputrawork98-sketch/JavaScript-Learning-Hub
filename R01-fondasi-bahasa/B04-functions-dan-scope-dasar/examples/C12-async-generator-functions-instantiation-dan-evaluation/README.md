# Example C12

Contoh runnable untuk bab **C12 - Async Generator Functions Instantiation dan Evaluation**.

## Tujuan Example

Folder ini menunjukkan bagaimana async generator diinstansiasi, bagaimana `next()` bekerja, dan bagaimana iterasi bisa dihentikan lebih awal.

## Daftar File

- `example.js` menunjukkan alur `next(value)` pada async generator.
- `example-02.js` menunjukkan manual iteration dengan `value` dan `done`.
- `example-03.js` menunjukkan penghentian awal via `return()`.

## Poin Penting

- `next()` pada async generator mengembalikan Promise.
- Hasil iterasi tetap berbentuk `{ value, done }`, tetapi dibungkus Promise.
- `return()` bisa dipakai untuk menutup iterasi sebelum selesai alami.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.6.3`
- `15.6.4`
- `15.6.5`

Referensi chapter: `../../chapters/C12-async-generator-functions-instantiation-dan-evaluation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
