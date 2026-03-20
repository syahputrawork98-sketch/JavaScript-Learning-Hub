# CH-02: Enum Specification Type

Seringkali dalam algoritma, mesin JavaScript harus memilih satu dari beberapa opsi tetap. Inilah peran dari **Enum Specification Type** (Clause 6.2.1).

## Mental Model: "Rambu Lalu Lintas internal"
Bayangkan sebuah persimpangan di dalam mesin JavaScript. Mesin membutuhkan tanda yang jelas untuk menentukan status saat itu.
- Apakah ini **~normal~**?
- Apakah ini **~break~**?
- Apakah ini **~return~**?
Enum adalah label-label (rambu) yang digunakan mesin untuk memandu jalannya algoritma.

---

## 1. Definisi Formal: Enum
Menurut Clause 6.2.1: *"The Enum type has a finite set of distinct values."*

Dalam teks spesifikasi, nilai-nilai Enum biasanya ditulis dengan format **~italic~** dan diawali/diakhiri tanda tilde (misalnya: **~empty~**, **~uninitialized~**).

## 2. Penggunaan Umum
Enum digunakan untuk memberikan "Nama" pada status yang sangat spesifik:
- **Lexical Environment Status:** **~uninitialized~**, **~initialized~**.
- **Completion Status:** **~normal~**, **~break~**, **~continue~**, **~return~**, **~throw~**.

## 3. Perbedaan dengan String
Meskipun terlihat seperti teks, Enum bukan String. String adalah data yang bisa diolah, sedangkan Enum dalam spesifikasi adalah **identitas unik** yang digunakan oleh algoritma untuk melakukan percabangan (*if-else* di level spec).

---

## Mengapa Arsitek Harus Tahu Ini?
Saat Anda melihat tanda **~tilde~** dalam teks spesifikasi, Anda tidak boleh memperlakukannya sebagai String JavaScript. Anda harus menyadari bahwa itu adalah komponen **Enum Type** yang menunjukkan status internal mesin. Memahami Enum membantu Anda membedakan antara *Data* dan *State* internal bahasa.

---

## Tantangan Kecil
Apa arti dari Enum **~empty~** yang sering muncul di spesifikasi?
(Jawabannya: **~empty~** digunakan untuk menandakan bahwa sebuah slot memori atau nilai memang sengaja tidak diisi (vakum), berbeda dengan `undefined` yang merupakan nilai bahasa).

---
> [!NOTE]
> **Key Takeaway:** Enum adalah label status internal spesifikasi. Jika Anda melihat tilde (~), Anda sedang melihat sebuah Enum.
