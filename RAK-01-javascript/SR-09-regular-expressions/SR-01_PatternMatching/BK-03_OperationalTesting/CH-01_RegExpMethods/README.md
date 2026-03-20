# CH-01: RegExp Methods (Scanner Operations)

> **"Setelah memiliki pemindai yang tepat, Anda butuh instruksi operasi. RegExp Methods adalah 'Operasi Pemindai' (Scanner Operations) yang menentukan apakah scanner hanya melihat-lihat (test) atau membongkar seluruh isi data (exec)."**

Metode pada objek RegExp (`test` dan `exec`) adalah alat utama untuk validasi dan ekstraksi.

## 1. Mental Model: "Scanner Operations"

- **.test() (Quick Check)**: Seperti lampu indikator hijau/merah. Ia hanya memberi tahu lewat nilai Boolean (`true/false`) apakah pola ditemukan atau tidak. Cepat dan efisien untuk konfirmasi.
- **.exec() (Deep Inspection)**: Seperti tim forensik. Ia membongkar data, mencari kecocokan pertama, dan memberikan detail mendalam (termasuk isi Capturing Groups dan posisi index).

---

## 2. Cara Kerja .test()

Gunakan ini jika Anda hanya ingin memvalidasi format data (misal: "Apakah ini email yang sah?").

```javascript
const scanner = /@grid\.com$/;
console.log(scanner.test("admin@grid.com")); // true
```

---

## 3. Cara Kerja .exec() dan Global Flag

Saat menggunakan flag `g` (global), `.exec()` akan mengingat posisi terakhir pemindaian (`lastIndex`). Jika dipanggil berulang kali, ia akan terus mencari temuan berikutnya sampai habis.

---

## Arsitek Mindset: Efisiensi Pencarian

Sebagai arsitek Hub:
- Pilih `.test()` jika hasil akhirnya hanya untuk percabangan `if`. Ini menghemat memori karena Hub tidak perlu membuat objek hasil yang kompleks.
- Gunakan loop `while` dengan `.exec()` jika Anda perlu mengekstrak banyak data berulang-ulang dari sebuah string yang sangat panjang.
- Berhati-hatilah dengan `lastIndex`. Jika Anda menggunakan scanner yang sama (`global`) untuk string yang berbeda tanpa mereset `scanner.lastIndex = 0`, hasil pemindaian berikutnya bisa salah.

---

## Hands-on: Lab Operasi Pemindai
Buka file `examples/scanner_ops_lab.js` untuk melihat bagaimana lampu indikator `.test()` dan tim forensik `.exec()` bekerja berdampingan.

---
*Status: [status.md](../../../status.md)*
