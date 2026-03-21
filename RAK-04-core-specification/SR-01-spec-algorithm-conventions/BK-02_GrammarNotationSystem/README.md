# BK-02: Grammar Notation System (Clause 5)

> **"Bahasa Visual Spesifikasi."**

Buku ini membedah sistem notasi yang digunakan untuk mendefinisikan tata bahasa JavaScript (Grammar). Kita akan belajar cara membaca aturan produksi, simbol terminal vs non-terminal, serta batasan-batasan sintaksis yang rumit.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: CFG and Primary Notation](./CH-01_GrammarNotation/)**
  - Context-Free Grammar, Terminal vs Non-terminal, dan rantaian produksi.
- **[CH-02: Optionality and OneOf](./CH-02_GrammarShortcuts/)**
  - Notasi `[opt]`, daftar pilihan `one of`, dan penyederhanaan deskripsi.
- **[CH-03: Grammatical Parameters and Constraints](./CH-03_GrammarParams/)**
  - Parameter `[In, Yield, Await]` dan batasan `lookahead`.
- **[CH-04: Line Terminator and ASI Logic](./CH-04_LineRestrictions/)**
  - Pembatasan pemisah baris dan rahasia Automatic Semicolon Insertion (ASI).

---

## 🎯 Fokus Pembelajaran
1. Menguasai cara membaca notasi BNF (Backus-Naur Form) versi ECMAScript.
2. Memahami bagaimana Hub memvalidasi struktur kode sebelum dieksekusi.
3. Mengenali notasi "but not" dan "lookahead" sebagai filter keamanan grammar.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-01](../README.md)*
