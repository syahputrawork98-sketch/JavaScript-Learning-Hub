# JavaScript Knowledge Base

![JavaScript Knowledge Base Hero](./assets/branding/hero.png)

> **"Mastering the Web's Kinetic Hub: From Syntax Fuel to Engine Combustion."**

---

## 📢 PENGUMUMAN PENTING: FASE REBUILD / RESTRUCTURE

Repositori ini sedang menjalani **Fase Pembangunan Ulang & Restrukturisasi Besar (Rebuild & Restructure Phase)**. 
Tujuan utama fase ini adalah menyelaraskan kerapian struktur folder dan manajemen workflow mengikuti standar profesional **PostgreSQL Knowledge Base**.

> [!IMPORTANT]
> * **PostgreSQL Knowledge Base** HANYA digunakan sebagai acuan keindahan visual, kerapian tata kelola dokumen kontrol, dan pola `materi/` yang terstruktur. PostgreSQL Knowledge Base **BUKAN** cetakan isi materi. Struktur rak di repositori ini dirancang khusus berdasarkan domain pemrograman JavaScript.
> * **Pusat Kontrol Baru:** Seluruh keputusan, kebijakan scope, alur kerja, dan status aktif dipusatkan di [docs/project/](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/).
> * **Pusat Pembelajaran Baru:** Seluruh materi pembelajaran dirombak bertahap ke dalam folder [materi/](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/).
> * **Folder Legacy:** Folder lama (`RAK-01` s/d `RAK-06`) dipertahankan seutuhnya di level root sebagai **Legacy Source** / bahan migrasi, dan **tidak boleh dihapus** sebelum proses verifikasi selesai.
> * **Status Program (HOLD):** Sektor server, client, database, auth, atau aplikasi frontend/backend berstatus **HOLD** dan ditangguhkan dari ruang lingkup saat ini.

---

## 🏛️ Misi Arsitek JavaScript

**JavaScript** bukan sekadar bahasa scripting biasa; ia adalah runtime asinkron tangguh yang menjadi motor penggerak internet modern. Repositori ini berfungsi sebagai perpustakaan belajar pribadi untuk melakukan dekonstruksi mendalam terhadap ekosistem tersebut melalui prinsip **Spec-Rigor** terhadap spesifikasi resmi **ECMA-262**.

Di sini, fokus utama kita bukan hanya "cara menggunakan sintaks", melainkan membedah secara fundamental *mengapa* sebuah instruksi berperilaku tertentu di level mesin dan bagaimana ia diproses di dalam *Execution Context*.

---

## 🧠 Core DNA: The Event Loop

Mekanisme orkestrasi asinkron JavaScript divisualisasikan secara dinamis melalui siklus Event Loop:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph LR
    A[Task Queue] --> B{Event Loop}
    C[Microtask Queue] --> B
    B --> D[Call Stack]
    D --> E[Rendering/Web API]
    E --> A
    E --> C
    style B fill:#f7df1e,stroke:#333,stroke-width:4px
```

---

## 🗄️ Arsitektur Pusat Kontrol & Pembelajaran Baru

Proyek rebuild ini membagi repositori menjadi dua area utama yang bersih dan teratur:

### 1. Pusat Kontrol Proyek — [docs/project/](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/)
Area ini memuat berkas-berkas pengarah masa depan proyek agar pengerjaan tetap teratur bebas dari blunder teknis:
* [add-instruksi-chatgpt-project.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/add-instruksi-chatgpt-project.md) — Salinan portable ChatGPT Project Add Instructions.
* [room-context-summary.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/room-context-summary.md) — Ringkasan cepat untuk sinkronisasi Room Chat baru.
* [current-status.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/current-status.md) — Pelacak status terkini pengerjaan real-time.
* [workflow.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/workflow.md) — Definisi peran kolaborasi dan alur riset-penulisan (PPM V4).
* [scope-guard.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/scope-guard.md) — Penjaga batasan ketat pencegah scope creep dan standar kualitas estetika.
* [roadmap-active.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/roadmap-active.md) — Peta tahapan pengerjaan Batch 1 hingga Batch 5.
* [materi-structure-plan.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/materi-structure-plan.md) — Cetak biru pembagian 18 rak pembelajaran baru.
* [migration-policy.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/docs/project/migration-policy.md) — Kebijakan keselamatan transfer data dari legacy source.

### 2. Perpustakaan Pembelajaran — [materi/](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/)
Wadah pembelajaran baru yang tersusun rapi menjadi 18 rak bertahap dari tingkat orientasi dasar hingga tingkat internal mesin (Engine Internals):
* [00 — Index dan Jalur Belajar](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/00-index-dan-jalur-belajar/README.md)
* [01 — Orientasi Sejarah dan Fondasi JavaScript](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/01-orientasi-sejarah-dan-fondasi-javascript/README.md)
* [02 — JavaScript Core Language](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/02-javascript-core-language/README.md)
* [03 — Scope, Closure, This, dan Execution Context](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/03-scope-closure-this-dan-execution-context/README.md)
* [04 — Object, Prototype, Class, dan Inheritance](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/04-object-prototype-class-dan-inheritance/README.md)
* [05 — Function, Array, Object, dan Built-In API](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/05-function-array-object-dan-built-in-api/README.md)
* [06 — Async, Promise, Event Loop, dan Concurrency](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/06-async-promise-event-loop-dan-concurrency/README.md)
* [07 — DOM, Browser API, dan Web Platform](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/07-dom-browser-api-dan-web-platform/README.md)
* [08 — Modules, Package.json, NPM, dan Tooling](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/08-modules-package-json-npm-dan-tooling/README.md)
* [09 — Node.js Runtime dan Server-Side JavaScript](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/09-nodejs-runtime-dan-server-side-javascript/README.md)
* [10 — Error Handling, Debugging, dan Testing](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/10-error-handling-debugging-dan-testing/README.md)
* [11 — Performance, Memory, dan Engine Internals](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/11-performance-memory-dan-engine-internals/README.md)
* [12 — Security dan Safe JavaScript](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/12-security-dan-safe-javascript/README.md)
* [13 — TypeScript dan Modern JavaScript Ecosystem](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/13-typescript-dan-modern-javascript-ecosystem/README.md)
* [14 — Practical Recipes dan Patterns](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/14-practical-recipes-dan-patterns/README.md)
* [15 — Real Project Cases](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/15-real-project-cases/README.md)
* [16 — Interview Test dan Cheatsheet](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/16-interview-test-dan-cheatsheet/README.md)
* [17 — Berita, Isu, dan Update Ekosistem](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/materi/17-berita-isu-dan-update-ekosistem/README.md)

---

## 📈 Status Global & Pelacakan
Progress detail dari pengerjaan proyek rebuild dapat terus ditinjau pada [status.md](file:///i:/Workspace/Workspace-Syahputrawork/01-Language-Hubs-Workspace/JavaScript-Knowledge-Base/status.md) di level root.

---
*Created with ❤️ by ECMAScript Core Language Architect.*
