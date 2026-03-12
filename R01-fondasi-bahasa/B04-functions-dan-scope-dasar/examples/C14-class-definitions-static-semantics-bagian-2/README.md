# Example C14

Contoh runnable untuk bab **C14 - Class Definitions Static Semantics Bagian 2**.

## Tujuan Example

Folder ini memperlihatkan pemisahan elemen static dan instance, serta validasi private identifier dasar.

## Daftar File

- `example.js` menunjukkan elemen static vs instance.
- `example-02.js` menunjukkan validasi private identifier.
- `example-03.js` menunjukkan error saat static method dipanggil dari instance.

## Poin Penting

- Static field dan static method hidup pada class.
- Instance field dan instance method hidup pada object hasil instansiasi.
- Private identifier punya aturan akses yang ketat.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.7.4`
- `15.7.5`
- `15.7.6`
- `15.7.7`

Referensi chapter: `../../chapters/C14-class-definitions-static-semantics-bagian-2.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
