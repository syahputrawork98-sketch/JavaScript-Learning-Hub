# Arsitektur & Hierarki Struktur (JS Edition)

Proyek **JavaScript Knowledge Base** disusun dengan analogi **Perpustakaan Dunia Maya (The JavaScript Library)** untuk mentransformasi dokumentasi teknis (*MDN Web Docs* & *ECMAScript Spec*) menjadi unit pelajaran yang manusiawi dan efisien.

## Analogi Struktur

Berikut adalah pemetaannya ke dalam direktori bertingkat:

| Tingkatan | Analogi | Contoh Direktori | Keterangan |
| :--- | :--- | :--- | :--- |
| **Level 1** | **Rak (Shelf)** | `RAK-01-javascript/` | Domain Utama (5 RAK). |
| **Level 2** | **Sub-Rak (Sub-shelf)** | `SR-01-get-started/` | Track spesifik di dalam Rak. |
| **Level 3** | **Buku (Book)** | `BK-01_Basics/` | Koleksi bab terpadu. |
| **Level 4** | **Bab (Chapter)** | `CH-01_Overview/` | Unit materi inti (Folder Bab). |

---

## Karakteristik & Autentisitas (Branding)

Untuk menjaga "nyawa" dan keunikan bahasa JavaScript, setiap konten wajib mengikuti pedoman berikut:

- **Analogi Utama**: **Pusat Energi Web (The Web's Kinetic Hub)**.
- **Tone Suara**: **Dinamis, Fleksibel, dan Enerjik**. JS adalah detak jantung web; gunakan narasi yang mencerminkan sifatnya yang asinkron dan selalu bergerak.
- **Filosofi Penulisan**: Fokus pada *Versatility* dan *Event-Driven nature*. Jelaskan bagaimana JS menjadi "lem" yang menyatukan seluruh teknologi web modern.
- **Visual**: Gunakan estetika yang vibran dan diagram yang menunjukkan aliran *Event Loop* dan interaktivitas.

---

## Aturan Pewajiban `README.md`

Guna memudahkan navigasi, setiap tingkatan direktori **WAJIB** memiliki file `README.md`:

- **Root (`/README.md`)**: Visi keseluruhan (The Web Architect 🌐).
- **Rak (`RAK-XX/README.md`)**: Tujuan dan cakupan Rak tersebut.
- **Buku (`BK-XX/README.md`)**: Sinopsis dan orientasi filosofis materi.
- **Bab (`CH-XX/README.md`)**: Materi inti (PPM Stage 1).

---

## Kriteria "Gold Standard" (100% Complete)

Sebuah unit dianggap **Completed** jika memenuhi 4 pilar kualitas:

> [!IMPORTANT]
> **Pilar 1: Documentation-Sync Accurate**  
> Konten diverifikasi terhadap dokumentasi resmi MDN atau ECMAScript Spec.
>
> **Pilar 2: Functional Examples**  
> Minimal 1 contoh kode (`.js`) di folder `examples/`.  
> *Catatan*: Gunakan standar ESNext jika relevan.
>
> **Pilar 3: Mental Model Visual**  
> Minimal 1 diagram (Mermaid/SVG) di folder `assets/`.
>
> **Pilar 4: Narrative Excellence**  
> Penjelasan menggunakan standar PPM V4: Manusiawi, ada analogi (misal: "Event Loop as a Restaurant"), dan menggunakan **Bahasa Arsitek**.
