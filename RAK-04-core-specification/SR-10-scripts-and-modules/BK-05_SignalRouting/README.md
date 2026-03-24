# BK-05: Signal Routing (Clause 16.2, Import Calls)

> **"Distribusi statis dan dinamis antar unit modul."**

Buku ini memperdalam bagaimana sinyal ekspor-impor dialirkan secara permanen maupun on-demand di jaringan modul.

---

## Struktur Bab

- **[CH-01: Static Routing](./CH-01_StaticRouting/)**  
  Live bindings, default vs named exports, dan jalur koneksi permanen.
- **[CH-02: Dynamic Routing](./CH-02_DynamicRouting/)**  
  `import()` sebagai soket runtime untuk pemuatan on-demand.

---

## Fokus Audit
1. Memisahkan linkage statis dari dynamic import sebagai dua mode routing berbeda.
2. Menjaga pembahasan distribusi modul tidak tenggelam di overview `BK-02`.
3. Menyediakan buku pendalaman yang cocok untuk audit boundary `RAK-04`.

---
*Buku Status: [x] Complete | [status.md](../../status.md) | Kembali ke [SR-10](../README.md)*
