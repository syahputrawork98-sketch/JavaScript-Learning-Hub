# CH-02: Array Modification (Collection Mutation)

> **"Chapter ini membahas cara menambah, menghapus, dan menyisipkan elemen dalam array, beserta biaya operasionalnya."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Array instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- **Technical Reference**: [ECMA-262 - Array Prototype Methods](https://tc39.es/ecma262/#sec-properties-of-the-array-prototype-object)

## 1. Struktur Chapter
### A. [SEC-01: Stack and Queue Operations](./SEC-01_StackQueueOps/README.md)
`push`, `pop`, `shift`, dan `unshift`.

### B. [SEC-02: Splice and In-Place Changes](./SEC-02_SpliceAndInPlace/README.md)
Pembedahan posisi tertentu dan mutasi langsung pada koleksi.

---

## Arsitek Mindset: Mutation Has Cost

Sebagai arsitek Hub:
- Tidak semua mutasi punya biaya yang sama.
- Operasi di depan array biasanya lebih mahal daripada operasi di belakang.

---

## Hands-on: Lab Collection Mutation
Chapter ini tetap memakai lab di `examples/array_performance.js` untuk melihat biaya operasi array.

---
*Status: [x] Complete (2 Sections).*
