# Event Loop Detail

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`3` pada Internals.
- Prasyarat langsung: `02-call-stack-web-apis-queues.md`.
- Lanjut setelah ini: `04-scope-chain-lookup.md`.

Prasyarat topik:
- Sudah paham hubungan call stack, Web APIs, dan queue handoff.
- Sudah paham Promise dan `setTimeout` dasar.

Referensi remedial:
- [`02-call-stack-web-apis-queues.md`](./02-call-stack-web-apis-queues.md)
- [`../foundations/06-async-javascript-dasar.md`](../foundations/06-async-javascript-dasar.md)
- [`../advanced/04-promise-async-await.md`](../advanced/04-promise-async-await.md)

Kamus mini topik:
- `[baru]` Tick: satu putaran pengambilan kerja oleh event loop.
- `[baru]` Microtask starvation: kondisi microtask terus terisi sehingga task lain tertunda.
- `[baru]` Render opportunity: momen runtime/browser berpeluang melakukan render setelah antrean tertentu selesai.
- `[baru]` Scheduling fairness: keseimbangan agar semua jenis antrean tetap dapat jatah eksekusi.
- `[ulang]` Microtask queue: antrean prioritas tinggi (Promise jobs, dll).

## Pengantar Singkat Topik
Event loop detail membahas aturan prioritas dan timing yang lebih halus saat runtime memilih kerja berikutnya. Topik ini membantu membaca kenapa Promise callbacks sering menang prioritas terhadap timer callback.

## 1) Big Picture
Masalah umum di kode async bukan cuma "urutan salah", tetapi starvation dan delay karena prioritas antrean tidak dipahami dengan tepat. Topik ini menjelaskan bagaimana event loop memproses microtask dan task per tick, termasuk dampaknya ke rendering dan responsivitas. Setelah paham, kamu bisa memutuskan strategi scheduling yang lebih adil, menghindari chain microtask berlebihan, dan mendiagnosis lag dengan lebih sistematis.

## 2) Small Picture
1. Satu tick event loop memilih task yang siap dieksekusi saat stack kosong.
2. Setelah task selesai, runtime menghabiskan microtask queue sampai kosong.
3. Jika microtask menambahkan microtask baru terus-menerus, antrean task lain bisa tertunda (starvation).
4. Setelah microtask drain, runtime dapat memberi kesempatan render (di browser).
5. Siklus ini berulang pada tick berikutnya.

## 3) Wireframe
```text
Alur utama:
[task masuk stack] -> [task selesai] -> [microtask drain] -> [render opportunity] -> [tick berikutnya]

Alur jalan:
[Promise resolve] -> [callback ke microtask] -> [dieksekusi sebelum timer task]

Alur error:
[chain microtask tanpa batas] -> [task/render tertunda] -> [UI lag / starvation]
```

## 4) Analogi
Bayangkan loket layanan:
- Task queue = antrean umum.
- Microtask queue = antrean prioritas.
Setiap kali loket selesai melayani satu orang dari antrean umum, loket wajib habiskan semua antrean prioritas dulu. Kalau antrean prioritas terus bertambah, antrean umum jadi lama menunggu.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: debug urutan Promise vs timer, analisis UI lag, dan desain callback scheduling.
- Alasan pakai: memberi kontrol mental model saat memilih antara microtask-heavy flow dan task-based yielding.
- Kapan tidak dipakai: hindari over-optimasi scheduling jika bottleneck utama justru operasi CPU berat murni.

## 6) Contoh Sederhana
```js
console.log('S');

setTimeout(() => console.log('T'), 0);

Promise.resolve()
  .then(() => console.log('P1'))
  .then(() => console.log('P2'));

console.log('E');
```

### Bedah Output (Langkah Demi Langkah)
1. `S` dan `E` dieksekusi sinkron di call stack.
2. Timer callback `T` masuk task queue.
3. `Promise.then` mendaftarkan `P1` ke microtask queue.
4. Setelah stack kosong, event loop menjalankan microtask dulu: `P1`, lalu `P2`.
5. Setelah microtask drain selesai, baru task timer `T` dijalankan.

## 7) Jebakan Umum
- Mengira `setTimeout(..., 0)` akan menang dari Promise callbacks.
- Membuat rantai `then` panjang tanpa jeda sehingga task/render tertunda.
- Menyamakan perilaku semua runtime tanpa cek detail environment.

## 8) Prediksi Output Drill
```js
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => {
  console.log('C');
  Promise.resolve().then(() => console.log('D'));
});

console.log('E');
```

### Kunci Jawaban Drill
- Urutan output: `A`, `E`, `C`, `D`, `B`
- Alasan: seluruh microtask (`C`, lalu `D`) harus habis dulu sebelum task timer `B`.

## 9) Debug Story
Kasus: tombol terasa lambat merespons saat aplikasi melakukan chain Promise panjang.
Langkah debug:
1. Cek apakah ada loop/chain yang terus menambah microtask tanpa yielding.
2. Tambahkan pemecahan batch agar sebagian kerja dipindah ke task berikutnya.
3. Ukur ulang dengan timestamp per fase (sync, microtask, task).
4. Validasi apakah render frame kembali stabil setelah perubahan scheduling.

## 10) Checkpoint
- [ ] Bisa menjelaskan prioritas microtask vs task dalam satu tick.
- [ ] Bisa memprediksi urutan output kombinasi Promise dan `setTimeout`.
- [ ] Bisa mengidentifikasi gejala microtask starvation sederhana.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `internals/02-call-stack-web-apis-queues.md`.
2. Ulangi contoh dengan menambah satu `then` baru setiap langkah.
3. Bandingkan hasil saat sebagian kerja dipindah dari Promise ke timer task.
