# Legacy to Materi Mapping — JavaScript Knowledge Base

Dokumen ini memetakan rencana awal pemindahan dan restrukturisasi konten dari folder legacy `RAK-*` ke struktur perpustakaan baru `materi/00–17`.

---

## 📢 Status Pemetaan
* **Status:** `DRAFT / MAPPING AWAL`
* **Progres Fisik:** `BELUM DIMULAI`
* **Pembersihan/Penghapusan:** Folder materi lama (`RAK-*` di level root) **tidak boleh dihapus** dan dipertahankan seutuhnya sebagai legacy source.
* **Migrasi Berkas:** Tidak ada file yang dipindahkan atau diubah pada batch ini.

---

## 🧠 Prinsip Dasar Pemetaan (Mapping Principles)
1. **Rencana Awal:** Pemetaan ini bersifat fleksibel dan berfungsi sebagai panduan arah.
2. **Bukan Transfer 1:1:** Konten lama tidak harus dipindahkan secara mentah. Materi lama boleh dipecah, digabungkan, ditulis ulang, atau diperluas agar sesuai dengan domain ilmu yang dituju.
3. **Penyusunan Ulang & Penyempurnaan:** Beberapa bagian dari materi lama akan disempurnakan atau diperbarui sesuai standar kualitas baru saat migrasi berlangsung.
4. **Keputusan Akhir:** Keputusan final mengenai pemindahan konten tetap berada di tangan Room Chat 00.

---

## 🗺️ Tabel Pemetaan Awal (Legacy to Target Rak)

| Legacy Source Folder | Target Subfolder `materi/` | Deskripsi & Catatan Cakupan Bahasan |
| :--- | :--- | :--- |
| `RAK-01-introduction-essence/` | `materi/00-index-dan-jalur-belajar/`<br/>`materi/01-orientasi-sejarah-dan-fondasi-javascript/` | Pengenalan filosofi JavaScript, posisi industri, mental model dasar, dan navigasi jalur belajar. |
| `RAK-02-javascript-foundation/` | `materi/02-javascript-core-language/`<br/>`materi/03-scope-closure-this-dan-execution-context/`<br/>`materi/05-function-array-object-dan-built-in-api/` | Konstruksi dasar sintaksis, tipe data, lexical scope, closures, array, object manipulation, dan built-in API standard. |
| `RAK-03-evolution-esnext/` | `materi/01-orientasi-sejarah-dan-fondasi-javascript/`<br/>`materi/13-typescript-dan-modern-javascript-ecosystem/`<br/>`materi/17-berita-isu-dan-update-ekosistem/` | Evolusi standar ECMAScript (TC39), proposal fitur modern (ESNext), adopsi TypeScript, dan ekosistem terkurasi. |
| `RAK-04-core-specification/` | `materi/02-javascript-core-language/`<br/>`materi/03-scope-closure-this-dan-execution-context/`<br/>`materi/04-object-prototype-class-dan-inheritance/`<br/>`materi/11-performance-memory-dan-engine-internals/` | Bedah mendalam spesifikasi ECMA-262 (Lexical Environment, Type Coercion, Prototype Chain, Execution Context, Memory Heap). |
| `RAK-05-runtime-apis/` | `materi/06-async-promise-event-loop-dan-concurrency/`<br/>`materi/07-dom-browser-api-dan-web-platform/`<br/>`materi/09-nodejs-runtime-dan-server-side-javascript/` | Runtime boundary, browser web API, DOM manipulation, asynchronous programming (Promise, Event Loop), dan Node.js server runtime. |
| `RAK-06-engines-internals/` | `materi/11-performance-memory-dan-engine-internals/` | Internal dapur pacu JS Engine (V8 pipeline, Ignition, Sparkplug, Maglev, TurboFan, hidden classes, inline caching, Generational GC). |

---

## 🌀 Rak Target Tanpa Pemetaan Langsung (Materi Baru/Kurasi)
Subfolder di bawah ini merupakan domain baru yang membutuhkan materi baru, kurasi mendalam, atau penggabungan terdistribusi dari berbagai berkas di legacy source:
* **[materi/08-modules-package-json-npm-dan-tooling/](../../materi/08-modules-package-json-npm-dan-tooling/)** — Fokus pada manajemen modul (ESM vs CJS), Package.json, NPM, bundler, dan tools modern.
* **[materi/10-error-handling-debugging-dan-testing/](../../materi/10-error-handling-debugging-dan-testing/)** — Fokus pada mekanisme penanganan error, teknik debugging runtime, dan fondasi pengujian (unit/integration testing).
* **[materi/12-security-dan-safe-javascript/](../../materi/12-security-dan-safe-javascript/)** — Fokus pada celah keamanan (XSS, Prototype Pollution), sandboxing, dan penulisan Javascript yang aman.
* **[materi/14-practical-recipes-dan-patterns/](../../materi/14-practical-recipes-dan-patterns/)** — Fokus pada pola desain (Design Patterns) dan resep koding praktis untuk masalah sehari-hari.
* **[materi/15-real-project-cases/](../../materi/15-real-project-cases/)** — Bedah studi kasus proyek nyata dalam mengimplementasikan Javascript.
* **[materi/16-interview-test-dan-cheatsheet/](../../materi/16-interview-test-dan-cheatsheet/)** — Bank soal wawancara kerja (technical interview) dan cheatsheet cepat saji.

---

## 🚫 Kebijakan Larangan (Strict Boundaries)
* **DILARANG** menghapus folder legacy `RAK-*` apa pun pada batch ini.
* **DILARANG** memindahkan file dari folder legacy `RAK-*` pada batch ini.
* **DILARANG** menulis materi/penjelasan panjang lebar di dalam subfolder rak target pada batch ini.
* **DILARANG** menyatakan atau menandai rencana pemetaan ini sebagai status FINAL.
