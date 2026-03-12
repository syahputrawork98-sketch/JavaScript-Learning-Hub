# Example C05

Contoh runnable untuk bab **C05 - Arrow Function Bentuk dan Early Errors**.

## Tujuan Example

Folder ini membantu pembaca melihat bentuk arrow function, perbedaan body-nya, dan beberapa batasan sintaksnya.

## Daftar File

- `example.js` menunjukkan concise body vs block body.
- `example-02.js` menunjukkan bahwa arrow function bukan constructor.
- `example-03.js` mensimulasikan bentuk valid dan syntax error dasar.

## Poin Penting

- Arrow function cocok untuk expression ringkas.
- Concise body mengembalikan nilai secara implisit.
- Arrow function tidak punya `[[Construct]]`, jadi tidak dipakai dengan `new`.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.3`
- `15.3.1`
- `15.3.2`

Referensi chapter: `../../chapters/C05-arrow-function-bentuk-dan-early-errors.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
