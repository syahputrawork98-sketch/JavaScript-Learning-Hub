# CH-01: Memory Layout (Stack vs Heap)

Mesin JavaScript membagi memori menjadi dua area utama dengan mekanisme manajemen yang sangat berbeda untuk efisiensi eksekusi.

## 🧱 The Stack (Static Memory)
Stack adalah tempat penyimpanan data yang ukurannya sudah pasti dan masa hidupnya singkat (sesuai siklus fungsi).
- **Isi**: Nilai primitif (Number, String intern, Boolean) dan pointer/referensi ke objek di heap.
- **Mekanisme**: LIFO (Last-In-First-Out). Sangat cepat diakses secara hardware.

## 🌳 The Heap (Dynamic Memory)
Heap adalah area memori besar yang tidak terstruktur untuk data yang ukurannya dinamis atau masa hidupnya lama.

```mermaid
graph TD
    M[Total Memory] --> S[Stack: Local Vars & Pointers]
    M --> H[Heap: Objects & Closures]
    subgraph "V8 Heap Spaces"
        H --> NS[New Space / Young Gen]
        H --> OS[Old Space / Old Gen]
        H --> LOS[Large Object Space]
        H --> CS[Code Space: Compiled JIT]
    end
    
    style S fill:#ecf0f1,stroke:#333
    H fill:#3498db,stroke:#333,color:#fff
```

## 📊 V8 Heap Segmentation
V8 memecah heap menjadi beberapa bagian (Spaces) untuk optimasi Garbage Collection:
1. **New Space (Young Generation)**: Tempat objek baru lahir. Sangat dinamis dan sering dibersihkan.
2. **Old Space (Old Generation)**: Tempat objek yang "selamat" dari beberapa kali siklus pembersihan di New Space.
3. **Large Object Space**: Untuk objek yang terlalu besar untuk New Space.
4. **Map Space & Cell Space**: Untuk metadata internal.

> [!IMPORTANT]
> **Internalist Insight**: Objek di JavaScript tidak pernah disimpan di Stack. Stack hanya menyimpan "kunci" (pointer). Isinya selalu ada di Heap. Inilah mengapa mengubah properti objek tidak mengubah referensi aslinya.

---
*Lihat Lab: [Bedah Memori](./examples/memory_anatomy.js)*  
*Kembali ke [BK-01](../README.md)*
