# 06 - JavaScript Runtime Exercises

Buku ini fokus penguatan lewat eksperimen runtime terstruktur.

## Tujuan
- Menguji mental model runtime dengan latihan yang menantang.
- Membiasakan reasoning berbasis observasi output.

## Scope
- Closure behavior drills
- `this` binding edge cases
- Async execution order drills
- Object mutation behavior drills
- Promise error propagation drills
- Event loop batching and starvation drills
- Prototype and class runtime behavior drills
- Integrative runtime debugging drills

## Out of Scope
- Teori panjang tanpa eksperimen kode.

## Output
- Paket latihan runtime dengan checkpoint anti-regresi.

## Struktur Konten
- `exercises/`: bank latihan runtime terstruktur.
- `docs/`: jalur belajar dan catatan pendukung.
- `assets/`: visual map untuk pola runtime yang paling sering bikin salah prediksi.

## Visualisasi Konsep
- `assets/this-binding-callsite-map.svg`: peta aturan `this` berbasis call-site.
- `assets/event-loop-order-map.svg`: peta urutan sync, microtask, dan macrotask.
- `assets/mutation-reference-sharing-map.svg`: peta kebocoran mutasi akibat shared reference.
- `assets/promise-error-flow-map.svg`: peta propagasi error pada Promise chain.

## Exit Criteria
- Konsisten menyelesaikan drill dengan alasan teknis yang benar.
- Mampu menjelaskan kenapa jawaban salah sebelumnya bisa terjadi.

## Mulai Belajar
1. Buka `PRASYARAT-DAN-KAMUS-MINI.md`.
2. Ikuti urutan latihan di `docs/learning-path.md`.
3. Gunakan `exercises/README.md` sebagai index navigasi cepat.

## Boundary ke Buku Lain
- Fondasi runtime sinkron: `../02-javascript-runtime-first-principles/topics/`
- Model asynchronous: `../03-asynchronous-javascript-model/topics/`
- Model object/prototype/reference: `../04-javascript-object-model/topics/` dan `../05-javascript-memory-and-references/topics/`

