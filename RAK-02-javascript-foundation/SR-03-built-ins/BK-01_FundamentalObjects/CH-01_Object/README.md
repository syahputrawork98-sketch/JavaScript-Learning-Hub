# CH-01: Object (The Root Entity)

> **"Chapter ini membahas `Object` sebagai wadah dasar properti dan utilitas umum yang menopang banyak entitas lain di JavaScript."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- **Technical Reference**: [ECMA-262 - Object Objects](https://tc39.es/ecma262/#sec-object-objects)

## 1. Struktur Chapter
### A. [SEC-01: Object Structure](./SEC-01_ObjectStructure/README.md)
Properti, pasangan key-value, dan hubungan dasar dengan prototype.

### B. [SEC-02: Object Utilities](./SEC-02_ObjectUtilities/README.md)
`Object.keys`, `Object.values`, `Object.entries`, dan utilitas pembekuan dasar.

---

## Arsitek Mindset: Object as Baseline

Sebagai arsitek Hub:
- Gunakan `Object` sebagai baseline saat kebutuhan Anda memang berupa kumpulan properti sederhana.
- Waspadai prototype pollution dan pilih struktur data lain jika use case sudah bergerak ke dictionary dinamis besar.

---

## Hands-on: Lab Root Entity
Chapter ini tetap memakai lab di `examples/object_deep_dive.js` untuk eksplorasi utilitas dan descriptor objek.

---
*Status: [x] Complete (2 Sections).*
