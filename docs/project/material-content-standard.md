# Material Content Standard — JavaScript Knowledge Base

Dokumen ini adalah standar resmi awal untuk struktur buku, bab, subbab, dan gaya penulisan materi di JavaScript Knowledge Base.

Standar ini digunakan sebelum fase migrasi atau penulisan ulang materi dimulai.

---

## 1. Tujuan Standar

Standar ini dibuat agar materi JavaScript Knowledge Base tidak menjadi kumpulan catatan acak, tetapi menjadi sistem belajar yang membantu pembaca naik level:

```text
bisa pakai JavaScript
→ paham konsepnya
→ mengerti cara kerja di balik layar
→ bisa menjelaskan ulang dengan detail
→ bisa mengikuti update ekosistem terbaru
```

---

## 2. Struktur Utama Materi

Struktur materi menggunakan pola:

```text
Rak
└── Buku
    └── Bab
        └── Subbab
            └── Contoh / Latihan / Diagram / Simulasi
```

### Definisi:
*   **Rak** = wilayah besar ilmu (terdiri dari folder `00-index-dan-jalur-belajar` s/d `17-berita-isu-dan-update-ekosistem` di bawah `materi/`).
*   **Buku** = paket pemahaman utuh dalam satu rak (berupa subfolder di dalam folder Rak).
*   **Bab** = satu konsep utama dalam buku (berupa berkas Markdown `.md` di dalam folder Buku).
*   **Subbab** = heading (H2/H3/dst) di dalam file Markdown Bab, bukan folder baru.
*   **Assets** = gambar, diagram tambahan, atau simulasi pendukung di dalam folder `assets/` per Buku bila diperlukan.

---

## 3. Pola Folder dan Penamaan

### 3.1 Penamaan Buku

Gunakan format:
```text
BK-01-nama-buku
BK-02-nama-buku
BK-03-nama-buku
```

*Contoh:*
*   `BK-01-scope-dan-lexical-environment`
*   `BK-02-closure-dan-memory`
*   `BK-03-this-binding`

### 3.2 Penamaan Bab

Gunakan format:
```text
01-nama-bab.md
02-nama-bab.md
03-nama-bab.md
```

*Contoh:*
*   `01-apa-itu-scope.md`
*   `02-global-function-dan-block-scope.md`
*   `03-lexical-scope.md`

### 3.3 Contoh Struktur Folder

```text
materi/
  03-scope-closure-this-dan-execution-context/
    README.md

    BK-01-scope-dan-lexical-environment/
      README.md
      01-apa-itu-scope.md
      02-global-function-dan-block-scope.md
      03-lexical-scope.md
      04-scope-chain.md
      05-shadowing.md
      06-scope-dalam-project-nyata.md
      assets/
```

---

## 4. README Setiap Rak

Setiap rak wajib memiliki `README.md`.

README rak harus menjelaskan:
*   Rak ini membahas apa.
*   Kenapa rak ini penting.
*   Prasyarat sebelum membaca rak ini.
*   Urutan buku yang disarankan.
*   Hasil akhir setelah menyelesaikan rak ini.
*   Hubungan rak ini dengan rak lain.

> [!IMPORTANT]
> **Rak 00-index-dan-jalur-belajar** harus menjadi pusat navigasi utama, bukan hanya daftar link.

Rak `00` idealnya memuat beberapa jalur belajar:
*   **Jalur 1 — Dari nol ke bisa menulis JavaScript** (Focus on basic syntax, control flow, basic algorithms)
*   **Jalur 2 — Dari bisa ngoding ke paham mental model** (Focus on Scope, Closure, Prototype, Object-Oriented JS, Functional JS)
*   **Jalur 3 — Dari paham ke mengerti runtime dan engine** (Focus on Call Stack, Event Loop, V8 Internals, Memory Management, GC)
*   **Jalur 4 — Dari mengerti ke siap project nyata** (Focus on DOM, Security, Performance, Bundlers, Testing, Node.js/Runtimes)
*   **Jalur 5 — Dari project ke interview dan update ekosistem** (Focus on Technical Interview Prep, TC39 proposals, new specs)

---

## 5. README Setiap Buku

Setiap buku wajib memiliki `README.md`.

README buku harus menjelaskan:
*   Tujuan buku.
*   Untuk siapa buku ini.
*   Prasyarat.
*   Hasil akhir setelah membaca buku ini.
*   Urutan bab.
*   Hubungan dengan buku/rak lain.

