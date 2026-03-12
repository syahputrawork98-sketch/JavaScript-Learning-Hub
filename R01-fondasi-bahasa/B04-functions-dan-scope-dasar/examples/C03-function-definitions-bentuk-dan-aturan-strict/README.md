# Example C03

Contoh runnable untuk bab **C03 - Function Definitions Bentuk dan Aturan Strict**.

## Tujuan Example

Folder ini membantu pembaca membedakan function declaration, function expression, dan beberapa aturan strict yang memengaruhi definisi fungsi.

## Daftar File

- `example.js` menunjukkan declaration vs expression.
- `example-02.js` mensimulasikan duplicate parameter error pada strict mode.
- `example-03.js` menunjukkan named function expression dan scope namanya.

## Poin Penting

- Declaration dan expression sama-sama membuat fungsi, tetapi perilaku runtime-nya tidak identik.
- Strict mode melarang beberapa pola parameter yang lebih longgar.
- Nama internal function expression punya scope khusus.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.2`
- `15.2.1`
- `15.2.2`

Referensi chapter: `../../chapters/C03-function-definitions-bentuk-dan-aturan-strict.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
