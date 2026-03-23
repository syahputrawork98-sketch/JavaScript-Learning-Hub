# CH-03: Array Iteration (Collection Orchestration)

> **"Chapter ini membahas bagaimana array diproses massal dengan metode iteratif seperti `map`, `filter`, dan `reduce`."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Array iterative methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)
- **Technical Reference**: [ECMA-262 - Array.prototype.forEach](https://tc39.es/ecma262/#sec-array.prototype.foreach)

## 1. Struktur Chapter
### A. [SEC-01: Transform and Select](./SEC-01_TransformAndSelect/README.md)
`map`, `filter`, dan pola transformasi dasar.

### B. [SEC-02: Reduce and Chaining](./SEC-02_ReduceAndChaining/README.md)
Akumulasi, chaining, dan trade-off memori.

---

## Arsitek Mindset: Iterate Intentionally

Sebagai arsitek Hub:
- Iteration methods membuat intent lebih jelas daripada loop manual pada banyak kasus.
- Tetap awasi biaya array baru yang tercipta saat chaining terlalu panjang.

---

## Hands-on: Lab Collection Orchestration
Chapter ini tetap memakai lab di `examples/array_iteration_lab.js` untuk memproses data sensor secara massal.

---
*Status: [x] Complete (2 Sections).*
