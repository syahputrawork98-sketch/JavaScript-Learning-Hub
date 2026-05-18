# Legacy Migration & Deletion Plan — JavaScript Knowledge Base

Dokumen ini adalah rencana detail awal untuk memigrasikan dan membersihkan folder legacy `RAK-*`.

Status: **DRAFT / PLANNING**

> [!WARNING]
> Dokumen ini bukan izin untuk langsung menghapus folder legacy. Proses migrasi dan penghapusan fisik akan dijalankan bertahap sesuai batch yang disetujui secara resmi.

---

## 1. Tujuan

Rencana ini dibuat agar proses migrasi dari folder lama ke `materi/` berjalan aman, bertahap, dan tidak kehilangan materi penting.

Target akhirnya adalah repository yang lebih bersih, tetapi penghapusan legacy hanya boleh dilakukan setelah materi terkait sudah dikaji, ditulis ulang, direview, dan disetujui.

---

## 2. Prinsip Utama

*   **Jangan migrasi mentah-mentah.** Konversi teks tidak boleh dilakukan 1-ke-1 tanpa restrukturisasi mendalam.
*   **Jangan hapus massal.** Penghapusan folder lama harus dilakukan secara terukur per modul/topik.
*   **Jangan hapus sebelum materi dikaji.** Pastikan materi legacy dievaluasi kelayakannya terlebih dahulu.
*   **Jangan hapus sebelum target baru selesai.** Materi baru di folder `materi/` harus sudah aktif dan tuntas ditulis.
*   **Jangan hapus sebelum review Room Chat 01.** Diperlukan proses audit independen read-only sebelum file dimusnahkan.
*   **Jangan hapus sebelum keputusan Room Chat 00/User.** Persetujuan eksplisit tertulis dari owner adalah mutlak.
*   **Pecah, Gabung, atau Buang.** Materi lama boleh dipecah (*split*), digabung (*merge*), ditulis ulang (*rewrite*), atau dibuang (*drop*) jika usang.
*   **Gaya Standar Baru:** Penulisan materi baru harus mengikuti standardisasi pada [Material Content Standard](./material-content-standard.md).

---

## 3. Status Legacy Source

| Legacy Folder | Status | Catatan |
| :--- | :--- | :--- |
| `RAK-01-introduction-essence/` | Legacy Source | Belum dimigrasi, belum boleh dihapus. |
| `RAK-02-javascript-foundation/` | Legacy Source | Belum dimigrasi, belum boleh dihapus. |
| `RAK-03-evolution-esnext/` | Legacy Source | Belum dimigrasi, belum boleh dihapus. |
| `RAK-04-core-specification/` | Legacy Source | Belum dimigrasi, belum boleh dihapus. |
| `RAK-05-runtime-apis/` | Legacy Source | Belum dimigrasi, belum boleh dihapus. |
| `RAK-06-engines-internals/` | Legacy Source | Belum dimigrasi, belum boleh dihapus. |

---

## 4. Kategori Keputusan Materi

Setiap materi legacy nantinya harus diberi salah satu kategori keputusan awal berikut:

| Kategori | Arti |
| :--- | :--- |
| `REWRITE` | Materi dipakai sebagai bahan dasar, tetapi ditulis ulang total dengan standar baru. |
| `SPLIT` | Materi terlalu besar dan perlu dipecah ke beberapa bab/buku baru. |
| `MERGE` | Materi terlalu kecil/beririsan dan perlu digabung dengan materi lain. |
| `MOVE` | Materi cukup jelas dan bisa dipindah/diadaptasi ke target baru dengan sedikit penyesuaian. |
| `EXPAND` | Materi relevan tetapi perlu diperluas dengan tambahan detail teknis terbaru. |
| `DROP` | Materi tidak relevan, duplikatif, atau tidak cocok dengan arah arsitektur baru. |
| `HOLD` | Belum diputuskan, memerlukan analisis lebih mendalam. |

---

## 5. Mapping Detail Awal per Legacy Folder

