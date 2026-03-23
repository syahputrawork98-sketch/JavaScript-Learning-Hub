# CH-04: TypedArrays (Binary Data Buffers)

> **"Chapter ini membahas jalur biner JavaScript untuk performa tinggi: `ArrayBuffer`, typed array views, dan pola data mentah yang lebih ketat."**

## Source Hub
- **Primary Source**: [MDN Web Docs - TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- **Technical Reference**: [ECMA-262 - Structured Data](https://tc39.es/ecma262/#sec-structured-data)

## 1. Struktur Chapter
### A. [SEC-01: ArrayBuffer and Views](./SEC-01_ArrayBufferAndViews/README.md)
Kontainer memori dan berbagai view typed array.

### B. [SEC-02: TypedArray Use Cases](./SEC-02_TypedArrayUseCases/README.md)
Kapan jalur biner ini benar-benar berguna dalam praktik.

---

## Arsitek Mindset: Binary with Purpose

Sebagai arsitek Hub:
- Typed arrays adalah alat spesialis untuk data mentah dan throughput tinggi.
- Jangan memakainya untuk koleksi biasa jika array standar sudah cukup.

---

## Hands-on: Lab Binary Buffers
Chapter ini tetap memakai lab di `examples/typed_arrays_lab.js` untuk eksperimen `ArrayBuffer`, `DataView`, dan view biner lain.

---
*Status: [x] Complete (2 Sections).*
