# Chapter 08: List, Record, and Set

Chapter ini membedah sub-clause 5.2.8 dan 5.2.9 dari ECMA-262. Kita akan memahami struktur data internal yang digunakan spesifikasi untuk mengelola kumpulan nilai.

*Mental Model: "Wadah dan Catatan di Dapur"*

## 1. List (Daftar)

*List* digunakan untuk menyimpan urutan nilai secara berurutan. Ini mirip dengan Array di JS, tapi murni internal bagi spesifikasi.

- **Operasi List**: Spesifikasi sering menggunakan operasi seperti "Append *val* to *list*" atau "For each element *e* of *list*".
- **Penggunaan**: Daftar argumen fungsi, daftar variabel dalam scope, dll.

## 2. Record (Catatan)

*Record* adalah struktur data paling penting untuk menyimpan status internal. Record terdiri dari kumpulan *Fields*.

- **Notasi**: Ditulis dalam kurung kurawal `{ [[Field1]]: value1, [[Field2]]: value2 }`.
- **Contoh Real**: *Property Descriptor* adalah sebuah Record:
  ```
  { [[Value]]: 42, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }
  ```
- **Analogi**: Bayangkan sebuah formulir pendaftaran. Setiap kotak yang Anda isi (Field) memiliki label (Name) dan isi (Value).

## 3. Set (Himpunan)

*Set* digunakan untuk menyimpan kumpulan nilai yang unik. Tidak ada urutan yang dijamin, dan tidak ada duplikasi.

- **Penggunaan**: Digunakan saat spesifikasi perlu melacak hal-hal unik, seperti nama-nama variabel yang sudah dideklarasikan dalam sebuah blok kode untuk mencegah redeklarasi.

Memahami ketiga struktur data ini akan membantu Anda membaca definisi formal dari *Environment Records* dan *Object Internals* di rak-rak selanjutnya.
