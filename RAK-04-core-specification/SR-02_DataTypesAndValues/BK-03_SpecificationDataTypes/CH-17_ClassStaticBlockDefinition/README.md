# CH-17: ClassStaticBlockDefinition Record

Fitur terbaru di Class adalah kemampuan menjalankan blok kode statis. Spesifikasi menyimpan ini dalam **ClassStaticBlockDefinition** (Clause 6.2.13).

## Mental Model: "Tombol Power Saat Pabrik Dibuka"
Bayangkan Class Anda adalah sebuah Pabrik.
- **Constructor:** Adalah proses membuat satu produk.
- **Static Block:** Adalah tombol power yang ditekan saat pabrik baru pertama kali dibuka (saat Class didefinisikan). Ia menyiapkan mesin-mesin statis agar pabrik siap beroperasi.

---

## 1. Struktur Record
Sangat sederhana:
- **[[BodyCode]]**: Berisi Abstract Closure (CH-11) yang menyimpan kode di dalam blok `static { ... }`.

## 2. Urutan Eksekusi
Static block dijalankan tepat saat Class didefinisikan di memori. Ia berjalan sebelum instansi pertama pun diciptakan. Ini sangat berguna untuk inisialisasi variabel statis yang kompleks yang tidak bisa dilakukan hanya dengan satu baris penugasan.

## 3. Scope Istimewa
Kode di dalam static block memiliki akses ke field privat Class tersebut. Inilah trik arsitektural untuk berbagi data privat dengan pihak luar secara terkontrol.

---

## Penutup Buku 03: Specification Data Types
Selamat! Anda telah menguasai "Arsitektur Bayangan" dari ECMAScript. Dengan selesainya Buku 03, Anda kini memahami:
1. Bagaimana mesin JS mencatat statusnya (EnumType, CompletionRecord).
2. Bagaimana mesin JS melacak variabel Anda (Reference, EnvironmentRecords).
3. Bagaimana mesin JS mengelola memori (DataBlocks).
4. Bagaimana fitur modern seperti Class diatur di balik layar.

---

## Penutup Sub-Rak SR-02: Data Types and Values
Anda telah menyelesaikan perjalanan besar:
- **BK-01:** Membedah 8 Tipe Data Bahasa.
- **BK-02:** Menaklukkan Matematika IEEE 754 & BigInt.
- **BK-03:** Menguasai Meta-Data Spesifikasi.

Anda kini berdiri di level **Spec-Literate Architect**. Tidak ada lagi perilaku "Ajaib" di JavaScript yang tidak bisa Anda jelaskan melalui kacamata spesifikasi.

---
> [!IMPORTANT]
> **Key Takeaway:** Static Block adalah upacara penyambutan bagi sebuah Class. Ia menyiapkan pondasi statis sebelum dunia luar menyentuhnya.
