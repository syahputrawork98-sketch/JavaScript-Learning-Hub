# 08 - JavaScript Engine Internals

Buku ini fokus memahami bagaimana JavaScript engine memproses, mengeksekusi, dan mengoptimasi kode di level internal.

## Tujuan
- Memahami alur parse -> AST -> bytecode -> execution.
- Memahami konsep JIT compilation, optimization, dan deoptimization secara praktis.
- Mampu menghubungkan perilaku runtime dengan keputusan engine.

## Scope
- Parsing
- Abstract Syntax Tree (AST)
- Bytecode
- Interpreter vs JIT compilation
- Hidden classes (shape)
- Inline caching
- Optimization dan deoptimization
- Garbage collection (engine-level mental model)
- Profiling dasar dan membaca sinyal performa

## Out of Scope
- Implementasi detail engine per bahasa C++.
- Reverse engineering internal privat yang tidak terdokumentasi.

## Output
- Materi engine internals + eksperimen kecil yang menghubungkan kode JavaScript dengan perilaku performa.

## Struktur Konten
- `topics/`: materi utama yang dipakai belajar.
- `docs/`: jalur belajar dan catatan pendukung.
- `assets/`: visualisasi pipeline engine dan optimasi.

## Mulai Belajar
1. Buka `docs/learning-path.md`.
2. Ikuti urutan di `topics/README.md`.
3. Hubungkan dengan buku 02 dan 05 saat membahas execution dan memory behavior.

## Exit Criteria
- Bisa menjelaskan pipeline eksekusi kode JavaScript di engine modern.
- Bisa menjelaskan penyebab umum optimization/deoptimization.
- Bisa membaca temuan profiling dasar untuk investigasi performa.

