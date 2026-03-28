# BK-02: Async & Generators (Clause 15.5-15.8)

![Book Header](https://img.shields.io/badge/BK--02-ASYNC_GEN-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Sistem Penangguhan & Pemulihan: Bagaimana Hub Mengelola Alur Kerja yang Dapat Dijeda dan Dilanjutkan Secara Asinkron."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Spesifikasi mengenai objek fungsi khusus yang memiliki kemampuan untuk menangguhkan (**Suspend**) eksekusi context-nya dan menyimpannya dalam status "Suspended", untuk kemudian dilanjutkan (**Resume**) kembali. Mencakup integrasi asinkron melalui **Promises** dan mekanisme iterasi pada **Async Generators**.
- **Analogi**: Bayangkan sebuah **Video Game dengan Fitur Save/Load**. Fungsi biasa seperti game tanpa fitur save; sekali Anda mulai, Anda harus menyelesaikannya sampai akhir. **Generator** memungkinkan Anda menekan tombol "Pause" (`yield`), menyimpan seluruh status permainan Anda, dan mematikan konsol. Besoknya, Anda bisa memuat kembali (`next()`) dan melanjutkan tepat di titik yang sama. **Async/Await** seperti fitur auto-save yang menunggu proses pengunduhan asset selesai sebelum mengizinkan Anda lanjut ke level berikutnya.

---

## 🗺️ 2. Visual Logic: Suspension & Resumption

Protokol internal saat engine menemui instruksi `yield` atau `await`:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#FF0000'}}}%%
graph TD
    Exec["Executing Function Body"] --> Instruction{Instruction?}
    
    subgraph "Suspension Loop"
        Instruction -->|yield val| Suspend["Suspend Context"]
        Suspend --> Return["Return {value: val, done: false}"]
        Return -->|next() called| Resume["GeneratorResume"]
        Resume --> Exec
    end
    
    subgraph "Async Circuit"
        Instruction -->|await promise| AsyncSus["Check Promise State"]
        AsyncSus -->|Pending| Wait["Wait for Fulfillment"]
        Wait --> Fulfill["Resume with Result"]
        Fulfill --> Exec
    end

    style Instruction fill:#f7df1e,stroke:#333
    style Suspend fill:#fff,stroke:#ff0000
    style AsyncSus fill:#fff,stroke:#333
```

---

## 🏛️ 3. Strategic Chapters (Levels 5)

Mekanisme iterasi dan asinkron:

1.  **[CH-01: Foundations of Generators](./CH-01_Foundations/)**
    *Konsep Generator Functions, Iterator Protocol, dan internal method GeneratorResume.*
2.  **[CH-02: Async Iteration and Await](./CH-02_AsyncIteration/)**
    *Async Functions, Async Generators, dan sirkuit integrasi Promise (Await).*

---

## 🧠 4. Under-the-hood: The "Suspended" State
Saat fungsi generator melakukan `yield`, execution context-nya tidak dihancurkan (seperti pada fungsi biasa), melainkan dilepas dari **Execution Context Stack** dan disimpan di dalam objek generator. Status internalnya berubah menjadi `suspendedStart` atau `suspendedYield`. Saat `next()` dipanggil, context tersebut "ditempelkan" kembali ke atas stack, dan engine melanjutkan eksekusi dari instruksi tepat setelah `yield`.

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan Clause 15.5-15.8.
- [x] **Visual Logic**: Mermaid diagram untuk Suspension/Resumption.
- [x] **Mental Model**: Analogi "Save/Load Game".

---
*Buku Status: [x] Complete | [status.md](../../docs/status.md) | Kembali ke [SR-06](../README.md)*
