# CH-13: Functions & Callables

Ingat, di JavaScript, fungsi bukanlah makhluk gaib. Mereka adalah objek dengan kemampuan khusus. Mari kita lihat definisi formalnya di Clause 4.4.34 - 4.4.36.

## 1. Function (4.4.34)
Sebuah *function* adalah anggota dari tipe **Object** yang merupakan instansiasi dari built-in constructor `Function`. Bedanya dengan objek biasa? Ia memiliki method internal `[[Call]]` yang memungkinkannya "dijalankan".

## 2. Built-in Function (4.4.35)
Ini adalah fungsi yang sudah disediakan oleh lingkungan ECMAScript sejak awal (seperti `parseInt` atau `Math.sin`). Mereka tidak diciptakan oleh program Anda, tapi oleh mesin itu sendiri.

## 3. Built-in Constructor (4.4.36)
Sebuah built-in function yang juga memiliki kemampuan sebagai **Constructor** (memiliki method internal `[[Construct]]`). Contoh: `Array`, `Object`, `Date`.

---
> [!TIP]
> **Architect Mindset:** Jika Anda ingin tahu apakah suatu objek adalah fungsi, spesifikasi menyarankan untuk memeriksa keberadaan internal slot `[[Call]]`, bukan sekadar melihat keyword `function`.