Berikut adalah pemetaan rinci per subfolder legacy ke target rak baru di perpustakaan `materi/00-17`:

### 5.1 `RAK-01-introduction-essence/`

| Area/Subfolder Legacy | Target Rak/Buku Baru | Kategori Awal | Catatan |
| :--- | :--- | :--- | :--- |
| `BK-01_TheTenDayLegend` | `materi/01-orientasi-sejarah-dan-fondasi-javascript/` | `REWRITE` | Tulis ulang sebagai kisah sejarah Brendan Eich dan kelahiran JS dalam 10 hari. |
| `BK-02_EvolutionaryTimeline` | `materi/01-orientasi-sejarah-dan-fondasi-javascript/` | `MERGE` | Gabungkan dengan timeline sejarah evolusi di Buku 1. |
| `BK-03_PhilosophyVision` | `materi/01-orientasi-sejarah-dan-fondasi-javascript/` | `REWRITE` | Bahas filosofi bahasa ("backward compatibility" & "always bet on JS"). |
| `BK-04_CoreCharacteristics` | `materi/01-orientasi-sejarah-dan-fondasi-javascript/`<br/>`materi/02-javascript-core-language/` | `SPLIT` | Karakteristik dasar diorientasikan di Rak 01, detail teknis (dynamic typing, single-threaded) dipindah ke Rak 02. |
| `BK-05_ProsCons` | `materi/01-orientasi-sejarah-dan-fondasi-javascript/` | `MOVE` | Sangat cocok sebagai bab penutup orientasi umum. |
| `BK-06_LibraryOrientation` | `materi/00-index-dan-jalur-belajar/` | `MERGE` | Integrasikan dengan file index navigasi utama di Rak 00. |

### 5.2 `RAK-02-javascript-foundation/`

| Area/Subfolder Legacy | Target Rak/Buku Baru | Kategori Awal | Catatan |
| :--- | :--- | :--- | :--- |
| `SR-01-get-started` | `materi/02-javascript-core-language/` | `REWRITE` | Langkah awal instalasi runtime (Node/Bun) dan eksekusi hello-world sederhana. |
| `SR-02-js-guide` | `materi/02-javascript-core-language/` | `SPLIT` | Pecah menjadi bab-bab dasar sintaksis, deklarasi variabel, dan tipe data primitif. |
| `SR-03-built-ins` | `materi/05-function-array-object-dan-built-in-api/` | `SPLIT` | Pecah sesuai kategorisasi built-in API (Array, Object, String, Map/Set). |
| `SR-04-expressions-operators` | `materi/02-javascript-core-language/` | `REWRITE` | Tulis ulang dengan penekanan pada aturan *type coercion* di dalam ekspresi. |
| `SR-05-statements-declarations` | `materi/02-javascript-core-language/` | `SPLIT` | Pecah ke pembahasan control flow, perulangan, dan perbedaan `var`, `let`, `const`. |
| `SR-06-functions` | `materi/05-function-array-object-dan-built-in-api/`<br/>`materi/03-scope-closure-this-dan-execution-context/` | `SPLIT` | Deklarasi dasar fungsi ke Rak 05, behavior tingkat lanjut (*lexical scope, closure, this context*) ke Rak 03. |
| `SR-07-classes` | `materi/04-object-prototype-class-dan-inheritance/` | `REWRITE` | Bahas sintaksis class modern dengan dasar mental model Prototype di bawah layar. |
| `SR-08-iterators-generators` | `materi/05-function-array-object-dan-built-in-api/` | `EXPAND` | Perluas contoh penerapan praktis generator untuk custom async control flow. |
| `SR-09-regular-expressions` | `materi/05-function-array-object-dan-built-in-api/` | `MOVE` | Pindahkan ke dalam satu bab khusus pembahasan Regex terstruktur. |
| `SR-10-advanced` | `materi/02-javascript-core-language/`<br/>`materi/14-practical-recipes-dan-patterns/` | `SPLIT` | Mekanisme core advanced (Proxy, Reflect) masuk Rak 02, implementasi design patterns masuk Rak 14. |

