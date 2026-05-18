# Buku 1 — Scope dan Lexical Environment

Buku ini membahas secara mendalam bagaimana JavaScript mengelola aksesibilitas variabel, menetapkan area batasan, dan bagaimana lexical scope menentukan hubungan pencarian variabel di sepanjang scope chain.

Buku ini berfungsi sebagai landasan teoretis dan praktis utama sebelum melangkah ke konsep closure, keyword `this`, dan arsitektur runtime JavaScript yang lebih kompleks.

---

## Status Buku
Status: **PILOT / ACTIVE DRAFT**

> [!NOTE]
> Buku ini merupakan **pilot pertama** yang ditulis secara resmi untuk menguji implementasi [Material Content Standard](../../docs/project/material-content-standard.md). Semua bab di dalamnya disusun mengikuti pola bahasa manusia $\rightarrow$ analogi $\rightarrow$ batas analogi $\rightarrow$ penjelasan teknis mendalam $\rightarrow$ diagram/simulasi $\rightarrow$ latihan prediksi output.

---

## 1. Tujuan Buku
Buku ini disusun agar pembaca:
*   Paham bagaimana JavaScript menentukan daerah akses variabel melalui konsep scope.
*   Mengerti perbedaan konkret antara Global scope, Function scope, dan Block scope beserta perilakunya terhadap keyword `var`, `let`, dan `const`.
*   Mampu memvisualisasikan bagaimana Lexical Scope dan Scope Chain bekerja di balik layar menggunakan mental model *Lexical Environment* dan *Environment Record*.
*   Dapat menghindari bug bentrok nama variabel dan memory leaks akibat salah memahami batasan scope.

---

## 2. Untuk Siapa Buku Ini
Buku ini ditujukan bagi developer yang:
*   Sudah bisa menulis JavaScript dan membangun proyek praktis, tetapi masih sering menebak-nebak mengapa suatu variabel menghasilkan `undefined` atau `ReferenceError`.
*   Ingin naik level dari sekadar "bisa menggunakan" sintaksis ke tingkat "mengerti detail cara kerja runtime engine di balik layar".
*   Sedang mempersiapkan diri untuk interview teknis tingkat lanjut (*advanced technical interview*).

---

## 3. Prasyarat
Sebelum membaca buku ini, Anda disarankan untuk memahami:
*   Sintaksis dasar JavaScript (deklarasi variabel dan fungsi dasar).
*   Cara menjalankan file JavaScript sederhana di terminal menggunakan Node.js atau melalui browser Developer Console.

---

## 4. Hasil Akhir Setelah Membaca Buku Ini
Setelah menuntaskan seluruh bab di buku ini, Anda akan:
1.  Mampu memprediksi secara akurat luaran (*output*) dari susunan fungsi bersarang (*nested functions*) serumit apa pun.
2.  Secara sadar memilih antara `const`, `let`, dan `var` berdasarkan kebutuhan scope, bukan berdasarkan kebiasaan tanpa arah.
3.  Memiliki fondasi mental model yang kokoh tentang bagaimana engine mengevaluasi scope chain sebelum Anda melangkah ke topik Closure.

---

## 5. Urutan Bab
Buku ini terdiri dari 3 bab pilot:
1.  **[Bab 01 — Apa Itu Scope?](./01-apa-itu-scope.md)**: Pengenalan konsep scope, alasan mengapa ia penting, dan bagaimana scope mencegah bentrok nama variabel.
2.  **[Bab 02 — Global, Function, dan Block Scope](./02-global-function-dan-block-scope.md)**: Klasifikasi jenis-jenis scope di JavaScript, perbandingan `var` vs `let`/`const`, serta bug-bug klasik yang ditimbulkannya.
3.  **[Bab 03 — Lexical Scope dan Scope Chain](./03-lexical-scope-dan-scope-chain.md)**: Memahami mengapa posisi penulisan kode menentukan aksesibilitas variabel, cara kerja rantai pencarian scope, dan hubungan pertamanya dengan closure.

---

## 6. Hubungan dengan Buku/Rak Lain
*   **Rak 02 (JavaScript Core Language)**: Buku ini memperdalam aturan deklarasi variabel dan alur eksekusi yang diperkenalkan secara ringkas di Rak 02.
*   **Rak 03 (Buku 2 — Closures & Memory Retention)**: Konsep Lexical Scope & Scope Chain dalam buku ini adalah prasyarat mutlak yang wajib dipahami 100% sebelum Anda dapat mengerti bagaimana Closure mempertahankan variabel di memori.
*   **Rak 11 (Performance, Memory, & Engine Internals)**: Pemahaman Lexical Environment di sini akan dihubungkan dengan optimasi alokasi Stack/Heap memori pada Rak 11.
