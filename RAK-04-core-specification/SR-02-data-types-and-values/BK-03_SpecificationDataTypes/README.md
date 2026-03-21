# BK-03: Specification Data Types (Clause 6.2)

> **"Alat Bantu Arsitek di balik Operasi Hub."**

Buku ini membedah tipe data meta (**Specification Types**) yang digunakan oleh para engineer ECMA untuk mendefinisikan perilaku JavaScript. Tipe-tipe ini tidak pernah muncul di dalam kode JavaScript Anda, namun mereka adalah mesin yang menggerakkan segalanya.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: Spec Collections and Structs](./CH-01_SpecCollectionsAndStructs/)**
  - List, Record, Enum, dan Set: Struktur data internal spesifikasi.
- **[CH-02: Control Flow Records](./CH-02_ControlFlowRecords/)**
  - Completion Record: Bagaimana Hub melaporkan sukses atau gagal.
- **[CH-03: Reference and Property Specs](./CH-03_ReferenceAndPropertySpecs/)**
  - Reference Record dan Property Descriptors: Dasar dari pencarian variabel dan akses properti.
- **[CH-04: Advanced Spec Components](./CH-04_AdvancedSpecComponents/)**
  - Data Blocks, Environment Records, dan Abstract Closures.

---

## 🎯 Fokus Pembelajaran
1. Memahami perbedaan antara Language Types (yang bisa Anda gunakan) dan Specification Types (internal).
2. Menguasai konsep "Unwrapping" pada Completion Records dan Reference Records.
3. Mengenali bagaimana "Data Blocks" mengelola memori biner mentah di balik sirkuit Hub.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-02](../README.md)*
