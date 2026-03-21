# CH-08: Comparison (The Magnitude Gauge)

> **"Menentukan unit mana yang membawa beban lebih besar adalah tugas rutin di Grid. `lessThan` dan perbandingannya adalah 'Pengukur Besaran' (The Magnitude Gauge) — sensor yang menentukan hierarki aliran data di bawah aturan ketat IEEE 754."**

*Pemetaan ECMA-262: Clause 6.1.6.1.12 (Number::lessThan)*

## 1. Mental Model: "The Magnitude Gauge"

Bayangkan dua jarum pengukur pada panel Hub. Sensor akan mengecek:
- Apakah salah satu jarum rusak (`NaN`)? Jika ya, sensor tidak bisa membandingkan (Hasil: *Undefined* -> `false`).
- Apakah kedua jarum di titik nol? Meskipun satu positif dan satu negatif, Hub menganggap beban mereka sama (`-0 < +0` adalah `false`).
- Bagaimana dengan beban tak hingga? Infinity adalah beban terberat, -Infinity adalah beban teringan.

---

## 2. Algoritma Sensor (Penyederhanaan)

Saat membandingkan `x < y`:
1.  Jika `x` atau `y` adalah `NaN` -> Kembalikan `false`.
2.  Jika `x` dan `y` sama -> Kembalikan `false`. (Angka yang sama tidak lebih kecil dari dirinya sendiri).
3.  Jika `x` adalah `+0` dan `y` adalah `-0` -> Kembalikan `false`. (Nol sama besar).
4.  Jika `x` adalah `-Infinity` -> Kembalikan `true`.
5.  Jika `y` adalah `+Infinity` -> Kembalikan `true`.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Pengukur Besaran ---");

console.log(`NaN < 5    : ${NaN < 5}`);    // false
console.log(`-Infinity < 0 : ${-Infinity < 0}`); // true
console.log(`-0 < +0     : ${-0 < +0}`);     // false
```

---

## Arsitek Mindset: Perbandingan yang Aman

Sebagai arsitek Hub:
- Waspadalah saat membandingkan angka yang melibatkan `NaN` karena hasilnya akan selalu `false` untuk semua jenis perbandingan (`<`, `>`, `<=`, `>=`). Ini bisa menyebabkan blok `else` Anda berjalan secara tidak terduga.
- Gunakan `Number.isFinite()` sebelum membandingkan jika Anda ingin memastikan sensor Hub tidak memberikan hasil ekstrem dari Infinity.

---
*Status: [status.md](../../../docs/status.md)*
