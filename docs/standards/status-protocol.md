# Standard: Status Update Protocol (Bottom-Up Aggregation)

Dokumen ini mendefinisikan prosedur standar untuk memperbarui status kemajuan di seluruh hierarki repositori. Tujuannya adalah untuk memastikan data yang akurat, konsisten, dan mudah dilacak.

## 1. Hierarki Status

| Level | File Lokasi | Fokus Utama |
| :--- | :--- | :--- |
| **Book (BK)** | `BK-XX/docs/status.md` | Granular: Bab, Jumlah Code Examples, Jumlah SVG, Spec-Sync. |
| **Sub-Rak (SR)** | `SR-XX/docs/status.md` | Agregasi: Daftar Buku di dalam Sub-Rak, Persentase Buku. |
| **Rak (RAK)** | `RAK-XX/docs/status.md` | Agregasi: Daftar Sub-Rak, Persentase Sub-Rak. |
| **Root (REPO)** | `docs/status.md` | Master: Status Raksasa (High-Level Roadmap). |

---

## 2. Prosedur Pembaruan (Bottom-Up)

Setiap kali ada perubahan material, pembaruan status HARUS dilakukan secara berjenjang dari bawah ke atas:

### Langkah 1: Audit & Update Level Buku (`BK`)
- **Review Materi**: Periksa setiap `README.md` pada bab terkait.
- **Validasi Aset**: 
    - Hitung folder `examples/` (Example Count).
    - Hitung folder `assets/` (SVG Count).
- **Update File**: Perbarui baris tabel di `BK-XX/docs/status.md`.
- **Tandai Spec-Sync**: Pastikan kolom `Spec-Sync` mencerminkan versi ECMA-262 yang digunakan.

### Langkah 2: Agregasi ke Level Sub-Rak (`SR`)
- **Kalkulasi**: Hitung rata-rata kemajuan dari seluruh `BK-XX/docs/status.md` di dalam Sub-Rak tersebut.
- **Update File**: Perbarui data pada `SR-XX/docs/status.md`.

### Langkah 3: Agregasi ke Level Rak (`RAK`)
- **Kalkulasi**: Hitung rata-rata kemajuan dari seluruh `SR-XX/docs/status.md` di dalam Rak tersebut.
- **Update File**: Perbarui data pada `RAK-XX/docs/status.md`.

### Langkah 4: Finalisasi Root Master Status
- Perbarui gambaran besar di level root jika ada pencapaian milestone signifikan (misal: "SR-01 Published").

---

## 3. Terminologi Perintah

- **"Cek Status Buku [BK-XX]"**: Melakukan Langkah 1 secara komprehensif.
- **"Cek Status Sub-Rak [SR-XX]"**: Melakukan Langkah 1 untuk semua buku di dalamnya, lalu Langkah 2.
- **"Cek Status Rak [RAK-XX]"**: Melakukan Langkah 1 & 2 untuk semua komponen di dalamnya, lalu Langkah 3.

---
> [!IMPORTANT]
> Konsistensi adalah kunci. Jangan memperbarui level atas tanpa memverifikasi data granular di level bawah terlebih dahulu.
