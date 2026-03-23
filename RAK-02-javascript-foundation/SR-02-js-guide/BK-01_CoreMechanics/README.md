# BK-01: Core Mechanics

Sub-Rak ini membedah mekanisme internal yang mengatur bagaimana JavaScript mengeksekusi kode Anda.

## Source Hub
- **Primary Source**: [MDN Web Docs - JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- **Technical Reference**: [ECMA-262 - ECMAScript Language Specification](https://tc39.es/ecma262/)

## Daftar Chapter
1.  **[CH-01: Advanced Flow & Scope](./CH-01_AdvancedFlowScope/README.md)**: Memahami ruang dan waktu eksekusi.
2.  **[CH-02: The Functional Engine](./CH-02_TheFunctionalEngine/README.md)**: Kekuatan fungsi sebagai unit logika utama.
3.  **[CH-03: Object Mastery](./CH-03_ObjectMastery/README.md)**: Arsitektur objek dan pewarisan tingkat lanjut.

---

## Status Audit
Secara isi, `BK-01` masih kuat sebagai jembatan pedagogis. Namun secara struktur, buku ini belum mengikuti standar terbaru karena setiap chapter hub masih berisi chapter lagi, bukan section (`SEC`).

Di sisi domain, topik-topik `Hoisting`, `Closures`, `Arrow Functions`, `Recursion`, `this`, dan `Prototypes` kini sudah memiliki rumah yang lebih jelas di `SR-05`, `SR-06`, `SR-07`, dan sebagian padanan mekanisme di `RAK-04`. Karena itu buku ini perlu refactor dengan pemisahan boundary yang lebih tegas, bukan sekadar polishing ringan.

---
*Status: [/] Audited - Legacy chapter nesting and overlap require refactor.*
