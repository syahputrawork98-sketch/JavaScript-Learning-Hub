# Konvensi Penamaan & Struktur Folder

Standar penamaan sangat penting untuk menjaga konsistensi di seluruh repositori dan memudahkan otomasi/pencarian.

## 1. Sistem Prefix Folder

Semua folder utama harus menggunakan prefix urutan dan nama dalam **PascalCase**:

- **Rak (Shelf)**: `RAK-XX-nama` (e.g., `RAK-01-core`).
- **Sub-Rak (Sub-shelf)**: `SR-XX_PascalCase` (e.g., `SR-02_DataTypesAndValues`).
- **Buku (Book)**: `BK-XX_PascalCase` (e.g., `BK-01_PrimitiveTypes`).
- **Bab (Chapter)**: `CH-XX_PascalCase` (e.g., `CH-01_StringInternals`).
- **Section (Sub-bab)**: `SEC-XX_PascalCase` (e.g., `SEC-01_UnaryOperators`).

## 2. Struktur Internal Bab (Chapter)

Seluruh Bab adalah **sebuah folder**, bukan file Markdown tunggal. Struktur wajib di dalam folder Bab:

```text
CH-XX_NamaBab/
|-- README.md    <- Narasi materi utama.
|-- assets/      <- Gambar/Diagram penjelasan.
|-- examples/    <- Koleksi skrip JavaScript (.js).
`-- SEC-01_SubBab/ <- Opsional (Jika materi sangat banyak).
    |-- README.md
    |-- assets/
    `-- examples/
```

## 3. Struktur Internal Buku (Book)

Setiap folder Buku harus memiliki:

- `README.md`: Daftar isi dan pengantar.
- `CHANGELOG.md`: Log perubahan dan versioning draf.
- Folder-folder `CH-XX` di dalamnya.
