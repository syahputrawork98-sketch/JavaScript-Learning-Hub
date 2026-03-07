# Changelog - 08 JavaScript Engine Internals

## 2026-03-08 - v0.3.1

### Changed
- Rewrite mendalam `topics/01-engine-pipeline-parse-ast-bytecode.md` ke format pembelajaran penuh agar setara kedalaman topik lain.
- Rewrite mendalam `topics/05-garbage-collection-generational-dasar.md` dengan model generational GC yang lebih operasional (eksperimen, drill, debug story, ringkasan).
- Menyelesaikan penyelarasan kualitas end-to-end untuk seluruh topik buku 08 (01-08).

### Notes
- Pass ini menutup gap kualitas yang tersisa setelah v0.3.0.
- Tidak menambah topik baru; fokus murni peningkatan kedalaman pedagogi.

## 2026-03-08 - v0.3.0

### Changed
- Rewrite mendalam `topics/02-interpreter-vs-jit-tiering.md` ke format pembelajaran penuh (prasyarat, big picture, eksperimen, drill, debug story, ringkasan).
- Rewrite mendalam `topics/04-optimization-dan-deoptimization-triggers.md` dengan katalog trigger deopt, mitigasi praktis, dan workflow verifikasi.
- Rewrite mendalam `topics/06-profiling-basics-cpu-heap-flamegraph.md` dengan panduan pemilihan alat profiling dan loop baseline -> patch -> retest.
- Rewrite mendalam `topics/08-case-study-deopt-investigation.md` menjadi investigasi end-to-end berbasis bukti + regression guard.
- Menyelaraskan kualitas topik 02/04/06/08 agar konsisten dengan kedalaman topik 03.

### Notes
- Pass ini fokus pada peningkatan kedalaman pedagogi dan penerapan praktis investigasi performa.
- Tidak menambah topik baru; perubahan murni di kualitas materi yang sudah ada.

## 2026-03-08 - v0.2.0

### Changed
- Memperdalam topik `02` sampai `08` agar setara format topik `01`.
- Menambahkan section terstruktur pada topik `02-08`:
- Tujuan, Fokus Istilah, Mapping Konsep, Workflow, Mini Mapping, Checkpoint, Jebakan Umum.

### Notes
- Buku 08 sekarang memiliki baseline kualitas konten yang konsisten untuk topik `01` sampai `08`.

## 2026-03-08 - v0.1.0

### Added
- Menambahkan struktur dasar buku 08:
- `docs/learning-path.md`
- `topics/README.md`
- `PRASYARAT-DAN-KAMUS-MINI.md`
- Menambahkan topik awal `01` sampai `08`.

### Notes
- Topik `01` diperdalam sebagai template kualitas.
- Topik `02-08` disiapkan sebagai kerangka terstruktur untuk pengembangan bertahap.
