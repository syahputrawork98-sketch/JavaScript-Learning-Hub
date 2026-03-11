# Changelog

Semua perubahan materi buku dicatat di file ini.

## [Unreleased]

Belum ada perubahan setelah rilis `v1.1.0`.

## [v1.1.0] - 2026-03-11

Kode versi: `JVS-R01-B02-v1.1.0`

- Menambahkan `docs/spec-mapping-56.md` untuk memetakan cakupan B02 ke 56 section ECMAScript yang relevan (`6.1.*`, `7.1.*`, `7.2.*`).
- Memperbarui `docs/README.md` dengan referensi ke dokumen mapping spec.
- Menambahkan section `Spec Coverage` pada chapter `C01-C12` untuk menautkan setiap bab ke section ECMAScript yang paling relevan.
- Menyelaraskan `examples/C01-C12/README.md` dengan `Spec Coverage` chapter melalui section `Spec Alignment` (tautan ke chapter dan `docs/spec-mapping-56.md`).
- Mengoreksi mapping `C04-typeof-dan-deteksi-tipe-praktis.md` ke section yang lebih relevan (`7.2.2`, `7.2.3`, `7.2.8`).
- Menormalkan seluruh file Markdown B02 ke UTF-8 tanpa BOM dan merapikan trailing blank lines.

## [v1.0.0] - 2026-03-11

Kode versi: `JVS-R01-B02-v1.0.0`

- Inisialisasi struktur awal buku (`README.md`, `docs/`, `chapters/`, `assets/`).
- Merapikan dokumen inti B02 dari placeholder template ke struktur final.
- Menetapkan outline bab `C01-C12` pada `chapters/README.md`.
- Menambahkan draft awal `C01-values-dan-types-overview.md`.
- Menambahkan skeleton bab `C02-C12` untuk kerangka penulisan lanjutan.
- Menambahkan folder `examples/` lengkap untuk `C01-C12` (tiap bab memiliki `example.js` dan `README.md`).
- Menambahkan `examples/README.md` dan `assets/README.md` untuk pedoman penggunaan folder pendukung.
- Memperbarui runnable example `examples/C01-values-types-overview/example.js` agar selaras dengan materi `C01-values-dan-types-overview.md`.
- Menyelesaikan materi penuh `C02-primitive-types-dasar.md` dan memperbarui runnable example `examples/C02-primitive-types-dasar/example.js`.
- Menyelesaikan materi penuh `C03-non-primitive-dan-reference-intro.md` dan memperbarui runnable example `examples/C03-non-primitive-dan-reference-intro/example.js`.
- Menyelesaikan materi penuh `C04-typeof-dan-deteksi-tipe-praktis.md` dan memperbarui runnable example `examples/C04-typeof-dan-deteksi-tipe-praktis/example.js`.
- Menyelesaikan materi penuh `C05-truthy-falsy-dan-konteks-boolean.md` dan memperbarui runnable example `examples/C05-truthy-falsy-dan-konteks-boolean/example.js`.
- Menyelesaikan materi penuh `C06-equality-strict-vs-loose.md` dan memperbarui runnable example `examples/C06-equality-strict-vs-loose/example.js`.
- Menyelesaikan materi penuh `C07-coercion-ke-number.md` dan memperbarui runnable example `examples/C07-coercion-ke-number/example.js`.
- Menyelesaikan materi penuh `C08-coercion-ke-string.md` dan memperbarui runnable example `examples/C08-coercion-ke-string/example.js`.
- Menyelesaikan materi penuh `C09-coercion-ke-boolean.md` dan memperbarui runnable example `examples/C09-coercion-ke-boolean/example.js`.
- Menyelesaikan materi penuh `C10-null-vs-undefined.md` dan memperbarui runnable example `examples/C10-null-vs-undefined/example.js`.
- Menyelesaikan materi penuh `C11-nan-infinity-dan-negative-zero.md` dan memperbarui runnable example `examples/C11-nan-infinity-dan-negative-zero/example.js`.
- Menyelesaikan materi penuh `C12-coercion-debugging-checklist.md` dan memperbarui runnable example `examples/C12-coercion-debugging-checklist/example.js`.
- Melengkapi struktur `examples/` untuk `C01-C12` dengan `example-02.js` dan `example-03.js` di tiap bab, serta menyelaraskan seluruh `README.md` examples ke format konsisten.
- Menambahkan 12 visual map SVG pada `assets/` untuk bab `C01-C12` dan memperbarui `assets/README.md` dengan daftar aset final.
- Menyisipkan section `Visual Map` pada chapter `C01-C12` dan menghubungkan tiap bab ke file SVG map terkait di folder `assets/`.
- Merapikan final pass dokumentasi: memperbarui status aktual pada `README.md` B02 dan menormalkan label gambar `Visual Map` di chapter `C01-C12`.
