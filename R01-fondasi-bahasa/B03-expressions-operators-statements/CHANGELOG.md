# Changelog

Semua perubahan materi buku dicatat di file ini.

## [Unreleased]

Belum ada perubahan setelah rilis `v1.0.2`.

## [v1.0.2] - 2026-03-12

Kode versi: `JVS-R01-B03-v1.0.2`

- Menyesuaikan strategi analogi B03 agar lebih fleksibel sesuai kebutuhan materi.
- Mengubah chapter bertipe sederhana untuk memakai `Analogi Singkat` saja.
- Menambahkan `Analogi Singkat` pada chapter bertipe abstrak yang direkomendasikan memiliki dua lapis analogi.

## [v1.0.1] - 2026-03-11

Kode versi: `JVS-R01-B03-v1.0.1`

- Menambahkan section `Analogi` pada seluruh chapter `C01-C32` di folder `chapters/`.
- Menstandarkan format analogi per chapter menjadi tiga poin: `Intuisi Singkat`, `Analogi`, dan `Batas Analogi`.
- Menempatkan section `Analogi` tepat sebelum `Ringkasan` agar alur baca tetap konsisten.

## [v1.0.0] - 2026-03-11

Kode versi: `JVS-R01-B03-v1.0.0`

- Inisialisasi struktur awal buku (`README.md`, `docs/`, `chapters/`, `examples/`, `assets/`) lalu merapikan dokumen inti B03 dari artefak template ke struktur final.
- Menetapkan scope B03 menjadi 32 topik berbasis sumber ECMAScript (`13.1-13.16` dan `14.1-14.16`) dengan orientasi praktik.
- Menyusun index chapter menjadi `C01-C32` pada `chapters/README.md`.
- Menuntaskan materi chapter `C01-C32` di folder `chapters/`.
- Menyelaraskan runnable example utama `example.js` untuk setiap chapter `C01-C32`.
- Melengkapi seluruh folder `examples/C01-C32` dengan `example-02.js`, `example-03.js`, dan `README.md` yang konsisten untuk panduan eksekusi tiga skenario.
- Menambahkan `examples/README.md` dan `assets/README.md` sebagai pedoman penggunaan folder pendukung.
- Menambahkan 32 visual map SVG (`C01-C32`) pada folder `assets/`.
- Menyisipkan section `Visual Map` pada seluruh chapter `C01-C32` dan menghubungkan tiap chapter ke aset SVG terkait.
- Melakukan review QA menyeluruh B03: validasi struktur chapter, validasi keterhubungan chapter ke examples/assets, serta verifikasi seluruh contoh JavaScript.
