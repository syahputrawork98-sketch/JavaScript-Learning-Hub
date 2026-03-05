# Changelog

Semua perubahan penting pada repo ini akan dicatat di file ini.

Format mengikuti prinsip [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) dan Semantic Versioning.

## Aturan Versi
- Gunakan format versi: `MAJOR.MINOR.PATCH` (contoh: `1.2.0`).
- Setiap rilis wajib memakai tanggal format `YYYY-MM-DD`.
- Perubahan baru dicatat dulu di `Unreleased`, lalu dipindah saat rilis.

## Aturan Batas Baris
- `CHANGELOG.md` maksimal **200 baris**.
- Jika lebih dari 200 baris, pindahkan entri paling lama ke `CHANGELOG-ARCHIVE.md`.
- Pertahankan entri terbaru di `CHANGELOG.md` (termasuk `Unreleased`).
- Saat memindahkan, urutan kronologis wajib tetap konsisten.

## Prosedur Rotasi
1. Cek jumlah baris `CHANGELOG.md`.
2. Jika jumlah baris `<= 200`, tidak ada rotasi.
3. Jika jumlah baris `> 200`, pindahkan entri versi paling lama (bukan `Unreleased`) ke `CHANGELOG-ARCHIVE.md`.
4. Pastikan format section versi tetap sama di dua file.
5. Simpan `Unreleased` dan entri terbaru tetap di `CHANGELOG.md`.
6. Catat aksi rotasi di section `Unreleased` bagian `Changed`.

## [Unreleased]

### Added
- Belum ada.

### Changed
- Memindahkan paket materi JavaScript First Principles ke subfolder track `02-javascript-first-principles/` sebagai bagian dari restrukturisasi hub JavaScript.
- Menetapkan ulang fungsi root repo menjadi hub multi-track JavaScript dengan urutan belajar lintas track.

## [0.4.0] - 2026-03-03

### Added
- Menambahkan materi lengkap `internals/01-execution-context-lifecycle.md` dengan pola section standar (termasuk `Pengantar Singkat Topik` dan wireframe 3 jalur).
- Menambahkan materi lengkap `internals/02-call-stack-web-apis-queues.md` dengan pola section standar (termasuk `Pengantar Singkat Topik` dan wireframe 3 jalur).
- Menambahkan materi lengkap `internals/03-event-loop-detail.md` dengan pola section standar (termasuk `Pengantar Singkat Topik` dan wireframe 3 jalur).
- Menambahkan materi lengkap `internals/04-scope-chain-lookup.md` dengan pola section standar (termasuk `Pengantar Singkat Topik` dan wireframe 3 jalur).
- Menambahkan materi lengkap `internals/05-prototype-chain-lookup.md` dengan pola section standar (termasuk `Pengantar Singkat Topik` dan wireframe 3 jalur).
- Menambahkan materi lengkap `internals/06-memory-lifecycle-garbage-collection.md` dengan pola section standar (termasuk `Pengantar Singkat Topik` dan wireframe 3 jalur).

### Changed
- Memperbarui `docs/learning-path.md` dengan alur Internals awal, prasyarat, dan kamus bertahap untuk `internals/01-execution-context-lifecycle.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `internals/02-call-stack-web-apis-queues.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `internals/03-event-loop-detail.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `internals/04-scope-chain-lookup.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `internals/05-prototype-chain-lookup.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `internals/06-memory-lifecycle-garbage-collection.md`.
- Merevisi section `Big Picture` pada `advanced/02` s.d. `advanced/06` agar konsisten dengan format template (masalah nyata, solusi konsep, dan dampak keputusan teknis).
- Merapikan konsistensi path lintas level pada `advanced/06-module-organization-esm.md` untuk rujukan lanjut ke Internals.

## [0.3.0] - 2026-03-03

### Added
- Menambahkan materi lengkap `advanced/01-closure-patterns.md` dengan pola section yang sama seperti Foundations.
- Menambahkan materi lengkap `advanced/02-this-binding-lanjutan.md` dengan pola section yang sama.
- Menambahkan materi lengkap `advanced/03-prototype-chain-lanjutan.md` dengan pola section yang sama.
- Menambahkan materi lengkap `advanced/04-promise-async-await.md` dengan pola section yang sama.
- Menambahkan materi lengkap `advanced/05-error-handling-defensive-coding.md` dengan pola section yang sama.
- Menambahkan materi lengkap `advanced/06-module-organization-esm.md` dengan pola section yang sama (termasuk wireframe 3 jalur).

### Changed
- Memperbarui `docs/learning-path.md` dengan alur dan prasyarat awal untuk level Advanced.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `advanced/02-this-binding-lanjutan.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `advanced/03-prototype-chain-lanjutan.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `advanced/04-promise-async-await.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `advanced/05-error-handling-defensive-coding.md`.
- Memperbarui `docs/learning-path.md` dengan prasyarat dan kamus bertahap untuk `advanced/06-module-organization-esm.md`.
- Menstandarkan format `Wireframe` pada materi yang sudah terisi menjadi 3 jalur: `Alur utama`, `Alur jalan`, dan `Alur error`.
- Memperbarui `templates/topic-template.md` dan `README.md` agar aturan wireframe 3 jalur jadi standar penulisan.
- Memperjelas aturan section `Big Picture` di `templates/topic-template.md` dan `README.md` agar selalu memuat masalah nyata, solusi konsep, dan dampak praktis.
- Menambahkan panduan `Pengantar Singkat Topik` sebelum `Big Picture` pada template, README, dan menerapkannya di `foundations/01-values-types-coercion.md`.
- Menyesuaikan placeholder `Big Picture` di template agar baris ringkas "Konsep ini menyelesaikan masalah apa" tetap ada, disertai panduan detail 3 poin.
- Menyelaraskan semua materi yang sudah terisi (Foundations 02-06 dan Advanced 01-06) dengan penambahan section `Pengantar Singkat Topik` sebelum `Big Picture`, serta memperbarui urutan format wajib di `README.md`.
- Merevisi section `Big Picture` di seluruh materi Foundations (01-06) agar mengikuti pola template terbaru: masalah nyata, solusi konsep, dan dampak keputusan teknis.

