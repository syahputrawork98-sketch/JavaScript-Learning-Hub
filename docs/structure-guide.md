# Panduan Struktur (Structure Guide)

Proyek **JavaScript Knowledge Base** disusun dengan analogi **Perpustakaan Digital** untuk merombak struktur dokumentasi teknis (*ECMAScript Spec*) yang kaku menjadi unit pelajaran yang manusiawi. Tujuannya adalah mendesain rute yang jelas bagi The Brain (Core Language).

Semua penulisan aturan, kerangka, dan penataan menggunakan **Bahasa Indonesia** sebagai standar.

## Analogi Struktur

Berikut adalah pemetaannya ke dalam direktori bertingkat:

| Tingkatan | Analogi | Contoh Direktori | Keterangan |
| :--- | :--- | :--- | :--- |
| **Level 1** | **Perpustakaan** | `/` (root) | Seluruh sistem proyek (Fokus murni ke inti bahasa JS). |
| **Level 2** | **Rak (Shelf)** | `RAK-01-core/` | Rak utama pembeda kedalaman ilmu (*The Brain*). |
| **Level 3** | **Sub-Rak (Sub-shelf)** | `.../01_notational_conventions/` | Pemetaan granular dari Clause ECMA-262 (Total 12 Sub-Rak). |
| **Level 4** | **Buku** | `.../01_js_basics/` | Kumpulan topik khusus yang dipelajari utuh. |
| **Level 5** | **Bab (Chapter)** | `01_variables/` | Folder berisi materi spesifik: `README.md`, `assets/`, dan `examples/`. |

## Aturan Pewajiban `README.md`

Guna memudahkan orientasi (agar pembaca tahu mereka sedang ada di level sebelah mana), **setiap direktori (Rak, Sub-Rak, Buku) WAJIB memiliki file `README.md`**.

- **Di level Root** (`/README.md`): Menjelaskan visi keseluruhan perpustakaan ini (3 Pilar Rak Utama).
- **Di level Rak** (`RAK-01-core/README.md`): Menjelaskan tujuan Rak tersebut.
- **Di level Sub-Rak** (`.../01_notational_conventions/README.md`): Menjelaskan Clause spesifik yang dibahas.
- **Di level Buku** (`.../01_js_basics/README.md`): Pengantar materi bab-bab di dalamnya.

## Konvensi Penamaan

1. **Folder (Selain Bab)**: Menggunakan format `RAK-XX-nama` untuk Rak Utama, dan `XX_nama` untuk folder internal lainnya (Sub-Rak, Buku).
2. **Konvensi Bab**:
   - Seluruh Bab adalah **sebuah folder**, bukan file Markdown tunggal.
   - Di dalamnya terdapat `README.md` (Narasi), `assets/` (Gambar), dan `examples/` (Kode).

## Prosedur Penulisan Materi (PPM)

Untuk memastikan kualitas materi di versi `V3` tidak "setengah-setengah", setiap pengerjaan Bab wajib mengikuti urutan prosedur berikut:

1. **Tahap 1: Penulisan Narasi (`README.md`)**
   - **Materi Inti**: Tuliskan teori, filosofi, dan bedah spesifikasi (ECMA-262) secara naratif.
   - **Terminologi Standar**: Wajib menggunakan istilah teknis standar (misal: *Execution Context*, *Lexical Environment*, *Internal Slots*) agar pembaca bisa berkomunikasi secara profesional dengan *Developer* lain di tingkat global.
   - **Sistem Analogi (Mental Model)**: Gunakan analogi untuk mempermudah pemahaman konsep abstrak. Terdapat dua jenis analogi:
     - **Analogi Panjang**: Narasi/skenario mendalam untuk membongkar mekanisme *mental model*.
     - **Analogi Singkat**: Perumpamaan ringkas untuk pengingat cepat.
   - *Catatan:* Setiap materi bisa menggunakan kedua jenis analogi ini atau salah satunya saja, asalkan mampu menjelaskan konsep secara jernih.
   - **Bahasa**: Gunakan Bahasa Indonesia yang teknis, presisi, namun tetap manusiawi.
2. **Tahap 2: Pembuatan Contoh Kode (`examples/`)**
   - Buat minimal satu atau lebih skrip JavaScript (`.js`) yang membuktikan teori di narasi.
   - Jangan membatasi jumlah contoh; pastikan setiap poin krusial di materi memiliki pembuktian kodenya.
3. **Tahap 3: Visualisasi (`assets/`)**
   - Buat gambar atau diagram (SVG/PNG) yang menjelaskan mekanisme internal atau alur logika dari bab tersebut.
   - Gambar harus mampu merepresentasikan "Mental Model" yang dibahas agar pembaca tidak hanya sekadar menghafal sintaks.

