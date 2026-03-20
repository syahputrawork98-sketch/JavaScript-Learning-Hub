# Konvensi Penamaan & Struktur Folder (JS Edition)

Untuk menjaga keteraturan "Perpustakaan Dunia Maya", setiap file dan folder wajib mengikuti konvensi penamaan berikut sesuai dengan **Unified Gold Standard**.

## 1. Penamaan Direktori

| Level | Prefix | Format | Contoh |
| :--- | :--- | :--- | :--- |
| Rak | `RAK-` | `RAK-XX-slug` | `RAK-01-introduction-essence` |
| Sub-Rak | `SR-` | `SR-XX-slug` | `SR-01-get-started` |
| Buku | `BK-` | `BK-XX_Slug` | `BK-01_Basics` |
| Bab | `CH-` | `CH-XX_Slug` | `CH-01_JSFirstSteps` |
| Section | `SEC-` | `SEC-XX_Slug` | `SEC-01_Introduction` |

> [!IMPORTANT]
> **Rak dan Sub-Rak** menggunakan tanda hubung (`-`) untuk slug. 
> **Buku, Bab, dan Section** menggunakan garis bawah (`_`) untuk memisahkan urutan dengan nama slug.

## 2. Struktur Internal Unit (Level 5 & 6)

Setiap folder Bab (**CH**) atau Section (**SEC**) wajib memiliki struktur tiga pilar:
```text
CH- atau SEC-/
├── README.md        <- Materi teks inti (Target Utama PPM).
├── assets/          <- Visualisasi Mermaid/SVG.
└── examples/        <- Kode fungsional (.js).
```

## 3. Aturan README.md
Setiap tingkatan dari Level 2 hingga Level 6 wajib memiliki file `README.md` sebagai hub navigasi atau penyaji materi.

---
*Referensi: [Architecture](./architecture.md) | [Unified Gold Standard](../../../brain/931398eb-3011-4b69-bb8c-e94cd60f9e78/unified_gold_standard_v1.md)*
