# JavaScript Learning Hub

Repo ini adalah pusat pembelajaran JavaScript end-to-end: dari sintaks dasar, mental model runtime, async model, object model, memory references, latihan runtime, sampai companion ke ECMAScript specification.

Panduan detail pengembangan docs ada di [`docs/README.md`](./docs/README.md).

## Visi dan Fokus
- Fokus utama: JavaScript sebagai inti, bukan framework-specific.
- Fokus hasil: bukan hanya "bisa jalan", tapi bisa menjelaskan sebab-akibat teknis.
- Fokus proses: belajar bertahap dengan urutan track yang jelas dan checkpoint terukur.

## Untuk Siapa
- Pemula yang ingin jalur belajar JavaScript yang runtut.
- Developer yang sudah ngoding JavaScript tapi mental model runtime-nya belum kokoh.
- Mentor/author yang ingin menulis materi JavaScript dengan standar struktur yang konsisten.

## Target Akhir Lulusan
- Mampu menulis solusi JavaScript dasar-menengah tanpa bergantung pada copy-paste.
- Mampu memprediksi output sync/async untuk skenario umum.
- Mampu debug bug state, async flow, dan coercion dengan alasan teknis.
- Mampu membaca konsep inti JavaScript dalam konteks spesifikasi resmi.

## Arsitektur Track (7 Root Aktif)
1. `01-javascript-tutorial/`
- Tujuan: memahami sintaks dasar JavaScript dan penggunaan praktisnya.
- Output: kumpulan contoh program JavaScript kecil untuk memahami bahasa.

2. `02-javascript-runtime-first-principles/`
- Tujuan: membangun mental model bagaimana JavaScript dijalankan oleh engine.
- Output: mampu memahami bagaimana kode dieksekusi secara internal.

3. `03-asynchronous-javascript-model/`
- Tujuan: memahami mekanisme asynchronous JavaScript.
- Output: mampu memprediksi urutan eksekusi kode async secara deterministik.

4. `04-javascript-object-model/`
- Tujuan: memahami cara kerja object system di JavaScript.
- Output: memahami inheritance dan object composition.

5. `05-javascript-memory-and-references/`
- Tujuan: memahami data storage, references, mutation, dan immutability.
- Output: mampu memahami bug terkait mutation dan references.

6. `06-javascript-runtime-exercises/`
- Tujuan: melatih pemahaman runtime lewat eksperimen kode.
- Output: kumpulan eksperimen untuk memperkuat mental model JavaScript.

7. `07-javascript-specification-companion/`
- Tujuan: menghubungkan konsep belajar dengan ECMAScript specification.
- Output: kemampuan memahami definisi formal konsep JavaScript.

## Milestone Belajar
1. Milestone 1 - `JavaScript Tutorial`
- Selesai materi dasar dan 1 mini app.

2. Milestone 2 - `Runtime First Principles`
- Lulus drill reasoning execution context, scope, closure, hoisting, dan `this`.

3. Milestone 3 - `Asynchronous + Object + Memory Models`
- Mampu menjelaskan async order, prototype chain, dan mutation behavior dengan tepat.

4. Milestone 4 - `Runtime Exercises`
- Konsisten menyelesaikan eksperimen tanpa regressi penjelasan teknis.

5. Milestone 5 - `Specification Companion`
- Mampu memetakan konsep belajar ke bagian spesifikasi ECMAScript terkait.

## Wireframe Alur Belajar
```text
[01 Tutorial]
   -> [02 Runtime First Principles]
   -> [03 Async Model]
   -> [04 Object Model]
   -> [05 Memory & References]
   -> [06 Runtime Exercises]
   -> [07 Specification Companion]
   -> [Production-ready reasoning]
```

## Cara Pakai Repo
1. Baca [`docs/roadmap.md`](./docs/roadmap.md) untuk memahami urutan track.
2. Ikuti track secara berurutan, kecuali sudah lulus checkpoint track sebelumnya.
3. Gunakan [`docs/content-plan.md`](./docs/content-plan.md) untuk melihat batas materi per track.
4. Gunakan [`docs/operating-rules.md`](./docs/operating-rules.md) saat menambah/merevisi materi.

## Aturan Kualitas Materi
- Satu topik harus punya tujuan, contoh, pitfalls, dan checkpoint.
- Klaim teknis harus bisa diuji lewat kode atau latihan.
- Hindari overlap antar track; jika overlap, gunakan cross-reference.

## Status Saat Ini
- Arsitektur 7 track sudah aktif sebagai struktur utama repo.
- Track 05, 06, dan 07 telah dinormalkan ke format aktif (`README`, `PRASYARAT`, `docs`, konten utama, `CHANGELOG`).
- Fokus berikutnya adalah hardening kualitas lintas track (validasi link, konsistensi scope, dan quality gate editorial).
