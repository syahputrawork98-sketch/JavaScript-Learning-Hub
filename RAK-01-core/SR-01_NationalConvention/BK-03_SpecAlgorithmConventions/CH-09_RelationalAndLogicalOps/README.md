# Chapter 09: Relational & Logical Operations

Chapter ini membedah sub-clause 5.2.10 dari ECMA-262. Memahami bagaimana spesifikasi menangani logika kondisional dan operasi relasional dalam algoritmanya.

*Mental Model: "Logika Pengambilan Keputusan Chef"*

## 1. Kondisional dalam Algoritma

Spesifikasi tidak menggunakan `if/else` gaya bahasa pemrograman biasa. Ia menggunakan kalimat deklaratif untuk percabangan logika.

- **Pola**: "If *condition*, then... Else if *condition*, then... Else...".
- **Nested Logic**: Langkah yang menjorok ke dalam (indented) menunjukkan blok kode yang hanya dijalankan jika langkah sebelumnya terpenuhi.

## 2. Operasi Relasional (Perbandingan)

Saat Anda menulis `x < y`, engine menjalankan operasi abstrak yang sangat kompleks di bawahnya (seperti `Abstract Relational Comparison`).

- **Batas Keras**: Algoritma spek sering menentukan batas-batas nilai secara presisi, misalnya: "If *n* > 2^53 - 1, then return *boundary_error*".
- **Short-circuiting**: Sama seperti di JS (`&&` dan `||`), algoritma spek juga memiliki langkah-langkah yang bisa "berhenti lebih awal" jika hasil sudah bisa diprediksi.

## 3. Keseragaman Logika

Pernahkah Anda bertanya-tapa mengapa `[] == ![]` mengembalikan `true`? Jawabannya ada di langkah-langkah algoritmik CH-09 ini. Arsitek senior tidak menebak-nebak hasil perbandingan; mereka menelusuri langkah perbandingannya di spesifikasi.
