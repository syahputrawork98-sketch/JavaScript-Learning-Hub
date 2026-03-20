# Alur Kerja Penulisan (PPM) V4 - JS Edition

Prosedur Penulisan Materi (PPM) memastikan setiap Bab (**CH**) atau Section (**SEC**) di JavaScript Knowledge Base memiliki kualitas yang setara dengan repositori "Gold Standard" lainnya.

## Tahapan PPM (Prosedur Penulisan Materi) V4

Setiap pengerjaan unit materi (CH/SEC) wajib mengikuti 4 Tahapan berikut secara disiplin:

### 1. Tahap 1: Definisi & Konsep ("Apa itu?")
- **Deskripsi**: Menjelaskan definisi materi atau fitur yang dibahas secara gamblang.
- **Landasan**: Memberikan pemahaman awal yang kuat sebelum masuk ke detail teknis.
- **Terminologi Teknis**: Mencantumkan dan menjelaskan istilah-istilah kunci yang digunakan oleh para ahli (*Senior Developers*). Tujuannya agar pembaca (sekalipun awam) dapat berkomunikasi dengan bahasa yang sama di lingkungan profesional.

### 2. Tahap 2: Rasionalitas ("Why & How?")
- **Kenapa**: Menjelaskan alasan fitur tersebut diciptakan dan masalah apa yang ia selesaikan.
- **Bagaimana**: Menjelaskan mekanisme kerja fitur tersebut dari sudut pandang arsitektural.
- **Analogi**: 
    - **Analogi Panjang**: Untuk membongkar mekanisme kompleks (misal: Event Loop, Prototypal Inheritance).
    - **Analogi Pendek**: Untuk ringkasan cepat.
    - *Catatan*: Sesuaikan keberadaan analogi dengan kompleksitas materi.

### 3. Tahap 3: Implementasi (Examples)
- **Multi-File Practice**: Folder `examples/` tidak dibatasi pada satu file. Sangat dianjurkan untuk menyertakan **beberapa file `.js`** jika materi memiliki pilar-pilar teknis yang berbeda (e.g., Dasar, Lanjut, dan Edge-Cases).
- **Komprehensif**: Kode harus bersifat **lengkap** dan mampu menggambarkan seluruh materi yang dibahas di Tahap 1 & 2.
- **Validasi**: Pastikan setiap skrip valid, dapat dijalankan, dan memiliki komentar yang membedah alur kodenya.

### 4. Tahap 4: Visualisasi (Assets)
- **Sequence**: Diagram (Mermaid/SVG) dibuat **setelah** seluruh narasi (Tahap 1 & 2) selesai.
- **Proses**: Baca kembali narasi, lalu visualisasikan alur eksekusi, Call Stack, atau Task Queue ke dalam folder `assets/`.
- **Estetika**: Fokus pada kebersihan visual dan gunakan emoji yang tepat untuk estetika dan intuisi.

### 5. Fleksibilitas "Nil Content" (Narrative Exception)
Pengecualian ini berlaku terutama untuk unit yang bersifat naratif murni seperti di **RAK-01 Introduction & Essence**:
- **Aturan**: Jika kontributor memutuskan tidak ada kode/visual karena sifatnya sejarah/filosofi, maka di dalam `README.md` bagian terkait harus ditulis eksplisit: 
    - *"Unit ini tidak membutuhkan Lab Praktis/Visualisasi karena bersifat penjelasan sejarah/konsep naratif."*
- **Tujuan**: Memisahkan antara materi naratif yang "Lengkap" dengan materi teknis yang belum selesai.

---
*Target Akhir: Mencapai [Gold Standard](./architecture.md#kriteria-gold-standard-100-complete).*
