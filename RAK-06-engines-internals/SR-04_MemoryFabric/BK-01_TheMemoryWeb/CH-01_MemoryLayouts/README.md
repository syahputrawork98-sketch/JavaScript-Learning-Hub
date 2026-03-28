# CH-01: Memory Layouts (Stack vs Heap)

![Chapter Header](https://img.shields.io/badge/CH--01-MEMORY_LAYOUTS-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Arsitektur Penyimpanan: Memahami Perbedaan Fisik Antara Stack dan Heap di Dalam Mesin JavaScript."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Struktur organisasi memori di V8 di mana **Stack** digunakan untuk penyimpanan data primitif dan execution context frames yang bersifat LIFO (Last-In-First-Out), sementara **Heap** digunakan untuk penyimpanan objek dinamis berukuran besar yang membutuhkan manajemen memori yang lebih kompleks (GC).
- **Analogi**: Bayangkan **Meja Kerja (Stack)** dan **Gudang (Heap)**. Meja kerja Anda terbatas (Stack) namun sangat cepat diakses; Anda meletakkan pulpen, kertas, dan kalkulator (Primitif) di sana. Gudang (Heap) sangat luas namun butuh waktu untuk mengambil barang; Anda menyimpan kotak-kotak besar (Objects) di sana dan memberikan catatan (Pointer) di meja kerja Anda tentang lokasi kotak tersebut di gudang.

---

## 🗺️ 2. Visual Logic: Memory Segment Partitioning

Pembagian tugas antara Stack dan Heap:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#800080'}}}%%
graph TD
    subgraph "V8 Memory Management"
        Stack["The Stack (LIFO)"]
        Heap["The Heap (Random Access)"]
    end

    subgraph "Stack Elements"
        Stack --- P1["Primitives (Number, Boolean)"]
        Stack --- P2["Pointers (to Heap Objects)"]
        Stack --- P3["Execution Context Frames"]
    end

    subgraph "Heap Elements"
        Heap --- O1["Objects (Object, Array)"]
        Heap --- O2["Closures (Lexical Scopes)"]
        Heap --- O3["Raw Bytecode"]
    end

    style Stack fill:#fff,stroke:#333
    style Heap fill:#800080,stroke:#fff,color:#fff
```

---

## 🏛️ 3. Under-the-hood: Stack Allocation vs Heap Fragmentation
Alokasi pada **Stack** bersifat instan (hanya menggerakkan pointer stack). Namun, **Heap** jauh lebih rumit karena alokasi terjadi secara acak, yang menyebabkan Fragmentasi seiring waktu. Itulah sebabnya V8 membutuhkan Garbage Collector untuk melakukan **Compaction** (merapikan memori) agar tidak ada celah kosong yang terbuang sia-sia di antara objek-objek.

---

## 📜 4. Architect's Principles (PPM V4)

1. **Stack for Speed**: Gunakan variabel lokal dan primitif sesering mungkin untuk memanfaatkan kecepatan alokasi stack.
2. **References are Heavy**: Ingatlah bahwa setiap objek besar di Heap hanya direpresentasikan oleh sebuah pointer (8 byte) pada stack. Menghapus referensi pada stack adalah kunci agar GC bisa membersihkan heap.
3. **Avoid Large Heap Allocation in Loops**: Alokasi objek di dalam loop yang intensif akan memaksa GC bekerja lebih keras (GC Thrashing).

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan V8 Core Memory structures.
- [x] **Visual Logic**: Mermaid diagram partisi memori.
- [x] **Mental Model**: Analogi "Meja Kerja & Gudang".

---
*Status Bab: [x] Full Hardened | [status.md](../../status.md) | Kembali ke [BK-01](../README.md)*
