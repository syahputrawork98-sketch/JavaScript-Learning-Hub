# Chapter 05: Mathematical Operations

Spesifikasi JS membutuhkan presisi matematika yang ekstrem untuk menghindari ambiguitas antar berbagai implementasi *engine* (V8, JavaScriptCore, dll).

## 1. Presisi Tanpa Kompromi

Di dalam spesifikasi, operasi matematika sering ditulis menggunakan kata-kata daripada operator `+` atau `-` untuk menjaga niat algoritma tetap jelas.

### Analogi Singkat: "Internal Calculator"
Bayangkan spek memiliki kalkulator internal yang bekerja dengan presisi tak terbatas (berbeda dengan tipe `Number` di JS yang mengikuti IEEE 754). Kalkulator ini menentukan bagaimana pembulatan, nilai absolut, dan batas angka bekerja secara teoretis.

## 2. Operasi Umum

Beberapa operasi yang sering muncul:
- **abs(x)**: Nilai absolut.
- **floor(x)**: Pembulatan ke bawah.
- **min(a, b)**: Nilai terkecil.
- **max(a, b)**: Nilai terbesar.

## 3. Notasi Nilai

Spek membedakan antara angka teoretis dan objek `Number` nyata. Misalnya, indeks Array dalam spek sering dikelola sebagai angka murni sebelum dikonversi menjadi tipe data JS.

Seorang arsitek memahami bahwa di bawah "fleksibilitas" JS, ada fondasi matematika yang sangat kaku dan disiplin.
