# CH-06: String Search Operations

Mengapa `str.indexOf()` seringkali lebih cepat daripadan implementasi manual kita? Karena spesifikasi mendefinisikan algoritma pencarian ini dengan sangat presisi di level internal.

## Mental Model: "Pemindai Radar"
Bayangkan spesifikasi memiliki radar yang memindai manik-manik string (Code Units).
- **StringIndexOf:** Radar mulai memindai dari depan (kiri) ke belakang.
- **StringLastIndexOf:** Radar mulai memindai dari belakang (kanan) ke depan.
Radar ini tidak mencari "karakter", tapi mencocokkan deretan angka 16-bit yang tepat sama secara berurutan.

---

## 1. Algoritma: StringIndexOf (string, searchValue, fromIndex)
Menurut Clause 6.1.4.1, langkah-langkah formalnya adalah:
1. Hitung panjang `string` (misal: *len*).
2. Tentukan posisi mulai (*start*) berdasarkan `fromIndex`.
3. Jika `searchValue` adalah string kosong, langsung kembalikan posisi terkecil yang valid.
4. Lakukan iterasi dari *start* hingga akhir.
5. Pada setiap posisi, cek apakah urutan code unit di sana cocok dengan `searchValue`.
6. Jika cocok, kembalikan indeksnya. Jika tidak ada yang cocok hingga akhir, kembalikan `-1`.

## 2. Algoritma: StringLastIndexOf (string, searchValue, fromIndex)
Menurut Clause 6.1.4.2, alurnya serupa namun arahnya terbalik:
1. Tentukan posisi mulai dari belakang.
2. Lakukan iterasi mundur (decrement) ke arah indeks 0.
3. Kembalikan indeks pertama yang ditemukan (yang secara visual adalah indeks terakhir jika dilihat dari depan).

## 3. Pentingnya Case Sensitivity
Pencarian di level spesifikasi bersifat **Case-Sensitive**. `"Hello"` dan `"hello"` memiliki urutan code unit biner yang berbeda (misal: 'H' adalah `0x0048`, sedangkan 'h' adalah `0x0068`). Algoritma search tidak melakukan konversi otomatis kecuali Anda secara eksplisit memanggil `.toLowerCase()` terlebih dahulu.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami bahwa pencarian ini bekerja pada unit 16-bit membantu Anda mengoptimalkan pencarian teks besar. Anda akan tahu bahwa setiap kali Anda memanggil `indexOf`, mesin JS menjalankan loop biner yang sangat cepat namun bersifat linear.

---

## Tantangan Kecil
Apa hasil dari `"abc".indexOf("", 10)`?
(Jawabannya: **3**. Peraturan spesifikasi menyatakan jika string kosong dicari pada indeks yang melebihi panjang string, maka yang dikembalikan adalah panjang maksimal string tersebut).

---
> [!IMPORTANT]
> **Key Takeaway:** Pencarian string di JavaScript adalah pencocokan biner 16-bit, bukan pencocokan semantik karakter.
