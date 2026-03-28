# BK-03: System Meta (Circuit Inspector)

> **"Sebelum memproses energi, Hub harus memastikan jenis sirkuit apa yang sedang dihadapi. BK-03 menyediakan alat inspeksi untuk memeriksa tipe data dan hubungan antar komponen."**

## 1. Alat Inspeksi

- **`typeof`**: Mengambil tipe data dasar (String, Number, Boolean, Object, dll).
- **`instanceof`**: Memeriksa apakah sirkuit adalah bentukan dari blueprint (Class) tertentu.
- **`in`**: Memeriksa keberadaan properti spesifik di dalam komponen.
- **`delete`**: Memutuskan sambungan properti dari objek (Gunakan dengan hati-hati!).
- **`void`**: Menjalankan ekspresi tanpa mengembalikan nilai (sering digunakan di URL atau link).

---

## Arsitek Mindset: Integritas Data

- Gunakan `typeof` untuk validasi input di gerbang masuk Hub.
- Gunakan `instanceof` untuk memastikan objek memiliki metode yang diharapkan dari sebuah Class.
- Ingat bahwa `typeof null` adalah `"object"`. Ini adalah bug desain lama yang harus diantisipasi oleh arsitek!

---

## Hands-on: Lab Inspeksi Sistem
Uji integritas komponen dan tipe data di `examples/meta_inspection_lab.js`.
