# 06 JavaScript Runtime Exercises

## 2026-03-06 - v0.3.4

### Added
- Menambahkan folder visualisasi:
- `assets/`
- Menambahkan aset SVG:
- `assets/this-binding-callsite-map.svg`
- `assets/event-loop-order-map.svg`
- `assets/mutation-reference-sharing-map.svg`
- `assets/promise-error-flow-map.svg`

### Changed
- Memperbarui `README.md` buku 06 dengan section visualisasi konsep runtime.

### Validation
- Seluruh aset SVG buku 06 telah divalidasi XML parse dan valid.

## 2026-03-06 - v0.3.3

### Changed
- Memperbaiki `07-prototype-class-runtime-drills.md` Level 3 agar detached method benar-benar menunjukkan risiko runtime pada konteks `this`.
- Menyelaraskan answer key topik `02`, `07`, dan `08` untuk membedakan output script non-strict vs strict/module mode.
- Memperjelas baseline mode eksekusi pada `exercises/answer-keys/README.md`.

### Validation
- Snippet Level 3 topik 07 diverifikasi menghasilkan `X-BASE-CHILD` lalu `TypeError` pada detached call.

## 2026-03-06 - v0.3.2

### Added
- Menambahkan folder kunci jawaban terpisah:
- `exercises/answer-keys/README.md`
- `exercises/answer-keys/01-closure-behavior-drills-answer-key.md`
- `exercises/answer-keys/02-this-binding-edge-cases-answer-key.md`
- `exercises/answer-keys/03-async-order-drills-answer-key.md`
- `exercises/answer-keys/04-object-mutation-drills-answer-key.md`
- `exercises/answer-keys/05-promise-error-propagation-drills-answer-key.md`
- `exercises/answer-keys/06-event-loop-batching-starvation-drills-answer-key.md`
- `exercises/answer-keys/07-prototype-class-runtime-drills-answer-key.md`
- `exercises/answer-keys/08-integrative-runtime-debugging-drills-answer-key.md`

### Changed
- Memperbarui `exercises/README.md` dengan rujukan `answer-keys/` dan workflow pemakaian setelah self-attempt.

### Validation
- Delapan answer key telah disinkronkan dengan topik `01` sampai `08`.

## 2026-03-06 - v0.3.1

### Changed
- Merapikan progression kesulitan pada seluruh topik latihan (`01`-`08`) menjadi tiga level: dasar, menengah, lanjutan.
- Menstandarkan format tugas dan checkpoint agar evaluasi hasil latihan konsisten lintas topik.

### Validation
- Delapan file latihan telah diverifikasi memiliki struktur `Level 1`, `Level 2`, dan `Level 3`.

## 2026-03-06 - v0.3.0

### Added
- Menambahkan topik baru:
- `exercises/05-promise-error-propagation-drills.md`
- `exercises/06-event-loop-batching-starvation-drills.md`
- `exercises/07-prototype-class-runtime-drills.md`
- `exercises/08-integrative-runtime-debugging-drills.md`

### Changed
- Memperluas scope buku 06 dari 4 menjadi 8 topik runtime exercises.
- Memperbarui `README.md` agar urutan belajar mengarah ke paket 8 topik.
- Memperbarui `exercises/README.md` dan `docs/learning-path.md` agar sinkron dengan 8 topik aktif.

### Validation
- Struktur topik aktif di folder `exercises/` telah diverifikasi berjumlah 8 file.
- Link lokal pada area aktif buku 06 tetap valid setelah penambahan topik.

### Notes
- Buku 06 siap dipakai sebagai paket latihan runtime bertahap dari konsep tunggal ke debugging integratif.

## 2026-03-06 - v0.2.0

### Added
- Menambahkan dokumen prasyarat aktif:
- `PRASYARAT-DAN-KAMUS-MINI.md`
- Menambahkan dokumen learning path:
- `docs/learning-path.md`

### Changed
- Menormalkan `README.md` buku 06 agar `exercises/` + `docs/` menjadi rute belajar utama.
- Memperbarui `exercises/README.md` menjadi index aktif berbasis workflow drill.
- Menghapus narasi status migrasi yang sudah tidak relevan.

### Removed
- Menghapus artefak migrasi sementara:
- `migrated-from-03-advanced-patterns/`
- `migrated-from-04-exercises-katas/`

### Validation
- Link lokal area aktif buku 06 (`README + PRASYARAT + docs + exercises`) telah diverifikasi dan valid.

### Notes
- Buku 06 siap dipakai untuk penguatan runtime berbasis drill sebelum masuk companion specification.