### 5.3 `RAK-03-evolution-esnext/`

| Area/Subfolder Legacy | Target Rak/Buku Baru | Kategori Awal | Catatan |
| :--- | :--- | :--- | :--- |
| `SR-01-evolution-ecosystem` | `materi/13-typescript-dan-modern-javascript-ecosystem/` | `REWRITE` | Bahas sejarah dan evolusi transpilasi (Babel) dan kompilator modern. |
| `SR-02-modern-core-evolution` | `materi/01-orientasi-sejarah-dan-fondasi-javascript/` | `EXPAND` | Perluas dengan rangkuman fitur-fitur penting ECMAScript sejak ES6 sampai sekarang. |
| `SR-03-future-hub-proposals` | `materi/17-berita-isu-dan-update-ekosistem/` | `REWRITE` | Penjelasan komite TC39, alur tahapan proposal (Stages 0-4), dan proposal aktif. |
| `docs` | - | `DROP` | Dokumentasi legacy dihapus karena sudah digantikan oleh dokumen docs/project/ aktif. |

### 5.4 `RAK-04-core-specification/`

| Area/Subfolder Legacy | Target Rak/Buku Baru | Kategori Awal | Catatan |
| :--- | :--- | :--- | :--- |
| `SR-01-spec-foundations-mechanics`| `materi/02-javascript-core-language/` | `REWRITE` | Cara membaca spesifikasi ECMA-262 dan memahami operasi abstrak (*abstract operations*). |
| `SR-02-types-and-values-semantics`| `materi/02-javascript-core-language/` | `EXPAND` | Bedah mendalam algoritma konversi tipe data internal (e.g., `ToPrimitive`, `ToNumber`). |
| `SR-03-execution-context-realms`  | `materi/03-scope-closure-this-dan-execution-context/` | `SPLIT` | Pecah menjadi bab-bab *Execution Context*, *Call Stack*, dan *Lexical Environment*. |
| `SR-04-object-prototype-mechanics` | `materi/04-object-prototype-class-dan-inheritance/` | `REWRITE` | Tulis ulang dengan diagram interaktif *prototype link* `[[Prototype]]` dan properti descriptor. |
| `SR-05-grammar-and-control-flow`  | `materi/02-javascript-core-language/` | `MERGE` | Gabungkan penjelasan semantik spesifikasi tata bahasa ke bab control flow di Rak 02. |
| `SR-06-functional-blueprints`     | `materi/03-scope-closure-this-dan-execution-context/` | `MERGE` | Satukan pembahasan spesifikasi scope chain dan closure ke dalam Rak 03. |
| `SR-07-standard-built-ins-universe`| `materi/05-function-array-object-dan-built-in-api/` | `SPLIT` | Spesifikasi detail built-in internal disebarkan ke bab API terkait. |
| `SR-08-memory-resource-landscape` | `materi/11-performance-memory-dan-engine-internals/` | `MOVE` | Pindahkan ke domain manajemen memori dan performa di Rak 11. |
| `docs` | - | `DROP` | Dokumentasi spec legacy dibuang/tidak dimigrasi secara mentah. |

### 5.5 `RAK-05-runtime-apis/`

| Area/Subfolder Legacy | Target Rak/Buku Baru | Kategori Awal | Catatan |
| :--- | :--- | :--- | :--- |
| `SR-01_NodeJS` | `materi/09-nodejs-runtime-dan-server-side-javascript/`<br/>`materi/08-modules-package-json-npm-dan-tooling/` | `SPLIT` | API Inti (fs, path, events) ke Rak 09, modul (CommonJS vs ESM) ke Rak 08. |
| `SR-02_BunDeno` | `materi/09-nodejs-runtime-dan-server-side-javascript/` | `EXPAND` | Perluas dengan studi perbandingan runtime modern, kompatibilitas Node, dan Bun/Deno APIs. |
| `SR-03_WebStandards` | `materi/07-dom-browser-api-dan-web-platform/`<br/>`materi/06-async-promise-event-loop-dan-concurrency/` | `SPLIT` | DOM event propagation dan Web API ke Rak 07, Fetch API dan Streams mechanics ke Rak 06. |
| `SR-04_Parallelism` | `materi/06-async-promise-event-loop-dan-concurrency/` | `REWRITE` | Tulis ulang arsitektur konkurensi paralel (Web Workers, SharedArrayBuffer, Atomics). |

