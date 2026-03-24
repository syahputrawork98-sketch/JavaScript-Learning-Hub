# CH-02: Dynamic Routing (On-Demand Sockets)

> **"Jalur modul runtime yang hanya dibuka saat energi memang dibutuhkan."**

**Source Hub**:
- [ECMA-262: Import Calls](https://tc39.es/ecma262/#sec-import-calls)

---

## 1. Mental Model: "The Plug-and-Play Socket"

`import()` adalah soket runtime:
- dapat dipanggil dari fungsi atau cabang kontrol,
- mengembalikan Promise,
- memungkinkan code splitting dan pemuatan tertunda.

---

## 2. Visualisasi Sistem: Dynamic Import Socket

```mermaid
graph TD
    Trigger[Runtime Trigger] --> ImportCall[import()]
    ImportCall --> Promise[Promise]
    Promise --> Module[Resolved Module Namespace]
```

---

## 3. Mekanisme & Hubungan

1. Dynamic import tidak ikut membentuk static import graph dengan cara yang sama seperti import biasa.
2. Karena berbasis Promise, ia terhubung langsung ke model asinkron JavaScript.
3. Ia cocok untuk fitur berat atau jarang dipakai, tetapi tetap punya biaya koordinasi jaringan dan latency.

---

## 4. Lab Praktis

Buka file `examples/01_dynamic_routing_lab.mjs` untuk melihat `import()` memuat konfigurasi hanya saat fungsi dipanggil.

---

## 5. Arsitek Mindset: Efisiensi Transmisi

- Gunakan dynamic import untuk mengurangi beban boot awal.
- Jangan menggunakannya sembarangan untuk dependency inti yang seharusnya selalu tersedia.
- Pikirkan trade-off antara startup cost dan runtime latency.

---
*Status: [x] Complete | [status.md](../../../docs/status.md)*
