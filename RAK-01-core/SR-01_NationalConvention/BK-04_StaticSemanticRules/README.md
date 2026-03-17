# Buku 04: Static Semantic Rules

*Mastering the Guardrails of JavaScript*

## Sinopsis
Selamat datang di gerbang keamanan ECMAScript. Jika **Buku 02 (Grammar)** adalah tiket perjalanan Anda dan **Buku 03 (Algorithms)** adalah mesin pesawatnya, maka **Buku 04 (Static Semantics)** adalah detektor logam dan petugas keamanan bandara yang memastikan tidak ada barang terlarang terbawa ke dalam penerbangan.

Buku ini membedah mekanisme "Polisi Statis" di dalam spesifikasi JavaScript. Sebelum baris pertama kode Anda benar-benar dijalankan (*Runtime*), terdapat serangkaian aturan transparan namun ketat yang memeriksa integritas, cakupan variabel (*Scope*), hingga validitas keyword kontekstual. Memahami buku ini berarti memahami mengapa `SyntaxError` muncul seketika dan bagaimana mesin mempersiapkan panggung sebelum lampu sorot menyala.

---

## Mengapa Arsitek Harus Mempelajari Ini?
1.  **Predictability**: Mengetahui aturan main sebelum kode dijalankan menghindarkan Anda dari perilaku *unpredictable* di produksi.
2.  **Optimasi Engine**: Aturan statis adalah dasar bagi engine (seperti V8) untuk melakukan optimasi performa. Kode yang mematuhi aturan statis dengan baik akan lebih mudah dioptimalkan.
3.  **Security**: Banyak celah keamanan dicegah di level semantik statis melalui pembatasan akses dan validasi deklarasi.

---

## Navigasi Pembelajaran
Untuk menjaga fokus pada narasi dan visualisasi mental model, daftar isi lengkap telah dipindahkan ke dokumen terpisah.

👉 **[Lihat Daftar Isi Lengkap & Pemetaan Spec](./docs/contents.md)**

---
*Status: Gold Standard Progress*  
*Versi: v3.01.04.01*  
*Detail Progres: [docs/status.md](./docs/status.md)*
