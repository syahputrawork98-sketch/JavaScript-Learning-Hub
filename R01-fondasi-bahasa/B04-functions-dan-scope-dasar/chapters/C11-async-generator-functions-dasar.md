# C11 - Async Generator Functions Dasar

## Tujuan

Bab ini bertujuan memahami dasar async generator function.

## Kenapa Bab Ini Penting

Async generator menggabungkan dua ide penting: `async` dan `yield`. Topik ini penting karena memperlihatkan bagaimana nilai dapat diproduksi bertahap sekaligus menunggu operasi asynchronous di antaranya.

## Konsep Inti

1. Async generator ditulis dengan `async function*` dan menghasilkan async iterator.
2. Nilai dikirim keluar dengan `yield`, tetapi konsumsinya perlu `for await...of` atau `await iterator.next()`.
3. Di dalam body, kita bisa memakai `await` dan `yield` dalam satu alur.

## Analogi

- Intuisi Singkat: Async generator menggabungkan pola generator dengan alur async.
- Analogi: Seperti jalur distribusi yang bisa berhenti per paket sambil tetap menunggu kiriman dari luar.
- Batas Analogi: Ia tidak hanya pause-resume, tetapi juga terikat pada penyelesaian promise dan async flow.

## Praktik yang Direkomendasikan

- Mulai dari async generator kecil sebelum menambahkan `await` yang lebih kompleks.
- Bedakan antara async function yang mengembalikan satu Promise dan async generator yang menghasilkan banyak langkah async.
- Gunakan `for await...of` saat ingin membaca alur konsumsi secara natural.

## Kesalahan Umum

- Mengira async generator langsung mengembalikan array atau Promise biasa.
- Lupa bahwa konsumsi nilainya membutuhkan mekanisme async iterator.
- Mencampur `yield` dan `return` tanpa memahami efeknya pada akhir iterasi.

## Checkpoint Cepat

1. Apa beda async generator dan generator biasa?
2. Kapan kita memakai `for await...of`?
3. Kenapa async generator cocok untuk stream bertahap?

## Ringkasan

- Async generator adalah generator yang juga bisa menunggu operasi asynchronous.
- Nilai keluar bertahap melalui async iterator.
- Topik ini menjadi jembatan ke evaluasi runtime async generator pada bab berikutnya.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.6`
- `15.6.1`
- `15.6.2`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C11 Async Generator Functions Dasar Map](../assets/C11-async-generator-functions-dasar-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C11-async-generator-functions-dasar/example.js`
- Lihat contoh tambahan: `../examples/C11-async-generator-functions-dasar/example-02.js`
- Lihat contoh tambahan: `../examples/C11-async-generator-functions-dasar/example-03.js`
- Panduan: `../examples/C11-async-generator-functions-dasar/README.md`
