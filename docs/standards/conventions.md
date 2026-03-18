# Konvensi Penamaan & Struktur Folder (JS Edition)

Untuk menjaga keteraturan "Perpustakaan Dunia Maya", setiap file dan folder harus mengikuti konvensi berikut.

## 1. Penamaan Direktori

| Level | Prefix | Format | Contoh |
| :--- | :--- | :--- | :--- |
| Rak | `RAK-` | `RAK-<00>-<slug>` | `RAK-01-get-started` |
| Sub-Rak | `SR-` | `SR-<00>_<Slug>` | `SR-01_General` |
| Buku | `BK-` | `BK-<00>_<Slug>` | `BK-01_Basics` |
| Bab | `CH-` | `CH-<00>_<Slug>` | `CH-01_Overview` |

## 2. Struktur Internal Bab (Level 5)

Setiap folder Bab wajib memiliki struktur:
```text
CH-<urutan>_<NamaBab>/
|-- README.md        <- Materi teks inti (PPM Stage 1).
|-- assets/          <- Tempat menyimpan SVG/Mermaid (PPM Stage 3).
`-- examples/        <- Tempat skrip .js (PPM Stage 2).
```

## 3. Standar Bahasa

- **Narasi Utama**: Menggunakan **Bahasa Indonesia** yang semi-formal dan komunikatif.
- **Terminologi Teknis**: Tetap gunakan istilah asli (e.g., *Closures*, *Promises*, *Event Loop*, *Prototypal Inheritance*) untuk menjaga presisi teknis.

---
*Referensi: [PPM Workflow](./workflow.md)*
