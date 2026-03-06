# Async Architecture dan Anti-Patterns

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Remedial iterasi async: [`07-async-iteration-dan-for-await-of.md`](./07-async-iteration-dan-for-await-of.md)

Alur topik:
- Topik ini ada di urutan ke-`8` pada Track 03.
- Prasyarat langsung: `07-async-iteration-dan-for-await-of.md`.
- Lanjut setelah ini: `../../06-javascript-runtime-exercises/exercises/03-async-order-drills.md`.

Prasyarat topik:
- Sudah paham event loop, Promise combinator, timeout/retry.
- Sudah paham async iteration dasar.

Referensi remedial:
- [`05-concurrency-patterns.md`](./05-concurrency-patterns.md)
- [`06-cancellation-timeout-dan-retry-strategy.md`](./06-cancellation-timeout-dan-retry-strategy.md)

Kamus mini topik:
- `[baru]` Async boundary: titik antarmuka antara sync code dan async side effects.
- `[baru]` Fire-and-forget: async call tanpa menunggu hasilnya.
- `[baru]` Thundering herd: lonjakan request serentak yang tidak terkontrol.
- `[baru]` Structured async flow: alur async yang punya kontrol lifecycle jelas.
- `[ulang]` Anti-pattern: pola yang tampak cepat tapi memicu bug/biaya tinggi.

## Pengantar Singkat Topik
Topik penutup ini merangkum pola arsitektur async yang sehat serta anti-pattern yang paling sering menimbulkan bug produksi.

## 1) Big Picture
Masalah async di production sering bukan di syntax, tapi di desain alur: siapa menunggu siapa, siapa boleh gagal, siapa bertanggung jawab cleanup. Dengan arsitektur async yang jelas, bug race condition, unhandled rejection, dan request storm bisa ditekan.

## 2) Small Picture
1. Tetapkan owner tiap async flow (caller/worker/service).
2. Hindari fire-and-forget tanpa error handling.
3. Batasi concurrency untuk operasi berat/mahal.
4. Definisikan timeout, retry, dan fallback sejak awal.
5. Pastikan cleanup jalan di jalur sukses maupun gagal.

## 3) Wireframe
```text
Alur utama:
[masuk use case] -> [orchestrator async] -> [result + cleanup]

Alur jalan:
[task independen] -> [bounded parallelism] -> [stabil throughput]

Alur error:
[fire-and-forget liar] -> [unhandled rejection/race] -> [insiden produksi]
```

## 4) Analogi
Seperti dapur restoran: harus ada kepala dapur yang mengatur urutan, kapasitas kompor, dan jalur darurat saat bahan habis.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: service orchestration, batch pipeline, sinkronisasi multi endpoint.
- Alasan pakai: mengurangi bug laten dan biaya debug di lingkungan nyata.
- Kapan tidak dipakai: untuk script kecil sekali, arsitektur terlalu kompleks bisa berlebihan.

## 6) Contoh Sederhana
```js
async function runTasks(tasks, limit = 2) {
  const result = [];
  for (let i = 0; i < tasks.length; i += limit) {
    const chunk = tasks.slice(i, i + limit).map((fn) => fn());
    result.push(...(await Promise.all(chunk)));
  }
  return result;
}
```

### Bedah Output (Langkah Demi Langkah)
1. Task dipotong per `chunk` sesuai `limit`.
2. Tiap chunk dieksekusi paralel dengan `Promise.all`.
3. Chunk berikutnya menunggu chunk saat ini selesai.
4. Concurrency tetap terkontrol.
5. Cocok saat ingin cepat tapi tidak membebani resource berlebihan.

## 7) Jebakan Umum
- Fire-and-forget tanpa `.catch(...)`.
- `Promise.all` untuk ratusan request sekaligus tanpa limit.
- Retry agresif serentak saat service sedang down.
- Cleanup hanya di jalur sukses, bukan di jalur error.

## 8) Prediksi Output Drill
```js
(async () => {
  Promise.resolve().then(() => {
    throw new Error('boom');
  });

  console.log('done main');
})();
```

### Kunci Jawaban Drill
- Output langsung yang pasti: `done main`
- Setelah itu muncul unhandled rejection jika tidak ada handler global.
- Alasan: Promise di dalam block tidak di-`await` dan tidak di-`catch`.

## 9) Debug Story
Kasus: lonjakan traffic membuat banyak request eksternal timeout bersamaan.
Langkah debug:
1. Cek apakah concurrency tidak dibatasi.
2. Tambahkan limit worker/chunk per batch.
3. Tambahkan jitter/backoff di retry agar tidak serempak.
4. Pantau metrik error rate dan latency setelah perubahan.

## 10) Checkpoint
- [ ] Bisa mengidentifikasi anti-pattern async utama di codebase.
- [ ] Bisa merancang orchestration async dengan lifecycle jelas.
- [ ] Bisa menentukan batas concurrency yang rasional untuk use case.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `05-concurrency-patterns.md`.
2. Ulangi `06-cancellation-timeout-dan-retry-strategy.md`.
3. Uji skenario unhandled rejection dan perbaiki dengan handler yang tepat.
