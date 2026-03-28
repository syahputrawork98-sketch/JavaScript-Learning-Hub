# Repository Standards: Hierarchy & Conventions

Dokumen ini mengatur struktur fisik, penamaan, dan mekanisme pelacakan status di JavaScript Knowledge Base sesuai dengan **Unified Gold Standard**.

---

## 🌐 0. Hubungan Blueprint vs Workspace

Repositori ini (Workspace) adalah **Laboratorium Teknis** yang harus selalu selaras dengan **Strategic Blueprint** (Peta Induk).

- **Blueprint (Strategic)**: Menyimpan konteks industri, posisi dalam Learning Matrix, dan arah strategis.
- **Workspace (Operational)**: Menyimpan detail spesifikasi, internal engine, dan kode pembuktian lab.
- **Tautan Induk**: [Strategic Blueprint: JavaScript Node](file:///i:/Workspace/Workspace-Syahputrawork/learning-matrix-blueprint/01-Language-Hubs/JavaScript-Knowledge-Base.md)

---

## 🏛️ 1. Hirarki 6-Level (Universe Standard)

Sistem ini mengikuti hirarki kedalaman yang konsisten untuk seluruh repositori:

| Tingkatan | Nama | Analogi | Prefix | Contoh Direktori |
| :--- | :--- | :--- | :--- | :--- |
| **Level 1** | **Root** | Library Hub | `/` | `/` |
| **Level 2** | **Rak** | Domain Utama | `RAK-` | `RAK-01-introduction-essence/` |
| **Level 3** | **Sub-Rak** | Track Spesifik | `SR-` | `SR-01-get-started/` |
| **Level 4** | **Buku** | Koleksi Terpadu | `BK-` | `BK-01_Basics/` |
| **Level 5** | **Bab** | Materi Inti | `CH-` | `CH-01_JSFirstSteps/` |
| **Level 6** | **Section** | Detail Halaman | `SEC-` | `SEC-01_Introduction/` |

> [!IMPORTANT]
> **Pengecualian RAK-01**: Menggunakan **Flat Structure** (RAK > BK > CH > SEC) dengan melompati Level 3 (SR) karena sifatnya yang murni naratif.

---

## 📏 2. Konvensi Penamaan

| Elemen | Aturan | Contoh |
| :--- | :--- | :--- |
| **Rak & Sub-Rak** | `kebab-case` dengan prefix `RAK-` atau `SR-`. | `RAK-04-core-specification` |
| **Buku, Bab, Section** | Prefix (BK/CH/SEC) + `_` + Name Slug. | `CH-01_ExecutionContext` |
| **Lab Praktis** | Prefix numerik 2-digit berurutan. | `01_basic_closure.js` |

---

## 🏗️ 3. Struktur Internal Unit (Level 5 & 6)

Setiap folder Bab (**CH**) atau Section (**SEC**) wajib memiliki struktur minimal:
```text
CH- atau SEC-/
├── README.md        <- Materi teks inti & diagram Mermaid inline.
├── examples/        <- Kode lab fungsional (Opsional jika murni naratif).
└── assets/          <- Media statis eksternal (Opsional).
```

---

## 🔄 4. Protokol Pembaruan Status (Bubbling Up)

Progress pengerjaan repositori dihitung secara otomatis (bubbling up) dari unit terkecil:

1.  **Level Bab/Section**: Status dicatat di `README.md` lokal (`[ ] Draft`, `[/] Partial`, `[x] Complete`).
2.  **Level Buku/Sub-Rak**: Persentase penyelesaian = `(Σ Complete) / (Total Unit)`.
3.  **Global Status**: Dashboard utama berada pada file `status.md` di root repositori.

---

## 🪞 5. Prinsip "Digital Mirroring"

Hierarki ini mencerminkan struktur sumber primer (MDN/Ecma-262) secara **1:1**. Jika sumber menuntut kedalaman lebih (misal: sub-clause), gunakan Level 6 (**SEC**) untuk menjaga integritas struktur utama.
