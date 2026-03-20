# CH-01: Comparison Operators (Integrity Check)

> **"Sebelum energi dialirkan ke komponen sensitif, kita harus melakukan Integrity Check. Apakah tekanan ini sama dengan standar? Apakah voltase ini melebihi batas? Operator perbandingan adalah sensor yang memberikan jawaban Ya atau Tidak."**

Operator perbandingan membandingkan operand-nya dan mengembalikan nilai boolean (`true` atau `false`).

## 1. Mental Model: "Integrity Check"

Bayangkan sebuah sensor di jalur pipa. Sensor ini hanya memiliki dua lampu: Lampu Hijau (`true`) dan Lampu Merah (`false`).

### Kesetaraan (Equality)
- **`==` (Equal)**: Mengecek nilai saja. Hub akan mencoba "mengonversi" tipe data agar cocok (Coercion). *Hati-hati: bisa menyebabkan kebocoran logika!*
- **`===` (Strict Equal)**: Mengecek nilai DAN tipe data. Ini adalah standar keamanan tertinggi (Gold Standard).
- **`!=` & `!==`**: Kebalikan dari kesetaraan.

### Perbandingan Relasional (Relational)
- **`>` & `<`**: Mengecek apakah tekanan lebih besar atau lebih kecil dari ambang batas.
- **`>=` & `<=`**: Mengecek apakah tekanan sudah mencapai atau melampaui ambang batas.

---

## 2. Perangkap Arsitek: Coercion

Jangan biarkan Hub melakukan pembulatan otomatis tanpa izin Anda.
```javascript
console.log("5" == 5);  // true (Hub melakukan konversi otomatis)
console.log("5" === 5); // false (Tipe string vs number. Integritas Terjaga!)
```
**Tips**: Selalu gunakan `===` kecuali Anda memiliki alasan yang sangat kuat untuk melakukan sebaliknya.

---

## Hands-on: Lab Inspeksi Integritas
Buka file `examples/comparison_lab.js` untuk menguji berbagai sensor perbandingan dan memahami perbedaan antara pengecekan standar dan pengecekan ketat (strict).

---
*Status: [status.md](../../../status.md)*
