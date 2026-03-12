# Example C19

Contoh runnable untuk bab **C19 - Async Arrow Function Definitions End to End**.

## Tujuan Example

Folder ini memperlihatkan async arrow function dari bentuk expression body sampai block body dan keterkaitannya dengan lexical `this`.

## Daftar File

- `example.js` menunjukkan expression body pada async arrow.
- `example-02.js` menunjukkan lexical `this` pada async arrow.
- `example-03.js` menunjukkan block body untuk langkah async bertahap.

## Poin Penting

- Async arrow tetap menghasilkan Promise.
- Ia tetap mewarisi karakter lexical arrow biasa, termasuk `this`.
- Block body lebih cocok saat langkah async mulai bertambah.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.9`
- `15.9.1`
- `15.9.2`
- `15.9.3`
- `15.9.4`
- `15.9.5`

Referensi chapter: `../../chapters/C19-async-arrow-function-definitions-end-to-end.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
