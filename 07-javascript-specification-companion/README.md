# 07 - JavaScript Specification Companion

Track ini menjadi companion untuk menghubungkan konsep belajar dengan ECMAScript specification.

## Tujuan
- Membiasakan membaca istilah formal dalam spesifikasi.
- Menghubungkan konsep praktik dengan definisi formalnya.
- Menurunkan gap antara penjelasan tutorial dan bahasa normatif spec.

## Scope
- Mapping concept -> spec section
- Glossary istilah formal yang relevan
- Guided reading notes per topik
- Strategi membaca abstract operation tanpa tersesat detail editorial

## Out of Scope
- Membahas semua clause spec secara lengkap.
- Detail editorial/legal di luar kebutuhan belajar.
- Implementasi engine internal non-standar.

## Output
- Catatan companion yang membantu navigasi ke spesifikasi resmi.

## Struktur Konten
- `topics/`: peta konsep ke section spesifikasi.
- `docs/`: jalur belajar dan strategi membaca spec.
- `assets/`: visual map untuk alur baca dan model formal spec.

## Visualisasi Konsep
- `assets/spec-reading-workflow-map.svg`: alur membaca spec dari konsep ke validasi runtime.
- `assets/type-conversion-coercion-map.svg`: peta alur coercion dan abstract operation konversi.
- `assets/jobs-promise-queue-map.svg`: peta model jobs, promise reaction, dan host task queue.
- `assets/completion-record-flow-map.svg`: peta normal vs abrupt completion pada algoritme spec.

## Referensi Utama
- ECMAScript specification: `https://tc39.es/ecma262/`

## Mulai Belajar
1. Buka `PRASYARAT-DAN-KAMUS-MINI.md`.
2. Ikuti urutan di `docs/learning-path.md`.
3. Gunakan `topics/README.md` untuk navigasi cepat per konsep.

## Exit Criteria
- Bisa menemukan section spec relevan untuk konsep yang dipelajari.
- Bisa membedakan istilah pedagogis vs istilah normatif di spec.
- Bisa membaca alur abstract operation sederhana tanpa kehilangan konteks.
- Bisa menghubungkan bug runtime nyata ke istilah formal spec.

## Boundary ke Track Lain
- Runtime first principles: `../02-javascript-runtime-first-principles/topics/`
- Async model: `../03-asynchronous-javascript-model/topics/`
- Object model: `../04-javascript-object-model/topics/`
- Memory and references: `../05-javascript-memory-and-references/topics/`
- Runtime drills: `../06-javascript-runtime-exercises/exercises/`
