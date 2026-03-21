# CH-02: ES Modules (The Universal Standard)

> **"ES Modules (ESM) adalah standar modul resmi JavaScript yang dirancang untuk berjalan secara asinkron, mendukung analisis statis, dan bekerja secara universal baik di browser maupun server."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- **Technical Reference**: [ECMA-262 - Module Semantics](https://tc39.es/ecma262/#sec-modules)

## 🎓 Senior Terminology
- **`import` & `export`**: Kata kunci standar yang digunakan untuk mengelola ketergantungan antar modul dalam ekosistem ESM.
- **Asynchronous Loading**: Kemampuan ESM untuk memuat modul secara paralel tanpa memblokir eksekusi sirkuit utama.
- **Static Analysis (Tree Shaking)**: Fitur yang memungkinkan alat pembangun (bundlers) untuk mendeteksi dan menghapus kode yang tidak terpakai dari modul sebelum dikirim ke sistem.

## 1. Mental Model: "The Optical Network"

Bayangkan **ES Modules (ESM)** sebagai **Jaringan Serat Optik** modern. Berbeda dengan sistem kotak gudang (CommonJS), ESM mengirimkan data dalam bentuk sinyal cahaya yang mengalir secara paralel (asinkron). Sebelum energi benar-benar mengalir, sistem melakukan pemindaian laser (Analisis Statis) untuk memetakan seluruh koneksi. Ini memungkinkan sistem untuk mematikan kabel yang tidak terpakai (**Tree Shaking**) agar pengiriman energi jauh lebih efisien.

![ESM Network](./assets/esm_network.svg)

---

## 2. Mengekspor Sinyal (`export`)

Ada dua jenis pengiriman dalam jaringan ESM:
1.  **Named Export**: Mengirim beberapa komponen spesifik dari satu modul.
2.  **Default Export**: Mengirim satu komponen utama sebagai identitas modul tersebut.

```javascript
// tools.js
export const drill = () => {}; // Named
export default function mainHub() {} // Default
```

---

## 3. Mengimpor Sinyal (`import`)

Anda mengimpor sinyal di bagian paling atas file (biasanya). Karena ESM bersifat statis, Anda tidak bisa mengimpor di dalam perintah `if`.

```javascript
import mainHub, { drill } from './tools.js';
```

---

## 4. Keunggulan Arsitektural ESM

- **Tree Shaking**: Bundler (seperti Webpack/Rollup) bisa membuang fungsi yang Anda ekspor tapi tidak pernah diimpor di tempat lain, mengecilkan ukuran Hub Anda.
- **Top-level Await**: Anda bisa menggunakan `await` langsung di tingkat modul tanpa perlu membungkusnya dalam fungsi `async`.
- **Strict Mode**: Semua file ESM secara otomatis berjalan dalam "Strict Mode" demi keamanan Hub.

---

## Arsitek Mindset: ESM vs CJS

Sebagai arsitek modern, **selalu prioritaskan ESM** untuk proyek baru. ESM adalah masa depan JavaScript yang bekerja secara universal di browser dan server. Gunakan CommonJS hanya jika Anda berurusan dengan library warisan (*Legacy*) yang belum mendukung standar optik ini.

---

## Hands-on: Lab Jaringan Optik
Buka file `examples/esm_lab.js` untuk melihat bagaimana kita membangun sistem modular yang bersih menggunakan `import` dan `export` serta membuktikan efek Tree Shaking pada sirkuit Hub.

---
*Back to [Module Systems](../README.md)*
