# C19 - Async Arrow Function Definitions End to End

## Tujuan

Bab ini bertujuan memahami async arrow function secara utuh.

## Kenapa Bab Ini Penting

Async arrow function menggabungkan dua karakter penting: bentuk ringkas arrow function dan model Promise dari async function. Bab ini penting karena banyak kode modern JavaScript memakai bentuk ini untuk callback, mapping asynchronous, dan handler berbasis closure.

## Konsep Inti

1. Async arrow function ditulis dengan `async (...) => ...` atau `async param => ...`.
2. Ia tetap memakai perilaku lexical khas arrow function, seperti `this` yang mengikuti scope luar.
3. Hasil akhirnya tetap Promise, sehingga konsumsi nilainya perlu `await` atau `.then()`.

## Analogi

- Intuisi Singkat: Async arrow function menggabungkan keringkasan arrow dengan perilaku async.
- Analogi: Seperti catatan instruksi cepat yang sekaligus terhubung ke sistem notifikasi penundaan.
- Batas Analogi: Ia tetap mewarisi sifat lexical arrow function, jadi tidak sama dengan async function biasa dalam semua hal.

## Praktik yang Direkomendasikan

- Gunakan async arrow untuk callback pendek yang tetap perlu `await`.
- Ingat bahwa `this` pada async arrow tidak membuat binding baru.
- Saat body mulai panjang, pertimbangkan block body agar urutan langkah lebih terbaca.

## Kesalahan Umum

- Mengira async arrow punya `this` sendiri seperti function biasa.
- Lupa bahwa ekspresi singkat tetap dibungkus Promise.
- Sulit membaca callback async bertingkat karena semua terlihat ringkas, padahal alurnya tetap asynchronous.

## Checkpoint Cepat

1. Apa persamaan async arrow function dan async function biasa?
2. Apa pengaruh lexical `this` pada async arrow function?
3. Kapan lebih nyaman memakai block body dibanding expression body?

## Ringkasan

- Async arrow function adalah bentuk ringkas untuk alur async yang tetap mengikuti aturan arrow function.
- Promise result dan lexical binding adalah dua ciri utamanya.
- Ini menjadi penutup alami sebelum masuk ke tail position calls sebagai topik praktis penutup buku.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.9`
- `15.9.1`
- `15.9.2`
- `15.9.3`
- `15.9.4`
- `15.9.5`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C19 Async Arrow Function Definitions End to End Map](../assets/C19-async-arrow-function-definitions-end-to-end-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C19-async-arrow-function-definitions-end-to-end/example.js`
- Lihat contoh tambahan: `../examples/C19-async-arrow-function-definitions-end-to-end/example-02.js`
- Lihat contoh tambahan: `../examples/C19-async-arrow-function-definitions-end-to-end/example-03.js`
- Panduan: `../examples/C19-async-arrow-function-definitions-end-to-end/README.md`
