# Kebijakan Penulisan Materi & Deletion Legacy — JavaScript Knowledge Base

Dokumen ini mencatat keputusan resmi dari Room Chat 00 dan User mengenai kebijakan penulisan materi baru serta regulasi penghapusan folder legacy `RAK-*` di masa mendatang.

---

## 🛑 1. Standar Struktur & Kebijakan Penulisan Materi (PPM V4 Deprecated)

* **PPM V4 Deprecated:** Standar penulisan lama (PPM V4) dinyatakan **tidak aktif** dan tidak digunakan sebagai acuan penulisan.
* **Material Content Standard (ACTIVE DRAFT):** Standar resmi baru untuk struktur Rak, Buku, Bab, Subbab, template bab, analogi, diagram, dan latihan telah diformalkan di [Material Content Standard](./material-content-standard.md).
* **Larangan Eksekusi Prematur:** Meskipun standar baru telah disepakati sebagai *active draft*, Executor (Gemini 3 Flash) **dilarang keras** menulis materi panjang, membuat buku/bab secara fisik di dalam rak, atau melakukan migrasi konten secara massal sebelum ada batch instruksi resmi yang disetujui untuk pilot penulisan atau migrasi.
* **Tindakan Saat Ini:** Pengerjaan difokuskan penuh pada penataan administrasi, arsitektur proyek, standardisasi, dan pemetaan (mapping) awal.
* **Anti-Deletion Legacy:** Folder legacy `RAK-*` dilarang keras dihapus, diubah namanya, atau dipindahkan sebelum seluruh materi dikaji, ditulis ulang sesuai standar baru, di-review, dan mendapatkan persetujuan tertulis resmi.

---

## 🗂️ 2. Kebijakan Penghapusan Folder Legacy `RAK-*`

Selama fase setup/fondasi ini berjalan, folder lama `RAK-*` (`RAK-01` s/d `RAK-06` di root) **dilarang keras** untuk dihapus, diubah namanya, atau dipindahkan. Folder legacy ini adalah jaminan keamanan data agar tidak ada catatan belajar yang hilang.

Proses pembersihan bertahap, kriteria kelayakan, dan pemetaan detail per topik diatur sepenuhnya dalam [Legacy Migration & Deletion Plan](./legacy-migration-deletion-plan.md). Gaya penulisan dan struktur bab baru wajib merujuk secara ketat pada [Material Content Standard](./material-content-standard.md).

Namun, pada fase penulisan ulang dan migrasi materi di masa mendatang, folder/berkas lama `RAK-*` dapat direncanakan untuk dihapus secara bertahap dengan mematuhi **6 Syarat Keamanan Mutlak** (sebagaimana tercantum dalam rencana migrasi dan penghapusan):

1. **Kajian Ulang:** Materi lama di dalam file legacy tersebut sudah dikaji kelayakannya oleh asisten.
2. **Pemindahan Sukses:** Materi tersebut sudah selesai ditulis ulang atau dipindahkan ke dalam struktur target baru di bawah `materi/`.
3. **Peta Hubungan Jelas:** Pemetaan asal (source) dan tujuan (target) pemindahan tercatat dengan jelas pada dokumen mapping.
4. **Audit Independen:** Hasil migrasi materi baru telah diperiksa dan disetujui melalui audit read-only oleh Room Chat 01.
5. **Persetujuan Owner:** Room Chat 00 dan User telah memberikan keputusan eksplisit tertulis bahwa bagian legacy tersebut sudah aman dan diperbolehkan untuk dihapus.
6. **Eksekusi Bertahap:** Deletion dilakukan secara bertahap (per topik/subfolder), dilarang keras dilakukan secara massal.

> [!WARNING]
> * **Bukan Penghapusan Massal:** Penghapusan folder/file legacy sama sekali tidak boleh dilakukan secara massal atau dalam satu batch besar.
> * **Penghapusan Bertahap:** Proses pembersihan legacy wajib dilakukan secara perlahan dan bertahap (per file, per topik, atau per sub-rak) hanya setelah dipastikan 100% aman dan tidak ada informasi yang tertinggal.
