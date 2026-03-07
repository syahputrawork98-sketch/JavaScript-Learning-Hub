# 02 - JavaScript Runtime First Principles

Buku ini fokus membangun mental model tentang bagaimana JavaScript dieksekusi oleh engine.

## Tujuan
- Memahami execution context, lexical environment, scope, closure, hoisting, dan `this` binding.
- Memahami call stack dan memory model dasar.
- Mampu menjelaskan sebab-akibat perilaku runtime kode.

## Scope
- Values, Types, dan Coercion
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
- `topics/`: materi utama buku 02.
- `docs/`: dokumen pendukung buku (learning path, catatan).
- `assets/`: visualisasi konsep runtime untuk pembaca pemula.

## Visualisasi Konsep
- `assets/execution-context-lifecycle-map.svg`: peta creation phase -> execution phase.
- `assets/call-stack-web-api-queue-map.svg`: peta call stack, host/runtime APIs, queue handoff.
- `assets/scope-chain-lookup-map.svg`: peta pencarian identifier dari local -> outer -> global.
- `assets/lexical-environment-environment-record-map.svg`: peta environment record, outer reference, dan identifier lookup.
- `assets/memory-model-high-level-map.svg`: peta primitive copy vs reference sharing pada memory model high-level.

## Mulai Belajar
1. Buka `docs/learning-path.md`.
2. Ikuti urutan di `topics/README.md`.
3. Gunakan `docs/boundary-map.md` saat topik mulai overlap ke buku 03/04/05.

## Exit Criteria
- Bisa menjelaskan alur eksekusi kode sync secara internal.
- Bisa menganalisis bug dasar terkait scope/closure/hoisting/`this`.
- Bisa menjelaskan perilaku primitive vs reference pada level high-level.

