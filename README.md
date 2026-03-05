# JavaScript Learning Hub

Repo ini adalah pusat pembelajaran JavaScript end-to-end: dari implementasi dasar, pemahaman mekanisme runtime, sampai latihan terstruktur untuk stabil di kasus nyata.

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
- Mampu memilih pattern berdasarkan trade-off keterbacaan, reliabilitas, dan kompleksitas.

## Track Utama
1. `01-javascript-tutorial/`
- Tujuan: onboarding cepat dari nol sampai bisa membuat program kecil.
- In scope: sintaks dasar, kontrol alur, function, object/array, async dasar, mini app.
- Out of scope: internals runtime mendalam.

2. `02-javascript-first-principles/`
- Tujuan: membangun mental model inti JavaScript.
- In scope: values/types/coercion, scope/hoisting, closure, `this`, prototype, event loop, memory lifecycle.
- Out of scope: framework/library spesifik.

3. `03-javascript-advanced-patterns/`
- Tujuan: menerapkan pattern lanjutan untuk codebase nyata.
- In scope: module boundary, error strategy, async orchestration, maintainability.
- Out of scope: framework architecture detail.

4. `04-javascript-exercises-katas/`
- Tujuan: menguatkan eksekusi teknis lewat latihan terstruktur.
- In scope: output drills, race condition, mutation bugs, refactor kata, anti-regression checks.
- Out of scope: teori panjang tanpa praktik.

## Milestone Belajar
1. Milestone 1 - `JavaScript Tutorial`
- Selesai materi dasar dan 1 mini app.

2. Milestone 2 - `JavaScript First Principles`
- Lulus drill prediksi output dan mampu menjelaskan model runtime dasar.

3. Milestone 3 - `JavaScript Advanced Patterns`
- Menyelesaikan studi kasus refactor dengan alasan desain yang jelas.

4. Milestone 4 - `Runtime Exercises and Katas`
- Konsisten menyelesaikan latihan tanpa regresi perilaku utama.

## Wireframe Alur Belajar
```text
Alur utama:
[01 Tutorial] -> [02 First Principles] -> [03 Advanced Patterns] -> [04 Exercises/Katas] -> [Production-ready reasoning]

Alur jalan:
[Belajar konsep] -> [Kerjakan contoh] -> [Kerjakan drill] -> [Cek checkpoint] -> [Lanjut track berikutnya]

Alur error:
[Lompat track tanpa prasyarat] -> [Bingung mental model] -> [Bug berulang] -> [Kembali ke track sebelumnya + ulang checkpoint]
```

## Wireframe Navigasi Repo
```text
.
|-- README.md
|-- docs/
|   |-- README.md
|   |-- roadmap.md
|   |-- content-plan.md
|   |-- operating-rules.md
|-- 01-javascript-tutorial/
|   |-- README.md
|-- 02-javascript-first-principles/
|   |-- README.md
|   |-- foundations/
|   |-- advanced/
|   |-- internals/
|-- 03-javascript-advanced-patterns/
|   |-- README.md
|-- 04-javascript-exercises-katas/
|   |-- README.md
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
- Struktur hub 4 track sudah dibuat di root repo.
- Materi existing tersimpan di `02-javascript-first-principles/`.
- Track 01, 03, dan 04 siap diisi bertahap sesuai `docs/content-plan.md`.
