# Chapter 11: Static Semantic Rules

Tidak semua kesalahan di JavaScript terjadi saat kode dijalankan (*Runtime*). Ada aturan yang diperiksa sesaat setelah kode dipetakan ke tata bahasanya, namun sebelum langkah pertama eksekusi dimulai. Inilah yang disebut **Static Semantics**.

## 1. Apa itu Static Semantics?

Bayangkan Anda menulis program. Syntax-nya benar, tapi isinya tidak masuk akal bagi aturan bahasa tersebut.

### Analogi Singkat: "Pemeriksa Ejaan"
Syntax memastikan tanda baca Anda benar. Static Semantics memastikan Anda tidak menggunakan kata "Lari" sebagai nama benda di tempat yang dilarang.

## 2. Contoh Aturan Statis: Early Errors

Beberapa kesalahan ditandai sebagai *Early Errors*. Contoh paling terkenal:
- Menggunakan nama variabel yang sama dua kali dalam satu `let` declaration.
- Menggunakan `return` di luar fungsi.

Meskipun secara "Syntax" struktur `return;` itu benar, spesifikasi memiliki aturan *Static Semantic* yang mengatakan: "Return statement must be contained within a function".

## 3. Mengapa Arsitek Harus Tahu?

Memahami *Static Semantics* membantu Anda membedakan antara:
- **Syntax Error**: Penulisan salah.
- **Early Error (Static Semantic)**: Penulisan benar, tapi melanggar aturan logika bahasa sebelum jalan.
- **Runtime Error**: Kesalahan saat kode benar-benar dieksekusi (misal: `undefined.prop`).

Seorang *Senior Architect* tahu bahwa mencegah kesalahan di tahap statis jauh lebih murah daripada menangani *Exception* di tahap produksi.
