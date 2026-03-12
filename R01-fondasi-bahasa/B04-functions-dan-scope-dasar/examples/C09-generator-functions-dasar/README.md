# Example C09

Contoh runnable untuk bab **C09 - Generator Functions Dasar**.

## Tujuan Example

Folder ini memperlihatkan dasar generator: `yield`, urutan `next()`, perbedaan `yield` dan `return`, serta konsumsi dengan `for...of`.

## Daftar File

- `example.js` menunjukkan generator dasar dan urutan `next()`.
- `example-02.js` membandingkan `yield` dan `return`.
- `example-03.js` menunjukkan konsumsi generator dengan `for...of`.

## Poin Penting

- Generator menghasilkan iterator yang bergerak bertahap.
- `yield` menunda eksekusi dan mengembalikan value sementara.
- `return` menutup generator dan menandai iterasi selesai.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.5`
- `15.5.1`
- `15.5.2`

Referensi chapter: `../../chapters/C09-generator-functions-dasar.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
