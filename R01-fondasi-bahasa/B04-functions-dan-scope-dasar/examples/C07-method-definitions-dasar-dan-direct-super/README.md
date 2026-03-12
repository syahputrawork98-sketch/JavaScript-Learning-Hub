# Example C07

Contoh runnable untuk bab **C07 - Method Definitions Dasar dan Direct Super**.

## Tujuan Example

Folder ini memperlihatkan method shorthand pada object dan pengantar `super` untuk delegasi ke prototype parent.

## Daftar File

- `example.js` menunjukkan method shorthand object literal.
- `example-02.js` menunjukkan delegasi `super` ke parent prototype.
- `example-03.js` menunjukkan bentuk valid dan tidak valid penggunaan `super`.

## Poin Penting

- Method shorthand berbeda dari function property biasa dalam beberapa detail semantic.
- `super` berguna saat method ingin meneruskan perilaku parent.
- `super` hanya valid di konteks method yang tepat.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.4`
- `15.4.1`
- `15.4.2`

Referensi chapter: `../../chapters/C07-method-definitions-dasar-dan-direct-super.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
