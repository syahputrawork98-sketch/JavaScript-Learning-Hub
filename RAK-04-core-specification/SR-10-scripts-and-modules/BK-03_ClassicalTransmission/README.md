# BK-03: Classical Transmission (Clause 16)

> **"Pemuatan klasik tanpa isolasi modul."**

Buku ini memperdalam perilaku script tradisional ketika kode dimuat langsung ke jalur global tanpa lapisan isolasi modular.

---

## Struktur Bab

- **[CH-01: Open Circuits](./CH-01_OpenCircuits/)**  
  Global execution, shared scope, dan risiko tabrakan sinyal.
- **[CH-02: Scope Boundaries](./CH-02_ScopeBoundaries/)**  
  Teknik isolasi sementara seperti IIFE dan pemahaman batas scope di mode klasik.

---

## Fokus Audit
1. Menjaga layer script klasik tetap tersedia tanpa menimpa buku inti `BK-01`.
2. Menyediakan jalur pendalaman untuk pembaca yang ingin melihat risiko arsitektural mode non-module.
3. Menormalkan buku paralel menjadi hub resmi yang sinkron dengan struktur folder.

---
*Buku Status: [x] Complete | [status.md](../../status.md) | Kembali ke [SR-10](../README.md)*
