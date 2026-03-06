# 05 - Jobs, Promise, dan Microtask

## Tujuan
Menghubungkan urutan async runtime dengan model job queue di spec.

## Fokus Istilah
- Job
- Job Queue
- Promise reaction job
- Host hooks

## Mapping ke Spec
- Jobs and Job Queues: `https://tc39.es/ecma262/#sec-jobs-and-job-queues`
- Promise Objects: `https://tc39.es/ecma262/#sec-promise-objects`

## Contoh Mapping Praktik
- Callback `.then(...)` dijadwalkan sebagai Promise reaction job.
- Microtask queue dikosongkan sebelum host lanjut ke macrotask berikutnya.
- `await` melanjutkan eksekusi function melalui job lanjutan.

## Jebakan Umum
- Mengira `setTimeout(..., 0)` akan mengalahkan callback Promise.
- Menyamakan istilah microtask browser dengan wording spec tanpa pemetaan job model.
