# BK-03: Spec Algorithm Conventions (Clause 5.2 - 6.2)

> **"Logika di Balik Blueprint Hub."**

Buku ini membedah bagaimana algoritma dalam spesifikasi dieksekusi, bagaimana Hub melacak status keberhasilan (Completion Records), dan sistem matematika internal yang menjamin presisi setiap sirkuit.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: Abstract Operations and Evaluation](./CH-01_EvaluationLogic/)**
  - Urutan evaluasi, operasi abstrak, dan navigasi langkah-demi-langkah.
- **[CH-02: Completion Records and Errors](./CH-02_CompletionRecords/)**
  - Alur pengembalian nilai, pengecualian (Throw), dan mekanisme `ReturnIfAbrupt`.
- **[CH-03: Records, Lists, and Internal Data](./CH-03_InternalData/)**
  - Struktur data internal spesifikasi yang tidak terlihat oleh teknisi bahasa.
- **[CH-04: Spec Mathematics and Shorthands](./CH-04_SpecMath/)**
  - Operasi matematika, presisi nilai, dan notasi singkat (Shorthand) spesifikasi.

---

## 🎯 Fokus Pembelajaran
1. Mampu membaca dan menelusuri algoritma ECMA-262 secara mandiri.
2. Memahami bagaimana Hub menangani sirkuit yang terputus (Abrupt Completion) secara aman.
3. Mengenali data internal (`Record` dan `List`) sebagai penyimpan status di balik layar.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-01](../README.md)*
