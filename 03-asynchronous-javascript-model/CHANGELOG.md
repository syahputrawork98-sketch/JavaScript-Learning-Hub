# Changelog - 03 Asynchronous JavaScript Model

## 2026-03-06 - v0.3.0

### Added
- Menambahkan topik baru:
- `topics/06-cancellation-timeout-dan-retry-strategy.md`
- `topics/07-async-iteration-dan-for-await-of.md`
- `topics/08-async-architecture-dan-anti-patterns.md`

### Changed
- Menormalkan urutan topik aktif menjadi 8 topik async model.
- Memperbarui `topics/README.md` dan `docs/learning-path.md` agar sinkron dengan 8 topik aktif.
- Menyelaraskan alur lanjutan dari topik `05` ke topik `06` sebelum drill track 06.

### Validation
- Link lokal area aktif track 03 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.

### Notes
- Track 03 sekarang mencakup fondasi async hingga desain arsitektur async dan anti-pattern production.

## 2026-03-06 - v0.2.0

### Added
- Menambahkan dokumen prasyarat aktif:
- `PRASYARAT-DAN-KAMUS-MINI.md`
- Menambahkan dokumen learning path:
- `docs/learning-path.md`
- Menambahkan topik baru:
- `topics/04-error-handling-async.md`
- `topics/05-concurrency-patterns.md`
- Menambahkan folder visualisasi:
- `assets/`
- Menambahkan aset SVG:
- `assets/event-loop-flow-map.svg`
- `assets/promise-vs-timer-order-map.svg`
- `assets/sequential-vs-parallel-map.svg`
- `assets/error-handling-async-map.svg`
- `assets/concurrency-patterns-map.svg`

### Changed
- Menormalkan `README.md` track 03 agar `topics/` + `docs/` menjadi rute belajar utama.
- Menormalkan urutan topik aktif menjadi 5 topik:
- `01-async-javascript-dasar.md`
- `02-promise-async-await.md`
- `03-event-loop-detail.md`
- `04-error-handling-async.md`
- `05-concurrency-patterns.md`
- Memperbarui referensi prasyarat/remedial/cross-track pada topik `01` sampai `05`.
- Menambahkan referensi visual map pada topik `01` sampai `05`.
- Menyelaraskan catatan drill async agar dilakukan setelah menyelesaikan topik `05`.

### Removed
- Menghapus artefak migrasi sementara:
- `migrated-from-02-first-principles/`
- `migrated-from-03-advanced-patterns/`

### Validation
- Link lokal area aktif track 03 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.
- Seluruh aset SVG track 03 telah divalidasi XML parse dan valid.

### Notes
- Track 03 siap dipakai sebagai rute belajar async model yang utuh sebelum lanjut ke drill track 06.
