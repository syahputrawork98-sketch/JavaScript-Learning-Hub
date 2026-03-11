# C02 - Parameter Lists Initializer dan Expected Argument Count

## Tujuan

Bab ini bertujuan memahami konsekuensi initializer dan expected argument count.

## Kenapa Bab Ini Penting

Default initializer sering terlihat sederhana, tetapi punya aturan evaluasi yang memengaruhi hasil runtime. Di sisi lain, expected argument count (`function.length`) sering dipakai framework atau util introspection.

## Konsep Inti

1. Initializer berjalan hanya saat argumen bernilai `undefined`.
2. Initializer dievaluasi dari kiri ke kanan, sehingga urutan parameter penting.
3. `function.length` merepresentasikan expected argument count dengan aturan tertentu.

## Analogi

- Intuisi Singkat: Initializer, rest parameter, dan expected argument count mengatur cara input dibaca function.
- Analogi: Seperti meja registrasi yang punya nilai default, kotak sisa berkas, dan hitungan minimum data penting.
- Batas Analogi: Aturan ini memengaruhi perilaku pemanggilan function, bukan hanya tampilan daftar parameter.

## Praktik yang Direkomendasikan

- Tulis default value yang eksplisit untuk nilai yang memang optional.
- Hindari ketergantungan rumit antar-parameter jika tidak perlu.
- Saat mengandalkan `function.length`, pastikan tim paham definisi teknisnya.

## Kesalahan Umum

- Mengira default value dipakai untuk semua nilai falsy (`0`, `''`, `false`, `null`).
- Tidak sadar bahwa `a = b` bisa gagal jika `b` belum terinisialisasi.
- Menyamakan jumlah parameter ditulis dengan nilai `function.length`.

## Checkpoint Cepat

1. Kapan initializer dijalankan dan kapan diabaikan?
2. Kenapa urutan parameter bisa menyebabkan `ReferenceError`?
3. Bagaimana aturan singkat menghitung `function.length` saat ada default parameter?

## Ringkasan

- Default initializer hanya aktif saat argumen `undefined`.
- Urutan parameter memengaruhi apakah referensi antar-parameter valid.
- `function.length` adalah expected argument count, bukan sekadar jumlah parameter tertulis.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.1.3`
- `15.1.4`
- `15.1.5`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C02 Parameter Lists Initializer dan Expected Argument Count Map](../assets/C02-parameter-lists-initializer-dan-expected-argument-count-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C02-parameter-lists-initializer-dan-expected-argument-count/example.js`
- Lihat contoh tambahan: `../examples/C02-parameter-lists-initializer-dan-expected-argument-count/example-02.js`
- Lihat contoh tambahan: `../examples/C02-parameter-lists-initializer-dan-expected-argument-count/example-03.js`
- Panduan: `../examples/C02-parameter-lists-initializer-dan-expected-argument-count/README.md`
