# Chapter 10: Numeric String & JSON Grammars

Selain tata bahasa utama untuk kode JavaScript, spesifikasi juga mendefinisikan tata bahasa untuk data yang diterima dari luar, seperti string angka dan format JSON.

## 1. Numeric String Grammar

Saat Anda memanggil fungsi seperti `Number("123")`, engine menggunakan tata bahasa khusus untuk memastikan string tersebut valid sebagai angka. Tata bahasa ini lebih ketat daripada yang digunakan untuk menulis angka langsung di kode (Numeric Literals).

### Analogi Singkat: "Pintu Masuk Barang"
Literasi angka di kode seperti barang produksi internal pabrik. *Numeric String Grammar* adalah pintu masuk untuk barang dari pemasok luar. Keduanya memiliki standar kualitas yang mirip, tapi pintu masuk luar memiliki pemeriksaan lebih ketat untuk menghindari data sampah.

## 2. JSON Grammar

Meskipun JSON sangat mirip dengan objek JS, spesifikasi mendefinisikan tata bahasa JSON secara terpisah (Clause 25). Ini memastikan interoperabilitas data antar bahasa pemrograman tetap terjaga.

Poin penting bagi arsitek:
- JSON tidak mengizinkan trailing commas.
- JSON hanya menggunakan double quotes untuk key dan string.

Memahami batasan tata bahasa ini membantu kita mendesain sistem pertukaran data yang lebih tangguh.
