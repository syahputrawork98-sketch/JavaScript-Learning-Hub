# CH-01: Iteration Protocols (Standard Flow Contracts)

> **"Agar data bisa dialirkan dengan alat-alat standar JavaScript, ia harus mengikuti kontrak yang sama. CH-01 membedah kontrak dasar itu dan bagaimana ia dipakai dalam praktik."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- **Technical Reference**: [MDN Web Docs - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

## 1. Kontrak Aliran Standar

### A. [SEC-01: The Iterable Protocol](./SEC-01_TheIterableProtocol/README.md)
Menentukan kapan sebuah objek bisa masuk ke jalur iterasi standar.

### B. [SEC-02: The Iterator Protocol](./SEC-02_TheIteratorProtocol/README.md)
Menentukan cara nilai ditarik satu per satu dari sebuah sumber data.

### C. [SEC-03: for...of & Spread](./SEC-03_ForOfSpread/README.md)
Menunjukkan bagaimana alat bahasa memanfaatkan iterable dalam penggunaan nyata.

---

## Arsitek Mindset: Kontrak Sebelum Alat

Sebagai arsitek Hub:
- Pahami dulu kontraknya sebelum mengandalkan `for...of`, spread, atau destructuring.
- Bedakan sumber data yang bisa dialirkan otomatis dari objek biasa yang belum iterable.

---

## Hands-on: Lab Standard Flow
Gunakan lab di setiap section untuk membiasakan diri dengan alur iterasi bawaan JavaScript.

---
*Status: [x] Complete (3 Sections).*
