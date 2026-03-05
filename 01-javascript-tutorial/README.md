# 01 - JavaScript Tutorial

Track ini adalah "buku pegangan" JavaScript dari nol.
Targetnya bukan cuma bikin kode yang jalan, tapi ngerti kenapa kode itu jalan.

## Gambaran Besar
- Kamu belajar JavaScript seperti belajar nyetir:
- Dasbor dulu (variabel, tipe data, operator).
- Cara jalan di jalan raya (if/else, loop, function).
- Cara bawa penumpang/barang (object, array).
- Cara ngatur antrean lampu merah (async dasar).
- Ujungnya: bisa nyetir sendiri lewat mini project.

## Tujuan Track
- Paham sintaks dan alur dasar JavaScript.
- Bisa pakai function, object, array, dan async dasar di kasus nyata sederhana.
- Bisa jelasin sebab-akibat teknis dari kode yang kamu tulis.
- Bisa menyelesaikan mini app kecil tanpa copy-paste membabi buta.

## Prinsip Penulisan Materi
- Detail tapi tidak bertele-tele.
- Bahasa sehari-hari, istilah teknis tetap akurat.
- Selalu dari "kenapa" -> "bagaimana" -> "contoh" -> "latihan".
- Tiap konsep ada contoh benar, contoh salah, dan alasan bedanya.

## Scope
- Variabel, tipe data, operator, kontrol alur.
- Function, object, array, loop.
- Async dasar (`setTimeout`, Promise, `async/await`) untuk use case sederhana.
- Latihan kecil per topik dan 1 mini project akhir.

## Out of Scope
- Internals runtime yang dalam (akan dibahas di track 02).
- Framework/library spesifik.

## Struktur Buku (Bab)
1. Bab 1 - Fondasi JavaScript
- Variabel, tipe data, operator, `if/else`, `switch`.
- Fokus: ngerti bentuk data + cara mengambil keputusan.

2. Bab 2 - Function dan Modular Thinking
- Function declaration/expression, parameter, return, scope dasar.
- Fokus: pecah masalah besar jadi fungsi kecil.

3. Bab 3 - Array dan Object
- Create/read/update data, method dasar, nested data.
- Fokus: representasi data dunia nyata.

4. Bab 4 - Loop dan Problem Solving Dasar
- `for`, `while`, `for...of`, pola iterasi sederhana.
- Fokus: automasi langkah berulang.

5. Bab 5 - Async Dasar
- `setTimeout`, Promise, `async/await`, try/catch dasar.
- Fokus: ngerti "nunggu hasil" tanpa bikin alur rusak.

6. Bab 6 - Mini Project
- Bangun mini app CLI/browser sederhana.
- Fokus: gabung semua konsep end-to-end.

## Format Tiap Bab (Template Wajib)
1. Tujuan bab (apa yang harus bisa setelah selesai).
2. Gambaran besar (konsep ini masuk ke bagian mana dari puzzle).
3. Gambaran kecil (detail sintaks + aturan penting).
4. Analogi sederhana (biar cepat nyantol).
5. Contoh kode inti (minimal, jelas, bisa dijalankan).
6. Debug corner (error umum + cara mikir memperbaikinya).
7. Latihan bertahap (mudah -> sedang -> menantang).
8. Checkpoint lulus bab (kriteria lulus yang terukur).

## Contoh Gaya Penjelasan
- Topik: `if/else`
- Bahasa sehari-hari: "Kalau kondisi benar, masuk jalur A. Kalau salah, masuk jalur B."
- Alasan teknis: JS butuh nilai boolean untuk menentukan cabang eksekusi.
- Kesalahan umum: pakai `=` saat niatnya `===`.
- Dampak: kondisi selalu berubah nilainya dan flow jadi salah.

## Wireframe Belajar
```text
[Mulai Bab]
   |
   v
[Gambaran Besar]
   |
   v
[Konsep Inti + Contoh]
   |
   v
[Debug Corner]
   |
   v
[Latihan]
   |
   v
[Checkpoint Lulus]
   |
   +----> Belum lulus -> ulang latihan terarah
   |
   +----> Lulus -> lanjut bab berikutnya
```

## Wireframe Halaman Bab
```text
+--------------------------------------------------+
| Judul Bab                                        |
| Tujuan Bab                                       |
+--------------------------------------------------+
| 1) Gambaran Besar                                |
| 2) Gambaran Kecil                                |
| 3) Analogi                                       |
| 4) Contoh Kode                                   |
| 5) Debug Corner                                  |
| 6) Latihan                                       |
| 7) Checkpoint                                    |
+--------------------------------------------------+
```

## Aset Visual
- Wireframe alur belajar (SVG): `assets/learning-flow.svg`
- Wireframe halaman bab (SVG): `assets/chapter-layout.svg`

## Exit Criteria
- Bisa membangun mini app JavaScript sederhana dari nol.
- Bisa membaca, menjelaskan, dan memperbaiki bug dasar dengan alasan teknis.
- Bisa memprediksi output kode sync/async sederhana sebelum dijalankan.
