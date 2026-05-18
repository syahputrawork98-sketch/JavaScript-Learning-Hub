# Roadmap Aktif — JavaScript Knowledge Base Rebuild

Dokumen ini memetakan rencana kerja terstruktur dari Batch 1 hingga Batch 10. Tahapan ini difokuskan penuh untuk membangun fondasi arsitektur dan kontrol proyek sebelum migrasi materi detail dimulai.

---
## 1. Rencana Perjalanan Batch (Batches 1 - 10)

```mermaid
gantt
    title Peta Rencana Fondasi Rebuild (Batch 1-10)
    dateFormat  YYYY-MM-DD
    section Fondasi Proyek
    Batch 1 - Setup Project Control & Portable Add Instructions :done, des1, 2026-05-18, 1d
    Batch 2 - Setup Kerangka materi/ dan Rak 00-17              :done, des2, after des1, 1d
    Batch 3 - Sinkronisasi Root Docs (README & Status)           :done, des3, after des2, 1d
    Batch 4 - Legacy Mapping RAK lama ke Rak Baru               :done, des4, after des3, 1d
    section Review & Gate
    Batch 5 - Review Gate oleh Room Chat 01 (Read-Only)          :done, des5, after des4, 1d
    Batch 5.1 - Fix Review Gate & Material Writing Policy        :done, des6, after des5, 1d
    section Standardisasi
    Batch 6 - Formalisasi Material Content Standard              :done, des7, after des6, 1d
    Batch 7 - Detail Mapping Legacy dan Strategi Deletion        :done, des8, after des7, 1d
    Batch 8 - Pilot Buku Pertama: Scope & Lexical Env            :done, des9, after des8, 1d
    section Review & Hardening
    Batch 9 - Review Pilot Buku Pertama oleh Room Chat 01        :done, des10, after des9, 1d
    Batch 9.1 - Fix Kecil Pilot Buku Scope & Lexical Env         :done, des11, after des10, 1d
    section Dokumentasi & Handoff
    Batch 10 - Dokumentasi Handoff & Penutup Siklus 1            :active, des12, after des11, 1d
```

### [Batch 1] — Setup Project Control & Portable Add Instructions
* **Tujuan:** Membuat fondasi awal kontrol proyek di `docs/project/` agar pengerjaan tetap rapi walaupun sesi chat berganti.
* **Status:** `SELESAI / COMMITTED`
* **Output:** Pembuatan dokumen instruksi portable, ringkasan konteks room, status, roadmap aktif, rencana rak, dan kebijakan migrasi.

### [Batch 2] — Setup Kerangka `materi/` dan Rak 00–17
* **Tujuan:** Menginisialisasi 18 rak pembelajaran baru (Rak 00 s/d 17) sebagai wadah penampung materi yang terstruktur.
* **Status:** `SELESAI / COMMITTED`
* **Output:** Folder kosong/placeholder untuk masing-masing rak beserta file `README.md` awal di setiap rak yang menjelaskan cakupan bahasannya.

### [Batch 3] — Sinkronisasi Root Docs: README, FITUR, dan Status
* **Tujuan:** Merapikan dokumen di level root (`README.md`, `FITUR.md`, dan `status.md`) agar selaras dengan fase rebuild yang sedang berjalan serta membersihkan berkas kontrol lama.
* **Status:** `SELESAI / COMMITTED`
* **Output:** Sinkronisasi deskripsi proyek, status pencapaian, dan pembaruan visual agar konsisten dengan gaya visual premium, serta menghapus `.cursorrules`, `docs/README.md` lama, dan folder `docs/standards/`.

### [Batch 4] — Docs Identity Cleanup, Docs README Baru, Link Hygiene, dan Legacy Mapping
* **Tujuan:** Merapikan identitas proyek JavaScript, menyusun pintu gerbang [docs/README.md](../README.md) baru, membersihkan absolute `file:///` URLs, dan merancang peta pemetaan awal legacy source ke rak baru.
* **Status:** `SELESAI / COMMITTED`
* **Output:** Pembersihan nama repositori pembanding eksternal di semua dokumen aktif, penetapan catatan netral untuk penulisan standar, pembersihan absolute links ke relative links, pembuatan berkas navigasi docs, dan penyusunan [legacy-to-materi-mapping.md](./legacy-to-materi-mapping.md).

### [Batch 5] — Review Gate oleh Room Chat 01
* **Tujuan:** Melakukan audit menyeluruh terhadap hasil pengerjaan Batch 1 hingga Batch 4 secara read-only untuk memastikan tidak ada blunder teknis sebelum migrasi konten dimulai.
* **Status:** `REVIEW GATE SELESAI / STATUS NEEDS FIX RINGAN`
* **Output:** Laporan audit independen dari Room Chat 01 dan daftar koreksi status.md, roadmap, typo, serta kebutuhan formalisasi kebijakan migrasi.

