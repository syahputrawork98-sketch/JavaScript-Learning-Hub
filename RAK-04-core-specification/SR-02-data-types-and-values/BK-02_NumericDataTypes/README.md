# BK-02: Numeric Data Types (Clause 6.1.6)

> **"Aritmetika dan Presisi di dalam Grid."**

Buku ini membedah dua tipe data numerik utama dalam JavaScript: **Number** (64-bit Floating Point) dan **BigInt** (Arbitrary Precision), serta bagaimana Hub mengelola operasi matematika pada keduanya.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: The Number Type & IEEE 754](./CH-01_NumberTypeBasics/)**
  - Pemahaman desimal 64-bit, NaN, Infinity, dan limitasi presisi biner.
- **[CH-02: Number Arithmetic and Comparison](./CH-02_NumberArithmeticComparison/)**
  - Algoritma operasi matematika dan sensor gerbang perbandingan.
- **[CH-03: The BigInt Type & Operations](./CH-03_BigIntTypeOperations/)**
  - Mengelola angka bulat raksasa tanpa batas presisi (Infinite Integrity).
- **[CH-04: Mathematical Values and Clamping](./CH-04_SpecMathClamping/)**
  - Transformasi dari nilai matematika ideal ke realita batas memori (Wrapping).

---

## 🎯 Fokus Pembelajaran
1. Memahami keterbatasan presisi IEEE 754 pada tipe `Number` (The 0.1 + 0.2 Trap).
2. Mengeksekusi BigInt untuk perhitungan integer murni melampaui 2^53.
3. Mengantisipasi perilaku Wrapping (modulo) pada level data biner (Uint8/Uint32).

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-02](../README.md)*
