# 03 - Asynchronous JavaScript Model

Buku ini fokus pada model asynchronous JavaScript agar urutan eksekusi async bisa diprediksi dengan tepat.

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
- Cancellation, Timeout, dan Retry Strategy
- Async Iteration (`for await...of`)
- Async Architecture dan Anti-Patterns production
- Bounded Concurrency dan Pool Pattern
- Async Observability dan Debugging Strategy

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

- `assets/cancellation-timeout-retry-map.svg`: peta keputusan cancellation, timeout, dan retry.
- `assets/async-iteration-flow-map.svg`: peta alur async iterable dan `for await...of`.
- `assets/async-architecture-anti-patterns-map.svg`: peta arsitektur async sehat vs anti-pattern.
- `assets/bounded-concurrency-pool-map.svg`: peta worker pool dan bounded concurrency.
- `assets/async-observability-debugging-map.svg`: peta strategi observability dan debugging async.

## Mulai Belajar
1. Buka `docs/learning-path.md`.
2. Ikuti urutan di `topics/README.md`.
3. Gunakan drill async di buku 06 setelah menyelesaikan topik 10.

## Exit Criteria
- Bisa memprediksi output async umum sebelum menjalankan kode.
- Bisa menjelaskan perbedaan task queue vs microtask queue secara praktis.
- Bisa memilih pola orchestration async yang tepat (sequential vs parallel).
- Bisa menerapkan bounded concurrency dasar dan observability async sederhana.


