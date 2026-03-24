# BK-06: Transmission Protocols (Clause 16.2 Evaluation Pipeline)

> **"Pipeline pemuatan dari parsing sampai evaluasi."**

Buku ini memperdalam fase-fase yang dilalui modul sebelum dan saat energi akhirnya dijalankan.

---

## Struktur Bab

- **[CH-01: Parsing Phase](./CH-01_ParsingPhase/)**  
  Parsing, instantiation, dan pembentukan binding awal.
- **[CH-02: Evaluation Phase](./CH-02_EvaluationPhase/)**  
  Eksekusi top-level, singleton semantics, dan penundaan karena top-level await.

---

## Fokus Audit
1. Memisahkan fase persiapan dan fase eksekusi dalam pipeline module loading.
2. Menjaga topik lifecycle evaluasi tetap eksplisit dan mudah diaudit.
3. Menormalisasi buku paralel menjadi bagian resmi `SR-10`.

---
*Buku Status: [x] Complete | [status.md](../../status.md) | Kembali ke [SR-10](../README.md)*
