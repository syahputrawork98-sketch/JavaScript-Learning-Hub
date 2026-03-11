# C06 - Arrow Function Runtime dan Evaluation

## Tujuan

Bab ini bertujuan memahami evaluasi concise body dan instansiasi arrow function.

## Kenapa Bab Ini Penting

Setelah bentuk sintaks dipahami, langkah berikutnya adalah memahami bagaimana arrow function dievaluasi di runtime: lexical `this`, lexical `arguments`, serta kapan value hasil dieksekusi.

## Konsep Inti

1. Arrow function menangkap `this` dari lexical scope, bukan dari call-site sendiri.
2. Arrow function tidak memiliki `arguments` sendiri; yang dipakai adalah `arguments` milik scope terdekat non-arrow.
3. Instansiasi arrow function terjadi saat ekspresinya dievaluasi.

## Analogi Singkat

Arrow function runtime itu seperti alat sambungan yang mengambil konteks dari tempat ia dipasang, bukan membawa panel kontrol sendiri. Karena itu perilakunya terasa ringan, tetapi juga sangat bergantung pada lingkungan sekitarnya.

## Analogi

- Intuisi Singkat: Arrow function runtime dan evaluasi berbeda dari function biasa, terutama pada konteks lexical.
- Analogi: Seperti kabel sambungan yang mengambil daya dari panel terdekat, bukan membawa generator sendiri.
- Batas Analogi: Arrow function mewarisi konteks tertentu seperti `this`, jadi perilakunya tidak identik dengan function biasa.

## Praktik yang Direkomendasikan

- Gunakan arrow function untuk callback yang memang butuh lexical `this`.
- Hindari penggunaan `arguments` implisit; lebih baik gunakan rest parameter.
- Saat debugging, cek lokasi pembuatan arrow, bukan hanya lokasi pemanggilan.

## Kesalahan Umum

- Mengira `this` pada arrow berubah mengikuti pemanggilan `.call()`/`.apply()`.
- Menganggap arrow punya `arguments` sendiri seperti function biasa.
- Menempatkan arrow di objek method utama ketika perilaku `this` dinamis justru dibutuhkan.

## Checkpoint Cepat

1. Apa arti lexical `this` pada arrow function?
2. Kenapa `.call()` tidak mengubah `this` arrow seperti function biasa?
3. Apa alternatif yang lebih jelas daripada mengandalkan `arguments`?

## Ringkasan

- Runtime arrow function ditentukan oleh lexical scope saat function dibuat.
- `this` dan `arguments` mengikuti scope sekitar, bukan call-site arrow.
- Memahami evaluation timing membantu membaca behavior callback dengan akurat.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.3.3`
- `15.3.4`
- `15.3.5`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C06 Arrow Function Runtime dan Evaluation Map](../assets/C06-arrow-function-runtime-dan-evaluation-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C06-arrow-function-runtime-dan-evaluation/example.js`
- Lihat contoh tambahan: `../examples/C06-arrow-function-runtime-dan-evaluation/example-02.js`
- Lihat contoh tambahan: `../examples/C06-arrow-function-runtime-dan-evaluation/example-03.js`
- Panduan: `../examples/C06-arrow-function-runtime-dan-evaluation/README.md`
