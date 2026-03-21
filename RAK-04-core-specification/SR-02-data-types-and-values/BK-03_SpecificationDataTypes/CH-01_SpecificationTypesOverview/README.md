# CH-01: Specification Types Overview

Selamat datang di "Bahasa Rahasia" TC39. Jika di buku-buku sebelumnya kita membahas nilai yang bisa Anda akses di kode, di **Buku 03** kita akan membedah nilai yang hanya ada di dalam algoritma spesifikasi. Inilah **Specification Types** (Clause 6.2).

## Mental Model: "Skrip di Belakang Layar Teater"
Bayangkan sebuah pertunjukan teater (Program JavaScript Anda).
- **Language Types:** Adalah para aktor, dialog, dan properti panggung yang dilihat penonton.
- **Specification Types:** Adalah naskah sutradara, instruksi lighting, dan catatan backstage.
Penonton tidak pernah melihat naskah tersebut, tapi tanpa naskah itu, pertunjukan tidak akan pernah berjalan dengan benar.

---

## 1. Definisi Formal: Specification Types
Menurut Clause 6.2: *"A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and language types."*

Spesifikasi membutuhkan tipe data sendiri agar bisa menjelaskan alur logika yang sangat kompleks (seperti "Bagaimana merespons error?") tanpa harus terbatas pada tipe data JavaScript itu sendiri.

## 2. Karakteristik Utama
- **Tidak Observable:** Anda tidak bisa melakukan `typeof` atau mengakses tipe-tipe ini dari kode JavaScript. Mereka adalah abstraksi murni.
- **Eksklusif untuk Spec:** Hanya digunakan di dalam teks standar ECMA-262.
- **Struktur Data Kompleks:** Meliputi Record untuk menyimpan status, List untuk urutan operasi, hingga Completion Record untuk alur kendali program.

## 3. Daftar Spesies Spec Types
Beberapa spesialisasi yang akan kita pelajari:
- **Enum:** Pilihan nilai konstan.
- **Record & List:** Struktur data internal.
- **Completion Record:** Jantung dari alur `return/throw/break`.
- **Reference Record:** Rahasia di balik variabel.

---

## Mengapa Arsitek Harus Tahu Ini?
Anda tidak bisa membaca spesifikasi tingkat lanjut jika tidak memahami bahasa ini. Dengan menguasai Specification Types, Anda bisa membaca algoritma TC39 seolah-olah Anda sedang membaca manual mesin asli. Anda akan tahu persis bagaimana "naskah" tersebut memerintahkan "aktor" bertindak.

---

## Tantangan Kecil
Dapatkah kita membuat variabel bertipe `Completion Record` di dalam file `.js` kita?
(Jawabannya: **TIDAK**. Specification Types hanya eksis di dalam dokumen spesifikasi untuk menjelaskan logika. Begitu kode dijalankan di mesin, mereka diterjemahkan menjadi perilaku nyata di memori).

---
> [!IMPORTANT]
> **Key Takeaway:** Specification Types adalah "Alat Bantu Berpikir" bagi pembuat bahasa agar bahasa tersebut memiliki aturan yang presisi.
