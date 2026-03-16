# CH-03: Early Error Rules

Mengapa beberapa kesalahan di JavaScript membuat aplikasi tidak jalan sama sekali, bahkan sebelum baris pertama dieksekusi? Inilah yang disebut **Early Error**.

## Mental Model: "Saringan Keamanan Bandara"
Bayangkan Anda sedang di bandara. Ada dua jenis pemeriksaan:
1. **Pemeriksaan Tiket (Early Error):** Petugas mencegat Anda di gerbang karena tiket Anda palsu. Anda tidak pernah sampai ke pesawat.
2. **Pemeriksaan di Pesawat (Runtime Error):** Anda sudah terbang, tapi tiba-tiba pilot sadar bensinnya habis.

**Early Error** adalah petugas bandara yang memastikan barang-barang terlarang tidak masuk ke ruang eksekusi.

---

## 1. Definisi Formal
*Early Errors* adalah sekumpulan aturan khusus yang tercantum di hampir setiap bab spesifikasi. Biasanya ditandai dengan sub-judul *"Static Semantics: Early Errors"*. Aturan ini didefinisikan secara deklaratif.

## 2. Pemicu Umum Early Errors
Apa saja yang bisa memicu "Petugas Keamanan" ini?
- **Duplikasi Nama:** Seperti menggunakan nama parameter yang sama di satu fungsi (dalam strict mode).
- **Reserved Words:** Menggunakan keyword spesifikasi (seperti `yield` atau `await`) di tempat yang dilarang.
- **Strict Mode Violations:** Melakukan sesuatu yang dilarang hanya saat 'use strict' aktif (seperti menghapus variabel dengan `delete`).
- **Malformed Literals:** Menulis literal yang tidak masuk akal, seperti unicode escape yang salah (`\uXXXX` dengan nilai terlalu besar).

## 3. Early Error vs Syntax Error
Secara teknis, hampir semua *Early Error* akan dilaporkan sebagai **SyntaxError**. Namun, perbedaannya adalah:
- **Lexical Syntax Error:** Salah tulis (misal: `functon` alih-alih `function`).
- **Early Error (Static Semantic):** Tulisannya benar, tapi logikanya dilarang secara statis (misal: `function a(b, b) {}`).

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami Early Errors membantu Anda membangun *Tooling* yang lebih baik (seperti Linter atau Transpiler). Anda bisa mendeteksi kesalahan di level kode sebelum Anda mengirimkan kode tersebut ke browser user.

---

## Tantangan Kecil
Coba tulis kode ini di console:
```javascript
"use strict";
var delete = 10;
```
Apakah error-nya muncul saat Anda menekan Enter? Mengapa?
(Jawabannya: **Ya**. Ini adalah Early Error. `delete` adalah *Reserved Word* yang tidak boleh digunakan sebagai nama variabel. Mesin JS mengetahuinya seketika saat parsing).

---
> [!IMPORTANT]
> **Key Takeaway:** Early Errors menjamin bahwa kode yang mulai "Terbang" (*Runtime*) adalah kode yang sudah bersih dari kesalahan struktural dasar.
