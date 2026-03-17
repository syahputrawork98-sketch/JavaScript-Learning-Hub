# Arsitektur & Hierarki Struktur

Proyek **JavaScript Knowledge Base** disusun dengan analogi **Perpustakaan Digital** untuk merombak struktur dokumentasi teknis (*ECMAScript Spec*) yang kaku menjadi unit pelajaran yang manusiawi.

## Analogi Struktur

Berikut adalah pemetaannya ke dalam direktori bertingkat:

| Tingkatan | Analogi | Contoh Direktori | Keterangan |
| :--- | :--- | :--- | :--- |
| **Level 1** | **Perpustakaan** | `/` (root) | Seluruh sistem proyek. |
| **Level 2** | **Rak (Shelf)** | `RAK-01-core/` | Rak utama pembeda kedalaman ilmu. |
| **Level 3** | **Sub-Rak (Sub-shelf)** | `SR-01_NationalConvention/` | Grup materi berbasis Clause spesifik. |
| **Level 4** | **Buku (Book)** | `BK-01_SpecFoundations/` | Koleksi bab yang membentuk satu topik besar. |
| **Level 5** | **Bab (Chapter)** | `CH-01_Overview/` | Unit terkecil wajib (Folder Bab). |
| **Level 6** | **Section (Sub-bab)** | `SEC-01_SubTopic/` | **Opsional**: Digunakan jika Bab terlalu kompleks. |

---

## Aturan Pewajiban `README.md`

Guna memudahkan orientasi, setiap tingkatan direktori **WAJIB** memiliki file `README.md`:

- **Root (`/README.md`)**: Visi keseluruhan perpustakaan (3 Pilar Rak).
- **Rak (`RAK-XX/README.md`)**: Tujuan dan cakupan Rak tersebut.
- **Buku (`BK-XX/README.md`)**: Pengantar materi dan daftar bab di dalamnya.
- **Section (`SEC-XX/README.md`)**: Penjelasan spesifik sub-topik (jika menggunakan Level 6).

---

## Standar File `status.md`

Setiap `status.md` (Level Buku) wajib menggunakan kolom berikut:
`| Bab | Judul | Status | Ex | SVG | Spec-Sync |`

Dan dilengkapi dengan:
1.  **Spec-Sync**: Mencantumkan versi spesifikasi standar (misal: `ES2024`, `ES2025`) yang digunakan sebagai acuan terakhir.
2.  **Labeling**: Gunakan kolom `Spec-Sync` di file `status.md` untuk menandai versi spesifikasi terakhir yang telah diverifikasi (Contoh: `ES2024` atau `ES2025`).
3.  **Penyebutan Clause**: Setiap bab wajib menyebutkan nomor Clause spesifik di awal `README.md` untuk memudahkan audit ulang jika nomor klausul di spek resmi berubah.

## 5. Kriteria "100% Complete" (Gold Standard)

Sebuah unit (Bab/Buku) baru dianggap **100% (Completed)** jika memenuhi 4 pilar:
1.  **Narasi Teruji**: README mengikuti standar PPM V4 dan menggunakan terminologi spek yang tepat.
2.  **Koleksi Contoh**: Folder `examples/` berisi pembuktian kode yang mencakup seluruh poin teknis narasi.
3.  **Visualisasi**: Memiliki diagram atau SVG yang menjelaskan mental model di folder `assets/`.
4.  **Spec-Sync**: Terverifikasi sesuai dengan edisi ECMAScript terbaru yang ditargetkan di kolom `Spec-Sync`.

---

## Alur Agregasi Status (Bubbling Up)

Status kemajuan dihitung dari bawah ke atas untuk memberikan gambaran akurat bagi Arsitek:
1.  **Level Bab**: Dasar perhitungan (Detail metrik Ex/SVG/Sync).
2.  **Level Buku**: Rata-rata kemajuan seluruh Bab.
3.  **Level Sub-Rak**: Jumlah Buku yang tuntas / Total Buku.
4.  **Level Rak**: Persentase Sub-Rak yang sudah "Completed".
