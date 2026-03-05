# 02 - JavaScript Runtime First Principles

Track ini fokus membangun mental model tentang bagaimana JavaScript dieksekusi oleh engine.

## Tujuan
- Memahami execution context, lexical environment, scope, closure, hoisting, dan `this` binding.
- Memahami call stack dan memory model dasar.
- Mampu menjelaskan sebab-akibat perilaku runtime kode.

## Scope
- Execution Context
- Lexical Environment
- Scope
- Closures
- Hoisting
- `this` binding
- Call Stack
- Memory model (high-level)

## Out of Scope
- Framework/library spesifik.
- Optimasi engine level yang terlalu rendah.

## Output
- Catatan konsep runtime inti + contoh eksperimen kecil.

## Struktur Konten
- `topics/`: materi normalisasi utama track 02.
- `docs/`: dokumen pendukung track (learning path, catatan).
- `migrated-from-02-first-principles/`: salinan sumber migrasi tahap 1 (traceability).
- `legacy-snapshot-from-02-first-principles/`: snapshot penuh legacy untuk safety sebelum dekomisioning folder lama.

## Exit Criteria
- Bisa menjelaskan alur eksekusi kode sync secara internal.
- Bisa menganalisis bug dasar terkait scope/closure/hoisting/`this`.

## Status Migrasi
- `in_progress`
- Tahap 1 copy + normalisasi awal (`topics/`) sudah selesai.
- Boundary map antar track sudah ditetapkan di `docs/boundary-map.md`.
- Snapshot penuh legacy sudah diamankan untuk mencegah kehilangan artefak.
