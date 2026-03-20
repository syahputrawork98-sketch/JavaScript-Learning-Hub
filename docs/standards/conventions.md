# Konvensi Penamaan & Struktur Folder (JS Edition)

Untuk menjaga keteraturan "Perpustakaan Dunia Maya", setiap file dan folder harus mengikuti konvensi berikut.

## 1. Penamaan Direktori

| Level | Prefix | Format | Contoh |
| :--- | :--- | :--- | :--- |
| **Rak** | `RAK-` | `RAK-<00>-<slug>` | `RAK-01-foundation` |
| **Sub-Rak** | `SR-` | `SR-<00>-<slug>` | `SR-01-get-started` |
| **Buku** | `BK-` | `BK-<00>_<Slug>` | `BK-01_Basics` |
| **Bab** | `CH-` | `CH-<00>_<Slug>` | `CH-01_Overview` |
| **Section** | `SEC-` | `SEC-<00>_<Slug>` | `SEC-01_ThisKeyword` |

> [!IMPORTANT]
> **Sub-Rak** menggunakan tanda hubung (`-`) untuk slug, sedangkan **Buku, Bab, dan Section** menggunakan garis bawah (`_`) untuk memisahkan urutan dengan nama slug.

## 2. Struktur Internal Unit (Level 5 & 6)

Setiap folder Bab atau Section wajib memiliki struktur:
```text
CH- atau SEC-/
|-- README.md        <- Materi teks inti (PPM Stage 1-2).
|-- assets/          <- Visualisasi (PPM Stage 4).
`-- examples/        <- Kode fungsional (PPM Stage 3).
```

## 3. Standar Bahasa
- **Narasi Utama**: Bahasa Indonesia (Semi-formal & Komunikatif).
- **Terminologi Teknis**: Gunakan istilah asli (e.g., *Closures*, *Event Loop*, *Non-blocking*).

---
*Referensi: [PPM Workflow](./workflow.md) | [Architecture](./architecture.md)*
