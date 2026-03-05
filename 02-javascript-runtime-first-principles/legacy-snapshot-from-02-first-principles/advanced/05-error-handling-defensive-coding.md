# Error Handling dan Defensive Coding

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`5` pada Advanced.
- Prasyarat langsung: `04-promise-async-await.md`.
- Lanjut setelah ini: `06-module-organization-esm.md`.

Prasyarat topik:
- Sudah paham `try/catch` dasar pada fungsi `async`.
- Sudah paham `Promise.all` dan perbedaan alur sukses vs gagal.

Referensi remedial:
- [`04-promise-async-await.md`](./04-promise-async-await.md)
- [`../docs/prasyarat/promise-dasar.md`](../docs/prasyarat/promise-dasar.md)

Kamus mini topik:
- `[baru]` Error boundary (level fungsi): titik penangkap error agar tidak merusak seluruh alur.
- `[baru]` Defensive coding: menulis kode dengan validasi awal dan fallback yang aman.
- `[baru]` Guard clause: validasi cepat di awal fungsi untuk keluar lebih awal jika data tidak valid.
- `[baru]` Fallback value: nilai cadangan saat data utama gagal didapat.
- `[ulang]` `try/catch`: mekanisme menangkap error sinkron dan async (dengan `await`).

## Pengantar Singkat Topik
Error handling dan defensive coding membahas cara membuat sistem tetap stabil saat input buruk atau dependency gagal. Fokusnya bukan sekadar menangkap error, tetapi menjaga alur tetap aman dan mudah di-debug.

## 1) Big Picture
Aplikasi sering gagal total bukan karena satu error, tetapi karena error boundary dan fallback tidak dirancang dengan jelas. Topik ini menjelaskan defensive coding untuk memisahkan error yang bisa dipulihkan dari error yang harus dihentikan, sambil menjaga konteks debug tetap tersedia. Setelah paham, kamu bisa mengambil keputusan validasi awal, desain return aman, dan strategi recovery yang realistis per fitur.

## 2) Small Picture
1. Tetapkan titik error boundary per fungsi/fitur, jangan tangkap semua error di satu tempat global saja.
2. Validasi input seawal mungkin dengan guard clause.
3. Gunakan `try/catch` untuk operasi yang bisa gagal (I/O, parsing, async call).
4. Saat gagal, beri fallback yang aman dan log konteks error.
5. Pisahkan error yang bisa dipulihkan vs error yang harus dihentikan.

## 3) Wireframe
```text
Alur utama:
[input valid] -> [proses utama] -> [hasil sukses]

Alur jalan:
[operasi berisiko] -> [try/catch + fallback] -> [fitur tetap jalan dengan degradasi]

Alur error:
[input rusak / dependency gagal] -> [guard clause / throw] -> [error ditangkap + konteks dilog]
```

## 4) Analogi
Bayangkan restoran:
- Guard clause itu seperti satpam yang menolak bahan busuk di pintu masuk.
- `try/catch` itu seperti prosedur darurat saat kompor mati.
- Fallback itu seperti mengganti menu utama dengan menu cadangan agar layanan tetap berjalan.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: aplikasi API client, backend service, UI data fetching, dan sistem yang berinteraksi dengan input pengguna.
- Alasan pakai: error pasti terjadi; defensive coding mengurangi crash dan mempermudah debugging.
- Kapan tidak dipakai: hindari `catch` yang menelan error diam-diam tanpa logging atau rethrow yang jelas.

## 6) Contoh Sederhana
```js
function parseUser(raw) {
  if (!raw || typeof raw !== 'string') {
    throw new Error('Input harus string JSON');
  }

  const data = JSON.parse(raw);
  if (!data.name) {
    throw new Error('Field name wajib ada');
  }

  return data;
}

async function loadUserProfile(fetchUserJson) {
  try {
    const raw = await fetchUserJson();
    const user = parseUser(raw);
    return { ok: true, user };
  } catch (err) {
    console.error('loadUserProfile gagal:', err.message);
    return {
      ok: false,
      user: { name: 'Guest' }, // fallback aman
      reason: err.message,
    };
  }
}
```

### Bedah Output (Langkah Demi Langkah)
1. `parseUser` mengecek format input lebih dulu (guard clause).
2. Jika input bukan string JSON valid, fungsi langsung `throw`.
3. `loadUserProfile` membungkus alur async dengan `try/catch`.
4. Saat sukses, hasil normal dikembalikan (`ok: true`).
5. Saat gagal, error dilog dan fungsi tetap mengembalikan struktur aman dengan fallback.

## 7) Jebakan Umum
- Menangkap semua error tapi tidak memberi konteks (`catch (e) {}` kosong).
- Mengembalikan fallback tanpa memberi sinyal gagal (`ok: false`/`reason`) sehingga bug tersembunyi.
- Validasi terlalu akhir setelah data dipakai di banyak tempat.
- Melempar error generik yang tidak membantu investigasi.

## 8) Prediksi Output Drill
```js
async function demo() {
  try {
    const data = JSON.parse('{"name":"Ari"}');
    if (!data.email) throw new Error('email wajib');
    return 'OK';
  } catch (err) {
    return `FALLBACK: ${err.message}`;
  }
}

demo().then(console.log);
```

### Kunci Jawaban Drill
- Output: `FALLBACK: email wajib`
- Alasan: JSON valid, tetapi guard `!data.email` melempar error dan masuk ke `catch`.

## 9) Debug Story
Kasus: halaman profil kadang blank saat API timeout.
Langkah debug:
1. Cek fungsi loader apakah punya `try/catch` dan fallback.
2. Tambahkan guard clause untuk data wajib (`name`, `id`).
3. Simpan `reason` di return object agar UI bisa tampil pesan jelas.
4. Pastikan log error menyertakan nama fungsi dan konteks request.

## 10) Checkpoint
- [ ] Bisa membedakan error yang perlu dihentikan vs yang bisa fallback.
- [ ] Bisa menulis guard clause sebelum proses berat.
- [ ] Bisa membuat return aman (`ok`, `data`, `reason`) agar caller mudah menangani.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `advanced/04-promise-async-await.md`.
2. Latih 3 skenario: input valid, JSON rusak, field wajib hilang.
3. Biasakan pola: `validate early -> try/catch -> fallback + log`.
