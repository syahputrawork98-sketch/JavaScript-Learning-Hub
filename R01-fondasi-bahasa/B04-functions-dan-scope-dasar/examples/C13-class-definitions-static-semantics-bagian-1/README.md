# Example C13

Contoh runnable untuk bab **C13 - Class Definitions Static Semantics Bagian 1**.

## Tujuan Example

Folder ini memperkenalkan struktur dasar class: constructor, instance method, dan beberapa aturan statis dasar.

## Daftar File

- `example.js` menunjukkan class dasar dengan constructor dan instance method.
- `example-02.js` mensimulasikan duplicate constructor sebagai early error.
- `example-03.js` membandingkan instance method dan static method.

## Poin Penting

- Constructor dipakai untuk inisialisasi instance.
- Instance method dipanggil dari object hasil `new`.
- Static method menempel pada class, bukan pada instance.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.7`
- `15.7.1`
- `15.7.2`
- `15.7.3`

Referensi chapter: `../../chapters/C13-class-definitions-static-semantics-bagian-1.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
