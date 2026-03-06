# Cancellation, Timeout, dan Retry Strategy

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Remedial combinator Promise: [`05-concurrency-patterns.md`](./05-concurrency-patterns.md)

Alur topik:
- Topik ini ada di urutan ke-`6` pada Track 03.
- Prasyarat langsung: `05-concurrency-patterns.md`.
- Lanjut setelah ini: `07-async-iteration-dan-for-await.md`.

Prasyarat topik:
- Sudah paham Promise combinator (`all`, `allSettled`, `race`, `any`).
- Sudah paham error handling async dasar.

Referensi remedial:
- [`02-promise-async-await.md`](./02-promise-async-await.md)
- [`04-error-handling-async.md`](./04-error-handling-async.md)

Kamus mini topik:
- `[baru]` Cancellation: menghentikan pekerjaan async yang tidak lagi relevan.
- `[baru]` Timeout: batas waktu maksimum untuk sebuah operasi.
- `[baru]` Retry: mencoba ulang operasi yang gagal sesuai aturan.
- `[baru]` Exponential backoff: jeda retry makin besar tiap percobaan.
- `[ulang]` Fail-fast: gagal cepat saat syarat utama tidak terpenuhi.

## Pengantar Singkat Topik
Topik ini membahas bagaimana menjaga alur async tetap sehat saat API lambat, gagal sementara, atau hasilnya sudah tidak dibutuhkan lagi.

## 1) Big Picture
Async modern tidak cukup hanya "bisa jalan". Kamu butuh kebijakan kapan request dibatalkan, kapan diberi timeout, dan kapan layak di-retry. Tanpa strategi ini, aplikasi rawan race condition, request mubazir, dan UX buruk karena loading terlalu lama.

## 2) Small Picture
1. Gunakan cancellation saat user berpindah konteks (misalnya search query berubah).
2. Tambahkan timeout agar operasi tidak menunggu tanpa batas.
3. Terapkan retry hanya untuk error yang bersifat sementara.
4. Beri backoff agar tidak membanjiri server saat gangguan.
5. Pisahkan error "permanen" vs "transien" sebelum retry.

## 3) Wireframe
```text
Alur utama:
[start async op] -> [monitor timeout/cancel] -> [success or controlled fail]

Alur jalan:
[error transien] -> [retry + backoff] -> [berhasil atau fallback]

Alur error:
[tanpa timeout/cancel] -> [request menggantung/race] -> [state UI kacau]
```

## 4) Analogi
Mengirim kurir:
- Timeout = batas waktu tunggu paket.
- Cancellation = batal kirim kalau alamat berubah.
- Retry = kirim ulang kalau gagal karena hujan deras, bukan karena alamat salah.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: fetch API, polling, integrasi service eksternal.
- Alasan pakai: mengurangi request sia-sia, memperbaiki responsivitas, dan meningkatkan reliabilitas.
- Kapan tidak dipakai: jangan retry error validasi/input yang jelas-jelas tidak akan sukses.

## 6) Contoh Sederhana
```js
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), ms)
    ),
  ]);
}

withTimeout(fetch('https://example.com/data'), 2000)
  .then(() => console.log('ok'))
  .catch((err) => console.log(err.message));
```

### Bedah Output (Langkah Demi Langkah)
1. `fetch(...)` berjalan normal.
2. Timer timeout berjalan paralel.
3. Yang settle duluan menang karena `Promise.race`.
4. Jika response lambat melewati 2 detik, result jadi error `timeout`.
5. Caller bisa putuskan retry atau fallback.

## 7) Jebakan Umum
- Retry semua error tanpa klasifikasi.
- Tidak membersihkan timer setelah request selesai.
- Cancellation tidak disambungkan ke state UI aktif.
- Menumpuk retry agresif tanpa backoff.

## 8) Prediksi Output Drill
```js
let attempt = 0;

function unstable() {
  attempt++;
  return attempt < 3
    ? Promise.reject(new Error('temporary'))
    : Promise.resolve('success');
}

unstable()
  .catch(() => unstable())
  .catch(() => unstable())
  .then((v) => console.log(v));
```

### Kunci Jawaban Drill
- Output: `success`
- Alasan: percobaan pertama dan kedua gagal, percobaan ketiga resolve.

## 9) Debug Story
Kasus: fitur pencarian menampilkan hasil lama setelah user mengetik cepat.
Langkah debug:
1. Cek apakah request lama masih boleh update state.
2. Tambahkan cancellation token/signal untuk request lama.
3. Pastikan hanya request terbaru yang boleh commit hasil.
4. Tambahkan timeout agar request lama tidak menggantung.

## 10) Checkpoint
- [ ] Bisa membedakan kapan pakai cancellation, timeout, dan retry.
- [ ] Bisa menjelaskan kenapa retry butuh klasifikasi error.
- [ ] Bisa mendesain fallback saat semua retry gagal.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `05-concurrency-patterns.md`.
2. Simulasikan request lambat dengan `setTimeout`.
3. Bandingkan perilaku sebelum/sesudah timeout + retry sederhana.
