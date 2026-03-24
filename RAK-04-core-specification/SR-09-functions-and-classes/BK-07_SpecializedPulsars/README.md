# BK-07: Specialized Pulsars (Clause 15.5-15.8)

> **"Fungsi khusus yang dapat dijeda, melanjut, atau menunggu sinyal asinkron."**

Buku ini memperdalam generator dan async functions sebagai jalur eksekusi spesialis yang memperluas model fungsi biasa.

---

## Struktur Bab

- **[CH-01: Generator Pulsars](./CH-01_GeneratorPulsars/)**  
  `yield`, state suspension, dan iterator-driven execution.
- **[CH-02: Async Pulsars](./CH-02_AsyncPulsars/)**  
  `await`, promise integration, dan microtask-based continuation.

---

## Fokus Audit
1. Memisahkan specialized function machinery dari overview `BK-02`.
2. Menyediakan jalur pendalaman untuk suspension dan async continuation.
3. Menormalkan buku paralel lama menjadi jalur resmi.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-09](../README.md)*
