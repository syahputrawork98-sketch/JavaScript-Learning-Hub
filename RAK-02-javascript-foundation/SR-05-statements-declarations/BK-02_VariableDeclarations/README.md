# BK-02: Storage Schemes (The Memory Grid)

> **"Sebelum data bisa diproses, Hub harus memesan ruang di Grid Memori. BK-02 membahas bagaimana kita mendeklarasikan unit penyimpanan dengan berbagai tingkat keamanan dan jangkauan (scope)."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- **Technical Reference**: [ECMA-262 - Let and Const Declarations](https://tc39.es/ecma262/#sec-let-and-const-declarations)

## 1. Unit Penyimpanan

### A. `const` (Locked Unit)
Penyimpanan permanen. Setelah diisi, nilainya tidak bisa diganti. Sangat aman dan direkomendasikan untuk stabilitas Hub.

### B. `let` (Mutable Unit)
Penyimpanan fleksibel. Nilainya bisa diupdate sesuai kebutuhan alur kerja, namun tetap terkunci di dalam blok sirkuitnya sendiri (*Block Scope*).

### C. `var` (Legacy Loophole)
Binding lama dengan semantics berbeda: ia memakai function scope, mengizinkan re-declaration pada banyak konteks, dan perilaku pengangkatannya berbeda dari `let`/`const`.

---

## 2. Visualisasi: Memory Allotment

![Memory Allotment Premium](./assets/memory_allotment_premium.svg)

---

## Hands-on: Lab Penyimpanan
Uji jangkauan variabel dan perilaku hoisting di `examples/storage_scope_lab.js`.