### 5.6 `RAK-06-engines-internals/`

| Area/Subfolder Legacy | Target Rak/Buku Baru | Kategori Awal | Catatan |
| :--- | :--- | :--- | :--- |
| `SR-01_V8Architecture` | `materi/11-performance-memory-dan-engine-internals/` | `REWRITE` | Visualisasikan JIT pipeline V8 terbaru (Ignition, Sparkplug, Maglev, TurboFan). |
| `SR-02_AlternativeEngines` | `materi/11-performance-memory-dan-engine-internals/` | `EXPAND` | Komparasikan JIT compiler pipeline milik JSC (Bun) dan SpiderMonkey (Firefox). |
| `SR-03_ObjectEfficiency` | `materi/11-performance-memory-dan-engine-internals/` | `REWRITE` | Sangat krusial. Bahas Shapes/Hidden Classes, Double Fields, dan optimasi Inline Caching (IC). |
| `SR-04_MemoryFabric` | `materi/11-performance-memory-dan-engine-internals/` | `EXPAND` | Perluas detail alokasi Heap (New/Old space) dan siklus kerja Generational GC (Scavenger, Major MC). |

---

## 6. Strategi Deletion Bertahap

Penghapusan folder legacy dilakukan melalui proses bertahap untuk memastikan keamanan data:

### Fase A — No Deletion (Status Sekarang)
*   Seluruh folder legacy `RAK-01` s/d `RAK-06` tetap utuh di root repositori.
*   Tidak ada modifikasi atau penghapusan fisik di folder lama.

### Fase B — Per Topik
*   Setelah satu topik/buku selesai ditulis ulang sesuai standar di `materi/` dan lolos review, berkas legacy terkait ditandai dengan status `MIGRATED`.
*   Berkas ditandai di dokumen pemetaan sebagai kandidat penghapusan.

### Fase C — Per Subfolder
*   Ketika seluruh isi dari sebuah subfolder legacy (misalnya `RAK-02-javascript-foundation/SR-09-regular-expressions/`) selesai dimigrasi 100% dan lolos audit read-only, subfolder tersebut dihapus secara fisik.

### Fase D — Per RAK
*   Setelah seluruh subfolder di dalam satu `RAK-*` legacy berhasil dipindahkan atau diselaraskan dengan target baru serta disetujui, folder rak tersebut (e.g., `RAK-01-introduction-essence/`) dihapus seutuhnya.

### Fase E — Final Legacy Cleanup
*   Setelah seluruh proses migrasi selesai 100%, root repositori dibersihkan sepenuhnya dari prefiks `RAK-*` lama, hanya menyisakan folder `materi/` dan folder `docs/` yang aktif.

---

## 7. Syarat Sebelum Delete

Penghapusan fisik berkas legacy hanya boleh dieksekusi jika mematuhi **6 Syarat Mutlak** berikut:

1.  **Kajian Kelayakan:** Materi lama sudah diulas kelayakannya dan ditentukan kategorinya.
2.  **Pemindahan Selesai:** Materi target baru di bawah `materi/` telah selesai ditulis penuh sesuai standar.
3.  **Pemetaan Tercatat:** Riwayat pemindahan asal dan target tercantum di dokumen pelacakan mapping.
4.  **Audit Independen:** Hasil migrasi materi baru telah diperiksa dan dinyatakan stabil melalui audit read-only oleh Room Chat 01.
5.  **Izin Eksplisit:** Room Chat 00 dan User telah memberikan keputusan eksplisit tertulis menyetujui penghapusan modul legacy terkait.
6.  **Eksekusi Bertahap:** Penghapusan dilakukan perlahan (tidak sekaligus) untuk mencegah kehilangan data akibat blunder tidak disengaja.

