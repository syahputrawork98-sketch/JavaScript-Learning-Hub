# C12 - Async Generator Functions Instantiation dan Evaluation

## Tujuan

Bab ini bertujuan memahami instansiasi dan evaluasi async generator function.

## Kenapa Bab Ini Penting

Setelah bentuk dasar dipahami, kita perlu membaca bagaimana async generator diinstansiasi, bagaimana state bergerak dari satu `yield` ke `yield` berikutnya, dan bagaimana konsumsi async iterator berjalan di runtime.

## Konsep Inti

1. Instansiasi async generator menghasilkan async iterator dengan state internal.
2. Setiap langkah `next()` menghasilkan Promise yang harus di-`await`.
3. Perpindahan state dipengaruhi oleh kombinasi `await`, `yield`, `return`, dan `throw`.

## Analogi

- Intuisi Singkat: Instansiasi dan evaluasi async generator menambah lapisan async pada state machine generator.
- Analogi: Seperti mesin antrean yang tiap langkahnya bisa menunggu sinyal dari sistem eksternal sebelum lanjut.
- Batas Analogi: Debugging-nya perlu melihat dua hal sekaligus: state generator dan penyelesaian async.

## Praktik yang Direkomendasikan

- Uji async generator dengan `await iterator.next()` langkah demi langkah.
- Catat nilai `value` dan `done` agar state transition mudah terlihat.
- Gunakan `for await...of` untuk konsumsi umum dan kontrol manual untuk debugging mendalam.

## Kesalahan Umum

- Mengira `next()` pada async generator langsung mengembalikan object biasa, bukan Promise.
- Lupa bahwa `return()` juga menghentikan async iterator lebih awal.
- Sulit membedakan kapan `await` terjadi di dalam generator vs di sisi konsumen.

## Checkpoint Cepat

1. Kenapa `iterator.next()` pada async generator harus di-`await`?
2. Apa efek `return()` pada async iterator?
3. Kapan lebih baik memakai kontrol manual dibanding `for await...of`?

## Ringkasan

- Async generator dievaluasi langkah demi langkah lewat Promise-based iteration.
- `await` dan `yield` bersama-sama membentuk state transition yang khas.
- Memahami runtime pipeline ini penting sebelum masuk async function biasa dan async arrow.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.6.3`
- `15.6.4`
- `15.6.5`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C12 Async Generator Functions Instantiation dan Evaluation Map](../assets/C12-async-generator-functions-instantiation-dan-evaluation-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C12-async-generator-functions-instantiation-dan-evaluation/example.js`
- Lihat contoh tambahan: `../examples/C12-async-generator-functions-instantiation-dan-evaluation/example-02.js`
- Lihat contoh tambahan: `../examples/C12-async-generator-functions-instantiation-dan-evaluation/example-03.js`
- Panduan: `../examples/C12-async-generator-functions-instantiation-dan-evaluation/README.md`
