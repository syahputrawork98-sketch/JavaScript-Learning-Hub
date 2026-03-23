# CH-01: Map & WeakMap (Advanced Dictionaries)

> **"Chapter ini membahas dua koleksi berkunci yang cocok saat objek biasa mulai terasa sempit: satu untuk kamus fleksibel, satu lagi untuk metadata yang tidak boleh menahan objek hidup terlalu lama."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- **Technical Reference**: [MDN Web Docs - WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## 1. Struktur Chapter
### A. [SEC-01: Map Fundamentals](./SEC-01_MapFundamentals/README.md)
Kapan `Map` lebih tepat daripada objek biasa, dan apa keuntungan praktiknya.

### B. [SEC-02: WeakMap Patterns](./SEC-02_WeakMapPatterns/README.md)
Kapan metadata sebaiknya disimpan secara lemah agar tidak memicu kebocoran memori.

---

## Arsitek Mindset: Dictionary yang Disengaja

Sebagai arsitek Hub:
- Pilih `Map` saat Anda butuh kunci fleksibel, ukuran langsung, dan iterasi yang stabil.
- Pilih `WeakMap` saat data hanya menempel sebagai metadata sementara pada objek.

---

## Hands-on: Lab Keyed Collections
Chapter ini tetap memakai lab yang sudah ada di `examples/keyed_collections_lab.js` untuk membandingkan `Object`, `Map`, dan pola metadata modern.

---
*Status: [x] Complete (2 Sections).*
