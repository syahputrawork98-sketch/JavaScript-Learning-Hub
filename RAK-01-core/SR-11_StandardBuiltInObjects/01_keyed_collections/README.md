# Buku 01: Keyed Collections

Buku ini membedah koleksi data yang berbasis kunci (*key-based*). Kita akan mempelajari bagaimana `Map` dan `Set` memberikan alternatif yang lebih kuat daripada Objek dan Array biasa, serta bagaimana `WeakMap` dan `WeakSet` membantu kita mengelola memori secara otomatis (Clause 24 pada ECMA-262).

## Mengapa Mempelajari Ini?
Seorang Senior Architect tahu bahwa Objek literal bukanlah alat yang tepat untuk menyimpan data yang kuncinya dinamis atau bertipe kompleks. Dengan memahami *Keyed Collections*, Anda belajar bagaimana membangun struktur data yang efisien, mencegah kebocoran memori (*Memory Leaks*), dan memanfaatkan fitur unik seperti urutan penyisipan yang terjamin.

## Daftar Bab

1. **[Bab 01: Maps & Sets (Loker Cerdas)](./01_maps_and_sets/)**
2. **[Bab 02: Weak Collections & GC (Loker Berhantu)](./02_weak_collections_and_gc/)**

## Prasyarat Pembaca
- **[RAK-01-core / 05_ordinary_and_exotic_objects / Buku 01: Object Internal Mechanics](../../05_ordinary_and_exotic_objects/01_object_internal_mechanics/)**: Memahami bagaimana properti objek bekerja membantu Anda mengerti kenapa `Map` berbeda.
