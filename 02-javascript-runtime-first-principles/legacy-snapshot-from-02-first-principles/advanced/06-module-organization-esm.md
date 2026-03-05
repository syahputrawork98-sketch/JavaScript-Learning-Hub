# Module Organization dengan ESM

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`6` pada Advanced.
- Prasyarat langsung: `05-error-handling-defensive-coding.md`.
- Lanjut setelah ini: `../internals/01-execution-context-lifecycle.md`.

Prasyarat topik:
- Sudah paham pemisahan tanggung jawab fungsi (single purpose).
- Sudah paham alur async dasar agar import dependency tidak membingungkan.

Referensi remedial:
- [`05-error-handling-defensive-coding.md`](./05-error-handling-defensive-coding.md)
- [`../docs/prasyarat/function-dasar.md`](../docs/prasyarat/function-dasar.md)
- [`../docs/prasyarat/object-dasar.md`](../docs/prasyarat/object-dasar.md)

Kamus mini topik:
- `[baru]` ESM (ECMAScript Modules): sistem module standar JavaScript modern dengan `import`/`export`.
- `[baru]` Named export: ekspor banyak member bernama dari satu file.
- `[baru]` Default export: ekspor utama tunggal dari satu file.
- `[baru]` Side-effect import: `import` file yang dijalankan efeknya tanpa mengambil binding.
- `[ulang]` Dependency: modul/komponen lain yang dibutuhkan sebuah modul.

## Pengantar Singkat Topik
Module organization dengan ESM membahas cara memecah kode menjadi unit kecil yang punya boundary jelas lewat `import`/`export`. Dengan struktur modul yang rapi, codebase lebih mudah dirawat dan risiko coupling berkurang.

## 1) Big Picture
Seiring codebase membesar, bug sering muncul karena boundary antar file tidak jelas dan dependency saling menarik tanpa kontrol. Topik ini menjelaskan organisasi modul ESM agar tanggung jawab tiap file tegas, API publik stabil, dan detail internal tidak bocor ke consumer. Setelah paham, kamu bisa mengambil keputusan struktur folder, pola export/import, dan cara mencegah circular dependency sejak awal.

## 2) Small Picture
1. Pisahkan kode berdasarkan domain/fitur, bukan berdasarkan tipe file saja.
2. Ekspor API publik modul secara eksplisit (`export`) dan sembunyikan detail internal.
3. Impor hanya yang dibutuhkan (`import { x }`) agar dependensi terlihat jelas.
4. Gunakan file `index.js` sebagai pintu masuk modul saat memang perlu.
5. Hindari import melingkar (circular dependency) karena bisa membuat nilai belum siap saat dipakai.

## 3) Wireframe
```text
Alur utama:
[fitur dipecah jadi modul] -> [setiap modul export API publik] -> [app import seperlunya]

Alur jalan:
[buat user.service.js + user.validator.js] -> [index.js re-export API stabil] -> [consumer pakai 1 pintu]

Alur error:
[modul saling import melingkar] -> [binding belum terinisialisasi] -> [runtime error / nilai undefined]
```

## 4) Analogi
Bayangkan kantor:
- Setiap modul itu divisi dengan tugas spesifik.
- `export` itu daftar layanan resmi tiap divisi.
- `index.js` itu resepsionis yang mengarahkan permintaan ke divisi yang tepat.
- Circular dependency itu dua divisi saling menunggu approval satu sama lain, sehingga kerja macet.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: frontend app modular, backend service layer, utility library, dan monorepo package.
- Alasan pakai: struktur jadi scalable, boundary antar file jelas, dan onboarding tim lebih cepat.
- Kapan tidak dipakai: jangan memecah modul terlalu kecil untuk proyek sangat kecil karena biaya navigasi bisa lebih besar dari manfaat.

## 6) Contoh Sederhana
```js
// user.validator.js
export function validateUserInput(input) {
  if (!input || typeof input.name !== 'string') {
    throw new Error('name wajib string');
  }
}

// user.service.js
import { validateUserInput } from './user.validator.js';

export async function createUser(input, repository) {
  validateUserInput(input);
  const saved = await repository.save(input);
  return { id: saved.id, name: saved.name };
}

// index.js (public API modul users)
export { createUser } from './user.service.js';

// app.js
import { createUser } from './index.js';
```

### Bedah Output (Langkah Demi Langkah)
1. Validasi dipisah ke `user.validator.js` agar rule input tidak tercampur logic simpan data.
2. `user.service.js` mengimpor validator lalu mengekspor `createUser` sebagai API bisnis.
3. `index.js` me-re-export API publik agar consumer punya jalur import stabil.
4. `app.js` cukup impor dari satu pintu (`index.js`), tanpa tahu detail internal modul.

## 7) Jebakan Umum
- Mencampur semua helper, service, dan constant dalam satu file besar.
- Overuse default export sehingga nama impor berubah-ubah antar file dan sulit dilacak.
- Membuat barrel (`index.js`) yang mengekspor terlalu banyak hal internal.
- Tidak sadar circular dependency karena import saling silang antar fitur.

## 8) Prediksi Output Drill
```js
// a.js
import { valueB } from './b.js';
export const valueA = `A->${valueB}`;

// b.js
import { valueA } from './a.js';
export const valueB = `B->${valueA}`;

// main.js
import { valueA } from './a.js';
console.log(valueA);
```

### Kunci Jawaban Drill
- Output: runtime error (akses binding sebelum inisialisasi) atau hasil tidak valid tergantung runtime/bundler.
- Alasan: `a.js` dan `b.js` membentuk circular dependency; saat salah satu membaca nilai lain, binding belum siap.

## 9) Debug Story
Kasus: fitur auth gagal di production setelah refactor module.
Langkah debug:
1. Lacak graph import dari entry file fitur auth.
2. Cari import silang `auth -> session -> auth` dengan grep cepat.
3. Pindahkan kontrak bersama (type/constant/helper murni) ke modul netral.
4. Jadikan satu arah dependency: `controller -> service -> repository`, bukan sebaliknya.
5. Batasi `index.js` hanya untuk API publik agar internal tidak saling tarik.

## 10) Checkpoint
- [ ] Bisa memisahkan modul berdasarkan tanggung jawab, bukan sekadar ukuran file.
- [ ] Bisa memilih kapan pakai named export vs default export dengan alasan jelas.
- [ ] Bisa mendeteksi dan memutus circular dependency sederhana.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi materi `advanced/01-closure-patterns.md` untuk latihan boundary logic.
2. Latih refactor satu file besar menjadi tiga modul: `validator`, `service`, `index`.
3. Cek setiap import: apakah benar-benar dibutuhkan, atau sekadar ikut terbawa.
