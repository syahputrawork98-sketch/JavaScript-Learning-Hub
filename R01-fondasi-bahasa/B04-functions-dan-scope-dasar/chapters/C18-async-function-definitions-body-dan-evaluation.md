# C18 - Async Function Definitions Body dan Evaluation

## Tujuan

Bab ini bertujuan memahami evaluasi async function body.

## Kenapa Bab Ini Penting

Setelah bentuk async function dipahami, kita perlu melihat apa yang terjadi saat body benar-benar dijalankan. Bab ini penting karena `await`, error handling, dan nilai `return` di async function membentuk alur evaluasi yang berbeda dari function sinkron biasa.

## Konsep Inti

1. Async function expression baru terbentuk setelah ekspresi atau assignment yang memuatnya dievaluasi.
2. Body async function berjalan sampai bertemu `await`, lalu melanjutkan kembali setelah Promise terkait selesai.
3. `return` dan `throw` menentukan apakah Promise hasil akan resolve atau reject.

## Analogi

- Intuisi Singkat: Body dan evaluasi async function menjelaskan bagaimana `await` mengatur jeda dan kelanjutan alur.
- Analogi: Seperti jalur kerja yang berhenti di titik tunggu lalu lanjut ketika bahan yang ditunggu datang.
- Batas Analogi: Yang terlihat seperti alur lurus sebenarnya dipecah menjadi beberapa tahap async oleh engine.

## Praktik yang Direkomendasikan

- Gunakan log sederhana untuk membedakan kapan async function expression tersedia dan kapan body mulai berjalan.
- Gunakan log sederhana sebelum dan sesudah `await` untuk melihat perpindahan alur.
- Uji sukses dan gagal (`resolve` dan `reject`) agar mekanisme Promise lebih jelas.

## Kesalahan Umum

- Mengira async function expression sudah tersedia sebelum assignment dievaluasi.
- Mengira `await` memblokir seluruh program, padahal ia hanya menunda kelanjutan async function.
- Lupa menangani Promise rejection dari async function.

## Checkpoint Cepat

1. Kapan async function expression mulai bisa dipanggil?
2. Apa yang terjadi pada eksekusi body saat `await` ditemui?
3. Bagaimana `return` dan `throw` memengaruhi Promise hasil?

## Ringkasan

- Evaluasi async function mencakup timing expression, `await`, `return`, dan `throw`.
- Promise hasil async function adalah jembatan utama antara body function dan konsumennya.
- Pemahaman ini memudahkan pembacaan async arrow function pada bab berikutnya.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.8.3`
- `15.8.4`
- `15.8.5`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C18 Async Function Definitions Body dan Evaluation Map](../assets/C18-async-function-definitions-body-dan-evaluation-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C18-async-function-definitions-body-dan-evaluation/example.js`
- Lihat contoh tambahan: `../examples/C18-async-function-definitions-body-dan-evaluation/example-02.js`
- Lihat contoh tambahan: `../examples/C18-async-function-definitions-body-dan-evaluation/example-03.js`
- Panduan: `../examples/C18-async-function-definitions-body-dan-evaluation/README.md`
