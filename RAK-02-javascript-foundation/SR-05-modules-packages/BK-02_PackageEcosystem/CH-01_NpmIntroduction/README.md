# CH-01: Npm Introduction (The Package Registry)

> **"npm (Node Package Manager) adalah gudang pusat raksasa yang menampung jutaan modul siap pakai yang bisa kita pasang ke dalam Hub Energi kita."**

## 🔗 Source Hub
- **Primary Source**: [npm Documentation - About npm](https://docs.npmjs.com/about-npm)
- **Community Portal**: [npmjs.com](https://www.npmjs.com/)

## 🎓 Senior Terminology
- **Package Registry**: Basis data pusat tempat pengembang mengunggah dan membagikan modul mereka secara publik atau privat.
- **Dependency Management**: Proses manajemen siklus hidup paket luar yang digunakan dalam proyek, termasuk instalasi, pembaruan, dan penghapusan.
- **Semantic Versioning (SemVer)**: Standar penomoran versi (seperti `1.4.2`) yang menandakan tingkat perubahan: *Major*, *Minor*, dan *Patch*.

## 1. Mental Model: "The Global Store"

Bayangkan **npm** sebagai **Toko Global Raksasa** untuk komponen Hub Energi. Alih-alih merakit setiap sensor atau kabel dari nol, Anda bisa pergi ke Toko Global ini, mencari komponen yang sudah jadi (paket), dan memasangnya langsung ke dalam Hub Anda. npm mengelola pengiriman, perizinan, dan memastikan komponen tersebut cocok dengan sistem Anda.

![Global Store](./assets/global_store.svg)

---

## 2. Mengambil Komponen (`npm install`)

Saat Anda menjalankan `npm install <nama-paket>`, npm akan:
1.  Mencari paket di Registry Global.
2.  Mengunduhnya ke dalam folder khusus bernama `node_modules`.
3.  Mencatatnya di manifes Hub Anda.

---

## 3. Ekosistem `node_modules`

Folder `node_modules` adalah tempat semua komponen luar disimpan. Ia seringkali menjadi sangat besar karena satu paket mungkin membutuhkan paket lain untuk bekerja (Dependensi Berantai).

---

## 4. SemVer: Bahasa Versi

npm menggunakan **Semantic Versioning (SemVer)** untuk memastikan kestabilan Hub:
- `1.0.0` (Major.Minor.Patch)
- **Patch**: Perbaikan bug (aman dipasang).
- **Minor**: Fitur baru yang tidak merusak (cukup aman).
- **Major**: Perubahan besar yang mungkin merusak sirkuit lama (**Hati-hati!**).

---

## Arsitek Mindset: Keamanan & NPX

Selalu jalankan `npm audit` untuk memastikan komponen yang Anda ambil dari Toko Global tidak memiliki celah keamanan (virus digital). Jika Anda hanya butuh menggunakan alat sekali saja (misal: generator folder), gunakan **`npx`**. Ia akan mengambil alat tersebut, menjalankannya, lalu membuangnya tanpa mengotori Hub Anda.

---

## Hands-on: Lab Instalasi Komponen
Buka file `examples/npm_intro_lab.js` untuk melihat bagaimana kita menambahkan library utilitas ke dalam Hub dan mengelola versinya di latar belakang.

---
*Back to [Package Ecosystem](../README.md)*
