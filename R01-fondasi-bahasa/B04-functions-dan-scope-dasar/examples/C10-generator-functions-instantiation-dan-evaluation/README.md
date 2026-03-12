# Example C10

Contoh runnable untuk bab **C10 - Generator Functions Instantiation dan Evaluation**.

## Tujuan Example

Folder ini menunjukkan bagaimana nilai masuk dan keluar generator sepanjang proses evaluasi.

## Daftar File

- `example.js` menunjukkan alur `next(value)` antar-yield.
- `example-02.js` menunjukkan manual iteration dan pengecekan `done`.
- `example-03.js` menunjukkan penghentian generator lewat `return()`.

## Poin Penting

- Nilai yang dikirim ke `next(value)` masuk ke titik `yield` sebelumnya.
- Iterator generator selalu mengembalikan objek `{ value, done }`.
- `return()` dapat menutup generator lebih awal.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.5.3`
- `15.5.4`
- `15.5.5`

Referensi chapter: `../../chapters/C10-generator-functions-instantiation-dan-evaluation.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
