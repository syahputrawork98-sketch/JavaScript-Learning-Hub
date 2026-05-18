# Kebijakan Migrasi Materi — JavaScript Knowledge Base

Dokumen ini mendefinisikan aturan dan prosedur keselamatan (safety protocols) untuk pemindahan konten dari folder lama ke struktur rak baru `materi/`. Kebijakan ini wajib dipatuhi demi menghindari kehilangan data atau kerusakan dokumen pembelajaran.

---

## 1. Status Folder Lama (Legacy Source)
* Folder `RAK-01-introduction-essence`, `RAK-02-javascript-foundation`, `RAK-03-evolution-esnext`, `RAK-04-core-specification`, `RAK-05-runtime-apis`, dan `RAK-06-engines-internals` berstatus sebagai **Legacy Source**.
* Folder lama tersebut **tidak boleh dihapus**, dipindahkan, atau diganti namanya pada tahap awal pengerjaan rebuild.

---

## 2. Prinsip & Batasan Migrasi

Untuk menjaga keamanan materi, migrasi dilakukan berdasarkan prinsip-prinsip berikut:

### A. Migrasi Bertahap (Incremental Migration)
* Pemindahan file tidak boleh dilakukan sekaligus dalam satu batch besar.
* Migrasi dilakukan secara bertahap, per rak, per bab, atau per topik pembelajaran.
* Setiap satu file/bab dipindahkan, harus disusul dengan verifikasi format markdown sebelum berlanjut ke file berikutnya.

### B. Proteksi Sumber Lama (Source Preservation)
* Selama proses pemindahan, salinan file asli di folder lama harus tetap dipertahankan sampai proses verifikasi selesai.
* Jangan langsung menghapus file lama segera setelah disalin. Penghapusan file lama hanya boleh dilakukan setelah seluruh batch migrasi dinyatakan `VERIFIED` & `ACCEPTED` oleh Room Chat 00.

### C. Pemetaan Terlebih Dahulu (Mapping-First Policy)
* Sebelum memindahkan file apa pun, tim asisten wajib menyusun dokumen pemetaan detail (mapping plan).
* Peta pemetaan awal berada di [legacy-to-materi-mapping.md](./legacy-to-materi-mapping.md) dan rencana detail per topik serta tahapan penghapusan aman diatur dalam [Legacy Migration & Deletion Plan](./legacy-migration-deletion-plan.md).
* **Jangan melakukan migrasi fisik atau penghapusan materi sebelum instruksi resmi disepakati dan disetujui di Room Chat 00.**

---

## 3. Alur Kerja Langkah Migrasi (Fase Pasca-Fondasi)

Ketika fase migrasi telah dibuka secara resmi oleh Room Chat 00, setiap proses pemindahan mengikuti alur berikut:

1. **Rujuk Dokumen Mapping:** Lihat [legacy-to-materi-mapping.md](./legacy-to-materi-mapping.md) dan rencana detail di [legacy-migration-deletion-plan.md](./legacy-migration-deletion-plan.md) untuk menentukan file target.
2. **Salin & Format Ulang:** Salin materi dari folder lama ke subfolder rak baru. Lakukan pemformatan agar mengikuti gaya penulisan premium (analogies, Mermaid diagram, Catatan Interview, Latihan Kecil).
3. **Smoke Test:** Uji keterbacaan file markdown baru di environment lokal.
4. **Laporkan Kemajuan:** Laporkan hasil pemindahan per topik di status laporan Gemini.
5. **Verifikasi Chat 01:** Room Chat 01 meninjau kebenaran format dan struktur secara read-only.
6. **Keputusan Chat 00:** Room Chat 00 menyetujui pemindahan dan memperbarui status menjadi `VERIFIED`.

---

## 4. Jaminan Akurasi Spesifikasi (Spec-Rigor)

Selama proses migrasi, pembuat materi wajib memverifikasi validitas data dengan prinsip:
* **No Assumptions:** Jangan mengandalkan ingatan atau tebakan. Selalu lakukan cross-reference dengan spesifikasi resmi.
* **Sumber Otoritatif:** Rujuk langsung pada draf standardisasi ECMA-262 (tc39.es), MDN Web Docs, serta dokumentasi backend resmi (seperti Node.js API Docs) untuk bagian-bagian server-side runtime.
* **Badges Status:** Tandai materi yang baru dipindahkan dengan status `DRAFT` atau `PLANNED` di awal, dan biarkan Room Chat 01 serta Room Chat 00 yang menyetujui transisi status ke `VERIFIED`.

