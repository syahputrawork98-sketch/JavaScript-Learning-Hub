# Daftar Fitur & Cakupan Proyek (FITUR.md)

Dokumen ini memetakan daftar fitur, kesiapan fungsionalitas, serta area prioritas (aktif vs hold) di dalam JavaScript Knowledge Base.

---

## 🟢 1. Fitur Aktif Saat Ini (In-Scope & Active)

| Komponen Fitur | Status | Deskripsi |
| :--- | :--- | :--- |
| **Dokumentasi Kontrol Proyek** | `AKTIF (Batch 1)` | Pusat kontrol terpadu di `docs/project/` yang memandu arah, batasan, status, dan cara kerja proyek. |
| **Struktur Baru `materi/`** | `AKTIF (Batch 2)` | Wadah utama perpustakaan belajar baru yang siap menampung catatan pembelajaran di masa depan. |
| **Kerangka Rak 00 - 17** | `AKTIF (Batch 2)` | 18 subfolder rak pembelajaran fisik lengkap dengan `README.md` placeholder di masing-masing subfolder. |
| **Kebijakan Keamanan Migrasi** | `AKTIF (Batch 1)` | Aturan tegas untuk memindahkan konten secara bertahap tanpa risiko kehilangan data atau blunder teknis. |

---

## 🟡 2. Fitur Rencana Masa Depan (Planned)

| Komponen Fitur | Status | Rencana Tahapan |
| :--- | :--- | :--- |
| **Pemetaan Materi Legacy** | `PLANNED` | Melakukan pemetaan terperinci file lama ke rak target (Direncanakan di Batch 4). |
| **Migrasi Materi Bertahap** | `PLANNED` | Pemindahan dan penulisan ulang materi secara detail (Dilakukan setelah Batch 5 review gate). |
| **Index & Jalur Belajar** | `PLANNED` | Penyusunan kurikulum lengkap di Rak 00 (`00-index-dan-jalur-belajar`). |
| **Kurasi Materi Interview** | `PLANNED` | Kumpulan bank soal coding & cheatsheet siap saji di Rak 16. |
| **Berita & Update Ekosistem** | `PLANNED` | Pembaruan terkurasi mengenai proposal TC39 & runtime JS di Rak 17. |

---

## 🔴 3. Fitur yang Ditangguhkan (HOLD / Out-Of-Scope)

Untuk menghindari pembengkakan cakupan (scope creep), komponen-komponen berikut **ditangguhkan sepenuhnya** sampai waktu yang tidak ditentukan kecuali user secara tertulis menyetujui pembukaan scope:

* **Client Sektor:** Pengembangan UI frontend (React/Next.js/Vite) untuk visualisasi perpustakaan.
* **Server Sektor:** Backend API, Express/Fastify server, routing, middleware logic.
* **Web App Kompleks:** Segala jenis aplikasi web interaktif.
* **Fitur Pencarian Otomatis (Search Engine):** Integrasi library search eksternal (Algolia, Lunr, dll).
* **Sistem Autentikasi:** Fitur login, register, OAuth, JWT, sesi pengguna.
* **Database & Storage:** Skema database (PostgreSQL/MySQL), ORM (Prisma/Drizzle), migrations.
* **Deployment & CI/CD:** Konfigurasi VPS, Docker, CI/CD pipeline GitHub Actions, cloud hosting.
