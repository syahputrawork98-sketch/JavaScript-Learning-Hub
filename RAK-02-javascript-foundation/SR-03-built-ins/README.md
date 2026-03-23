# SR-03: Built-ins (The Standard Toolkit)

> **"JavaScript tidak dibangun hanya dari sintaks. Ia juga datang dengan toolkit bawaan yang siap dipakai untuk bekerja dengan objek, angka, teks, koleksi, dan waktu."**

`SR-03` membahas **built-in objects** sebagai komponen standar yang muncul hampir di seluruh praktik JavaScript. Di layer `RAK-02`, fokusnya adalah memahami kegunaan nyata, mental model, dan pilihan alat yang tepat untuk tipe data tertentu.

## Source Hub
- **Primary Source**: [MDN Web Docs - JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- **Technical Reference**: [ECMA-262 - Standard Built-in Objects](https://tc39.es/ecma262/#sec-standard-built-in-objects)

## 1. Struktur Toolkit Bawaan

### A. [BK-01: Fundamental Objects](./BK-01_FundamentalObjects/README.md)
Objek dasar yang menopang hampir semua entitas lain di JavaScript.

### B. [BK-02: Numbers & Dates](./BK-02_NumbersDates/README.md)
Instrumen numerik dan manajemen waktu.

### C. [BK-03: Text Processing](./BK-03_TextProcessing/README.md)
Pengolahan string dan operasi teks.

### D. [BK-04: Indexed Collections](./BK-04_IndexedCollections/README.md)
Koleksi berbasis indeks, terutama Array dan TypedArrays.

### E. [BK-05: Keyed Collections](./BK-05_KeyedCollections/README.md)
Koleksi berbasis kunci seperti Map dan Set.

---

## Arsitek Mindset: Pilih Built-in yang Tepat

Sebagai arsitek Hub:
- Gunakan built-in bawaan sebelum membuat abstraksi baru yang belum perlu.
- Pahami perbedaan antar struktur data agar pemilihan alat terasa sengaja, bukan kebetulan.
- Perlakukan `SR-03` sebagai toolkit praktik, bukan bedah mesin internal spesifikasi.

---

## Status Audit
`SR-03` sudah dimodernkan penuh ke struktur `CH > SEC` di seluruh buku. Paket ini sekarang konsisten sebagai toolkit built-ins berbasis praktik di `RAK-02`, dengan hub modern, chapter hub yang jelas, dan section-level unit yang lebih presisi untuk audit lanjutan.

---
*Status: [x] Gold Standard (100% Complete) - 5 Books, 14 Chapters, 30 Sections.*
