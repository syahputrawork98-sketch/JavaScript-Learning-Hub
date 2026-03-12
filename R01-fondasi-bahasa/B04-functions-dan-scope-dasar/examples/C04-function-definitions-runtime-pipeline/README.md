# Example C04

Contoh runnable untuk bab **C04 - Function Definitions Runtime Pipeline**.

## Tujuan Example

Folder ini memperlihatkan bagaimana function definition terhubung ke hoisting, evaluation order, dan closure.

## Daftar File

- `example.js` menunjukkan hoisting pada function declaration.
- `example-02.js` menunjukkan evaluation order function expression.
- `example-03.js` menunjukkan closure saat fungsi dibuat dan dipanggil.

## Poin Penting

- Function declaration bisa dipanggil sebelum definisi tekstualnya.
- Function expression mengikuti urutan evaluasi runtime biasa.
- Closure membuat fungsi tetap bisa mengakses lingkungan lexical yang relevan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.2.3`
- `15.2.4`
- `15.2.5`
- `15.2.6`

Referensi chapter: `../../chapters/C04-function-definitions-runtime-pipeline.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
