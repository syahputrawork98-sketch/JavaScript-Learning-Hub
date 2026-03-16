# CH-12: Spec Organization

Sebagai penutup dari buku Fondasi ini, mari kita lihat peta besar spesifikasi ECMA-262. Jika Anda sudah menguasai istilah di Clause 4.4, ke mana Anda harus melangkah selanjutnya?

## Mental Model: "Peta Navigasi Perpustakaan"
Bayangkan spesifikasi adalah sebuah gedung perpustakaan raksasa dengan 28 lantai (Clause).
- **Lantai 1-5:** Pintu masuk, terminologi, dan rambu (Apa yang kita pelajari di SR-01).
- **Lantai 6-9:** Bahan baku bahasa (Tipe data, Operasi abstrak).
- **Lantai 10-16:** Struktur bangunan (Objek, Fungsi, Script, Module).
- **Lantai 17-28:** Fasilitas siap pakai (Standard Library seperti Array, Math, JSON).

---

## 1. Hirarki Spesifikasi
Spesifikasi JavaScript disusun secara berjenjang:
- **Foundations (Bottom):** Notational Conventions dan Terminologi. (SR-01)
- **Mechanics (Middle):** Executable Code, Context, dan Agorithms. (SR-02 sampai SR-10)
- **Application (Top):** Objek standar yang kita gunakan untuk koding. (SR-11)

## 2. Cara Mencari Informasi
Jangan membaca spesifikasi dari awal sampai akhir seperti novel. Gunakan teknik "Jump to Source":
1. Mulai dari fitur JavaScript yang Anda ingin tahu (misal: `Array.prototype.push`).
2. Cari di daftar isi Clause 23.
3. Ikuti langkah-langkah algoritmanya.
4. Jika ada istilah aneh (misal: *Return a Completion Record*), kembali ke Clause 4 atau 5 (Buku Fondasi kita).

## 3. Road to Architect
Dengan menyelesaikan buku ini, Anda telah melewati gerbang utama. Anda bukan lagi pengembang yang sekadar "tahu cara pakai", Anda mulai memahami **mengapa** sesuatu berperilaku seperti itu.

---

## Penutup
Selamat! Anda telah menyelesaikan **BK-01: Spec Foundations**.
Langkah Anda berikutnya dalam Sub-Rak `SR-01` adalah memperdalam **BK-02: Grammar Notation System** untuk memahami bagaimana teks kode Anda diubah menjadi struktur yang dimengerti mesin.

---
*Status: Completed (Versi v3.01.01.12)*
