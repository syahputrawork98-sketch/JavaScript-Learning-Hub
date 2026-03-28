# SR-04: Memory Fabric (Heap & GC)

![Hub Header](https://img.shields.io/badge/RAK--06-MEMORY_FABRIC-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Arsitek Memori: Membedah Struktur Heap V8 dan Mekanisme Garbage Collection yang Menjaga Aplikasi Tetap Ringan dan Cepat."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Hub manajemen memori tingkat rendah di V8 yang mengatur alokasi objek pada **Heap** dan pembersihan memori otomatis melalui **Garbage Collection**. Menggunakan strategi **Generational Collection** (New Space vs Old Space) dan algoritma **Orinoco** untuk performa non-blocking.
- **Analogi**: Bayangkan **Manajemen Hotel (Memory Management)**. Kamar-kamar hotel (Memory Slots) disediakan untuk tamu (Objects). Tamu yang baru datang diletakkan di sayap "Short Stay" (**New Space**). Jika mereka menginap lama, mereka dipindahkan ke President Suite (**Old Space**). Staf kebersihan (**Garbage Collector**) selalu berkeliling untuk membersihkan kamar yang sudah kosong tanpa mengganggu tamu yang sedang tidur (Concurrent GC).

---

## 🗺️ 2. Visual Logic: V8 Heap Layout

Segmentasi memori fisik di dalam Engine V8:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#800080'}}}%%
graph TD
    subgraph "V8 Managed Heap"
        NS["New Space (Young Gen)"] --- OS["Old Space (Old Gen)"]
        OS --- LOS["Large Object Space"]
        LOS --- CS["Code Space (JIT)"]
    end
    
    Stack["The Stack (Primitive/Frames)"] --- NS

    subgraph "GC Strategy"
        NS -->|Promote| OS
        NS -.->|Scavenger| NS
        OS -.->|Major GC (Mark-Compact)| OS
    end

    style NS fill:#fff,stroke:#333
    style OS fill:#800080,stroke:#fff,color:#fff
    style Stack fill:#fff,stroke:#ccc,stroke-dasharray: 5 5
```

---

## 🏛️ 3. Strategic Books (Levels 4)

Pilar manajemen memori:

- **[BK-01: Generational Heap Logic](./BK-01_TheMemoryWeb/)**: Bedah layout memori dan siklus hidup objek.
- **[BK-02: Orinoco GC](./BK-02_Orinoco/)**: Mekanisme Garbage Collection modern (Parallel, Incremental, Concurrent).

---

## 🧠 4. Under-the-hood: The "Generational" Hypothesis
V8 bekerja berdasarkan hipotesis bahwa **"sebagian besar objek mati dalam waktu sangat singkat"**. Itulah mengapa V8 membagi Heap menjadi **New Space** (kecil, pembersihan sangat cepat) dan **Old Space** (besar, pembersihan berat). Objek hanya akan dipindahkan ke Old Space jika mereka berhasil bertahan melewati dua kali siklus pembersihan di New Space.

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan V8 Orinoco & Heap Layout specs.
- [x] **Visual Logic**: Mermaid diagram segmentasi heap.
- [x] **Mental Model**: Analogi "Manajemen Hotel & Sayap Kamar".

---
*Status Dokumen: [x] Full Hardened | [status.md](../../status.md) | Kembali ke [RAK-06](../README.md)*
