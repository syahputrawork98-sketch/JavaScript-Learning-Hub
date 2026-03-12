# Example C16

Contoh runnable untuk bab **C16 - Class Definitions Runtime Pipeline**.

## Tujuan Example

Folder ini memperlihatkan timing evaluasi class declaration dan class expression, termasuk field initializer saat instance dibuat.

## Daftar File

- `example.js` menunjukkan akses class sebelum dan sesudah declaration.
- `example-02.js` menunjukkan timing evaluasi class expression.
- `example-03.js` menunjukkan instance field initializer saat membuat instance.

## Poin Penting

- Class declaration tidak bisa diakses sebelum selesai dievaluasi.
- Class expression mengikuti alur evaluasi expression biasa.
- Instance field initializer dijalankan saat instansiasi.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.7.12`
- `15.7.13`
- `15.7.14`
- `15.7.15`
- `15.7.16`

Referensi chapter: `../../chapters/C16-class-definitions-runtime-pipeline.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
