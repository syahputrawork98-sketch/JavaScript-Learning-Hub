# CH-10: Function Definitions

Kita sering menyebut "Function" sebagai pilar utama JavaScript. Namun di mata spesifikasi, sebuah fungsi hanyalah sebuah objek yang memiliki "kekuatan khusus".

## Mental Model: "Objek dengan Tombol 'RUN'"
Bayangkan sebuah **Object** biasa. Sekarang, bayangkan objek tersebut dipasangi sebuah tombol besar berwarna merah bertuliskan **"RUN"**.
- Tanpa tombol itu, dia hanyalah tempat menyimpan data.
- Dengan tombol itu (metode internal `[[Call]]`), dia menjadi sebuah **Function**.

---

## 1. Definisi Formal Function
Menurut spesifikasi: *"A function is a callable object."*
Artinya, setiap fungsi **pasti** sebuah objek, tapi tidak semua objek adalah fungsi.

## 2. Syarat Menjadi "Callable"
Sebuah objek dianggap sebagai fungsi **hanya jika** dia memiliki metode internal **[[Call]]**. Jika Anda mencoba memanggil objek yang tidak punya `[[Call]]` (misal: `({})()`), mesin JS akan melempar `TypeError`.

## 3. Constructor vs Callable
Tidak semua fungsi bisa digunakan dengan keyword `new`.
- **Callable:** Punya `[[Call]]`. Bisa dipanggil seperti `func()`.
- **Constructor:** Punya `[[Construct]]`. Bisa dipanggil seperti `new func()`.

> **Catatan:** Arrow functions `() => {}` adalah contoh fungsi yang *Callable* tapi **BUKAN** *Constructor* (tidak punya `[[Construct]]`).

## 4. Built-in Function
Spesifikasi juga mendefinisikan *Built-in Function* (seperti `parseInt` atau `Math.max`). Objek ini seringkali tidak memiliki kode sumber JavaScript di dalamnya, melainkan diimplementasikan langsung oleh mesin (V8/Node.js) sebagai kode biner yang sangat cepat.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami bahwa fungsi adalah objek memungkinkan Anda melakukan teknik "Functional Programming" yang canggih, seperti menyimpan state di dalam properti fungsi atau melewatkan fungsi sebagai argumen (*First-class citizens*).

---

## Tantangan Kecil
Jika saya menulis `function foo() {}`, apakah `foo` memiliki `[[Call]]` dan `[[Construct]]`?
(Jawabannya: **Ya**. Fungsi reguler di JavaScript secara default memiliki keduanya).

---
> [!IMPORTANT]
> **Key Takeaway:** Fungsi di JavaScript bukan sekadar blok kode, melainkan struktur data objek yang dapat dieksekusi.
