# 03 - Asynchronous JavaScript Model

Track ini fokus pada model asynchronous JavaScript agar urutan eksekusi async bisa diprediksi dengan tepat.

## Tujuan
- Memahami event loop, queue, Promise, dan `async/await`.
- Mampu memprediksi urutan eksekusi async secara deterministik.

## Scope
- Event Loop
- Task Queue
- Microtask Queue
- Job Queue
- Promises
- Async/Await
- Async Error Handling
- Concurrency Patterns (`all`, `allSettled`, `race`, `any`)

## Out of Scope
- Distributed systems concurrency detail.
- Framework async abstraction spesifik.

## Output
- Kumpulan eksperimen urutan eksekusi async + penjelasan sebab-akibat.

## Struktur Konten
- `topics/`: materi utama yang dipakai belajar.
- `docs/`: jalur belajar dan catatan pendukung.
- `assets/`: visualisasi async flow untuk memperkuat mental model.

## Visualisasi Konsep
- `assets/event-loop-flow-map.svg`: peta alur event loop per tick.
- `assets/promise-vs-timer-order-map.svg`: peta urutan Promise vs `setTimeout`.
- `assets/sequential-vs-parallel-map.svg`: peta keputusan sequential vs parallel async.
- `assets/error-handling-async-map.svg`: peta strategi penanganan error async berlapis.
- `assets/concurrency-patterns-map.svg`: peta pemilihan `all`, `allSettled`, `race`, `any`.

## Mulai Belajar
1. Buka `docs/learning-path.md`.
2. Ikuti urutan di `topics/README.md`.
3. Gunakan drill async di track 06 setelah menyelesaikan topik 05.

## Exit Criteria
- Bisa memprediksi output async umum sebelum menjalankan kode.
- Bisa menjelaskan perbedaan task queue vs microtask queue secara praktis.
- Bisa memilih pola orchestration async yang tepat (sequential vs parallel).
