# 07 JavaScript Specification Companion

## 2026-03-08 - v0.3.1

### Changed
- Menyelaraskan wording scope di `README.md` agar status guided reading lebih presisi (`bertahap`).
- Memperjelas label mapping function objects di `topics/04-this-binding-call-dan-function-object.md`.
- Menormalkan phrasing di `topics/05-jobs-promise-dan-microtask.md` agar konsisten dengan istilah normatif spec vs istilah host queue.
- Memperdalam `topics/01-cara-membaca-ecmascript-spec.md` dengan workflow baca, mini mapping contoh, dan checkpoint.
- Menormalkan `topics/02` sampai `topics/08` ke format yang setara dengan topik 01 (workflow baca, mini mapping, checkpoint, jebakan umum).

### Notes
- Perubahan ini adalah quality pass editorial untuk mengurangi potensi miskonsepsi saat membaca ECMAScript spec.

## 2026-03-06 - v0.3.0

### Added
- Menambahkan folder visualisasi:
- `assets/`
- Menambahkan aset SVG:
- `assets/spec-reading-workflow-map.svg`
- `assets/type-conversion-coercion-map.svg`
- `assets/jobs-promise-queue-map.svg`
- `assets/completion-record-flow-map.svg`

### Changed
- Memperbarui `README.md` buku 07 dengan section visualisasi konsep spec companion.

### Validation
- Seluruh aset SVG buku 07 telah divalidasi XML parse dan valid.

## 2026-03-06 - v0.2.0

### Added
- Menambahkan dokumen prasyarat aktif:
- `PRASYARAT-DAN-KAMUS-MINI.md`
- Menambahkan dokumen learning path:
- `docs/learning-path.md`
- Menambahkan index topik:
- `topics/README.md`
- Menambahkan topik companion aktif:
- `topics/01-cara-membaca-ecmascript-spec.md`
- `topics/02-language-types-values-dan-coercion.md`
- `topics/03-environment-record-scope-dan-closure.md`
- `topics/04-this-binding-call-dan-function-object.md`
- `topics/05-jobs-promise-dan-microtask.md`
- `topics/06-object-property-dan-prototype-internals.md`
- `topics/07-iteration-protocol-dan-async-function-flow.md`
- `topics/08-completion-record-dan-abrupt-completion.md`

### Changed
- Menormalkan `README.md` buku 07 agar `topics/` + `docs/` menjadi rute belajar utama.
- Menghapus narasi migrasi bertahap dan menggantinya dengan status aktif siap pakai.

### Validation
- Link lokal area aktif buku 07 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.

### Notes
- Buku 07 siap dipakai sebagai companion formal untuk memperkuat reasoning lintas buku 02-06.