### [Batch 5.1] — Fix Review Gate Notes & Dokumentasi Kebijakan Migrasi Materi
* **Tujuan:** Memperbaiki seluruh temuan audit Batch 5, menyelaraskan sinkronisasi `status.md` dan `roadmap-active.md`, serta mendokumentasikan kebijakan penangguhan materi baru dan regulasi penghapusan legacy `RAK-*` bertahap di bawah [Material Writing Policy](./material-writing-policy.md).
* **Status:** `SELESAI / COMMITTED`
* **Output:** Sinkronisasi menyeluruh status, pembersihan sisa nama repo pembanding eksternal, koreksi relative links mapping di `migration-policy.md`, dan pembuatan berkas kebijakan penulisan formal.

### [Batch 6] — Formalisasi Material Content Standard
* **Tujuan:** Membentuk standar resmi penulisan materi untuk struktur Buku, Bab, Subbab, analogi, diagram, dan latihan sebelum migrasi dimulai.
* **Status:** `SELESAI / COMMITTED`
* **Output:** Pembuatan berkas `docs/project/material-content-standard.md`, serta pembaruan terkait pada `material-writing-policy.md`, `docs/README.md`, `current-status.md`, `roadmap-active.md`, dan `status.md`.

### [Batch 7] — Detail Mapping Legacy dan Strategi Deletion
* **Tujuan:** Melakukan pembacaan struktur RAK-* legacy, merumuskan pemetaan detail per subfolder/topik ke 18 target Rak baru, serta menyusun rencana penghapusan bertahap yang aman.
* **Status:** `SELESAI / COMMITTED`
* **Output:** Pembuatan berkas `docs/project/legacy-migration-deletion-plan.md`, serta pembaruan terkait pada `migration-policy.md`, `material-writing-policy.md`, `docs/README.md`, `current-status.md`, `roadmap-active.md`, dan `status.md`.

### [Batch 8] — Pilot Buku Pertama: Scope dan Lexical Environment
* **Tujuan:** Membuat buku pertama dan 3 bab pilot mengenai Scope dan Lexical Environment di bawah Rak 03 untuk menguji coba efektivitas penulisan Material Content Standard secara nyata.
* **Status:** `SELESAI / COMMITTED`
* **Output:** Pembuatan folder `materi/03-.../BK-01-scope-dan-lexical-environment/` beserta `README.md` buku, `01-apa-itu-scope.md`, `02-global-function-dan-block-scope.md`, dan `03-lexical-scope-dan-scope-chain.md`, serta sinkronisasi dokumen kontrol proyek.

### [Batch 9] — Review Pilot Buku Pertama oleh Room Chat 01
* **Tujuan:** Melakukan review menyeluruh terhadap buku pilot pertama BK-01 dari sisi keselarasan spesifikasi teknis dan kepatuhan standar penulisan.
* **Status:** `SELESAI / COMMITTED` (Accepted with Notes)
* **Output:** Buku pilot dinilai sukses sebagai landasan model tetapi dengan catatan kecil untuk perbaikan detail teknis (refinements).

### [Batch 9.1] — Fix Kecil Pilot Buku Scope dan Lexical Environment
* **Tujuan:** Menyelesaikan seluruh catatan perbaikan teknis minor dari review Batch 9 terhadap buku pilot pertama agar lebih presisi.
* **Status:** `SELESAI / COMMITTED`
* **Output:** Perbaikan relative link, penyematan caveat closure di Bab 01 & Bab 02, penjelasan sloppy/strict mode, presisi hoisting/TDZ, istilah standardisasi [[Scopes]] statis, dan catatan duplicate const SyntaxError.

### [Batch 10] — Dokumentasi Final, Handoff Room Baru, dan Penutup Siklus 1
* **Tujuan:** Merapikan dokumentasi proyek dan menyusun petunjuk serah terima (handoff) agar kelanjutan proyek di room chat baru berjalan mulus.
* **Status:** `Selesai Dieksekusi / Siap Direview`
* **Output:** Pembuatan berkas `docs/project/room-handoff-batch-10.md`, pembaruan Docs README, current status, roadmap, room context summary, portable Add Instructions, global status.md, dan root README.md.

---

## 2. Catatan Penting Prosedur

> [!IMPORTANT]
> * **Tahap Fondasi & Pilot:** Batch 1 sampai Batch 10 mencakup pembentukan arsitektur kontrol, standardisasi penulisan, mapping rinci, pilot buku pertama, review/hardening, serta penyusunan serah terima (handoff) untuk dilanjutkan di room baru secara terarah (Batch 11+).
> * **Review Gate:** Batch 5 bersifat **Read-Only (Audit)**. Seluruh catatan perbaikan diselesaikan di Batch 5.1.
> * **Ekspansi Penulisan Materi:** Langkah penulisan atau pemindahan materi di rak lain **hanya boleh dimulai** setelah pilot buku pertama ini ditinjau, dievaluasi, dan disetujui secara resmi oleh Room Chat 00 sesuai kebijakan yang berlaku. Rencana detail pemetaan dan penghapusan bertahap diatur pada [Legacy Migration & Deletion Plan](./legacy-migration-deletion-plan.md).
