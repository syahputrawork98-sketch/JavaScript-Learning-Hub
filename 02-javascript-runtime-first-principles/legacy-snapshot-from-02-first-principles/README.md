# JavaScript First Principles

Repo ini fokus 100% pada **JavaScript core/fundamental**.
Tujuan utamanya: membangun pondasi yang kuat dari level dasar sampai pemahaman internal cara kerja JavaScript.

## Terjemahan Tema
`JavaScript First Principles` = **Prinsip-Prinsip Dasar JavaScript**.

## Untuk Siapa Repo Ini?
- Kamu yang sudah bisa JavaScript, tapi kadang bingung kenapa kode berjalan seperti itu.
- Kamu yang ingin mental model kuat, bukan sekadar hafal sintaks.
- Kamu yang ingin belajar bertahap: **Foundations -> Advanced -> Internals**.

## Hasil Akhir yang Ditargetkan
Setelah belajar dari repo ini, kamu diharapkan bisa:
- Menjelaskan konsep inti JavaScript dengan bahasa sendiri.
- Memprediksi output kode sebelum dijalankan.
- Debug bug dasar-menengah dengan alasan teknis yang jelas.
- Tahu kapan suatu konsep dipakai, kenapa dipakai, dan kapan tidak cocok dipakai.
- Paham dampak kode terhadap memory dan runtime komputer (termasuk closure, object reference, dan garbage collection).
- Menilai trade-off performa dasar tanpa mengorbankan keterbacaan kode.
- Memprediksi urutan eksekusi sync, microtask, dan macrotask.

## Roadmap Belajar

### Level 1: Foundations
Fokus: pondasi wajib.

Topik:
- Nilai, tipe data, dan coercion
- Scope, hoisting, dan execution context dasar
- Function sebagai first-class citizen
- `this` binding dasar
- Object dan prototype dasar
- Dasar asynchronous JavaScript (gambaran event loop)

### Level 2: Advanced
Fokus: menggabungkan konsep untuk problem nyata.

Topik:
- Closure patterns untuk state dan encapsulation
- `this` binding lanjutan dan function composition
- Prototype chain lanjutan dan inheritance pattern
- Promise, async/await, dan alur async yang maintainable
- Error handling dan defensive coding
- Organisasi kode dengan module (ESM)

### Level 3: Internals
Fokus: mekanisme di balik layar.

Topik:
- Execution context lifecycle (creation/execution)
- Call stack, web APIs, task queue, microtask queue
- Detail event loop scheduling
- Cara lookup variable di scope chain
- Cara lookup property di prototype chain
- Gambaran memory lifecycle dan garbage collection

## Struktur Repo
Struktur konten mengikuti level belajar:

```text
.
|-- README.md
|-- CHANGELOG.md
|-- CHANGELOG-ARCHIVE.md
|-- PRASYARAT-DAN-KAMUS-MINI.md
|-- docs/
|   |-- learning-path.md
|   |-- prasyarat/
|       |-- console-dan-if-dasar.md
|       |-- variabel-dasar.md
|       |-- function-dasar.md
|       |-- object-dasar.md
|       |-- promise-dasar.md
|-- templates/
|   |-- topic-template.md
|-- foundations/
|   |-- README.md
|   |-- 01-values-types-coercion.md
|   |-- 02-scope-hoisting.md
|   |-- 03-function-closure-dasar.md
|   |-- 04-this-binding-dasar.md
|   |-- 05-object-prototype-dasar.md
|   |-- 06-async-javascript-dasar.md
|-- advanced/
|   |-- README.md
|   |-- 01-closure-patterns.md
|   |-- 02-this-binding-lanjutan.md
|   |-- 03-prototype-chain-lanjutan.md
|   |-- 04-promise-async-await.md
|   |-- 05-error-handling-defensive-coding.md
|   |-- 06-module-organization-esm.md
|-- internals/
|   |-- README.md
|   |-- 01-execution-context-lifecycle.md
|   |-- 02-call-stack-web-apis-queues.md
|   |-- 03-event-loop-detail.md
|   |-- 04-scope-chain-lookup.md
|   |-- 05-prototype-chain-lookup.md
|   |-- 06-memory-lifecycle-garbage-collection.md
```

Aturan nama file materi:
- Gunakan prefix angka urut: `01-`, `02-`, `03-`, dst.
- Gunakan format nama topik berbentuk kebab-case.
- Satu file untuk satu topik inti.

