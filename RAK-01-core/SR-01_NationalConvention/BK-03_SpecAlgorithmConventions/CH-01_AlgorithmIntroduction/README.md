# Chapter 01: Algorithm Introduction

Dalam spesifikasi ECMA-262, perilaku setiap fitur JavaScript didefinisikan menggunakan algoritma langkah-demi-langkah. Memahami gaya penulisan ini adalah kunci untuk menjadi "Spec-Literate".

## 1. Gaya Penulisan Algoritma

Spesifikasi tidak menggunakan kode JavaScript untuk menjelaskan dirinya sendiri. Sebaliknya, ia menggunakan *Structured English* yang sangat formal.

### Analogi Singkat: "Instruksi Lego"
Membaca algoritma spek mirip dengan membaca instruksi perakitan Lego. Setiap langkah harus diikuti secara berurutan, dan setiap istilah memiliki makna yang sangat spesifik.

## 2. Langkah Eksekusi

Setiap algoritma biasanya terdiri dari daftar bernomor. 

### Contoh Algoritma Sederhana:
1. Biarkan *val* menjadi hasil dari operasi X.
2. Jika *val* adalah *undefined*, kembalikan *false*.
3. Kembalikan *true*.

### Poin Penting:
- **Abstract Operations**: Langkah yang merujuk pada operasi lain (seperti "ToNumber").
- **State Changes**: Bagaimana sebuah variabel internal (seperti `[[Value]]`) berubah.

## 3. Mental Model: "The Chef's Recipe"
Bayangkan spesifikasi adalah resep masakan yang sangat presisi. 
- **Ingredients**: Nilai input (Arguments).
- **Steps**: Algoritma bernomor.
- **Result**: Apa yang disajikan (Return value).

Jika satu langkah terlewati, rasa masakan (perilaku kode) akan berbeda.
