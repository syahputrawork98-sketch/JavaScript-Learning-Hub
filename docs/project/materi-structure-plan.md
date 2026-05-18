# Rencana Struktur Rak Materi — JavaScript Knowledge Base

Dokumen ini merinci rencana struktur folder (rak) perpustakaan baru untuk JavaScript Knowledge Base. Struktur ini dirancang khusus berdasarkan karakteristik, spesifikasi, dan ekosistem bahasa pemrograman JavaScript.

---

## 1. Daftar Rak Pembelajaran JavaScript (Rak 00 - 17)

Berikut adalah 18 rak terstruktur yang direncanakan untuk dibangun:

| Nomor Rak | Nama Rak Folder | Cakupan / Pembahasan Singkat |
| :--- | :--- | :--- |
| **00** | `00-index-dan-jalur-belajar` | Peta navigasi utama, daftar isi, kurikulum, dan rekomendasi jalur belajar (learning paths). |
| **01** | `01-orientasi-sejarah-dan-fondasi-javascript` | Sejarah lahirnya JS, evolusi ECMAScript, cara kerja engine secara high-level, dan fondasi dasar sebelum coding. |
| **02** | `02-javascript-core-language` | Tipe data (primitives vs objects), variabel (var/let/const), operator, control flow, dan manipulasi data dasar. |
| **03** | `03-scope-closure-this-dan-execution-context` | Cara kerja compiler/interpreter, global & local scope, lexical scope, closures, keyword `this`, dan execution context. |
| **04** | `04-object-prototype-class-dan-inheritance` | Paradigma OOP di JS, prototype chaining, object creation patterns, ES6 classes, inheritance, dan encapsulation. |
| **05** | `05-function-array-object-dan-built-in-api` | First-class functions, higher-order functions, destructuring, array methods (map/filter/reduce), Map & Set, dan built-in global objects. |
| **06** | `06-async-promise-event-loop-dan-concurrency` | Asynchronous programming, callbacks, Promises, async/await, concurrency model, Event Loop, Microtask vs Macrotask queue. |
| **07** | `07-dom-browser-api-dan-web-platform` | Interaksi dengan Web API, DOM tree manipulation, event handling/bubbling/capturing, Browser Storage (Local/Session/Cookies), dan Fetch API. |
| **08** | `08-modules-package-json-npm-dan-tooling` | Modul di JS (CommonJS vs ESM), cara kerja `package.json`, pengelolaan dependensi dengan npm/yarn/pnpm, bundlers (Vite/Webpack), dan transpilers (Babel). |
| **09** | `09-nodejs-runtime-dan-server-side-javascript` | Pengenalan Node.js runtime, arsitektur event-driven, core modules (fs, path, http), REST API basics, dan server-side JS. |
| **10** | `10-error-handling-debugging-dan-testing` | Teknik penanganan error (try/catch, custom errors), debugging tools (DevTools, VS Code), unit testing, integration testing, dan tools (Jest/Vitest). |
| **11** | `11-performance-memory-dan-engine-internals` | Analisis performa, Garbage Collection, memory leaks prevention, cara kerja V8 Engine (JIT Compiler, Ignition, TurboFan), dan code optimization. |
| **12** | `12-security-dan-safe-javascript` | Isu keamanan JS (XSS, CSRF, prototype pollution), secure coding practices, strict mode (`"use strict"`), dan safe dependencies. |
| **13** | `13-typescript-dan-modern-javascript-ecosystem` | Pengenalan TypeScript (static typing, interfaces, types), tsc compiler, linting (ESLint, Prettier), dan tren modern. |
| **14** | `14-practical-recipes-dan-patterns` | Kumpulan design patterns populer di JS (Singleton, Factory, Observer, Module), tips & tricks coding harian, dan clean-code guidelines. |
| **15** | `15-real-project-cases` | Studi kasus nyata pemecahan masalah di dunia kerja, best practices arsitektur, dan studi kasus skalabilitas. |
| **16** | `16-interview-test-dan-cheatsheet` | Kumpulan soal interview teknis (mudah s/d sulit), tips lolos coding test JS, dan lembar contekan cepat (cheatsheet). |
| **17** | `17-berita-isu-dan-update-ekosistem` | Dokumentasi kurasi mengenai berita terbaru, proposal TC39, ECMAScript specs update, dan perubahan ekosistem runtime. |

---

## 2. Catatan Implementasi Awal

> [!NOTE]
> * **Rencana Awal:** Struktur ini adalah rancangan blueprint awal. Susunan rak dapat disempurnakan lebih lanjut oleh Room Chat 00 seiring dengan perkembangan analisis.
> * **Fisik Rak Terbentuk:** Seluruh 18 subfolder rak fisik (00 s/d 17) beserta placeholder `README.md` telah sukses diinisialisasi pada Batch 2 di bawah folder `materi/`.
> * **Belum Ada Migrasi Materi:** Proses pemindahan file materi dari folder lama (`RAK-*`) belum dimulai dan masih berstatus sebagai bahan dasar (legacy source) aman.

