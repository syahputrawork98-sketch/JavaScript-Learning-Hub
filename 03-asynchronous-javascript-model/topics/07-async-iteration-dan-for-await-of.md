# Async Iteration dan for-await-of

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Remedial async/await: [`02-promise-async-await.md`](./02-promise-async-await.md)

Alur topik:
- Topik ini ada di urutan ke-`7` pada Track 03.
- Prasyarat langsung: `06-cancellation-timeout-dan-retry-strategy.md`.
- Lanjut setelah ini: `08-async-architecture-dan-anti-patterns.md`.

Prasyarat topik:
- Sudah paham Promise dan `async/await`.
- Sudah paham urutan event loop dasar.

Referensi remedial:
- [`03-event-loop-detail.md`](./03-event-loop-detail.md)
- [`05-concurrency-patterns.md`](./05-concurrency-patterns.md)

Kamus mini topik:
- `[baru]` Iterator: objek yang menyediakan item bertahap.
- `[baru]` Async iterator: iterator yang mengembalikan Promise di setiap langkah.
- `[baru]` `for await...of`: loop untuk konsumsi async iterable.
- `[baru]` Stream-like flow: data datang bertahap, bukan sekaligus.
- `[ulang]` Backpressure: konsumsi data lebih lambat dari produksi data.

## Pengantar Singkat Topik
Topik ini menjelaskan cara memproses data async bertahap secara rapi tanpa callback nesting dan tanpa memaksa semua data selesai dulu.

## 1) Big Picture
Tidak semua async cocok dengan `Promise.all`. Untuk data yang datang per potongan (chunk/event/page), async iteration memberi model yang lebih natural. `for await...of` membantu menjaga flow tetap linear sekaligus non-blocking.

## 2) Small Picture
1. Sumber data expose async iterator.
2. Tiap iterasi mengembalikan Promise `{ value, done }`.
3. `for await...of` menunggu item satu per satu.
4. Error di satu iterasi bisa di-handle di level loop.
5. Cocok untuk paging, stream, atau queue consumer.

## 3) Wireframe
```text
Alur utama:
[async iterable source] -> [for await...of] -> [process per item]

Alur jalan:
[item datang bertahap] -> [diproses incremental] -> [memori lebih stabil]

Alur error:
[anggap semua data sekaligus] -> [buffer besar/latency tinggi] -> [flow berat]
```

## 4) Analogi
Seperti membaca email satu per satu dari inbox real-time, bukan menunggu semua email dunia terkumpul dulu.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: pagination API, stream, consumer queue, batch processing bertahap.
- Alasan pakai: kontrol memori lebih baik dan error handling lebih granular.
- Kapan tidak dipakai: jika data kecil dan butuh semua sekaligus, loop async iterator bisa overkill.

## 6) Contoh Sederhana
```js
async function* source() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

(async () => {
  for await (const n of source()) {
    console.log(n);
  }
})();
```

### Bedah Output (Langkah Demi Langkah)
1. `source()` mengembalikan async generator.
2. `for await...of` meminta item pertama lalu `await` hasilnya.
3. Setiap item diproses berurutan: `1`, `2`, `3`.
4. Loop berhenti saat `done: true`.
5. Tidak perlu menunggu semua item tersedia sejak awal.

## 7) Jebakan Umum
- Pakai `for...of` biasa untuk async iterator.
- Tidak menangani error di dalam loop panjang.
- Memproses item terlalu berat tanpa batching.
- Tidak mempertimbangkan cancellation di consumer loop.

## 8) Prediksi Output Drill
```js
async function* gen() {
  yield 10;
  yield 20;
}

(async () => {
  let sum = 0;
  for await (const n of gen()) {
    sum += n;
  }
  console.log(sum);
})();
```

### Kunci Jawaban Drill
- Output: `30`
- Alasan: loop mengiterasi dua nilai (`10`, `20`) lalu menjumlahkannya.

## 9) Debug Story
Kasus: worker memproses event queue terlalu lambat dan memory naik.
Langkah debug:
1. Cek apakah data dibuffer sekaligus sebelum proses.
2. Ubah ke model konsumsi bertahap dengan async iterator.
3. Tambahkan batching kecil agar throughput stabil.
4. Tambahkan mekanisme stop/cancel jika consumer tertinggal.

## 10) Checkpoint
- [ ] Bisa menjelaskan beda Promise list vs async iterable.
- [ ] Bisa menggunakan `for await...of` untuk konsumsi data bertahap.
- [ ] Bisa mengidentifikasi risiko backpressure sederhana.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `02-promise-async-await.md`.
2. Coba ubah array Promise menjadi async generator kecil.
3. Bandingkan pola `Promise.all` vs `for await...of`.
