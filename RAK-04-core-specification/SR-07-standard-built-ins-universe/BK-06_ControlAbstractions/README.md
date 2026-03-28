# BK-06: Control Abstractions (Clause 26-27)

![Book Header](https://img.shields.io/badge/BK--06-CONTROL-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Orkestrasi Alur: Bagaimana Hub Mengelola Janji Masa Depan (Promises) dan Mengatur Ritme Iterasi Melalui Protokol Kontrol yang Canggih."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Spesifikasi mengenai objek abstraksi kontrol yang menunda atau mengatur eksekusi kode. Mencakup objek **Promise** (manajemen operasi asinkron), serta **Iteration Protocols** yang diimplementasikan melalui Iterators dan Generators.
- **Analogi**: Bayangkan sebuah **Restoran Cepat Saji**. **Promise** adalah alat pemanggil (pager) yang Anda terima setelah memesan makanan. Pager tersebut memiliki status: menunggu (**Pending**), pesanan siap (**Fulfilled**), atau stok habis (**Rejected**). **Iterator** adalah antrean pelanggan di depan kasir; kasir melayani mereka satu demi satu (`next()`) hingga antrean habis. **Generator** adalah koki yang bisa menghentikan masakannya untuk menjawab telepon (`yield`), lalu melanjutkan masakannya kembali dari titik yang sama.

---

## 2. Visual Logic: The Promise State Lifecycle

Sikuit internal transisi status pada objek Promise:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#FF0000'}}}%%
graph TD
    Init["New Promise (Constructor)"] --> Pending["State: PENDING"]
    
    subgraph "The Resolution Path"
        Pending -->|resolve(val)| Fulfilled["State: FULFILLED"]
        Pending -->|reject(err)| Rejected["State: REJECTED"]
    end
    
    subgraph "Reaction Chain"
        Fulfilled --> Then[".then() Reaction"]
        Rejected --> Catch[".catch() Reaction"]
    end

    style Pending fill:#f7df1e,stroke:#333
    style Fulfilled fill:#a8e6cf,stroke:#333
    style Rejected fill:#fff,stroke:#ff0000
```

---

## 🏛️ 3. Strategic Chapters (Levels 5)

Abstraksi kontrol dan iterasi:

1.  **[CH-01: Promise Objects and Lifecycle](./CH-01_ControlPromises/)**
    *Infrastruktur asinkron: Status internal, Job Queue, dan resolusi sirkuit Promise.*
2.  **[CH-02: Iteration and Generator Mechanics](./CH-03_FuturePromises/)**
    *Protokol Iterasi, Generator Objects, dan aliran asinkron (Async Iteration).*

---

## 🧠 4. Under-the-hood: The "Thenable" Catch
Hub tidak hanya mengenali objek `Promise` asli, tetapi juga segala hal yang memiliki metode `.then()` yang berperilaku sama (disebut **Thenable**). Saat Anda melakukan `Promise.resolve(obj)`, Hub akan melakukan pemeriksaan "Duck Typing": jika `obj` memiliki `.then`, Hub akan mencoba mengonsumsinya sebagai janji asinkron. Inilah yang memungkinkan interoperabilitas antar berbagai library Promise di ekosistem Hub.

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan Clause 26-27 (Promise, Iterators).
- [x] **Visual Logic**: Mermaid diagram untuk Promise State Lifecycle.
- [x] **Consolidation**: Penggabungan materi Promise yang sebelumnya tersebar di BK-07.

---
*Buku Status: [x] Complete | [status.md](../../docs/status.md) | Kembali ke [SR-07](../README.md)*
