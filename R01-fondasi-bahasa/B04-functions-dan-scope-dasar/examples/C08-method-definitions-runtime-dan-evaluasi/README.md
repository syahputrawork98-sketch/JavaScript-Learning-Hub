# Example C08

Contoh runnable untuk bab **C08 - Method Definitions Runtime dan Evaluasi**.

## Tujuan Example

Folder ini membantu pembaca memahami bahwa call-site menentukan `this` pada method biasa, serta risiko detached method.

## Daftar File

- `example.js` menunjukkan `this` berdasarkan call-site method.
- `example-02.js` membandingkan detached method vs bound method.
- `example-03.js` menunjukkan method pada object factory.

## Poin Penting

- Method biasa membaca `this` dari cara ia dipanggil.
- Melepas method dari object bisa mengubah `this`.
- Binding eksplisit sering dipakai saat method diteruskan sebagai callback.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.4.3`
- `15.4.4`
- `15.4.5`

Referensi chapter: `../../chapters/C08-method-definitions-runtime-dan-evaluasi.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
