# Example C06

Contoh runnable untuk bab **C06 - Arrow Function Runtime dan Evaluation**.

## Tujuan Example

Folder ini menunjukkan perilaku runtime arrow function, terutama lexical `this` dan lexical `arguments`.

## Daftar File

- `example.js` menunjukkan lexical `this`.
- `example-02.js` membandingkan `this` pada normal function dan arrow.
- `example-03.js` menunjukkan lexical `arguments`.

## Poin Penting

- Arrow function tidak membuat `this` baru.
- Nilai `this` diambil dari lingkungan lexical terdekat.
- Arrow juga tidak punya `arguments` sendiri seperti fungsi biasa.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.3.3`
- `15.3.4`
- `15.3.5`

Referensi chapter: `../../chapters/C06-arrow-function-runtime-dan-evaluation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
