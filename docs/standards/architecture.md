# Arsitektur & Hierarki Struktur (JS Edition)

Proyek **JavaScript Knowledge Base** disusun dengan analogi **Perpustakaan Dunia Maya (The JavaScript Library)** untuk mentransformasi dokumentasi teknis (*MDN Web Docs* & *ECMAScript Spec*) menjadi unit pelajaran yang manusiawi dan efisien.

## Analogi Struktur

Berikut adalah pemetaannya ke dalam direktori bertingkat:

| Tingkatan | Analogi | Contoh Direktori | Keterangan |
| :--- | :--- | :--- | :--- |
| **Level 1** | **Perpustakaan** | `/` (root) | Seluruh sistem proyek (JS Engine). |
| **Level 2** | **Rak (Shelf)** | `RAK-01-get-started/` | Pengelompokan besar domain ilmu (11 RAK). |
| **Level 3** | **Sub-Rak (Sub-shelf)** | `SR-01_General/` | Grup materi berbasis area spesifik. |
| **Level 4** | **Buku (Book)** | `BK-01_Basics/` | Koleksi bab yang membentuk satu topik besar. |
| **Level 5** | **Bab (Chapter)** | `CH-01_Overview/` | Unit terkecil wajib (Folder Bab). |

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
