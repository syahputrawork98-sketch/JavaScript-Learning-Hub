# CH-01: Iterator Protocol (Modern Repetition Standard)

> **"Di era JavaScript modern, kita tidak hanya mengulang angka. Iterator Protocol memungkinkan kita mengulang objek apa pun dengan cara yang seragam dan efisien."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- **Technical Reference**: [ECMA-262 - Iteration](https://tc39.es/ecma262/#sec-iteration)

## 🎓 Senior Terminology
- **Iterable Interface**: Standar yang mengizinkan sebuah objek mendefinisikan perilaku pengulangannya (seperti `Symbol.iterator`).
- **The `next()` Method**: Fungsi inti yang mengembalikan objek dengan properti `value` (data saat ini) dan `done` (apakah pengulangan sudah selesai).
- **Generator Function**: Fungsi khusus (`function*`) yang mempermudah pembuatan iterator kompleks menggunakan kata kunci `yield`.

---
*Back to [Iterables & Iterators](../README.md)*
