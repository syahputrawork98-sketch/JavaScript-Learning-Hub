# BK-06: Collection Mechanics (Clause 23-24)

> **"Mekanika koleksi linear dan keyed storage."**

Buku ini memperdalam dua keluarga built-ins yang paling sering dipakai untuk menyimpan dan mengalirkan data: koleksi terindeks dan koleksi berbasis kunci.

---

## Struktur Bab

- **[CH-01: Ordered Streams](./CH-01_OrderedStreams/)**  
  `Array`, TypedArray, dan karakteristik koleksi linear yang terindeks.
- **[CH-02: Keyed Storage](./CH-02_KeyedStorage/)**  
  Hub pengantar untuk `Map`, `Set`, `WeakMap`, dan `WeakSet`, dengan pecahan section per keluarga koleksi.

---

## Fokus Audit
1. Memisahkan koleksi sebagai domain pendalaman tersendiri agar tidak menumpuk di buku ringkas `BK-03`.
2. Menormalkan `Keyed Storage` dari struktur `CH -> CH` menjadi `CH -> SEC`.
3. Menjaga hubungan eksplisit antara koleksi kuat dan weak collections.

---
*Buku Status: [x] Complete | [status.md](../../status.md) | Kembali ke [SR-11](../README.md)*
