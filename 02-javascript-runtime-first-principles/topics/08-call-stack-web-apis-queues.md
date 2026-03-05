# Call Stack, Web APIs, dan Queues
## Metadata Migrasi
- Status: `normalized`
- Source: `02-javascript-first-principles (decommissioned legacy source)`
- Boundary:
  - Async queue detail -> ../../03-asynchronous-javascript-model/topics/
  - Object/prototype detail -> ../../04-javascript-object-model/topics/
  - Memory/reference detail -> ../../05-javascript-memory-and-references/topics/

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/call-stack-web-api-queue-map.svg`](../assets/call-stack-web-api-queue-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`2` pada Internals.
- Prasyarat langsung: `07-execution-context-lifecycle.md`.
- Lanjut setelah ini: `09-scope-chain-lookup.md`.

Prasyarat topik:
- Sudah paham lifecycle execution context.
- Sudah paham async dasar (`task queue`, `microtask queue`) pada level Foundations.

Referensi remedial:
- [`07-execution-context-lifecycle.md`](./07-execution-context-lifecycle.md)
- [`../../03-asynchronous-javascript-model/topics/01-async-javascript-dasar.md`](../../03-asynchronous-javascript-model/topics/01-async-javascript-dasar.md)

Kamus mini topik:
- `[baru]` Stack frame: satu unit eksekusi function di call stack.
- `[baru]` Run-to-completion: satu frame harus selesai sebelum frame berikutnya diproses.
- `[baru]` Web APIs: fasilitas environment (browser/runtime) untuk operasi async seperti timer/network.
- `[baru]` Queue handoff: pemindahan callback dari API/queue ke call stack saat syarat terpenuhi.
- `[ulang]` Call stack: struktur LIFO tempat function aktif dieksekusi.

## Pengantar Singkat Topik
Topik ini membahas interaksi antara call stack, Web APIs, dan antrean callback di runtime JavaScript. Fokusnya adalah memahami kapan callback benar-benar bisa dieksekusi, bukan sekadar kapan callback didaftarkan.

## 1) Big Picture
Kebanyakan bug async muncul karena asumsi "callback langsung jalan" padahal call stack masih sibuk atau callback masih menunggu handoff dari API/queue. Topik ini menjelaskan alur mekanis dari pemanggilan function sinkron, pendaftaran operasi async di Web APIs, sampai callback kembali masuk ke stack. Setelah paham, kamu bisa membuat keputusan desain alur async yang lebih tepat dan memprediksi urutan eksekusi dengan lebih akurat.

## 2) Small Picture
1. Kode sync dieksekusi di call stack berdasarkan urutan push/pop frame.
2. Operasi seperti `setTimeout` mendaftarkan callback ke Web APIs, bukan langsung ke stack.
3. Setelah timer/network siap, callback ditempatkan ke queue yang relevan.
4. Callback baru bisa di-push ke stack jika stack kosong (run-to-completion).
5. Mekanisme ini berulang terus untuk menjaga eksekusi tetap deterministik.

## 3) Wireframe
```text
Alur utama:
[sync function masuk stack] -> [async didaftarkan ke Web APIs] -> [callback masuk queue] -> [callback balik ke stack]

Alur jalan:
[stack kosong] -> [queue handoff] -> [callback dieksekusi] -> [hasil diproses]

Alur error:
[anggap callback langsung jalan] -> [state belum siap saat diakses] -> [race condition / output tak sesuai]
```

## 4) Analogi
Bayangkan dapur restoran:
- Call stack = chef yang mengerjakan satu tiket masakan aktif.
- Web APIs = stasiun persiapan (oven/timer) yang bekerja paralel.
- Queue = rak tiket siap saji.
Chef hanya bisa ambil tiket baru dari rak saat tiket di tangan selesai dikerjakan.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: memahami timing `setTimeout`, callback I/O, dan urutan output sync-async.
- Alasan pakai: mengurangi asumsi salah tentang urutan eksekusi dan mempercepat debug timing bug.
- Kapan tidak dipakai: tidak perlu mendalam saat sedang mengerjakan logic bisnis murni tanpa operasi async.

## 6) Contoh Sederhana
```js
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

console.log('C');
```

### Bedah Output (Langkah Demi Langkah)
1. `console.log('A')` masuk stack dan langsung dieksekusi.
2. `setTimeout` mendaftarkan callback ke Web APIs dengan timer 0 ms.
3. `console.log('C')` tetap dieksekusi dulu karena masih ada frame sync di stack.
4. Setelah stack kosong dan timer siap, callback `B` dipindah dari queue ke stack.
5. Output akhir tetap `A`, `C`, lalu `B`.

## 7) Jebakan Umum
- Mengira `setTimeout(..., 0)` berarti callback pasti dieksekusi paling cepat.
- Mengabaikan prinsip run-to-completion saat membaca urutan log.
- Menganggap Web APIs bagian dari bahasa inti JS, padahal milik environment runtime.

## 8) Prediksi Output Drill
```js
function heavy() {
  const end = Date.now() + 30;
  while (Date.now() < end) {}
}

console.log('start');
setTimeout(() => console.log('timer'), 0);
heavy();
console.log('end');
```

### Kunci Jawaban Drill
- Urutan output: `start`, `end`, `timer`
- Alasan: meski timer 0 ms, callback tetap menunggu stack kosong; `heavy()` menahan stack lebih dulu.

## 9) Debug Story
Kasus: notifikasi UI terlambat tampil setelah klik tombol.
Langkah debug:
1. Profiling callback chain untuk melihat apakah ada fungsi sync berat menahan stack.
2. Cek operasi async didaftarkan ke API mana (timer, network, event).
3. Pecah kerja sync panjang jadi batch kecil agar handoff queue tidak tertunda terlalu lama.
4. Verifikasi ulang urutan log dengan timestamp sederhana.

## 10) Checkpoint
- [ ] Bisa menjelaskan peran berbeda call stack, Web APIs, dan queue.
- [ ] Bisa memprediksi kenapa callback timer tidak langsung dieksekusi.
- [ ] Bisa menemukan sumber delay ketika callback async terlambat masuk stack.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `07-execution-context-lifecycle.md`.
2. Ulangi `../../03-asynchronous-javascript-model/topics/01-async-javascript-dasar.md`.
3. Jalankan 3 variasi `setTimeout` dengan operasi sync berat untuk melihat dampaknya.





