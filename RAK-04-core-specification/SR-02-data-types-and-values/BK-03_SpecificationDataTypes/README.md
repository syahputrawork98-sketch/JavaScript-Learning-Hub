# BK-03: Specification Data Types (Clause 6.2)

> **"Alat Bantu Arsitek di balik Operasi Hub."**

Buku ini membedah tipe data meta (**Specification Types**) yang digunakan oleh para engineer ECMA untuk mendefinisikan perilaku JavaScript. Tipe-tipe ini tidak pernah muncul di dalam kode JavaScript Anda, namun mereka adalah mesin yang menggerakkan segalanya.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: List, Record, dan Enum](./CH-01_ListRecordEnum/)**
  - Struktur data internal spesifikasi yang mendasari sirkuit Hub.
- **[CH-02: Completion Records and Flow Control](./CH-02_CompletionRecordsFlow/)**
  - Protokol rambatan sukses (`normal`) dan interupsi (`abrupt`).
- **[CH-03: Reference Records and Environment](./CH-03_ReferenceRecordsEnvironment/)**
  - Kompas resolusi identitas dan arsitektur lemari arsip variabel.
- **[CH-04: Property Descriptors and Data Blocks](./CH-04_DescriptorsDataBlocks/)**
  - Izin akses properti dan pengelolaan blok memori mentah (Byte Arrays).
- **[CH-05: Private Elements and Class Statics](./CH-05_PrivateElementsClassStatics/)**
  - Enkapsulasi sirkuit privat sejati menggunakan Private Names (#).

---

## 🎯 Fokus Pembelajaran
1. Memahami perbedaan antara Language Types (Runtime) dan Specification Types (Design-time).
2. Menguasai mekanisme "Unwrapping" pada Reference dan Completion Records.
3. Mengimplementasikan enkapsulasi keras menggunakan Private Elements.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-02](../README.md)*
