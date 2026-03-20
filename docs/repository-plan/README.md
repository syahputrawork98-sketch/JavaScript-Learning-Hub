# JavaScript Knowledge Base: 5-Rack Deconstruction Plan

> **Status**: Universal Standard (5-Rack Architecture)
> **Last Updated**: 2026-03-20
> **Blueprint Mirror**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) & [ECMA-262](https://tc39.es/ecma262/)

Rencana ini mendokumentasikan bagaimana **Knowledge Universe** didekonstruksi ke dalam 5 unit besar yang memisahkan antara penggunaan aplikasi (Application) dengan pemahaman internal (Architectural).

---

## 🏗 Prinsip Mirroring & Spesialisasi

### 1. RAK-01-javascript (The Foundation / MDN Mirror)
Seluruh taksonomi MDN dikonsolidasikan ke dalam satu Rak utama sebagai titik masuk (Entry Point) bagi praktisi.

| Sub-Rak (SR) | Sumber MDN (Mirror) | Deskripsi |
| :--- | :--- | :--- |
| **SR-01-get-started** | JS First Steps / Basics | Pengenalan dan instalasi. |
| **SR-02-js-guide** | JavaScript Guide | Panduan naratif dari Pemula ke Mahir. |
| **SR-03-built-ins** | Standard Built-in Objects | Referensi lengkap API (Array, Object, dll). |
| **SR-04-expressions-operators** | Expressions & Operators | Logika evaluasi dan operator. |
| **SR-05-statements-declarations** | Statements & Declarations | Control flow dan deklarasi variabel. |
| **SR-06-functions** | Functions | Mekanika fungsi dan scope. |
| **SR-07-classes** | Classes | Paradigma OOP dan Inheritance. |
| **SR-08-iterators-generators** | Iterators & Generators | Protokol iterasi asinkron. |
| **SR-09-regular-expressions** | Regular Expressions | Parsing teks dan pencarian pola. |
| **SR-10-advanced** | Advanced Features | Metaprogramming (Proxy, Reflect). |

---

### 2. RAK-02-evolution (The History & Future)
Mendokumentasikan evolusi bahasa, proposal TC39, dan fitur ESNext yang akan datang.

### 3. RAK-03-core-spec (The Internal Logic / Spec-Rigor)
Dekonstruksi total terhadap **ECMA-262**. Fokus pada algoritma Abstract Operations dan Internal Slots.
- **Standards**: Wajib mengikuti 7-Point Advanced-Rack Standard.

### 4. RAK-04-runtimes (The Environments)
Eksplorasi lingkungan eksekusi: **Node.js**, **Bun**, dan **Deno**. Fokus pada Web APIs dan Event Loop spesifik runtime.

### 5. RAK-05-engines (The Machine Room)
Deep dive ke dalam **V8 Engine** dan mesin JS lainnya. Fokus pada JIT Compilation, Memory Management, dan Optimization.

---

## 📜 Hierarki Kedalaman (The 4-Level Depth)

Untuk memastikan konsistensi di 5 bahasa (JS, TS, PY, RU, GO), setiap Rak mengikuti hierarki:
1. **RAK** (Domain)
2. **SR** (Track)
3. **BK** (Book)
4. **CH** (Chapter)

---
*Log Perubahan: Seluruh 14-Rak (lama) telah dikonsolidasikan ke dalam struktur ini pada 2026-03-20.*
