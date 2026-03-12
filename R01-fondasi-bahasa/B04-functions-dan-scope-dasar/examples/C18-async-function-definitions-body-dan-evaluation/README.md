# Example C18

Contoh runnable untuk bab **C18 - Async Function Definitions Body dan Evaluation**.

## Tujuan Example

Folder ini menunjukkan alur eksekusi async function saat bertemu `await`, termasuk timing dan rejection.

## Daftar File

- `example.js` menunjukkan alur sebelum dan sesudah `await`.
- `example-02.js` menunjukkan timing async function expression.
- `example-03.js` menunjukkan bahwa `throw` menjadi Promise rejection.

## Poin Penting

- `await` menunda kelanjutan body async function.
- Async function expression tetap mengikuti kontrak Promise yang sama.
- Error yang dilempar di async function berubah menjadi rejection.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.8.3`
- `15.8.4`
- `15.8.5`

Referensi chapter: `../../chapters/C18-async-function-definitions-body-dan-evaluation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
