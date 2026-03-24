# BK-08: Async Control and Reflection (Clause 27-28)

> **"Pengendali aliran masa depan dan penjaga refleksi."**

Buku ini memperdalam built-ins yang bergerak di wilayah meta: lifecycle asinkron `Promise`, microtask scheduling, serta kemampuan refleksi dan intersepsi melalui `Reflect` dan `Proxy`.

---

## Struktur Bab

- **[CH-01: Future Promises](./CH-01_FuturePromises/)**  
  State machine `Promise`, settling, dan implikasi microtask queue.
- **[CH-02: Reflective Hub](./CH-02_ReflectiveHub/)**  
  `Reflect` dan `Proxy` untuk forwarding, trap, dan pengawasan perilaku objek.

---

## Fokus Audit
1. Menjadikan jalur pendalaman async dan reflection sebagai buku yang sah, bukan residu paralel.
2. Memisahkan overview built-ins dari bedah operasional yang lebih sempit.
3. Menyediakan navigasi buku yang sinkron dengan chapter riil.

---
*Buku Status: [x] Complete | [status.md](../../status.md) | Kembali ke [SR-11](../README.md)*
