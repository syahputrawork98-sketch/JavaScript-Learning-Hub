# Panduan Terminologi (JS Edition)

Menangkap dinamisme dan fleksibilitas web melalui bahasa yang tepat.

## 1. Aturan Penulisan Istilah
- **Kinetic Focus**: Gunakan kata kerja yang aktif untuk menjelaskan proses asinkron.
- **Ecma-Sync**: Selalu rujuk ke standar ECMAScript terbaru (ESNext).

## 2. Senior vs Basic Terms

| Basic Term | Senior Terminology | Konteks |
| :--- | :--- | :--- |
| Tunggu data | **Non-blocking I/O** | Mekanisme pembacaan file/network. |
| Fungsi dalam fungsi | **Closures** | Lingkup variabel leksikal. |
| Warisan | **Prototypal Inheritance** | Mekanisme rantai prototype. |
| Antrean | **Task Queue / Microtasks** | Urutan eksekusi Event Loop. |

## 3. Hierarchical Terminology (Universe Standard)

| Term | Analogi | Definisi |
| :--- | :--- | :--- |
| **RAK (Rack)** | Domain | Pengelompokan besar area ilmu (e.g., Core Spec, Engines). |
| **SR (Sub-Rack)** | Track | Jalur spesifik di dalam domain (e.g., Functions, V8 Architecture). |
| **BK (Book)** | Koleksi | Kumpulan bab yang membentuk satu modul pengetahuan utuh. |
| **CH (Chapter)** | Materi | Unit terkecil dokumentasi yang berisi teori, visual, dan lab. |

## 4. Metode Analogi
- **Event Loop as a Restaurant**: Pesanan (Task) masuk ke dapur, pelayan (Main Thread) tetap melayani pelanggan lain sambil menunggu masakan matang.
- **The Kinetic Hub**: Bayangkan JS sebagai pusat transmisi data yang tidak pernah berhenti berputar.