## [0.2.0] - 2026-03-03

### Added
- Menambahkan file rujukan global `PRASYARAT-DAN-KAMUS-MINI.md` untuk penguatan ulang istilah dasar dan prasyarat antar level.
- Menambahkan `docs/learning-path.md` untuk memetakan alur prasyarat dan kamus bertahap per topik.
- Menambahkan paket dokumen remedial prasyarat di `docs/prasyarat/` (console/if, variabel, function, object, promise) dengan contoh dan checklist.
- Menambahkan section `Cara Pakai Repo` dan `Format Commit (Saran)` di `README.md`.
- Menambahkan `Aturan Lulus Advanced` dan `Aturan Lulus Internals` pada README masing-masing level.
- Menambahkan materi lengkap `foundations/03-function-closure-dasar.md`.
- Menambahkan materi lengkap `foundations/04-this-binding-dasar.md`.
- Menambahkan materi lengkap `foundations/05-object-prototype-dasar.md`.
- Menambahkan materi lengkap `foundations/06-async-javascript-dasar.md`.

### Changed
- Menambahkan penomoran versi rilis agar pencatatan changelog lebih rapi.
- Menyinkronkan `README.md` agar format wajib materi mengikuti template terbaru (termasuk prasyarat, bedah output, kunci drill, dan jalur baca ulang).
- Menstandarkan section `0) Prasyarat dan Kamus Mini` di semua materi Foundations dengan format alur topik + tag istilah `[baru]/[ulang]`.
- Memperbarui `templates/topic-template.md` agar mengikuti format alur prasyarat dan kamus bertahap.
- Menambahkan `Referensi remedial` di section prasyarat pada seluruh materi Foundations.
- Memperbarui `README.md` dan `docs/learning-path.md` agar menampilkan jalur penggunaan dokumen remedial prasyarat.
- Merapikan semua file draft skeleton: judul dibuat lebih manusiawi dan referensi template diperbaiki ke `templates/topic-template.md`.
- Menambahkan rujukan cepat ke `PRASYARAT-DAN-KAMUS-MINI.md` pada template dan materi foundations yang sudah tersedia.
- Memperbaiki akurasi penjelasan strict mode pada `foundations/04-this-binding-dasar.md` (kasus function call langsung).
- Memperjelas alur `setTimeout` pada `foundations/06-async-javascript-dasar.md` (timer/Web API -> queue -> call stack).

## [0.1.0] - 2026-03-03

### Added
- Menambahkan kurikulum utama JavaScript First Principles di `README.md`.
- Menambahkan roadmap belajar: Foundations -> Advanced -> Internals.
- Menambahkan template standar untuk setiap materi (big picture, small picture, wireframe, analogi, use-case, alasan, pitfalls, drill, debug story, checkpoint).
- Menambahkan file `CHANGELOG.md` untuk mencatat semua perubahan penting.
- Menambahkan struktur folder materi: `foundations/`, `advanced/`, dan `internals/`.
- Menambahkan materi baseline: `foundations/01-values-types-coercion.md`.
- Menambahkan template baku materi di `templates/topic-template.md`.
- Menambahkan index per level: `foundations/README.md`, `advanced/README.md`, `internals/README.md`.
- Menambahkan skeleton file topik untuk semua level sesuai roadmap.
- Menambahkan materi baru `foundations/02-scope-hoisting.md`.

### Changed
- Memperluas section `Hasil Akhir yang Ditargetkan` dengan target memory, runtime, performa, dan event loop.
- Menambahkan section `Struktur Repo` dan `Graduation Criteria` di `README.md`.
- Menambahkan section `Prosedur Rotasi` agar batas 200 baris changelog operasional.
- Merevisi `foundations/01-values-types-coercion.md` agar lebih ramah pemula dengan prasyarat, kamus mini, bedah output langkah demi langkah, kunci drill, dan jalur baca ulang.
