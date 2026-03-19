# CH-01: Arrow Functions (Compact Specialized Units)

> **"Beberapa tugas di Hub hanya membutuhkan unit kecil yang cepat dan spesifik tanpa perlu seluruh ruang mesin yang besar. Arrow Functions adalah 'Unit Kompak' (Compact Specialized Units) yang dirancang untuk efisiensi tinggi dan kesederhanaan."**

Arrow functions menyediakan sintaksis yang lebih ringkas dan memiliki perilaku khusus terkait konteks `this`.

## 1. Mental Model: "The Compact Unit"

Bayangkan sebuah unit pengolah mini. Ia tidak memiliki "Sistem Deteksi Konteks" sendiri (`this`) dan tidak memiliki "Buku Log Lama" sendiri (`arguments`). Ia selalu meminjam sistem deteksi dari ruangan (lingkungan) tempat ia dipasang.

---

## 2. Karakteristik Utama

- **Sintaksis Ringkas**: Tanpa kata kunci `function` dan seringkali tanpa kurung kurawal atau `return` (untuk satu pernyataan).
- **Lexical `this`**: `this` selalu merujuk ke nilai `this` di sekelilingnya saat fungsi dibuat.
- **Tanpa `arguments`**: Selalu gunakan Rest Parameters jika butuh akses banyak argumen.

```javascript
// Tradisional
function add(a, b) { return a + b; }

// Arrow
const add = (a, b) => a + b;
```

---

## 3. Kapan Menggunakan Arrow Functions?

Sangat ideal untuk:
- Fungsi callback (Array methods: `map`, `filter`).
- Fungsi pendek yang tidak membutuhkan konteks `this` sendiri.
- Metode di dalam class atau objek yang butuh memastikan `this` tetap merujuk ke instance-nya.

---

## Arsitek Mindset: Pilih Alat yang Tepat

Sebagai arsitek Hub:
- Gunakan **Arrow Functions** untuk logika transformasi data rutin yang bersih.
- Gunakan **Function Declaration/Expression** tradisional jika Anda memang membutuhkan konteks `this` yang dinamis atau ingin fungsi tersebut dapat digunakan sebagai konstruktor.

---

## Hands-on: Lab Unit Kompak
Buka file `examples/arrow_unit_lab.js` untuk melihat perbandingan efisiensi penulisan dan perilaku `this` antara unit tradisional dan unit kompak.

---
*Status: [status.md](../../../status.md)*
