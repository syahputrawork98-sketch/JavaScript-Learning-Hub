# Bab 01: Script vs Module Semantics (Surat vs Paket)

Sebelum kita masuk ke kode `import`, kita harus memahami bahwa JavaScript memiliki dua mode eksekusi utama: **Script** (tradisional) dan **Module** (ESM). Keduanya memiliki aturan main yang sangat berbeda di tingkat Engine (Clause 16.1 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Script** adalah **Surat Terbuka**. Siapa pun bisa melihat isinya, dan informasi di dalamnya langsung bercampur dengan semua surat lain di atas meja global. **Module** adalah **Paket Tersegel**. Isinya rahasia dan terlindungi dalam kotaknya sendiri; informasi hanya bisa keluar jika kamu secara resmi "mengirimkan" (*Export*) dan "menerima" (*Import*)-nya.

> **Analogi Panjang (Sistem Apartemen):**  
> Bayangkan sebuah gedung apartemen:
> - **Script Mode**: Adalah aula utama (Global Scope). Jika kamu menaruh kursi di tengah aula, semua penghuni apartemen bisa melihat dan menggunakannya. Jika ada dua orang menaruh kursi dengan nama yang sama, mereka akan bertabrakan.
> - **Module Mode**: Adalah unit kamar masing-masing penghuni (Module Scope). Apa pun yang kamu taruh di dalam kamarmu tetap rahasia. Tetanggamu tidak tahu kamu punya kursi baru kecuali kamu membukakan pintu dan memberikannya secara resmi. Selain itu, setiap pintu kamar memiliki aturan kebersihan yang ketat (**Strict Mode**) secara otomatis.

---

## Perbedaan Utama

| Fitur | Script (Tradisional) | Module (ESM) |
| :--- | :--- | :--- |
| **Strict Mode** | Opsional (`"use strict"`) | **Wajib & Otomatis** |
| **Top-level Scope** | Global Scope | Module Scope (Privat) |
| **Parsing** | Evaluasi Langsung | Evaluasi Statis (Parsing dulu) |
| **Caching** | Tergantung Browser | **Di-cache otomatis** (Eksekusi 1x) |
| **Top-level `this`** | `window` (Browser) / `global` | `undefined` |

## Alur Eksekusi: Dari Teks ke Memori

Saat *Engine* menerima file Module, ia tidak langsung menjalankannya. Ia melakukan:
1. **Construction**: Mencari semua file dependensi yang di-import.
2. **Instantiation (Linking)**: Menyiapkan "kotak kosong" di memori untuk setiap nilai yang di-export dan menghubungkannya antar modul.
3. **Evaluation**: Barulah kode dijalankan untuk mengisi kotak-kotak kosong tersebut dengan nilai sebenarnya.

## Mengapa Arsitek Harus Peduli?

Seorang Arsitek harus tahu kapan menggunakan Module untuk memastikan:
- **Encapsulation**: Kode tidak sengaja merusak variabel global.
- **Predictability**: Karena berjalan dalam *Strict Mode*, error akan muncul lebih dini dan perilaku kode lebih mudah diprediksi.
- **Performance**: Modul memungkinkan browser untuk melakukan pemuatan secara paralel dan melakukan *Tree Shaking* (membuang kode yang tidak terpakai).

## Contoh Eksekusi
Lihat pembuktian isolasi scope dan perilaku `this` pada folder [examples/](./examples/).