## Templat Buku & Bab
Setiap folder Buku baru wajib distrukturkan seperti ini:
```text
<urutan>_<nama_buku>/
|-- README.md        <- Wajib ada. Menjelaskan isi buku (Pengantar/Daftar Isi).
|-- CHANGELOG.md     <- Aturan log & versioning draf.
`-- 01_<nama_bab>/   <- FOLDER BAB TERPISAH
    |-- README.md    <- Berupa materi teks murni (Tahap 1).
    |-- assets/      <- Gambar/Diagram penjelasan (Tahap 3).
    `-- examples/    <- Koleksi skrip JavaScript pembuktian (Tahap 2).
```

## Aturan Penulisan CHANGELOG.md & Versioning (Level Buku)

Setiap Buku wajib memiliki file `CHANGELOG.md` untuk merekam jejak pengerjaan (*Release Notes*).

1. **Format Versi (`v3.rak.subrak.buku`)**:
   - Versi dirangkai berdasarkan angka hierarki foldernya di versi `v3`.
   - Contoh: Jika sedang mengerjakan Rak 1 (`01-core`), Sub-Rak 2 (`02_data_types_and_values`), Buku 1 (`01_primitive_types`), maka versinya adalah **`v3.01.02.01`**. Revisi lanjutan pada buku ini increment angka terakhirnya menjadi `v3.01.02.02`, dst.
2. **Tahap Pengerjaan (`[Unreleased]`)**:
   - Selama menyusun bab atau materi, catat detail perubahannya di bawah *header* `## [Unreleased]`.
   - Sebutkan secara spesifik apa saja yang dikerjakan (contoh: "Mengerjakan Bab 1: Menambahkan materi, 2 skrip *examples*, dan 1 *assets* diagram").
3. **Tahap Rilis (Commit)**:
   - Jika satu fase pengerjaan dirasa sudah siap dikomit/dirilis (misal saat kamu ingin *commit* dan istirahat), ubah *header* `[Unreleased]` menjadi versi rilis.
   - Contoh: `## [v3.01.02.01] - YYYY-MM-DD`
   - Teks *changelog* ini **WAJIB** digunakan sebagai pesan *commit* saat dikirimkan ke repositori.

## Aturan Sinkronisasi Hierarkis (Pembaruan Dokumentasi)

Untuk memastikan perpustakaan pusat (`Root`) dan `Roadmap` selalu mencerminkan kondisi terbaru dari Rak dan Sub-Rak di bawahnya, setiap penambahan/perubahan struktur (seperti menambah Sub-Rak baru atau Buku baru) **WAJIB** diikuti dengan siklus sinkronisasi *Bottom-Up*:

1. **Sinkronisasi Level Sub-Rak (`RAK-XX/XX_nama/README.md`)**
   - Jika **Buku baru** ditambahkan, perbarui daftar `## Buku` di dalam `README.md` milik Sub-Rak tersebut.
2. **Sinkronisasi Level Rak (`RAK-XX/README.md`)**
   - Jika **Sub-Rak baru** ditambahkan, perbarui daftar `## Daftar Sub-Rak` di dalam `README.md` milik Rak tersebut.
3. **Sinkronisasi Level Root (`/docs/roadmap.md`)**
   - Dokumen ini adalah peta terlengkap. Jika ada tambahan **Sub-Rak** atau perubahan arah pembelajaran besar, `roadmap.md` **WAJIB** diperbarui untuk merefleksikan alur baru tersebut.
4. **Sinkronisasi Level Tertinggi (`/README.md`)**
   - Tabel `## Roadmap & Status Pengembangan` di Root README **WAJIB** diperbarui statusnya (misal dari *Planned* menjadi *In Progress*) jika ada pengerjaan signifikan di dalam Rak terkait.

## Aturan Evolusi ECMAScript (Handling ECMA-262 Updates)

Karena repositori ini mengikuti **ECMA-262 Specification** (yang terus berkembang tiap edisi tahunannya oleh komite TC39), kita memiliki panduan evolusi yang transparan:

1. **Penambahan Fitur Skala Kecil/Menengah (Sintaks & API Baru)**
   - Jika ECMAScript merilis sintaks atau *Built-in Object* tambahan (misal: *Pattern Matching*, operator baru), fitur tersebut akan dimasukkan sebagai **Bab atau Buku baru** di dalam Sub-Rak yang paling relevan tanpa harus menambah Sub-Rak baru.
     - *Contoh: Tipe data baru (seperti Records/Tuples) akan dimasukkan ke Sub-Rak `02_data_types_and_values`.*
2. **Penambahan Fitur Skala Dasar (Konsep Formal Baru)**
   - Jika ECMA-262 merombak keseluruhan paradigma atau menambahkan *Clause* fundamental baru yang melompat dari pemetaan saat ini, maka **Sub-Rak baru** dapat diciptakan menggunakan seri angka selanjutnya (misal: `13_<nama_konsep_baru>`).
3. **Standar Masuk (Stage 4 Only)**
   - Untuk menjaga kemurnian "The Brain" yang stabil dan absolut (*Single Source of Truth*), repositori ini HANYA mendokumentasikan fitur-fitur yang sudah mencapai **Stage 4 (Finished)** di proposal TC39. Proposal Stage 1-3 tidak akan dibahas agar tidak mengotori repositori dengan *draft* yang dapat berubah-ubah.
