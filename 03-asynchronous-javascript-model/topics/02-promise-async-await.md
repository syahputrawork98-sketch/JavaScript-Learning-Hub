# Promise, Async, dan Await

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/sequential-vs-parallel-map.svg`](../assets/sequential-vs-parallel-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`2` pada Track 03.
- Prasyarat langsung: `01-async-javascript-dasar.md`.
- Lanjut setelah ini: `03-event-loop-detail.md`.

Prasyarat topik:
- Sudah paham event loop dasar, task queue, dan microtask queue.
- Sudah paham Promise dasar (`then/catch`) secara umum.

Referensi remedial:
- [`01-async-javascript-dasar.md`](./01-async-javascript-dasar.md)
- [`../../02-javascript-runtime-first-principles/docs/prasyarat/promise-dasar.md`](../../02-javascript-runtime-first-principles/docs/prasyarat/promise-dasar.md)

Kamus mini topik:
- `[baru]` Promise chaining: menyusun beberapa operasi async berurutan.
- `[baru]` Sequential await: menunggu proses satu per satu.
- `[baru]` Parallel await: menjalankan banyak proses bersamaan lalu tunggu semua.
- `[baru]` Fail-fast: satu promise gagal membuat keseluruhan alur gagal (contoh `Promise.all`).
- `[ulang]` Microtask queue: antrean prioritas untuk callback Promise.

## Pengantar Singkat Topik
Promise dan `async/await` adalah fondasi menulis alur asynchronous yang rapi, terbaca, dan mudah dirawat. Topik ini menekankan kapan perlu eksekusi berurutan dan kapan harus paralel untuk efisiensi.

## 1) Big Picture
Alur asynchronous mudah jadi lambat atau rapuh jika semua operasi ditulis berantai tanpa strategi sequencing yang tepat. Topik ini menjelaskan cara menggabungkan Promise dan `async/await` agar alur tetap terbaca, error handling jelas, dan eksekusi bisa dioptimalkan (sequential vs parallel). Setelah paham, kamu bisa memutuskan pola orkestrasi async berdasarkan dependency nyata, bukan sekadar kebiasaan penulisan.

## 2) Small Picture
1. Promise memberi bentuk standar untuk hasil async: sukses atau gagal.
2. `then/catch` cocok untuk chaining berbasis callback fungsional.
3. `async/await` membuat kode async terlihat seperti alur sync.
4. Gunakan `await` berurutan hanya jika memang ada dependency antar langkah.
5. Untuk tugas independen, jalankan paralel (misalnya `Promise.all`) agar lebih efisien.

## 3) Wireframe
```text
Alur utama:
[mulai async task] -> [Promise resolve/reject] -> [hasil ditangani]

Alur jalan:
[task independen] -> [jalan paralel dengan Promise.all] -> [hasil gabungan]

Alur error:
[satu promise reject] -> [fail-fast / throw] -> [masuk catch / fallback]
```

## 4) Analogi
Bayangkan kamu mengurus 3 dokumen:
- Jika dokumen saling bergantung, kamu urus satu-satu (sequential).
- Jika tidak bergantung, kamu kirim semua sekaligus (parallel).
`async/await` membantu kamu menulis langkah-langkah itu dengan jelas.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: API calls, file/network operations, orchestration async flow.
- Alasan pakai: alur lebih rapi, error handling lebih eksplisit, dan performa bisa dioptimalkan (parallel).
- Kapan tidak dipakai: hindari `await` berantai jika pekerjaan sebenarnya bisa paralel.

## 6) Contoh Sederhana
```js
function wait(ms, label) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(label), ms);
  });
}

async function run() {
  const a = await wait(100, 'A');
  const b = await wait(100, 'B');
  console.log('Sequential:', a, b);

  const [x, y] = await Promise.all([
    wait(100, 'X'),
    wait(100, 'Y'),
  ]);
  console.log('Parallel:', x, y);
}

run();
```

### Bedah Output (Langkah Demi Langkah)
1. `await wait(100, 'A')` menunggu selesai dulu, baru lanjut ke `B`.
2. Karena `A` dan `B` berurutan, total waktu kira-kira dua kali lebih lama.
3. Pada `Promise.all`, `X` dan `Y` berjalan bersamaan.
4. `await Promise.all(...)` menunggu keduanya selesai sekaligus.
5. Untuk kerja independen, pola parallel lebih efisien dari sequential.

## 7) Jebakan Umum
- Menulis banyak `await` berurutan padahal task bisa paralel.
- Lupa `try/catch` di fungsi `async` sehingga error tidak tertangani.
- Menganggap `Promise.all` aman untuk partial success (padahal fail-fast).
- Mencampur style `then` dan `await` tanpa alasan jelas sehingga alur sulit dibaca.

## 8) Prediksi Output Drill
```js
const p1 = Promise.resolve('ok-1');
const p2 = Promise.reject(new Error('fail-2'));

Promise.all([p1, p2])
  .then((result) => console.log('then', result))
  .catch((err) => console.log('catch', err.message));
```

### Kunci Jawaban Drill
- Output: `catch fail-2`
- Alasan: `Promise.all` fail-fast, satu reject langsung lompat ke `catch`.

## 9) Debug Story
Kasus: loading data dashboard lambat padahal endpoint tidak saling bergantung.
Langkah debug:
1. Cari apakah tiap request ditulis pakai `await` berurutan.
2. Ganti jadi parallel dengan `Promise.all` untuk request independen.
3. Tambahkan `try/catch` dan fallback UI agar kegagalan satu request tetap terkontrol.

## 10) Checkpoint
- [ ] Bisa memilih kapan pakai sequential vs parallel await.
- [ ] Bisa menjelaskan perilaku fail-fast pada `Promise.all`.
- [ ] Bisa menulis `async` flow dengan error handling yang jelas.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `01-async-javascript-dasar.md`.
2. Coba ubah contoh sequential jadi parallel, lalu bandingkan waktu eksekusi.
3. Latih skenario reject satu promise dan lihat jalur `catch`.


