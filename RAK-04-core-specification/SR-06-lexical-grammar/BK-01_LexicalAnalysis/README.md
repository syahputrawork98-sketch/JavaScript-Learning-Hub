# BK-01: Lexical Analysis (Clause 11)

> **"Membaca Karakter di Balik Teks."**

Buku ini membedah bagaimana Hub melakukan analisis leksikal untuk mengubah input karakter Unicode menjadi urutan **Tokens** yang siap diproses oleh sirkuit sintaksis.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: Tokenization and Punctuators](./CH-01_Tokenization/)**
  - Pemisahan White Space, Line Terminators, dan pembuatan Token (Keywords, Punctuators).
- **[CH-02: Literals and Template Atoms](./CH-02_Literals/)**
  - Definisi teknis untuk angka, string, regex, dan atom template.
- **[CH-03: Automatic Semicolon Insertion (ASI)](./CH-03_ASI/)**
  - Aturan sakral bagaimana Hub menambahkan titik koma secara otomatis.

---

## 🎯 Fokus Pembelajaran
1. Memahami perbedaan antara *Input Elements* yang berbeda (Div vs RegExp).
2. Menguasai cara Hub menangani karakter Unicode dan urutan escape.
3. Mengenali tiga aturan utama ASI yang sering menyebabkan bug "Semicolon-less".

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-06](../README.md)*
