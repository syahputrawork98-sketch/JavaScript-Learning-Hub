# Asynchronous JavaScript Dasar

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/promise-vs-timer-order-map.svg`](../assets/promise-vs-timer-order-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`1` pada Track 03.
- Prasyarat langsung: `../../02-javascript-runtime-first-principles/topics/08-call-stack-web-apis-queues.md`.
- Lanjut setelah ini: `02-promise-async-await.md`.

Prasyarat topik:
- Sudah paham function dasar.
- Sudah paham Promise secara gambaran umum (minimal pernah lihat).

Referensi remedial:
- [`../../02-javascript-runtime-first-principles/docs/prasyarat/function-dasar.md`](../../02-javascript-runtime-first-principles/docs/prasyarat/function-dasar.md)
- [`../../02-javascript-runtime-first-principles/docs/prasyarat/promise-dasar.md`](../../02-javascript-runtime-first-principles/docs/prasyarat/promise-dasar.md)

Kamus mini topik:
- `[baru]` Synchronous: kode berjalan baris demi baris, tunggu satu selesai baru lanjut.
- `[baru]` Asynchronous: pekerjaan tertentu dijadwalkan, alur utama bisa lanjut dulu.
- `[baru]` Call stack: tempat eksekusi function aktif.
- `[baru]` Task queue (macrotask): antrean callback seperti `setTimeout`.
- `[baru]` Microtask queue: antrean prioritas lebih tinggi, contoh callback Promise.
- `[baru]` Event loop: mekanisme yang memindahkan tugas antrean ke call stack saat stack kosong.
- `[ulang]` Callback: function yang dipanggil setelah proses lain selesai.

## Pengantar Singkat Topik
Asynchronous JavaScript membahas cara program menangani pekerjaan lambat tanpa memblokir alur utama. Intinya ada pada call stack, queue, dan event loop yang menentukan urutan eksekusi nyata di runtime.

## 1) Big Picture
Pada kode asynchronous, output sering terlihat "acak" karena urutan tulis kode berbeda dari urutan eksekusi runtime. Topik ini menjelaskan peran call stack, task queue, microtask queue, dan event loop agar alur sync-async bisa diprediksi dengan tepat. Setelah paham, kamu bisa memutuskan pola penulisan async yang aman, menghindari asumsi urutan yang salah, dan melakukan debug timing issue lebih cepat.

## 2) Small Picture
1. Kode synchronous masuk call stack dan dieksekusi langsung.
2. Operasi async (misalnya `setTimeout`, Promise) dijadwalkan di luar call stack.
3. Saat call stack kosong, event loop mengecek microtask queue dulu.
4. Jika microtask kosong, baru ambil task dari task queue.
5. Urutan ini berulang terus selama program berjalan.

## 3) Wireframe
```text
Alur utama:
[Sync code jalan] -> [async dijadwalkan] -> [event loop kelola antrean]

Alur jalan:
[Call stack kosong] -> [microtask dieksekusi dulu] -> [task queue dieksekusi setelahnya]

Alur error:
[asumsi setTimeout(0) pasti paling cepat] -> [urutan output salah prediksi] -> [bug alur UI]
```

## 4) Analogi
Bayangkan kasir dengan dua antrean:
- Antrean prioritas = microtask.
- Antrean reguler = task queue.
Kasir selalu habiskan antrean prioritas dulu, baru lanjut ke reguler.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: request data, timer, I/O, dan alur non-blocking.
- Alasan pakai: aplikasi tetap responsif sambil menunggu pekerjaan lambat selesai.
- Kapan tidak dipakai: jangan pakai async jika problem sangat sederhana dan synchronous lebih jelas.

## 6) Contoh Sederhana
```js
console.log('A');

setTimeout(() => {
  console.log('B - timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('C - promise');
});

console.log('D');
```

### Bedah Output (Langkah Demi Langkah)
1. `console.log('A')` langsung jalan -> cetak `A`.
2. Callback `setTimeout` didaftarkan ke timer/Web API dulu, bukan langsung masuk call stack.
3. `Promise.then` masuk microtask queue.
4. `console.log('D')` langsung jalan -> cetak `D`.
5. Call stack kosong, event loop cek microtask dulu -> cetak `C - promise`.
6. Setelah waktu timer siap, callback `setTimeout` masuk task queue.
7. Setelah microtask habis, event loop ambil task queue -> cetak `B - timeout`.
8. Urutan akhir: `A`, `D`, `C - promise`, `B - timeout`.

## 7) Jebakan Umum
- Mengira `setTimeout(..., 0)` berarti dijalankan "sekarang juga".
- Lupa bahwa Promise callback dieksekusi sebelum callback `setTimeout`.
- Menumpuk callback bersarang tanpa struktur sehingga sulit debug.

## 8) Prediksi Output Drill
```js
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

### Kunci Jawaban Drill
- Urutan output: `1`, `4`, `3`, `2`
- Alasan:
  - `1` dan `4` synchronous.
  - `3` dari microtask (Promise) dieksekusi sebelum task queue.
  - `2` dari `setTimeout` dieksekusi setelah microtask selesai.

## 9) Debug Story
Kasus: loading indicator mati terlalu cepat sebelum data tampil.
Langkah debug:
1. Cek apakah `hideLoading()` dipanggil sebelum Promise selesai.
2. Pindahkan `hideLoading()` ke dalam `.then(...)` atau setelah `await`.
3. Pastikan error path (`catch`) juga mematikan loading agar state UI konsisten.

## 10) Checkpoint
- [ ] Bisa jelaskan beda call stack, task queue, dan microtask queue.
- [ ] Bisa memprediksi urutan output contoh async sederhana.
- [ ] Bisa menjelaskan kenapa Promise callback sering lebih dulu dari `setTimeout`.

## Jika Masih Bingung, Baca Ini Dulu
1. Jalankan ulang contoh sambil tulis urutan antrean di kertas.
2. Fokus satu rule penting: microtask selalu dicek sebelum task queue.
3. Ulangi sampai bisa memprediksi tanpa mengeksekusi kode.


