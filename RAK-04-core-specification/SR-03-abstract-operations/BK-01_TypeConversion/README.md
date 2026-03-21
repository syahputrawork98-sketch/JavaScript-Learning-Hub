# BK-01: Type Conversion (Clause 7.1)

> **"Transformasi Energi antar Sirkuit."**

Buku ini membedah sirkuit **Abstract Operations** yang bertanggung jawab untuk mengubah satu tipe data ke tipe lainnya secara otomatis (Implicit Coercion) atau manual di dalam Hub.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: Primitive Conversions](./CH-01_PrimitiveConversions/)**
  - Transformasi ke Number, String, dan Boolean.
- **[CH-02: Complex Conversions](./CH-02_ComplexConversions/)**
  - Mekanisme ToPrimitive dan ToObject untuk struktur data kompleks.

---

## 🎯 Fokus Pembelajaran
1. Memahami algoritma `ToNumber` dan bagaimana ia menangani string/objek.
2. Menguasai urutan "Hint" dalam operasi `ToPrimitive`.
3. Mengenali perilaku Hub saat mencoba mengubah `null` atau `undefined` menjadi Objek.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-03](../README.md)*
