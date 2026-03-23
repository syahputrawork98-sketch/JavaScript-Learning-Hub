# CH-02: Set & WeakSet (Unique Hub Units)

> **"Chapter ini membahas dua koleksi yang berfokus pada keberadaan dan keunikan nilai, bukan pasangan kunci-nilai."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- **Technical Reference**: [MDN Web Docs - WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

## 1. Struktur Chapter
### A. [SEC-01: Set Fundamentals](./SEC-01_SetFundamentals/README.md)
Keunikan nilai, deduplikasi, dan pemeriksaan keberadaan yang cepat.

### B. [SEC-02: WeakSet Patterns](./SEC-02_WeakSetPatterns/README.md)
Penanda objek sementara tanpa menahan objek tetap hidup.

---

## Arsitek Mindset: Presence over Position

Sebagai arsitek Hub:
- Pilih `Set` saat yang penting adalah "ada atau tidak", bukan posisi indeks.
- Pilih `WeakSet` saat Anda hanya perlu menandai objek sementara.

---

## Hands-on: Lab Unique Collections
Chapter ini tetap memakai lab yang sudah ada di `examples/set_lab.js` untuk melihat keunikan nilai dan pola penandaan cepat.

---
*Status: [x] Complete (2 Sections).*
