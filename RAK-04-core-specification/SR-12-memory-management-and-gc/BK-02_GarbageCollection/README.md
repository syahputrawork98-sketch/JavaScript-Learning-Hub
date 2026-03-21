# BK-02: Garbage Collection

> **"Sistem Daur Ulang Otomatis di dalam Hub."**

Buku ini membedah mekanisme internal yang digunakan JavaScript untuk mendeteksi dan membersihkan objek yang sudah tidak terpakai agar memori tetap tersedia untuk operasi Grid lainnya.

---

## 🏗️ Struktur Bab

- **[CH-01: Reachability Atlas](./CH-01_ReachabilityAtlas/)**
  - Algoritma penelusuran koneksi dari Roots.
- **[CH-02: Sweeping Protocols](./CH-02_SweepingProtocols/)**
  - Protokol Mark-and-Sweep dan strategi Generational.

---

## 🎯 Fokus Pembelajaran
1. Memahami kriteria "Reachable" dalam graf memori.
2. Mengenal strategi V8 dalam membagi memori (Young vs Old Generation).
3. Mengurangi beban GC dengan pola penulisan kode yang bersih.

---
*Status: [status.md](../../status.md) | Kembali ke [SR-12](../README.md)*
