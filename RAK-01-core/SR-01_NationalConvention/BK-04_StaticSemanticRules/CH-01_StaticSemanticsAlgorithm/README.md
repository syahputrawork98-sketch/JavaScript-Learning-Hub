# CH-01: Algorithm Static Semantics

Mengapa ada aturan yang tidak bisa dijelaskan hanya dengan "Bentuk" (Sintaks)? Di sinilah **Algorithm Static Semantics** berperan sebagai "Pemeriksa Kelayakan" dalam mesin JavaScript.

## Mental Model: "Inspektur Kelayakan Bangunan"
Bayangkan sebuah blueprint bangunan (Sintaks). Blueprint tersebut menunjukkan ada pintu dan jendela. Namun, **Algorithm Static Semantics** adalah inspektur yang memeriksa: "Apakah pintu ini terhubung ke ruangan yang benar? Apakah kabel listriknya aman?" 

Inspektur ini bekerja **sebelum** siapapun diizinkan menghuni bangunan tersebut (*Runtime*).

---

## 1. Definisi Formal
Dalam spesifikasi ECMA-262, *Static Semantics* adalah algoritma yang terkait dengan produk tata bahasa (Grammar Production), namun tidak menghasilkan nilai eksekusi. Alih-alih, algoritma ini mengembalikan informasi atau memicu kesalahan teknis.

## 2. Bagaimana Algoritma Ini Bekerja?
Setiap kali mesin JS melakukan *parsing* kode, ia tidak hanya melihat struktur teks. Ia juga menjalankan algoritma statis untuk menjawab pertanyaan seperti:
- *"Apakah fungsi ini memiliki parameter duplikat?"*
- *"Apakah label 'break' ini merujuk ke label yang ada?"*
- *"Apakah variabel ini sudah dideklarasikan di scope ini?"*

## 3. Contoh: Aturan `HasDirectEval`
Salah satu contoh algoritma statis yang populer adalah pengecekan apakah sebuah fungsi mengandung instruksi `eval` langsung. Ini penting karena keberadaan `eval` akan mengubah cara mesin mengalokasikan memori (*Scope*) secara statis.

---

## Mengapa Arsitek Harus Tahu Ini?
Dengan memahami semantik statis, Anda akan tahu bahwa JavaScript sebenarnya adalah bahasa yang melakukan **banyak analisis sebelum koding dijalankan**. Ini membantah mitos bahwa "JS hanya bahasa interpretasi yang tidak melakukan pemeriksaan awal".

---

## Tantangan Kecil
Coba pikirkan: Mengapa `export default` hanya boleh ada satu di dalam sebuah modul? Siapa yang melarangnya?
(Jawabannya: Algoritma **Static Semantics** untuk `ModuleBody` yang memastikan jumlah export default tepat satu. Jika lebih, Anda akan mendapat `SyntaxError` sebelum satu baris kode pun berjalan).

---
> [!TIP]
> **Architect's View:** *Runtime Semantics* adalah tentang **Kecepatan**, sedangkan *Static Semantics* adalah tentang **Integritas**.
