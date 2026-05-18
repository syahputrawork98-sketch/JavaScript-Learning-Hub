# Scope Guard — JavaScript Knowledge Base Rebuild

Dokumen ini berfungsi sebagai penjaga batasan (scope guard) proyek rebuild untuk mencegah pembengkakan cakupan kerja (scope creep) dan menjaga keamanan integritas repositori dari kesalahan fatal.

---

## 1. Aturan Emas (Golden Rules)

Semua asisten AI (Room Chat 00, Room Chat 01, dan Gemini 3 Flash) wajib mematuhi batasan-batasan ketat berikut:

### A. Jangan Hapus Folder/Rak Lama (Legacy Source)
* Folder lama seperti `RAK-01-introduction-essence`, `RAK-02-javascript-foundation`, `RAK-03-evolution-esnext`, `RAK-04-core-specification`, `RAK-05-runtime-apis`, dan `RAK-06-engines-internals` **tidak boleh dihapus atau diganti namanya**.
* Seluruh folder lama tersebut harus dijaga sebagai *legacy source* / bahan migrasi, sampai proses migrasi selesai sepenuhnya dan user secara manual memberikan izin tertulis untuk menghapusnya.

### B. Jangan Melakukan Migrasi Massal
* Pemindahan materi dari RAK lama ke RAK baru harus dilakukan secara bertahap, bab demi bab, atau topik demi topik.
* **Dilarang keras** memindahkan seluruh materi sekaligus dalam satu batch besar. Ini bertujuan menghindari hilangnya data atau rusaknya format dokumentasi.

### C. Jangan Sentuh Sektor `client/` atau `server/` (HOLD)
* Sektor program/aplikasi seperti frontend, backend, server-side code, logic API, database schema, authentication/login, deployment config, atau fitur web app lainnya berstatus **HOLD**.
* Jangan membuat, mengedit, atau mengaktifkan script server/client apa pun kecuali ada permintaan eksplisit yang disetujui di Room Chat 00.

### D. Jangan Meniru Isi PostgreSQL Knowledge Base secara Mentah
* PostgreSQL Knowledge Base adalah model referensi kerapian visual dan tata kelola proyek, **bukan** cetakan isi materi.
* **Dilarang keras** meniru istilah database, susunan rak database, query SQL, atau urutan domain ilmu PostgreSQL ke dalam repositori JavaScript.
* Struktur rak JavaScript harus murni didasarkan pada kebutuhan dan domain bahasa pemrograman JavaScript.

### E. Kebijakan Rak 17 (Berita, Isu, & Update Ekosistem)
* Rak 17 (`17-berita-isu-dan-update-ekosistem`) digunakan khusus untuk mencatat perubahan signifikan di ekosistem JavaScript (seperti TC39, ECMAScript, update runtime Node.js/Bun/Deno, dll).
* Konten di Rak 17 harus dikurasi dengan baik, bukan berisi artikel opini random.
* Setiap kali menulis/migrasi ke Rak 17, wajib melakukan verifikasi sumber terbaru (latest source) agar informasinya akurat.

---

## 2. Tabel Batasan Cakupan Kerja

| Nama Komponen | Boleh Dilakukan (IN SCOPE) | Dilarang Keras (OUT OF SCOPE) |
| :--- | :--- | :--- |
| **Project Control** | Membuat & memperbarui file `.md` kontrol di `docs/project/`. | Membuat sistem otomasi deploy dokumen atau integrasi CI/CD tanpa izin. |
| **Folder `materi/`** | Membuat folder rak kosong (00 s/d 17), `README.md`, dan template bab. | Menghapus folder `materi/` atau merombak nomor rak tanpa persetujuan Room Chat 00. |
| **Migrasi Konten** | Memindahkan materi bab secara satuan dan bertahap berdasarkan mapping. | Memindahkan seluruh file markdown secara instan tanpa mapping dan review. |
| **Aplikasi Web** | - | Membuat sistem autentikasi, API router, koneksi database, atau bundler frontend. |

---

## 3. Penegakan Batasan (Enforcement)
Jika Executor (Gemini 3 Flash) menerima perintah yang melanggar poin-poin di atas, Executor **wajib** menolak secara sopan, menunjukkan dokumen `docs/project/scope-guard.md` ini, dan meminta konfirmasi ulang dari Room Chat 00.

---

## 4. Standar Kualitas Konten & Estetika Visual (Gold Standard)

Meskipun isi materi disesuaikan untuk JavaScript, seluruh dokumen materi final wajib mematuhi standar estetika berikut untuk menjamin keindahan visual premium:

### A. Skema Warna & Visual Identity
* **Primary Color:** `#F7DF1E` (JS Yellow) - Digunakan untuk aksen, badge, dan elemen kunci.
* **Secondary Color:** `#000000` (Classic Black) - Dasar tipografi utama.

### B. Standardisasi Diagram Mermaid
Seluruh diagram alur eksekusi wajib menggunakan inisialisasi tema khusus untuk keterbacaan tingkat tinggi:
```markdown
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
```

### C. Core DNA Thinking (Model Mental JavaScript)
Dalam menguraikan konsep pemrograman, penjelasan harus didasarkan pada 3 pilar berpikir:
1. **Execution & Event Model:** Menjelaskan Call Stack, Event Loop, Task Queue, dan Microtask Queue.
2. **Object & Scope Model:** Menjelaskan Lexical Scoping, Closures, Prototypal Chain, dan First-class Functions.
3. **Multi-Paradigm Flexibility:** Menyeimbangkan penjelasan gaya Functional, Object-Oriented (ES6 Classes), dan Event-Driven.

