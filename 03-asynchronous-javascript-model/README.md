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

## Out of Scope
- Distributed systems concurrency detail.
- Framework async abstraction spesifik.

## Output
- Kumpulan eksperimen urutan eksekusi async + penjelasan sebab-akibat.

## Struktur Konten
- `topics/`: materi async model hasil normalisasi awal.
- `migrated-from-02-first-principles/`: sumber migrasi tahap 1.

## Exit Criteria
- Bisa memprediksi output async umum sebelum menjalankan kode.
- Bisa menjelaskan perbedaan task queue vs microtask queue secara praktis.

## Status Migrasi
- `in_progress`
- Konten baseline async sudah masuk ke `topics/`.
- Tahap berikutnya: tambah drills khusus queue ordering.
