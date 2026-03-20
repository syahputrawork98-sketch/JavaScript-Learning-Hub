# CH-02: Efficiency Audits (Best Practices)

> **"Hub yang sehat adalah Hub yang hemat daya. `Efficiency Audits` adalah 'Audit Efisiensi'—kumpulan praktik terbaik untuk memastikan penggunaan memori tetap minimum dan performa Hub tetap maksimal."**

*Pemetaan Konseptual Arsitektur Hub*

## 1. Mental Model: "Clean Coding as Energy Saving"

Efisiensi memori bukan hanya tentang memperbaiki kebocoran, tetapi tentang mendesain sirkuit yang sedari awal hemat tempat.

---

## 2. Strategi Audit Efisiensi

- **Pool vs Allocation**: Untuk objek yang sangat sering dibuat dan dihancurkan (seperti partikel dalam simulasi), pertimbangkan untuk menggunakan **Object Pool**—menggunakan kembali objek lama daripada membiarkannya didaur ulang dan membuat yang baru.
- **Primitif vs Objek**: Gunakan tipe data primitif (Number, Boolean) untuk data kecil agar tersimpan di Stack yang cepat, hindari membungkusnya dalam objek (`new Number()`) jika tidak perlu.
- **Batch Processing**: Proses stream data besar dalam potongan kecil (Chunks) alih-alih memuat semuanya ke Warehouse (Heap) sekaligus.
- **WeakRef Monitoring**: Gunakan `WeakRef` untuk meninjau apakah sebuah unit cache masih ada atau perlu dimuat ulang dari database eksternal.

---

## 3. Tooling Hub (Profiling)

Seorang arsitek harus tahu cara menggunakan alat audit:
- **Memory Snapshots**: Mengambil foto Warehouse untuk melihat objek apa yang paling banyak memakan tempat.
- **Allocation Timelines**: Memantau lonjakan penggunaan memori saat operasi tertentu dijalankan.

---

## Arsitek Mindset: Kesadaran Lanjutan

Sebagai arsitek Hub:
- Jangan melakukan optimasi prematur. Tulis blueprint yang bersih terlebih dahulu, lalu lakukan audit efisiensi hanya jika Hub mulai melambat atau kapasitas Warehouse mulai kritis.
- Pahami bahwa Garbage Collector memiliki biaya CPU. Semakin banyak "sampah" yang Anda buat, semakin sering tim pembersih bekerja, yang bisa menyebabkan jeda kecil (Jank) pada aliran energi aplikasi.
- Selalu dokumentasikan sirkuit yang menggunakan memori besar agar teknisi di masa depan tahu cara mengelolanya dengan benar.

---
*Status: Gold Standard 💎*
