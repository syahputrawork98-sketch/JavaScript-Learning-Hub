# Room Context Summary — JavaScript Knowledge Base Rebuild

Dokumen ini berfungsi sebagai ringkasan cepat untuk Room Chat baru agar langsung memahami identitas, arah, dan status project saat ini.

---

## 1. Identitas Project & Tujuan Rebuild
* **Nama Project:** JavaScript Knowledge Base (Perpustakaan belajar JavaScript pribadi).
* **Tujuan Rebuild:** Merombak total struktur folder dan workflow project agar mengikuti tingkat kerapian dan pola dokumentasi dari referensi struktur proyek yang mapan.

> [!IMPORTANT]
> Referensi eksternal HANYA digunakan sebagai pembanding kerapian visual, gaya dokumentasi, workflow, dan pemodelan `materi/` yang terstruktur. Referensi tersebut **BUKAN** cetakan isi materi. Struktur rak JavaScript harus murni mengikuti kebutuhan bahasa pemrograman JavaScript.

---

## 2. Status & Fokus Saat Ini
* **Status Saat Ini:** `REBUILD / RESTRUCTURE PHASE` (Fase Rebuild & Restrukturisasi Awal).
* **Fokus Aktif:** Setup kontrol proyek (`docs/project/`), inisialisasi kerangka perpustakaan baru (`materi/`), penyelesaian dan hardening Buku Pilot pertama (`BK-01`), dan perapian dokumen handoff Batch 10 untuk sesi berikutnya.
* **Legacy Source:** Folder/rak lama (seperti `RAK-01` sampai `RAK-06`) **TIDAK BOLEH DIHAPUS** atau diubah namanya. Folder tersebut dianggap sebagai *legacy source* / bahan migrasi.
* **Scope Hold:** Bagian `client/`, `server/`, frontend, backend, sistem login/auth, database, deployment, dan web app lainnya berstatus **HOLD** (ditangguhkan) kecuali jika user secara eksplisit meminta scope tersebut dibuka.

---

## 3. Ringkasan Peran (Roles Summary)
Untuk menjaga keteraturan project, workflow dibagi menjadi peran-peran berikut:
1. **Room Chat 00 (Project Control & Decision Maker):**
   * Manajer proyek, scope guard, pengarah roadmap, evaluator hasil kerja, pembuat instruksi final untuk executor.
   * Tidak langsung melakukan edit file/commit di repo.
2. **Room Chat 01 (Analysis-Only):**
   * Melakukan analisa repository secara read-only.
   * Memberikan review dan laporan; tidak melakukan edit, commit, atau push.
3. **Gemini 3 Flash (Executor Only):**
   * Mengeksekusi satu instruksi per batch.
   * Boleh melakukan smoke test/check ringan setelah eksekusi, lalu melaporkan hasil.
   * **Tidak boleh** menetapkan secara sepihak bahwa hasil kerjanya sudah final/release-ready.
4. **User:**
   * Melakukan review akhir, verifikasi manual, dan melakukan commit/push manual ke GitHub.

---

## 4. Cara Penggunaan Dokumen Ini
Jika memulai Room Chat baru atau jika asisten kehilangan konteks:
1. Baca file ini dan `docs/project/add-instruksi-chatgpt-project.md`.
2. Sinkronkan pemahaman mengenai status terakhir di `docs/project/current-status.md`.
3. Pahami starter point kelanjutan proyek pada serah terima resmi [Room Handoff Batch 10](./room-handoff-batch-10.md).
4. Lanjutkan pengerjaan sesuai dengan step aktif di `docs/project/roadmap-active.md`.
