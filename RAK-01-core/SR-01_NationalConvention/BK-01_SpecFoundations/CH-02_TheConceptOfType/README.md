# CH-02: The Concept of Type

Tahukah Anda apa itu "Tipe" di kacamata spesifikasi? (Clause 4.4.4).

## Definisi Formal: Type
Dalam ECMAScript, sebuah **Type** adalah **"A set of data values"**. 

Bayangkan sebuah kotak besar berlabel "Boolean". Di dalamnya hanya ada dua kelereng: `true` dan `false`. Semua data yang merupakan bagian dari set/himpunan tersebut memiliki tipe "Boolean".

## Kenapa Ini Penting?
Memahami tipe sebagai "Himpunan Nilai" membantu kita memahami kenapa operasi tertentu hanya bisa dilakukan pada tipe tertentu. Jika Anda mencoba melakukan operasi matematika pada tipe `String`, spesifikasi akan mencari cara untuk mengubah string tersebut menjadi tipe `Number` (Type Conversion) agar nilainya masuk ke dalam "Himpunan Angka".

---
> [!NOTE]
> Di JS, tipe menempel pada **Nilai** (Values), bukan pada variabelnya. Variabel hanyalah wadah yang bisa menampung nilai dari tipe apapun.
