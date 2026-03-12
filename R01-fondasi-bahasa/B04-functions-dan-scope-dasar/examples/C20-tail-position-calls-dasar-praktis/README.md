# Example C20

Contoh runnable untuk bab **C20 - Tail Position Calls Dasar Praktis**.

## Tujuan Example

Folder ini membantu pembaca mengenali call yang berada pada tail position dan membedakannya dari call yang bukan tail position.

## Daftar File

- `example.js` menunjukkan call pada tail position.
- `example-02.js` menunjukkan call yang bukan tail position.
- `example-03.js` menunjukkan bentuk rekursi tail-style sederhana.

## Poin Penting

- Tail position berarti hasil call langsung menjadi hasil return expression saat itu.
- Jika masih ada operasi setelah call, maka ia bukan tail position.
- Memahami pola ini membantu membaca optimisasi konseptual, walau implementasi engine bisa berbeda.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.10`
- `15.10.1`
- `15.10.2`
- `15.10.3`

Referensi chapter: `../../chapters/C20-tail-position-calls-dasar-praktis.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