*Contoh tujuan buku:*
> Buku ini menjelaskan bagaimana JavaScript menentukan area akses variabel, bagaimana lexical scope bekerja, dan bagaimana konsep ini menjadi dasar untuk memahami closure.

---

## 6. Standar Bab

Setiap bab idealnya memakai struktur utama berikut:
1.  **Tujuan Bab**
2.  **Inti Cepat**
3.  **Masalah yang Diselesaikan**
4.  **Analogi**
5.  **Batas Analogi**
6.  **Penjelasan Naratif**
7.  **Penjelasan Teknis**
8.  **Contoh Kode**
9.  **Bedah Kode**
10. **Cara Kerja di Balik Layar**
11. **Diagram / Simulasi**
12. **Kesalahan Umum**
13. **Contoh Project**
14. **Latihan**
15. **Ringkasan**
16. **Lanjut ke Mana**

> [!NOTE]
> Tidak semua bab harus sangat panjang, tetapi bagian inti berikut wajib ada untuk bab teknis:
> *   **Tujuan Bab**
> *   **Inti Cepat**
> *   **Penjelasan Naratif**
> *   **Penjelasan Teknis**
> *   **Contoh Kode**
> *   **Cara Kerja di Balik Layar**
> *   **Kesalahan Umum**
> *   **Latihan**
> *   **Ringkasan**

---

## 7. Gaya Penulisan

Gaya penulisan materi mengikuti alur:
```text
bahasa manusia
→ analogi
→ contoh sederhana
→ penjelasan teknis
→ cara kerja di balik layar
→ edge case / kesalahan umum
→ contoh project
→ latihan
```

*   Materi **tidak boleh** hanya menjadi tutorial pendek.
*   Materi juga **tidak boleh** terlalu akademis sampai sulit dibaca.
*   **Target utama:** Mudah dipahami, cepat masuk, tetap teknis, dan bisa dipakai untuk belajar jangka panjang.

---

## 8. Aturan Analogi

Analogi boleh dipakai dan dianjurkan, tetapi wajib dikontrol agar tidak menyesatkan.

### Format Aman:
```text
Analogi
→ Batas Analogi
→ Penjelasan Teknis Sebenarnya
```

*Contoh:*
*   **Analogi:** Scope seperti ruangan. Variabel yang dibuat di dalam ruangan hanya bisa dilihat oleh orang di ruangan itu.
*   **Batas Analogi:** Analogi ini membantu memahami akses variabel secara spasial, tetapi tidak menjelaskan detail *lexical environment* atau *outer reference* secara penuh saat eksekusi berjalan.
*   **Teknis:** Secara teknis, JavaScript menggunakan *lexical environment* yang terdiri dari *environment record* dan tautan ke *outer lexical environment* untuk menelusuri variabel.

> [!WARNING]
> Analogi **tidak boleh** menggantikan penjelasan teknis. Analogi hanyalah jembatan awal menuju pemahaman detail teknis yang sebenarnya.

---

## 9. Diagram, Gambar, dan Simulasi

Materi JavaScript sebaiknya memakai diagram/simulasi untuk memvisualisasikan topik abstrak.

### Topik yang wajib diberi diagram/simulasi jika memungkinkan:
*   execution context (Creation vs Execution Phase)
*   call stack
*   scope chain
*   closure
*   prototype chain
*   this binding
*   event loop (Call Stack, Web APIs, Microtask Queue, Macrotask Queue)
*   microtask dan macrotask
*   Promise flow
*   module resolution
*   memory reference (Stack vs Heap)
*   garbage collection (Mark and Sweep, Generational Heap)
*   DOM event propagation (Capturing, Target, Bubbling)
*   async/await (generator-based background flow)

### Jenis visual yang disarankan:
*   Mermaid flowchart
*   Mermaid sequence diagram
*   Tabel step-by-step
*   Timeline eksekusi
*   Call stack simulation
*   Scope chain tree
*   Prototype chain diagram
*   Event loop queue diagram

---

## 10. Latihan dan Prediksi Output

Bab teknis JavaScript wajib memiliki latihan jika memungkinkan.

