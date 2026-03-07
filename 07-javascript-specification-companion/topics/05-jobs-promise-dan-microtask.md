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

## Workflow Baca (Topik Ini)
1. Baca model Jobs/Job Queues sebagai istilah normatif spec.
2. Lihat bagaimana Promise reaction menghasilkan job lanjutan.
3. Bedakan model spec dengan terminologi host runtime (microtask/task).
4. Validasi dengan snippet Promise + timer.

## Contoh Mapping Praktik
- Callback `.then(...)` dijadwalkan sebagai Promise reaction job.
- Job queue Promise diproses sebelum host melanjutkan task berikutnya.
- `await` melanjutkan eksekusi function melalui job lanjutan.

## Mini Mapping Contoh
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```
Cara baca:
1. Identifikasi bagian sync terlebih dulu.
2. Petakan `then` sebagai Promise reaction job.
3. Petakan timer sebagai host task.
4. Cocokkan urutan output dengan model job + host scheduling.

## Checkpoint
- [ ] Bisa membedakan istilah normatif spec vs istilah host queue.
- [ ] Bisa menjelaskan kenapa Promise callback biasanya muncul sebelum timer 0ms.
- [ ] Bisa mengaitkan `await` dengan job lanjutan di spec.

## Jebakan Umum
- Mengira `setTimeout(..., 0)` akan mengalahkan callback Promise.
- Mencampur istilah host queue (microtask/task) dengan istilah normatif spec tanpa pemetaan job model.
