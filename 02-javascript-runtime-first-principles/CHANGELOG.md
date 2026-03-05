# Changelog - 02 JavaScript Runtime First Principles

## 2026-03-06 - v0.2.0

### Added
- Menambahkan folder `assets/` untuk visualisasi konsep runtime.
- Menambahkan aset SVG:
- `assets/execution-context-lifecycle-map.svg`
- `assets/call-stack-web-api-queue-map.svg`
- `assets/scope-chain-lookup-map.svg`
- Menambahkan referensi visual map pada:
- `README.md`
- `topics/07-execution-context-lifecycle.md`
- `topics/08-call-stack-web-apis-queues.md`
- `topics/09-scope-chain-lookup.md`

### Changed
- Merapikan metadata topik `topics/01` sampai `topics/09` (status `normalized` konsisten).
- Menormalkan alur prasyarat dan "lanjut setelah ini" agar selaras dengan urutan aktif `topics/README.md`.
- Menghapus section `Status Migrasi` dari `README.md` untuk menyiapkan audit/review manual.

### Validation
- Validasi link lokal area track 02 (`README + topics + docs`) lulus tanpa broken link.
- Validasi XML seluruh aset SVG lulus.

### Notes
- Track 02 siap dipakai sebagai baseline audit manual sebelum lanjut ke track 03.

## 2026-03-06

### Added
- Menambahkan `PRASYARAT-DAN-KAMUS-MINI.md` ke track 02 sebagai rujukan prasyarat aktif.
- Menambahkan folder `docs/prasyarat/` berisi dokumen remedial:
- `console-dan-if-dasar.md`
- `variabel-dasar.md`
- `function-dasar.md`
- `object-dasar.md`
- `promise-dasar.md`
- Menambahkan dokumen normalisasi:
- `docs/boundary-map.md`
- `docs/refinement-log.md`

### Changed
- Menormalisasi struktur belajar track 02 agar `topics/` menjadi rute utama.
- Memperbarui dokumen navigasi:
- `README.md`
- `docs/learning-path.md`
- `topics/README.md`
- Menambahkan metadata migrasi dan boundary note di seluruh topik aktif `topics/01` sampai `topics/09`.
- Menormalkan referensi internal topik dari struktur lama ke struktur baru + cross-track (03/04/05).

### Removed
- Menghapus artefak migrasi sementara:
- `migrated-from-02-first-principles/`
- `legacy-snapshot-from-02-first-principles/`

### Validation
- Link lokal aktif pada area track 02 (`README + docs + topics`) telah diverifikasi dan valid.

### Notes
- Sumber legacy `02-javascript-first-principles` sudah didekomisioning.
- Track 02 kini difokuskan pada materi aktif terkurasi tanpa folder arsip migrasi.
