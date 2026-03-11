# C09 - Generator Functions Dasar

## Tujuan

Bab ini bertujuan memahami dasar generator function dan validasi awalnya.

## Kenapa Bab Ini Penting

Generator memperkenalkan model eksekusi bertahap (`pause` dan `resume`) yang berbeda dari function biasa. Konsep ini penting untuk memahami alur iterasi terkontrol dan fondasi async generator di bab berikutnya.

## Konsep Inti

1. Generator didefinisikan dengan `function*` dan menghasilkan iterator.
2. Kata kunci `yield` menghentikan sementara eksekusi dan mengembalikan nilai.
3. Pemanggilan generator tidak langsung menjalankan body sampai `next()` dipanggil.

## Analogi Singkat

Generator itu seperti permainan yang bisa dijeda lalu dilanjutkan lagi dari checkpoint terakhir. Ia tidak memaksa seluruh proses selesai sekaligus, sehingga langkah-langkahnya bisa dikontrol lebih halus.

## Analogi

- Intuisi Singkat: Generator function memungkinkan eksekusi berhenti-lanjut sambil menjaga state.
- Analogi: Seperti permainan level yang bisa dipause lalu dilanjutkan dari checkpoint terakhir.
- Batas Analogi: State generator disimpan di antara `yield`, sehingga alurnya tidak linear seperti function biasa.

## Praktik yang Direkomendasikan

- Gunakan generator saat butuh produksi nilai bertahap (lazy sequence).
- Simpan log sederhana saat belajar generator agar urutan pause/resume jelas.
- Pisahkan contoh generator kecil sebelum menggabungkannya ke alur yang kompleks.

## Kesalahan Umum

- Mengira `function*` langsung mengeksekusi body saat dipanggil.
- Menganggap `yield` sama dengan `return` biasa.
- Lupa bahwa object hasil generator mengikuti protokol iterator.

## Checkpoint Cepat

1. Apa hasil dari memanggil function generator sebelum `next()`?
2. Apa perbedaan utama `yield` dan `return` di generator?
3. Kapan generator lebih tepat daripada array langsung?

## Ringkasan

- Generator memberi mekanisme eksekusi bertahap lewat `yield`.
- Eksekusi body dikontrol lewat pemanggilan `next()`.
- Dasar ini menjadi jembatan ke topik instantiation/evaluation generator.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.5`
- `15.5.1`
- `15.5.2`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C09 Generator Functions Dasar Map](../assets/C09-generator-functions-dasar-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C09-generator-functions-dasar/example.js`
- Lihat contoh tambahan: `../examples/C09-generator-functions-dasar/example-02.js`
- Lihat contoh tambahan: `../examples/C09-generator-functions-dasar/example-03.js`
- Panduan: `../examples/C09-generator-functions-dasar/README.md`
