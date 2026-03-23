# CH-01: Number & BigInt (Numerical Precision)

> **"Chapter ini membahas dua alat numerik utama JavaScript: `Number` untuk kebutuhan umum, dan `BigInt` untuk integer yang melampaui batas aman angka biasa."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- **Technical Reference**: [MDN Web Docs - BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

## 1. Struktur Chapter
### A. [SEC-01: Number Basics](./SEC-01_NumberBasics/README.md)
Presisi standar, batas aman integer, dan risiko floating point.

### B. [SEC-02: BigInt Basics](./SEC-02_BigIntBasics/README.md)
Penggunaan integer besar saat `Number` tidak lagi aman.

---

## Arsitek Mindset: Numeric Intent

Sebagai arsitek Hub:
- Gunakan `Number` untuk mayoritas kerja numerik sehari-hari.
- Gunakan `BigInt` hanya saat batas aman integer benar-benar menjadi masalah.

---

## Hands-on: Lab Numerical Precision
Chapter ini tetap memakai lab di `examples/numerical_lab.js` untuk mengeksplorasi precision loss dan penggunaan `BigInt`.

---
*Status: [x] Complete (2 Sections).*
