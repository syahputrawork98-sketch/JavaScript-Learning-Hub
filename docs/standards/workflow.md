# Alur Kerja & Prosedur Penulisan (PPM)

Prosedur Penulisan Materi (PPM) dirancang untuk memastikan kualitas materi tetap tinggi dan standar di seluruh buku.

## Tahapan PPM (Prosedur Penulisan Materi)

Setiap pengerjaan Bab wajib mengikuti urutan berikut:

### 1. Tahap 1: Penulisan Narasi (`README.md`)
- **Materi Inti**: Bedah spesifikasi (ECMA-262) secara naratif.
- **Terminologi Standar**: Wajib menggunakan istilah teknis asli (e.g., *Internal Slots*) agar tetap profesional.
- **Mental Model (Analogi)**:
    - **Analogi Panjang**: Skenario mendalam untuk membongkar mekanisme.
    - **Analogi Singkat**: Perumpamaan ringkas untuk pengingat cepat.

### 2. Tahap 2: Pembuatan Contoh Kode (`examples/`)
- **Tanpa Batasan**: Jumlah skrip `.js` tidak dibatasi. Sangat disarankan untuk membuat lebih dari satu contoh jika materi memiliki banyak poin krusial.
- **Cakupan Penuh**: Setiap aspek teknis yang dibahas di narasi harus tercermin dalam pembuktian kode.
- **Validitas**: Pastikan kode bisa dijalankan dan memverifikasi perilaku spesifikasi secara akurat.

### 3. Tahap 3: Visualisasi (`assets/`)
- Diagram (Mermaid/SVG) yang menjelaskan alur logika atau mental model.
- Visualisasi harus membantu pembaca memahami "kenapa", bukan hanya "bagaimana".
- **Pengayaan Visual (Emoji)**: Sangat disarankan menyisipkan emoji pada diagram atau model visual jika dirasa perlu agar pembaca (Abah) dapat menangkap konsep secara lebih intuitif dan menyenangkan.

---

## Penggunaan Section (Level 6)

Gunakan folder `SEC-XX_` di dalam Bab jika:
1. **Kompleksitas Tinggi**: Satu bab membahas terlalu banyak operasi (misal: *Binary Operators* yang memiliki puluhan operator).
2. **Keterbacaan**: `README.md` di level Bab sudah terlalu panjang (> 1000 baris).
3. **Pemisahan Contoh**: Contoh kode antar sub-topik di dalam bab tersebut sangat berbeda dan butuh isolasi.

*Jika bab bersifat ringkas, tidak perlu menggunakan folder Section.*

---

## Templat folder Buku baru:
```text
BK-<urutan>_<NamaBuku>/
|-- README.md        <- Pengantar & Daftar Isi.
|-- CHANGELOG.md     <- Log pengerjaan.
`-- CH-01_<NamaBab>/ <- Folder Bab.
```
