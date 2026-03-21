# BK-02: Generator and Async Logic (Clause 15.5-15.8)

> **"Aliran Energi yang Dapat Dijeda dan Dijanjikan."**

Buku ini membedah sirkuit canggih di Hub yang memungkinkan eksekusi kode untuk berhenti sejenak (**Generators**) atau menunggu sinyal dari luar (**Async Functions**) tanpa memblokade seluruh sistem.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: Generator and Async Foundations](./CH-01_Foundations/)**
  - Mesin internal di balik `function*` dan `async function`.
- **[CH-02: Async Generators and Iterators](./CH-02_AsyncIteration/)**
  - Penggabungan aliran asinkron dengan protokol iterasi modern.

---

## 🎯 Fokus Pembelajaran
1. Memahami bagaimana slot internal `[[GeneratorState]]` menyimpan tumpukan eksekusi.
2. Menguasai alur evaluasi `await` yang secara otomatis membungkus nilai ke dalam Promise.
3. Mengenali mekanisme pengiriman data dua arah melalui metode `.next(value)`.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-09](../README.md)*
