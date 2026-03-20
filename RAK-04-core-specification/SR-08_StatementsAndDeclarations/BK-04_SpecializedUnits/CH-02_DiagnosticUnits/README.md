# CH-02: Diagnostic Units (The Hub Sensors)

> **"Setiap Hub membutuhkan alat diagnostik untuk memeriksa kesehatan aliran energi. `Diagnostic Units` adalah sensor khusus yang digunakan untuk menghentikan aliran demi inspeksi manual atau mencoba memanipulasi scope secara dinamis."**

*Pemetaan ECMA-262: Clause 14.11 & 14.16*

## 1. The `debugger` Unit

Ini adalah titik inspeksi resmi. Saat mesin Hub mencapai instruksi `debugger`, ia akan menahan seluruh aliran energi dan menunggu teknisi (Developer Tools) untuk melakukan pemeriksaan mendalam terhadap status internal memori dan tumpukan eksekusi (*stack*).

---

## 2. The `with` Unit (Legacy & Dangerous)

**PERINGATAN**: Unit ini dianggap tidak aman dalam standar Hub modern (Strict Mode melarangnya total). Ia mencoba menarik seluruh properti dari sebuah objek ke dalam scope lokal, yang sering menyebabkan tabrakan sinyal dan kebingungan jalur rute.

---

## 3. Empty & Block Statements

- **Empty Statement (`;`)**: Sirkuit kosong yang tidak melakukan apa-apa. Terkadang dibutuhkan sebagai placeholder di tempat yang secara teknis memerlukan sirkuit.
- **Block Statement (`{ ... }`)**: Cara untuk mengelompokkan beberapa instruksi menjadi satu unit tunggal, sering digunakan untuk membuat scope baru atau menyatukan baris kode di bawah `if` atau `for`.

---

## Arsitek Mindset: Debugging yang Disiplin

Sebagai arsitek Hub:
- Gunakan `debugger` daripada `console.log` yang berlebihan saat mencari malfungsi yang kompleks. `debugger` memberikan akses penuh ke seluruh Hub pada saat kejadian berlangsung.
- **Hapus semua instruksi `debugger`** sebelum mengirimkan blueprint ke Grid produksi, karena ini bisa menghentikan Hub pengguna secara tidak sengaja.

---
*Status: [status.md](../../../docs/status.md)*