### Jenis latihan yang dianjurkan:
*   **Prediksi output:** Menebak luaran dari potongan kode yang menjebak (misalnya closure di dalam loop, variable hoisting, `this` context binding).
*   **Debugging kecil:** Mencari tahu mengapa kode tidak berjalan sesuai harapan.
*   **Perbaiki bug:** Memperbaiki kode yang rusak.
*   **Jelaskan ulang konsep:** Latihan pemahaman konseptual.
*   **Ubah contoh kode:** Memodifikasi contoh yang ada untuk membuktikan hipotesis baru.
*   **Bandingkan dua pola kode:** Menilai mana yang lebih efisien/aman.
*   **Mini case project:** Menerapkan materi ke masalah skala kecil di dunia nyata.

> [!TIP]
> Latihan sangat penting karena JavaScript memiliki banyak perilaku yang tampak sederhana tetapi sering menjebak (*quirks*) bagi developer.

---

## 11. Ukuran Ideal

Batas ini bukan aturan kaku, tetapi batas lunak (*soft limits*) untuk menjaga keterbacaan:
*   **1 Rak** = 3–10 Buku
*   **1 Buku** = 4–12 Bab
*   **1 Bab** = 5–12 Subbab heading H2/H3
*   **1 Subbab** = Pendek dan fokus

> [!NOTE]
> *   Jika satu buku lebih dari 15 bab, sebaiknya dipecah menjadi beberapa buku.
> *   Jika satu bab terlalu panjang, sebaiknya dipecah menjadi bab terpisah.
> *   Jika satu subbab terlalu besar bahasan teknisnya, naikkan statusnya menjadi bab mandiri.

---

## 12. Jenis Buku dalam Setiap Rak

Dalam satu rak, buku sebaiknya tidak semuanya teori. Idealnya ada kombinasi variatif:
*   **Buku Fondasi** (Konsep dasar & API)
*   **Buku Mental Model** (Bagaimana itu bekerja di balik layar secara mendalam)
*   **Buku Praktik** (Penerapan nyata, best practices)
*   **Buku Bug dan Debugging** (Edge cases, common mistakes)
*   **Buku Latihan / Prediksi Output** (Pengujian mandiri)

*Contoh untuk Rak 03:*
```text
03-scope-closure-this-dan-execution-context/
  BK-01-scope-dan-lexical-environment/
  BK-02-closure-dan-memory/
  BK-03-this-binding/
  BK-04-execution-context-call-stack-dan-hoisting/
  BK-05-latihan-debugging-dan-interview/
```

---

## 13. Prinsip Penulisan Materi

*   **Jangan hanya membuat kumpulan catatan.** Buat sistem belajar yang interaktif dan bertahap.
*   **Jangan migrasi konten legacy secara mentah.** Materi lama boleh dipecah, digabung, ditulis ulang, atau diperluas sesuai standar baru.
*   **Naik Level:** Setiap materi harus membantu pembaca naik dari *bisa* → *paham* → *mengerti*.
*   **Ringkas & Padat:** Materi harus cepat dibaca, tetapi tetap teknis tanpa menyembunyikan kompleksitas.
*   **Analogi Terkontrol:** Analogi boleh, tapi harus diberi batas.
*   **Visualisasi Abstrak:** Diagram/simulasi penting untuk memvisualisasikan konsep abstrak.
*   **Latihan Prediksi Output:** Sangat disarankan untuk melatih kepekaan terhadap perilaku runtime JavaScript.
*   **Koneksi Topik:** Hubungan antar topik perlu ditulis agar pembelajaran tidak terputus.

---

## 14. Hubungan dengan Migrasi Legacy

Standar ini harus dipakai sebelum melakukan migrasi atau penulisan ulang materi dari folder legacy `RAK-*`.

Materi lama tidak boleh dipindahkan mentah-mentah.

### Alur Migrasi Materi yang Benar:
```text
baca legacy
→ kaji kelayakan
→ petakan ke rak/buku/bab baru
→ tulis ulang sesuai standar baru
→ review oleh Room Chat 01 & Room Chat 00
→ baru pertimbangkan penghapusan legacy terkait
```

---

## 15. Status Standar

Status: **ACTIVE DRAFT**

*   Standar ini sudah boleh dipakai sebagai acuan awal untuk pilot penulisan.
*   Standar ini masih bisa diperbaiki atau diperluas setelah dilakukan pilot penulisan materi pertama.
*   Perubahan besar terhadap standar ini harus diputuskan dan disepakati oleh Room Chat 00/User.
