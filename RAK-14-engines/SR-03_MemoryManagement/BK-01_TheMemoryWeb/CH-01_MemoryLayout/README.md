# CH-01: Memory Layout (Stack vs Heap)

Mesin JavaScript membagi memori menjadi dua area utama dengan cara kerja yang sangat berbeda.

## 🧱 The Stack (Static Memory)
Stack adalah tempat penyimpanan untuk data yang ukurannya diketahui saat kompilasi.
- **Data**: Primitif (Number, String, Boolean, null, undefined, Symbol) dan referensi ke objek.
- **Mekanisme**: LIFO (Last-In-First-Out).
- **Karakteristik**: Sangat cepat, namun ukurannya terbatas.

## 🌳 The Heap (Dynamic Memory)
Heap adalah area memori besar yang tidak terstruktur untuk data yang ukurannya bisa berubah.
- **Data**: Objek, Array, dan Fungsi.
- **Mekanisme**: Alokasi dinamis.
- **Karakteristik**: Lebih lambat diakses dibanding stack, membutuhkan Garbage Collection untuk membersihkannya.

---
*Kembali ke [BK-01](../README.md)*
