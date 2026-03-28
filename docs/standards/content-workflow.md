# Content Workflow: Research & Writing (PPM V4)

Dokumen ini mengatur alur kerja pembuatan materi, mulai dari riset spesifikasi hingga penulisan narasi yang memenuhi standar **Gold Standard**.

---

## 🛡️ 1. Rule 0: Discussion-First Protocol (Pre-Execution)

Sebelum AI melakukan penulisan atau restrukturisasi file apapun, AI **WAJIB** melalui gerbang diskusi:

1.  **AI Research**: AI mencari sumber primer (MDN/ECMA-262/V8) yang paling relevan.
2.  **AI Proposal**: AI mengajukan tautan (URL) dan alasan pemilihan di chat.
3.  **Wait for "Eksekusi"**: AI dilarang menulis sebelum User memberikan persetujuan eksplisit.

---

## ✍️ 2. Tahapan PPM (Prosedur Penulisan Materi) V4

Setiap penyusunan materi wajib mengikuti 5 tahapan representasi:

### Tahap 1: Source Alignment & Judul
Header materi dengan metafora/analogi + Link spesifik ke dokumentasi resmi sebagai jaminan akurasi.

### Tahap 2: Konsep & Esensi (Definisi & Rasionalitas)
Definisi formal, "Why & How" (Alasan fitur diciptakan), dan Analogi Model Mental.

### Tahap 3: Visualisasi Sistem (Mermaid)
Diagram Mermaid **inline** (bukan file eksternal) untuk memetakan alur eksekusi atau manajemen memori.

### Tahap 4: Mekanisme Pembuktian (Algoritma Detil)
Detail balik layar bagaimana kode dieksekusi oleh mesin (V8/Runtime logic).

### Tahap 5: Multi-file Lab Praktis (Examples)
Referensi ke skrip di folder `examples/` yang memverifikasi teori di atas.

---

## 🏛️ 3. Standar Unified 8-Point README

Setiap file `README.md` (Level 2-6) **WAJIB** memiliki 8 elemen berikut:
1. **Header & Analogi**: Judul + Metafora singkat.
2. **🌐 Source Hub**: Tautan resmi ke MDN/ECMA.
3. **The Essence**: Deskripsi teknis & Rasionalitas.
4. **The Landscape**: Navigasi ke tingkat di bawahnya (Sub-levels).
5. **Visual Logic**: Diagram Mermaid inline.
6. **Internals**: Mekanisme balik layar (Spec/Engine logic).
7. **The Lab**: Referensi ke skrip praktis di `examples/`.
8. **Pitfalls & Anti-Patterns**: Jebakan umum dan praktik buruk.

---

## 📜 4. Pengecualian "Nil Content"
Jika materi bersifat murni sejarah atau konseptual (terutama RAK-01):
- Sertakan penafian: *"Unit ini bersifat penjelasan naratif, tidak membutuhkan Lab Praktis."*
- **Dilarang** membuat folder `examples/` atau `assets/` yang kosong.
