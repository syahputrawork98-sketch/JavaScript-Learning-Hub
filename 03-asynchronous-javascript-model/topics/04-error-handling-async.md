# Error Handling Async

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/error-handling-async-map.svg`](../assets/error-handling-async-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`4` pada Track 03.
- Prasyarat langsung: `03-event-loop-detail.md`.
- Lanjut setelah ini: `05-concurrency-patterns.md`.

Prasyarat topik:
- Sudah paham Promise, `async/await`, dan perilaku event loop dasar.
- Sudah paham beda synchronous error vs asynchronous rejection.

Referensi remedial:
- [`02-promise-async-await.md`](./02-promise-async-await.md)
- [`03-event-loop-detail.md`](./03-event-loop-detail.md)

Kamus mini topik:
- `[baru]` Rejection: kondisi Promise gagal.
- `[baru]` Propagation: aliran error ke level pemanggil di atasnya.
- `[baru]` Unhandled rejection: rejection yang tidak ditangani `.catch` atau `try/catch`.
- `[baru]` Fail-safe fallback: nilai/aksi cadangan saat proses gagal.
- `[ulang]` `try/catch`: mekanisme menangkap error saat `await`.

## Pengantar Singkat Topik
Error handling async menentukan apakah aplikasi tetap stabil saat request gagal, timeout, atau dependency eksternal bermasalah. Topik ini fokus ke pola penanganan error yang jelas, konsisten, dan bisa diprediksi.

## 1) Big Picture
Mayoritas bug async production bukan di syntax, tetapi di jalur gagal yang tidak tertangani. Topik ini membahas strategi error handling dari level fungsi kecil sampai orchestration antar fungsi async agar error tidak hilang diam-diam. Setelah paham, kamu bisa menentukan kapan melempar ulang error, kapan memberi fallback, dan kapan menghentikan flow.

## 2) Small Picture
1. Gunakan `try/catch` pada fungsi `async` saat memakai `await`.
2. Gunakan `.catch(...)` pada chaining Promise jika tidak memakai `await`.
3. Jangan menelan error tanpa logging atau context.
4. Jika tidak bisa recovery di level sekarang, rethrow agar caller bisa memutuskan.
5. Pastikan ada handler global untuk unhandled rejection sebagai safety net.

## 3) Wireframe
```text
Alur utama:
[async operation] -> [resolve/reject] -> [handle success/error]

Alur jalan:
[error tertangkap] -> [log + fallback / rethrow] -> [alur tetap terkontrol]

Alur error:
[rejection tanpa handler] -> [unhandled rejection] -> [state aplikasi tidak terduga]
```

## 4) Analogi
Bayangkan layanan pelanggan:
- Error handling lokal = petugas front desk menyelesaikan masalah sederhana.
- Rethrow/escalate = kasus dinaikkan ke supervisor.
- Handler global = pusat komplain terakhir jika tidak ada petugas yang menangani.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: API call, retry flow, fallback UI/data, logging error.
- Alasan pakai: mencegah crash diam-diam dan mempermudah diagnosis saat gagal.
- Kapan tidak dipakai: jangan over-catch jika error seharusnya dipropagasikan ke level atas.

## 6) Contoh Sederhana
```js
async function loadUserProfile(id) {
  try {
    const user = await fetchUser(id);
    return { ok: true, data: user };
  } catch (err) {
    console.error('loadUserProfile failed:', err.message);
    return { ok: false, data: null, reason: 'PROFILE_UNAVAILABLE' };
  }
}
```

### Bedah Output (Langkah Demi Langkah)
1. `fetchUser(id)` bisa resolve atau reject.
2. Jika resolve, data dikembalikan normal.
3. Jika reject, `catch` menangkap error.
4. Fungsi mengembalikan fallback object agar caller tetap punya bentuk data konsisten.
5. Caller tidak perlu crash hanya karena satu request gagal.

## 7) Jebakan Umum
- Menangkap error tapi tidak melakukan apa-apa (silent failure).
- Mengembalikan fallback tanpa mencatat sumber error.
- Mencampur `await` dan `.then/.catch` tanpa pola jelas.
- Mengira `try/catch` luar otomatis menangkap semua error async yang tidak di-`await`.

## 8) Prediksi Output Drill
```js
async function run() {
  try {
    await Promise.reject(new Error('boom'));
    console.log('after await');
  } catch (err) {
    console.log('caught', err.message);
  }
}

run();
```

### Kunci Jawaban Drill
- Output: `caught boom`
- Alasan: rejection pada `await` dilempar sebagai exception dan ditangkap oleh `catch`.

## 9) Debug Story
Kasus: API gagal tapi UI tetap menampilkan loading tanpa henti.
Langkah debug:
1. Cek apakah jalur `catch` menutup loading state.
2. Cek apakah error di-rethrow tanpa handler di caller.
3. Tambahkan logging terstruktur untuk request id + endpoint + message.
4. Tambahkan fallback state supaya UI tetap responsif saat gagal.

## 10) Checkpoint
- [ ] Bisa membedakan kapan pakai `try/catch` vs `.catch`.
- [ ] Bisa menjelaskan risiko unhandled rejection.
- [ ] Bisa merancang fallback sederhana tanpa menutupi akar masalah.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `02-promise-async-await.md`.
2. Jalankan contoh error kecil lalu cek jalur `catch`-nya.
3. Latih pola: log -> fallback atau rethrow (pilih salah satu dengan alasan jelas).
