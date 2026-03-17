# Governance & Kebijakan Evolusi

Kebijakan ini mengatur bagaimana proyek dikelola, versi diberikan, dan bagaimana kita menangani pembaruan dari spesifikasi resmi.

## 1. Versioning & CHANGELOG

Setiap Buku wajib memiliki `CHANGELOG.md` dengan format versi:
**`v3.rak.subrak.buku`**

- Contoh: `v3.01.02.01` (Rak 01, SR 02, BK 01).
- Gunakan header `## [Unreleased]` selama pengerjaan.
- Isi changelog menjadi pesan *commit* saat rilis.

## 2. Sinkronisasi Hierarkis (Bottom-Up)

Jika ada perubahan struktur (tambah Buku/Sub-Rak/Rak), sinkronisasi harus dilakukan ke atas:
1. Perbarui README Sub-Rak (List Buku).
2. Perbarui README Rak (List Sub-Rak).
3. Perbarui `/docs/roadmap.md` (Peta jalan).
4. Perbarui `/README.md` (Status status pengembangan).

## 3. Kebijakan Evolusi ECMAScript

- **Skala Kecil**: Masukkan ke Bab/Buku yang sudah ada sebagai tambahan.
- **Skala Besar**: Ciptakan Sub-Rak baru.
- **Kematangan**: Hanya dokumentasikan fitur yang sudah mencapai **Stage 4 (Finished)** di TC39 untuk menjaga stabilitas dokumentasi.

## 4. Audit & Kualitas (Status Berjenjang)

Untuk menjaga integritas data dan kualitas konten, proyek ini menggunakan sistem **Status Berjenjang** yang diatur dalam [Arsitektur Proyek](./architecture.md#sistem-status-berjenjang-bubbling-up).

- **Audit Berkala**: Dilakukan setiap rilis edisi ECMAScript baru (Juni).
- **Gold Standard**: Penjaminan kualitas 4 pilar (Narasi, Contoh, Visual, Sync).
