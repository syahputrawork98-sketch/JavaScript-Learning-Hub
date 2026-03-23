# SR-09: Regular Expressions (The Pattern Scanner System)

> **"Saat data teks terlalu besar untuk dibaca satu per satu, kita butuh alat pemindai pola. SR-09 membahas bagaimana JavaScript menggunakan Regular Expressions untuk mencari, memvalidasi, dan mengekstrak informasi dari aliran string."**

**Regular Expressions** di JavaScript adalah bahasa pola ringkas untuk mengenali bentuk teks tertentu. Di level `RAK-02`, fokus kita adalah memahami kapan regex membantu, bagaimana membacanya dengan tenang, dan bagaimana memakainya tanpa membuat kode sulit dirawat.

---

## Arsitektur Pemindaian Pola

### 1. [BK-01: Pattern Matching](./BK-01_PatternMatching/README.md)
Membahas dasar scanner regex, penyaringan pola lanjutan, dan operasi praktis terhadap string.
- **The Scanner**: literal vs constructor, character classes, quantifiers.
- **Advanced Sifting**: assertions, groups/ranges, flags.
- **Operational Testing**: method RegExp dan method string.

---

## 1. Mental Model: "Pattern Scanner System"

Bayangkan Hub menerima arus teks mentah setiap saat:
- **Regex** adalah scanner pola.
- **Pattern** adalah aturan bentuk data yang ingin ditemukan.
- **Methods** adalah panel kontrol untuk menguji, mengambil, atau mengganti isi teks.

---

## Arsitek Mindset: Regex dengan Disiplin

Sebagai arsitek Hub:
- Gunakan regex untuk pola teks yang memang berulang dan terstruktur.
- Hindari regex yang terlalu padat bila solusi string biasa lebih mudah dibaca.
- Perlakukan regex sebagai alat presisi, bukan sihir satu baris.

---

## Hands-on: Lab Pattern Scanner
Masuk ke tiap chapter untuk melihat bagaimana scanner pola dipakai dari pembentukan regex sampai operasi pencarian dan modifikasi teks.

---
*Status: Gold Standard (100% Complete).*
