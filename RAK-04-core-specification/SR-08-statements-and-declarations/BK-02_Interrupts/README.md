# BK-02: Signal Interrupts and Exceptions (Clause 14.9-14.15)

> **"Interupsi dan Pengalihan Arus Energi."**

Buku ini membedah bagaimana Hub menangani interupsi aliran eksekusi, baik yang disengaja (**Control Transfer**) maupun yang tidak terduga (**Exceptions**).

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: Control Transfer and Signal Interrupts](./CH-01_ControlTransfer/)**
  - Mekanisme `break`, `continue`, `return`, dan penggunaan `labels`.
- **[CH-02: Exception Handling and Throwing](./CH-02_ExceptionHandling/)**
  - Sirkuit pengaman `try-catch-finally` dan pelepasan energi error melalui `throw`.

---

## 🎯 Fokus Pembelajaran
1. Memahami bagaimana `return` menghentikan seluruh sirkuit fungsi dan mengirim balik muatan.
2. Menguasai aturan "Completion Record" yang menentukan urutan prioritas antara `catch` dan `finally`.
3. Mengenali `label` sebagai cara untuk melakukan interupsi pada sirkuit bersarang yang dalam.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-08](../README.md)*
