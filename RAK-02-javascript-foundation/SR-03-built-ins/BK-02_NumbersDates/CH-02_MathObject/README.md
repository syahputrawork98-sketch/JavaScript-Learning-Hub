# CH-02: Math Object (The Lab Utility)

> **"Math bukanlah konstruktor, melainkan objek statis yang berisi sekumpulan konstanta dan fungsi untuk melakukan operasi matematika tingkat lanjut di Hub Energi."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- **Technical Reference**: [ECMA-262 - Math Object](https://tc39.es/ecma262/#sec-math-object)

## 🎓 Senior Terminology
- **Static Object**: Objek yang metodenya bisa langsung dipanggil tanpa perlu membuat instance baru dengan kata kunci `new`.
- **Mathematical Constants**: Nilai-nilai tetap (seperti `Math.PI` atau `Math.E`) yang menjadi standar perhitungan universal.
- **Precision Limits**: Batasan akurasi dalam perhitungan matematika yang dilakukan oleh mesin JavaScript.

## 1. Mental Model: "The Engineering Lab"

Bayangkan **Math** sebagai **Laboratorium Teknik** di Hub Energi kita. Laboratorium ini sudah dilengkapi dengan peralatan canggih (metode) dan konstanta alam (properti) yang tidak perlu Anda buat sendiri. Karena laboratorium ini bersifat statis (bukan konstruktor), Anda tidak perlu "membangun" lab baru; Anda cukup memanggil alat yang Anda butuhkan langsung dari raknya.

![Engineering Lab](./assets/engineering_lab.svg)

---

## 2. Alat Pembulatan (Rounding Tools)

Di Hub, kita sering harus menyesuaikan angka arus agar pas dengan kapasitas sirkuit:
- **`Math.round(x)`**: Membulatkan ke angka terdekat.
- **`Math.floor(x)`**: Membulatkan ke bawah (lantai).
- **`Math.ceil(x)`**: Membulatkan ke atas (langit-langit).
- **`Math.trunc(x)`**: Membuang desimal tanpa membulatkan (pemotongan arus).

---

## 3. Generator Acak (The Randomizer)

**`Math.random()`** menghasilkan angka acak antara `0` (inklusif) hingga `1` (eksklusif). Ini adalah dasar untuk simulasi fluktuasi energi di Hub.

```javascript
// Menghasilkan angka acak antara 1 hingga 100
const flux = Math.floor(Math.random() * 100) + 1;
```

---

## 4. Trigonometri & Eksponen

Untuk perhitungan transmisi energi berbentuk gelombang atau pertumbuhan eksponensial, Lab menyediakan:
- **`Math.PI`**: Konstanta rasio lingkaran.
- **`Math.sin()` / `Math.cos()`**: Perhitungan gelombang.
- **`Math.pow()` / `Math.sqrt()`**: Pangkat dan akar.

---

## Arsitek Mindset: Performa vs Presisi

Sebagai arsitek, gunakan `Math.trunc()` jika Anda hanya butuh angka bulatnya saja, karena secara teknis lebih cepat daripada pembulatan. Untuk simulasi yang membutuhkan "benih" acak (*seeded random*), pertimbangkan untuk menggunakan algoritma kustom karena `Math.random()` tidak mendukung *seeding* secara bawaan.

---

## Hands-on: Kalkulator Load Grid
Buka file `examples/math_lab.js` untuk mencoba membangun fungsi pengacak beban grid yang menggunakan `Math.random` dan pembulatan dinamis.

---
*Back to [Numbers & Dates](../README.md)*
