# Example C01

Contoh runnable untuk bab **C01 - Parameter Lists Dasar dan Early Errors**.

## Tujuan Example

Folder ini menunjukkan bentuk parameter fungsi yang valid dan memberi gambaran awal tentang early error pada parameter list.

## Daftar File

- `example.js` menunjukkan parameter biasa, destructuring, dan rest parameter.
- `example-02.js` mensimulasikan early error lewat `Function(...)`.
- `example-03.js` menunjukkan urutan pengisian parameter saat fungsi dipanggil.

## Poin Penting

- Parameter list dapat berbentuk sederhana maupun destructuring.
- Rest parameter mengumpulkan sisa argumen ke array.
- Tidak semua bentuk parameter valid; beberapa gagal sejak fase parse.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.1`
- `15.1.1`
- `15.1.2`

Referensi chapter: `../../chapters/C01-parameter-lists-dasar-dan-early-errors.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
