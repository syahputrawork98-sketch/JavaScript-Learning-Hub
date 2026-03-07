# Changelog - 03 Asynchronous JavaScript Model

## [0.5.0] - 2026-03-07

### Added
- Menambahkan `topics/09-bounded-concurrency-dan-pool-pattern.md`.
- Menambahkan `topics/10-async-observability-dan-debugging-strategy.md`.
- Menambahkan `assets/cancellation-timeout-retry-map.svg`.
- Menambahkan `assets/async-iteration-flow-map.svg`.
- Menambahkan `assets/async-architecture-anti-patterns-map.svg`.
- Menambahkan `assets/bounded-concurrency-pool-map.svg`.
- Menambahkan `assets/async-observability-debugging-map.svg`.

### Changed
- Menyelaraskan `README.md` buku 03 agar mencakup scope 10 topik.
- Menyelaraskan `topics/README.md` dan `docs/learning-path.md` untuk urutan 01-10.
- Menambahkan referensi diagram SVG ke topik 06-10.
- Menambahkan daftar visualisasi baru di `README.md` buku 03.

### Notes
- Buku 03 kini terdiri dari 10 topik end-to-end.
- Strategi update sumber eksternal sudah terdokumentasi.

## [0.4.0] - 2026-03-07

### Changed
- Refactor `topics/01-async-javascript-dasar.md` ke format materi rilis (tujuan, konsep, diagram, multi-contoh, eksperimen, latihan, ringkasan).
- Refactor `topics/02-promise-async-await.md` ke format materi rilis.
- Refactor `topics/03-event-loop-detail.md` ke format materi rilis.
- Refactor `topics/04-error-handling-async.md` ke format materi rilis.
- Refactor `topics/05-concurrency-patterns.md` ke format materi rilis.
- Refactor `topics/06-cancellation-timeout-dan-retry-strategy.md` ke format materi rilis.
- Refactor `topics/07-async-iteration-dan-for-await-of.md` ke format materi rilis.
- Refactor `topics/08-async-architecture-dan-anti-patterns.md` ke format materi rilis.
- Memperbaiki referensi lanjutan di topik cancellation dari `for-await.md` ke `for-await-of.md`.
- Menyelaraskan `topics/README.md` dan `docs/learning-path.md` dengan standar rilis terbaru.

### Notes
- Batch normalisasi buku 03 selesai untuk topik 01-08.
- Final consistency pass lintas buku 03 selesai.

## [0.3.0] - 2026-03-06

### Added
- Menambahkan topik baru:
  - `topics/06-cancellation-timeout-dan-retry-strategy.md`
  - `topics/07-async-iteration-dan-for-await-of.md`
  - `topics/08-async-architecture-dan-anti-patterns.md`

### Changed
- Menormalkan urutan topik aktif menjadi 8 topik async model.
- Memperbarui `topics/README.md` dan `docs/learning-path.md` agar sinkron dengan 8 topik aktif.
- Menyelaraskan alur lanjutan dari topik `05` ke topik `06` sebelum drill buku 06.

### Validation
- Link lokal area aktif buku 03 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.

### Notes
- Buku 03 sekarang mencakup fondasi async hingga desain arsitektur async dan anti-pattern production.

## [0.2.0] - 2026-03-06

### Added
- Menambahkan dokumen prasyarat aktif: `PRASYARAT-DAN-KAMUS-MINI.md`.
- Menambahkan dokumen learning path: `docs/learning-path.md`.
- Menambahkan topik baru:
  - `topics/04-error-handling-async.md`
  - `topics/05-concurrency-patterns.md`
- Menambahkan folder visualisasi `assets/`.
- Menambahkan aset SVG:
  - `assets/event-loop-flow-map.svg`
  - `assets/promise-vs-timer-order-map.svg`
  - `assets/sequential-vs-parallel-map.svg`
  - `assets/error-handling-async-map.svg`
  - `assets/concurrency-patterns-map.svg`

### Changed
- Menormalkan `README.md` buku 03 agar `topics/` + `docs/` menjadi rute belajar utama.
- Menormalkan urutan topik aktif menjadi 5 topik (`01` sampai `05`).
- Memperbarui referensi prasyarat/remedial/cross-buku pada topik `01` sampai `05`.
- Menambahkan referensi visual map pada topik `01` sampai `05`.
- Menyelaraskan catatan drill async agar dilakukan setelah menyelesaikan topik `05`.

### Removed
- Menghapus artefak migrasi sementara:
  - `migrated-from-02-first-principles/`
  - `migrated-from-03-advanced-patterns/`

### Validation
- Link lokal area aktif buku 03 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.
- Seluruh aset SVG buku 03 telah divalidasi XML parse dan valid.

### Notes
- Buku 03 siap dipakai sebagai rute belajar async model yang utuh sebelum lanjut ke drill buku 06.