---

## 8. Urutan Prioritas Migrasi yang Disarankan

Untuk meminimalkan ketergantungan konseptual dan membangun pemahaman yang solid, berikut adalah rekomendasi prioritas urutan pelaksanaan migrasi materi:

1.  **Rak 03 Baru — Scope, Closure, This, dan Execution Context**
    *   *Alasan:* Topik ini adalah fondasi mental model terpenting untuk membedakan developer tingkat pemula dengan menengah. Sangat cocok sebagai pilot pertama.
2.  **Rak 02 Baru — JavaScript Core Language**
    *   *Alasan:* Memantapkan sintaksis dasar, tipe data, dan control flow sebelum masuk ke fitur spesifik lainnya.
3.  **Rak 06 Baru — Async, Promise, Event Loop, dan Concurrency**
    *   *Alasan:* Krusial untuk memahami sifat non-blocking JavaScript, call stack, microtask queue, dan macrotask queue.
4.  **Rak 04 Baru — Object, Prototype, Class, dan Inheritance**
    *   *Alasan:* Membongkar mekanisme relasi objek dan warisan prototype di bawah layar sebelum mempelajari modularitas.
5.  **Rak 07 / 09 Baru — Browser API dan Node.js Runtime**
    *   *Alasan:* Menerapkan core JS ke platform eksekusi (browser DOM vs server-side runtime).
6.  **Rak 11 Baru — Performance, Memory, dan Engine Internals**
    *   *Alasan:* Pembahasan tingkat lanjut mengenai bagaimana engine (V8) mengoptimalkan kode (Shapes, Inline Caching, heap memory allocation).
7.  **Rak 00 / 16 / 17 — Index, Interview, dan Update Ekosistem**
    *   *Alasan:* Dikerjakan setelah seluruh fondasi perpustakaan materi selesai untuk menyusun panduan jalur belajar dan technical interview prep.

> [!NOTE]
> Urutan prioritas ini bersifat fleksibel dan dapat disesuaikan kembali berdasarkan keputusan Room Chat 00.

---

## 9. Pilot yang Disarankan

Untuk menguji coba efektivitas [Material Content Standard](./material-content-standard.md) secara nyata, direkomendasikan pilot pertama dilakukan pada sub-rak berikut:

```text
materi/03-scope-closure-this-dan-execution-context/
  BK-01-scope-dan-lexical-environment/
```

### Alasan Pemilihan Pilot:
1.  **Esensial Konseptual:** Topik Scope & Lexical Environment merupakan gerbang utama untuk memahami Closure dan Execution Context.
2.  **Uji Coba Standar Baru:** Menjadi wadah yang sangat ideal untuk mempraktikkan gaya penulisan terstruktur (analogi ruangan, batas analogi, hingga diagram lexical scope chain).
3.  **Bebas Ketergantungan Eksternal:** Relatif mandiri dan tidak membutuhkan prasyarat runtime rumit, sehingga meminimalkan kompleksitas awal.

---

## 10. Status Rencana

Status: **DRAFT / PLANNING (PILOT STAGE ACTIVE)**

*   **Pilot Pertama Aktif:** Pilot buku pertama telah resmi dimulai pada sub-rak `materi/03-scope-closure-this-dan-execution-context/BK-01-scope-dan-lexical-environment/` untuk menguji coba efektivitas penulisan Material Content Standard secara nyata.
*   **Belum ada migrasi fisik massal** dari folder lama ke baru di luar pengerjaan 3 bab pilot ini.
*   **Belum ada deletion** terhadap file atau folder legacy `RAK-*`. Seluruh file legacy tetap utuh 100%.
