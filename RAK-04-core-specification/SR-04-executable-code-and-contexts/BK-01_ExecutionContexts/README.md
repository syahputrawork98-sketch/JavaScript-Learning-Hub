# BK-01: Execution Contexts (Clause 9.1-9.4)

> **"Panggung dan Skenario Eksekusi Hub."**

Buku ini membedah bagaimana Hub mengelola tumpukan eksekusi (**Execution Context Stack**) dan bagaimana status variabel dipelihara selama siklus hidup runtime.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: Execution Context Infrastructure](./CH-01_ExecutionContextInfra/)**
  - Komponen konteks (Global, Function, Eval) dan mekanisme Call Stack.
- **[CH-02: Runtime Lifecycle](./CH-02_RuntimeLifecycle/)**
  - Hoisting, registrasi variabel, dan persistensi Closure.

---

## 🎯 Fokus Pembelajaran
1. Memahami perbedaan antara Konteks Eksekusi Global dan Fungsi.
2. Menguasai mekanisme LIFO (Last-In, First-Out) pada Call Stack Hub.
3. Mengenali bagaimana Closure memungkinkan konteks tetap hidup meskipun sirkuit induknya sudah selesai dieksekusi.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-04](../README.md)*
