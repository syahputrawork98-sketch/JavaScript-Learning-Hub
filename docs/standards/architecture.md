# Arsitektur & Hierarki Struktur (JS Edition)

Proyek **JavaScript Knowledge Base** disusun dengan prinsip **Digital Mirroring (Source-Driven Hierarchy)** untuk mentransformasi dokumentasi teknis (*MDN Web Docs* & *ECMAScript Spec*) menjadi unit pelajaran yang presisi dan dinamis.

## ⚖️ Prinsip Utama: Digital Mirroring
Hierarki repositori tidak dibatasi oleh template kaku, melainkan mengikuti struktur logis dari sumber primer secara **1:1**. Jika spesifikasi menuntut kedalaman lebih, sistem akan mengakomodasi secara dinamis.

## Analogi Struktur (The 6-Level Depth)

Berikut adalah pemetaannya ke dalam direktori bertingkat:

| Tingkatan | Analogi | Prefix | Contoh Direktori | Keterangan |
| :--- | :--- | :--- | :--- | :--- |
| **Level 1** | **Perpustakaan** | `/` | `/` | Seluruh sistem proyek (Hub). |
| **Level 2** | **Rak (Shelf)** | `RAK-` | `RAK-01-foundation/` | Domain Utama (6-Rack Universal). |
| **Level 3** | **Sub-Rak** | `SR-` | `SR-01-get-started/` | Track spesifik (Spec-Driven). |
| **Level 4** | **Buku (Book)** | `BK-` | `BK-01_Basics/` | Koleksi bab terpadu. |
| **Level 5** | **Bab (Chapter)** | `CH-` | `CH-01_Overview/` | Unit materi inti (PPM Stage 1). |
| **Level 6** | **Halaman (Page)**| `SEC-` | `SEC-01_ThisKeyword/` | Granulitas terdalam (Opsional). |

---

## Karakteristik & Autentisitas (Branding)

Untuk menjaga "nyawa" dan keunikan bahasa JavaScript, setiap konten wajib mengikuti pedoman berikut:

- **Analogi Utama**: **Pusat Energi Web (The Web's Kinetic Hub)**.
- **Tone Suara**: **Dinamis, Fleksibel, dan Enerjik**. JS adalah detak jantung web; gunakan narasi yang mencerminkan sifatnya yang asinkron dan selalu bergerak.
- **Filosofi Penulisan**: Fokus pada *Versatility* dan *Event-Driven nature*. Jelaskan bagaimana JS menjadi "lem" yang menyatukan seluruh teknologi web modern.

---

## Aturan Pewajiban `README.md`

Guna memudahkan navigasi, setiap tingkatan direktori **WAJIB** memiliki file `README.md`:

- **Root (`/README.md`)**: Visi keseluruhan (The Web Architect 🌐).
- **Rak (`RAK-XX/README.md`)**: Tujuan dan cakupan Rak tersebut.
- **Sub-Rak (`SR-XX/README.md`)**: Fokus teknis jalur tersebut.
- **Buku (`BK-XX/README.md`)**: Sinopsis dan orientasi filosofis.
- **Bab/Section (`CH-XX/README.md` atau `SEC-XX/README.md`)**: Materi inti (PPM Stage 1).

---

## Kriteria "Gold Standard" (100% Complete)

Sebuah unit dianggap **Completed** jika memenuhi 4 pilar kualitas:

> [!IMPORTANT]
> **Pilar 1: Documentation-Sync Accurate**  
> Konten diverifikasi secara 1:1 terhadap dokumentasi resmi MDN atau ECMAScript Spec (Digital Mirroring).
>
> **Pilar 2: Functional Examples**  
> Minimal 1 contoh kode (`.js`) di folder `examples/`.  
>
> **Pilar 3: Mental Model Visual**  
> Minimal 1 diagram (Mermaid/SVG) di folder `assets/`.
>
> **Pilar 4: Narrative Excellence**  
> Penjelasan menggunakan standar PPM V4: Manusiawi, ada analogi, dan menggunakan **Bahasa Arsitek**.
