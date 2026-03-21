# BK-02: Exotic Objects (Clause 10.2-10.5)

> **"Unit dengan Perilaku Khusus."**

Buku ini membedah **Exotic Objects**, yaitu objek-objek yang "melanggar" satu atau lebih perilaku default (Ordinary) untuk memberikan fitur khusus seperti panjang array otomatis atau intersepsi Proxy.

---

## 🏗️ Struktur Bab (Gold Standard)

- **[CH-01: Array and String Exotics](./CH-01_ArrayStringExotics/)**
  - Perilaku ajaib properti `length` dan indeks string.
- **[CH-02: Bound Functions and Proxy Exotics](./CH-02_BoundProxyExotics/)**
  - Objek yang bertindak sebagai jembatan atau perantara (Interceptors).

---

## 🎯 Fokus Pembelajaran
1. Memahami mengapa `Array` disebut objek eksotis (perilaku `[[DefineOwnProperty]]` yang unik).
2. Menguasai mekanisme **Proxy** yang memungkinkan penulisan ulang metode internal secara dinamis.
3. Mengenali **Bound Function** sebagai objek fungsi yang membawa konteks `this` yang terkunci.

---
*Buku Status: [status.md](../../status.md) | Kembali ke [SR-05](../README.md)*
