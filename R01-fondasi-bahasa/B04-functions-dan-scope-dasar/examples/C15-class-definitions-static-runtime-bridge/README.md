# Example C15

Contoh runnable untuk bab **C15 - Class Definitions Static Runtime Bridge**.

## Tujuan Example

Folder ini menunjukkan jembatan antara bentuk class secara statis dan evaluasi runtime-nya, seperti computed name, static field initializer, dan `extends`.

## Daftar File

- `example.js` menunjukkan computed method name dan static field initializer.
- `example-02.js` menunjukkan nama internal class expression.
- `example-03.js` menunjukkan evaluasi ekspresi `extends`.

## Poin Penting

- Beberapa bagian class dievaluasi saat class dibentuk, bukan saat instance dibuat.
- Computed name dan field initializer bisa punya efek runtime.
- `extends` juga merupakan expression yang dievaluasi.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.7.8`
- `15.7.9`
- `15.7.10`
- `15.7.11`

Referensi chapter: `../../chapters/C15-class-definitions-static-runtime-bridge.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
