# Changelog - 02 JavaScript Runtime First Principles

## [0.3.0] - 2026-03-07

### Added
- Menambahkan `topics/10-lexical-environment-dan-environment-record.md`.
- Menambahkan `topics/11-memory-model-high-level.md`.
- Menambahkan `assets/lexical-environment-environment-record-map.svg`.
- Menambahkan `assets/memory-model-high-level-map.svg`.

### Changed
- Refactor `topics/01-values-types-coercion.md` ke format materi rilis (tujuan, konsep, multi-contoh, eksperimen, latihan, ringkasan).
- Refactor `topics/02-scope-hoisting.md` ke format materi rilis.
- Refactor `topics/03-function-closure-dasar.md` ke format materi rilis.
- Refactor `topics/04-this-binding-dasar.md` ke format materi rilis.
- Refactor `topics/05-closure-patterns.md` ke format materi rilis.
- Refactor `topics/06-this-binding-lanjutan.md` ke format materi rilis.
- Refactor `topics/07-execution-context-lifecycle.md` ke format materi rilis.
- Refactor `topics/08-call-stack-web-apis-queues.md` ke format materi rilis.
- Refactor `topics/09-scope-chain-lookup.md` ke format materi rilis.
- Menghapus section metadata migrasi dari seluruh topik (`01-09`) agar materi lebih fokus ke pembaca.
- Menyelaraskan `topics/README.md` dengan standar struktur topik saat ini.
- Menyelaraskan `docs/learning-path.md` ke wording rilis non-migrasi.
- Menyelaraskan `README.md` buku 02 agar konsisten dengan scope final.
- Menyelaraskan alur `Lanjut Setelah Ini` di `topics/09-scope-chain-lookup.md` agar lanjut ke topik 10.
- Menyelaraskan `docs/boundary-map.md` dengan scope final (lexical environment + memory high-level in-buku).
- Menyelaraskan prasyarat internals di `PRASYARAT-DAN-KAMUS-MINI.md` agar fokus sinkron buku 02.
- Menambahkan referensi diagram SVG ke `topics/10-lexical-environment-dan-environment-record.md` dan `topics/11-memory-model-high-level.md`.
- Menambahkan daftar visualisasi baru di `README.md` buku 02.

### Notes
- Batch A selesai (topik 01-03).
- Batch B selesai (topik 04-06).
- Batch C selesai (topik 07-09).
- Scope extension selesai (topik 10-11).
- Seluruh topik utama buku 02 telah melewati editorial pass.

## [0.2.0] - 2026-03-06

### Added
- Menambahkan folder `assets/` untuk visualisasi konsep runtime.
- Menambahkan aset SVG: `assets/execution-context-lifecycle-map.svg`, `assets/call-stack-web-api-queue-map.svg`, `assets/scope-chain-lookup-map.svg`.
- Menambahkan referensi visual map pada `README.md`, `topics/07-execution-context-lifecycle.md`, `topics/08-call-stack-web-apis-queues.md`, dan `topics/09-scope-chain-lookup.md`.

### Changed
- Merapikan metadata topik `topics/01` sampai `topics/09` (status `normalized` konsisten).
- Menormalkan alur prasyarat dan "lanjut setelah ini" agar selaras dengan urutan aktif `topics/README.md`.
- Menghapus section `Status Migrasi` dari `README.md` untuk menyiapkan audit/review manual.

### Validation
- Validasi link lokal area buku 02 (`README + topics + docs`) lulus tanpa broken link.
- Validasi XML seluruh aset SVG lulus.

### Notes
- Buku 02 siap dipakai sebagai baseline audit manual sebelum lanjut ke buku 03.

## [0.1.0] - 2026-03-06

### Added
- Menambahkan `PRASYARAT-DAN-KAMUS-MINI.md` ke buku 02 sebagai rujukan prasyarat aktif.
- Menambahkan folder `docs/prasyarat/` berisi: `console-dan-if-dasar.md`, `variabel-dasar.md`, `function-dasar.md`, `object-dasar.md`, `promise-dasar.md`.
- Menambahkan dokumen normalisasi: `docs/boundary-map.md` dan `docs/refinement-log.md`.

### Changed
- Menormalisasi struktur belajar buku 02 agar `topics/` menjadi rute utama.
- Memperbarui dokumen navigasi `README.md`, `docs/learning-path.md`, dan `topics/README.md`.
- Menambahkan metadata migrasi dan boundary note di seluruh topik aktif `topics/01` sampai `topics/09`.
- Menormalkan referensi internal topik dari struktur lama ke struktur baru + cross-buku (03/04/05).

### Removed
- Menghapus artefak migrasi sementara: `migrated-from-02-first-principles/` dan `legacy-snapshot-from-02-first-principles/`.

### Validation
- Link lokal aktif pada area buku 02 (`README + docs + topics`) telah diverifikasi dan valid.

### Notes
- Sumber legacy `02-javascript-first-principles` sudah didekomisioning.
- Buku 02 difokuskan pada materi aktif terkurasi tanpa folder arsip migrasi.

