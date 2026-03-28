# CH-04: Dynamic Routing (The Orchestrator)

![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Rute Dinamis: Mekanisme `import()` yang Memungkinkan Pemuatan Modul Secara On-Demand Selama Runtime."**

---

## 🌐 Source Hub
- **Parent Book**: [BK-06: Loading and Transmission](../README.md)
- **Primary Source**: [ECMA-262: Import Calls (Clause 13.3.10)](https://tc39.es/ecma262/#sec-import-calls)

---

## 🌓 1. Essence: The Narrative

### The Async Bridge
Berbeda dengan `import` statis yang harus diselesaikan sebelum eksekusi, **Dynamic Import** (`import()`) adalah fungsi asinkron yang mengembalikan **Promise**. Ini memungkinkan pengembang untuk memuat modul hanya saat dibutuhkan (Lazy Loading), misalnya saat user mengklik menu tertentu atau saat kondisi logika tertentu terpenuhi.

### Runtime Flexibility
Karena bersifat dinamis, specifier (jalur modul) bisa berupa variabel atau hasil kalkulasi string. Ini memberikan fleksibilitas luar biasa di sisi runtime, namun harus digunakan dengan hati-hati agar tidak mengorbankan performa akibat pemuatan yang terlalu sering atau pembengkakan jumlah request.

---

## 🗺️ 2. Visual Logic: Dynamic Loading Lifecycle

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph LR
    Exec[Runtime Execution] --> Call[import('./feature.js')]
    Call --> Pending[Promise: Pending]
    Pending --> Host[Host: Fetch & Parse]
    Host --> Link[Link Module Record]
    Link --> Eval[Evaluate Module]
    Eval --> Resolve[Promise: Resolved with Namespace]

    style Call fill:#e1f5fe,stroke:#333
    style Resolve fill:#c8e6c9,stroke:#333
```

---

## ⚙️ 3. Spec-Internals: The Import Promise

Saat `import()` dipanggil, engine melakukan operasi internal berikut:
1.  **HostLoadImportedModule**: Meminta host untuk mengambil modul. Jika modul sudah ada di cache (Module Map), ia langsung menggunakan yang ada.
2.  **ModuleNamespace**: Jika berhasil, Promise akan di-resolve dengan **Module Namespace Exotic Object** yang berisi semua ekspor dari modul tersebut.
3.  **Error Handling**: Jika gagal (misal: 404), Promise akan direject dengan `TypeError`.

---

## 🧪 4. The Lab: Discovery Specimens

Eksperimen Pemuatan Dinamis:
1.  **[examples/lazy_loading_specimen.js](../../../../../examples/lazy_loading_specimen.js)**: Implementasi pemuatan fitur berdasarkan interaksi pengguna.
2.  **[examples/dynamic_path_lookup.js](../../../../../examples/dynamic_path_lookup.js)**: Demonstrasi penggunaan variabel sebagai specifier dalam `import()`.

---

## 🧠 5. Arsitek Mindset: Orkestrasi On-Demand
Sebagai arsitek, gunakan **Dynamic Routing** untuk strategi **Code Splitting**. Pisahkan fitur-fitur besar atau jarang digunakan dari bundle utama (Vendor/Main Hub) dan muat mereka secara dinamis. Ini adalah teknik paling efektif untuk menjaga agar *Initial Payload* aplikasi tetap kecil, sehingga "Transmission" dari server ke client berlangsung sangat instan.

---
*Status: 🟢 Gold Standard | Kembali ke [BK-06](../README.md)*
