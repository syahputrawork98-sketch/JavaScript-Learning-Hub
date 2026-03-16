# Chapter 10: Iteration Conventions

Chapter ini membedah sub-clause 5.2.11 dari ECMA-262. Mempelajari protokol iterasi dan bagaimana pengulangan (loops) didefinisikan secara formal.

*Mental Model: "Proses Pengulangan yang Terukur"*

## 1. Repeat (Pengulangan)

Dalam spesifikasi, loop sering ditulis dengan kata kunci **Repeat**.

- **Struktur**: 
  1. Repeat,
     a. Let *element* be the next element of *list*.
     b. If *element* is empty, break.
     c. ...lakukan sesuatu...
- **Break**: Kata "Break" di sini murni instruksi algoritmik untuk keluar dari loop `Repeat`.

<h2>2. For Each Element</h2>

Untuk iterable internal seperti *Lists* (CH-08), spek menggunakan gaya yang lebih ringkas:
- "For each element *e* of *list*, do...".

Ini memastikan setiap item dalam daftar internal diproses tanpa ambiguitas tentang indeks.

## 3. Protokol Iterasi vs Konvensi Iterasi

Penting untuk membedakan antara:
- **Konvensi Iterasi**: Bagaimana algoritma spek melakukan loop secara internal (apa yang kita bahas di sini).
- **Protokol Iterasi**: Fitur JS (`Symbol.iterator`) yang dapat diakses pengembang.

Memahami bagaimana spek melakukan loop internal membantu Anda memprediksi performa dan alur kerja engine saat menangani koleksi data yang besar.
