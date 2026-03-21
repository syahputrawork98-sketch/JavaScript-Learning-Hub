# BK-03: Weak References

> **"Jalur Pantau Tanpa Beban Koneksi."**

Buku ini membedah fitur-fitur modern JavaScript yang memungkinkan interaksi dengan objek tanpa memperpanjang siklus hidup mereka, memberikan fleksibilitas tinggi dalam pengelolaan cache dan pembersihan sumber daya eksternal.

---

## 🏗️ Struktur Bab

- **[CH-01: Ghost Connections](./CH-01_GhostConnections/)**
  - Menggunakan `WeakRef` untuk referensi non-blok GC.
- **[CH-02: Post-Mortem Cleanup](./CH-02_PostMortemCleanup/)**
  - Menggunakan `FinalizationRegistry` untuk protokol pembersihan akhir.

---

## 🎯 Fokus Pembelajaran
1. Memahami perbedaan Strong Reference vs Weak Reference.
2. Menggunakan `deref()` secara aman dalam strategi caching.
3. Mengatur protokol pembersihan sumber daya non-JS (file handles, sockets) melalui FinalizationRegistry.

---
*Status: [status.md](../../status.md) | Kembali ke [SR-12](../README.md)*
