# CH-09: The String Type & Objects

Teks di JavaScript bukan sekadar kumpulan karakter, tapi deretan unit biner yang teratur. (Clause 4.4.20 - 4.4.22).

## 1. String Value & Type (4.4.20 - 4.4.21)
Sebuah **String Type** adalah himpunan semua urutan berhingga (finite) dari nol atau lebih unit integer 16-bit tanpa tanda (unsigned). 
Setiap elemen di dalam string disebut **Code Unit**. Secara teknis, JS menggunakan encoding UTF-16 untuk menyimpan string di memori.

## 2. String Object (4.4.22)
Ini adalah anggota tipe **Object** yang merupakan instansi dari built-in constructor `String`. Selain bisa menyimpan nilai string, ia juga memiliki properti `length` yang menunjukkan jumlah *code unit* di dalamnya.

---
> [!IMPORTANT]
> **Architect Insight:** Karena String di JS berbasis integer 16-bit, beberapa karakter Unicode yang "gemuk" (seperti emoji 🔥) mungkin dihitung sebagai 2 unit (`length: 2`). Selalu gunakan metode berbasis *Iterator* atau *Code Point* jika Anda bekerja dengan teks internasional/emoji.