## Graduation Criteria
### Foundations selesai jika:
- Seluruh topik foundations selesai ditulis dan dipelajari.
- Minimal 80% jawaban benar pada prediksi output drill foundations.
- Bisa menjelaskan scope, closure, `this`, dan coercion tanpa referensi catatan.

### Advanced selesai jika:
- Seluruh topik advanced selesai ditulis dan dipelajari.
- Mampu menyelesaikan minimal 3 studi kasus kecil berbasis async, error handling, dan module.
- Mampu menjelaskan alasan pemilihan pattern pada solusi yang dibuat.

### Internals selesai jika:
- Seluruh topik internals selesai ditulis dan dipelajari.
- Mampu memetakan alur eksekusi kode ke call stack, task queue, dan microtask queue.
- Mampu menjelaskan dampak keputusan kode terhadap memory dan performa dasar.

## Cara Pakai Repo
1. Baca [`PRASYARAT-DAN-KAMUS-MINI.md`](./PRASYARAT-DAN-KAMUS-MINI.md) sebagai pemanasan.
2. Baca alur materi di [`docs/learning-path.md`](./docs/learning-path.md).
3. Pilih level aktif (`foundations/`, `advanced/`, atau `internals/`) dan ikuti urutan file.
4. Jika ada prasyarat yang belum kuat, buka dokumen remedial di folder `docs/prasyarat/`.
5. Di setiap topik, kerjakan `Prediksi Output Drill` sebelum melihat `Kunci Jawaban`.
6. Ulang topik sampai seluruh `Checkpoint` terpenuhi.
7. Catat perubahan materi atau struktur ke `CHANGELOG.md`.

## Format Wajib Tiap Materi
Setiap topik harus ditulis dengan urutan ini:

1. **Prasyarat dan Kamus Mini**
2. **Pengantar Singkat Topik**
3. **Big Picture**
4. **Small Picture**
5. **Wireframe Alur Konsep**
6. **Analogi Dunia Nyata**
7. **Dipakai untuk Apa + Alasan**
8. **Contoh Sederhana + Bedah Output**
9. **Jebakan Umum (Pitfalls)**
10. **Prediksi Output Drill + Kunci Jawaban**
11. **Debug Story**
12. **Checkpoint Kelulusan Topik**
13. **Jika Masih Bingung, Baca Ini Dulu**

Catatan wireframe:
- Wireframe wajib memuat 3 jalur: `Alur utama`, `Alur jalan`, dan `Alur error`.

Catatan Big Picture:
- Wajib berisi 2-4 kalimat yang menjawab: masalah nyata apa yang diselesaikan, bagaimana konsep menyelesaikannya, dan dampak praktis setelah topik dikuasai.
- Hindari kalimat abstrak seperti "membahas konsep X" tanpa konteks masalah dan manfaat.

Catatan pengantar topik:
- Tambahkan `Pengantar Singkat Topik` (1-2 kalimat) di antara section `0) Prasyarat dan Kamus Mini` dan `1) Big Picture`.
- Tujuannya memberi jawaban cepat "topik ini tentang apa" sebelum masuk konteks masalah yang lebih besar.

## Template Isi Materi
Gunakan template ini untuk setiap file materi: [`templates/topic-template.md`](./templates/topic-template.md).
`README.md` menjadi panduan kurikulum, sedangkan struktur detail penulisan dijaga di template agar tidak drift.

## Prinsip Penulisan
- Bahasa sederhana, tetap akurat secara teknis.
- Dari awam ke detail, bukan langsung lompat ke istilah berat.
- Setiap klaim harus bisa dibuktikan lewat contoh kode.
- Hindari hafalan; utamakan sebab-akibat.

## Scope Repo
- Hanya JavaScript fundamental/core.
- Tidak membahas framework/library spesifik.
- Tooling dibahas hanya jika mendukung pemahaman JavaScript inti.

## Change Log
- Semua perubahan penting wajib dicatat di [`CHANGELOG.md`](./CHANGELOG.md).
- Gunakan section `Unreleased` untuk perubahan terbaru sebelum rilis versi.
- Batas `CHANGELOG.md` adalah 200 baris; jika lebih, pindahkan entri lama ke [`CHANGELOG-ARCHIVE.md`](./CHANGELOG-ARCHIVE.md).

## Format Commit (Saran)
- Gunakan format: `<type>(<scope>): <ringkasan>`
- Contoh:
  - `docs(readme): tambah cara pakai repo`
  - `docs(foundations): tambah materi scope dan hoisting`
  - `chore(changelog): rilis 0.1.1`
