# Concurrency Patterns

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/concurrency-patterns-map.svg`](../assets/concurrency-patterns-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`5` pada Track 03.
- Prasyarat langsung: `04-error-handling-async.md`.
- Lanjut setelah ini: `06-cancellation-timeout-dan-retry-strategy.md`.

Prasyarat topik:
- Sudah paham Promise dasar dan `async/await`.
- Sudah paham error handling async.

Referensi remedial:
- [`02-promise-async-await.md`](./02-promise-async-await.md)
- [`04-error-handling-async.md`](./04-error-handling-async.md)

Kamus mini topik:
- `[baru]` Concurrency: beberapa pekerjaan berjalan tumpang tindih dalam waktu.
- `[baru]` Fail-fast: proses gabungan gagal cepat saat ada satu kegagalan.
- `[baru]` Partial success: sebagian task sukses, sebagian gagal.
- `[baru]` First winner: hasil pertama yang selesai dipakai.
- `[ulang]` Parallel async: task independen dijalankan bersamaan.

## Pengantar Singkat Topik
Concurrency patterns membantu memilih API Promise yang tepat untuk kebutuhan alur: semua harus sukses, boleh sebagian gagal, atau cukup hasil pertama.

## 1) Big Picture
Keputusan concurrency mempengaruhi performa, keandalan, dan pengalaman pengguna. Topik ini membedah kapan pakai `Promise.all`, `Promise.allSettled`, `Promise.race`, dan `Promise.any` agar flow async tidak hanya cepat, tapi juga tepat secara perilaku error.

## 2) Small Picture
1. `Promise.all`: butuh semua sukses, gagal cepat jika satu reject.
2. `Promise.allSettled`: ingin tahu hasil semua task tanpa fail-fast.
3. `Promise.race`: butuh hasil pertama settle (resolve/reject).
4. `Promise.any`: butuh resolve pertama; reject hanya jika semua gagal.
5. Pilih berdasarkan requirement bisnis, bukan preferensi syntax.

## 3) Wireframe
```text
Alur utama:
[punya banyak async task] -> [pilih combinator tepat] -> [hasil sesuai requirement]

Alur jalan:
[task independen] -> [run parallel] -> [waktu total lebih efisien]

Alur error:
[pakai combinator yang salah] -> [perilaku fail/fallback tidak sesuai] -> [bug bisnis]
```

## 4) Analogi
Pesan makanan dari 4 restoran:
- `all`: semua pesanan wajib datang.
- `allSettled`: catat mana yang datang/gagal, tetap lanjut.
- `race`: ambil yang paling duluan (apa pun hasilnya).
- `any`: ambil yang pertama berhasil; yang gagal diabaikan dulu.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: dashboard multi-endpoint, fallback provider, timeout race, batch processing.
- Alasan pakai: menyelaraskan performa dan toleransi error dengan kebutuhan produk.
- Kapan tidak dipakai: jangan memaksa parallel jika ada dependency data antar langkah.

## 6) Contoh Sederhana
```js
const p1 = Promise.resolve('A');
const p2 = Promise.reject(new Error('B fail'));
const p3 = Promise.resolve('C');

Promise.allSettled([p1, p2, p3]).then((result) => {
  console.log(result.map((x) => x.status));
});
```

### Bedah Output (Langkah Demi Langkah)
1. Tiga promise dijalankan bersamaan.
2. Satu promise reject, dua resolve.
3. `allSettled` tetap menunggu semuanya selesai.
4. Hasil berisi status tiap item (`fulfilled`/`rejected`).
5. Cocok untuk skenario partial success.

## 7) Jebakan Umum
- Memakai `Promise.all` padahal requirement menerima partial success.
- Mengira `Promise.race` selalu memberi resolve pertama (padahal bisa reject).
- Lupa menangani kasus semua gagal pada `Promise.any`.
- Menjalankan parallel request terlalu banyak tanpa kontrol beban.

## 8) Prediksi Output Drill
```js
const a = Promise.reject('x');
const b = Promise.resolve('y');

Promise.any([a, b])
  .then((v) => console.log('ok', v))
  .catch(() => console.log('all failed'));
```

### Kunci Jawaban Drill
- Output: `ok y`
- Alasan: `Promise.any` mengambil resolve pertama; reject dari `a` tidak langsung menggagalkan hasil.

## 9) Debug Story
Kasus: halaman dashboard gagal total saat satu widget API error.
Langkah debug:
1. Cek apakah orchestration memakai `Promise.all`.
2. Jika widget boleh gagal parsial, ubah ke `Promise.allSettled`.
3. Map hasil sukses ke UI, tampilkan fallback pada widget gagal.
4. Log kegagalan per-widget untuk observability.

## 10) Checkpoint
- [ ] Bisa memilih combinator Promise sesuai kebutuhan.
- [ ] Bisa menjelaskan beda fail-fast vs partial success.
- [ ] Bisa membaca dampak performa dari sequential vs parallel orchestration.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `02-promise-async-await.md`.
2. Ulangi `04-error-handling-async.md`.
3. Uji empat combinator Promise dengan input resolve/reject campuran.
