# CH-02: While Loops (Condition-based Iteration)

> **"Sirkuit While terus berputar selama sinyal kondisi tetap menyala. Ia sangat fleksibel untuk tugas yang durasinya tidak menentu."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- **Technical Reference**: [ECMA-262 - The while Statement](https://tc39.es/ecma262/#sec-while-statement)

## 🎓 Senior Terminology
- **Entry-Condition Loop**: Karakteristik `while` di mana kondisi diperiksa **sebelum** sirkuit dijalankan (bisa jadi sirkuit tidak pernah berjalan sama sekali).
- **Exit-Condition Loop**: Karakteristik `do...while` di mana sirkuit dijamin berjalan **setidaknya satu kali** sebelum kondisi diperiksa.
- **Sentinel Value**: Nilai khusus yang digunakan sebagai sinyal untuk menghentikan putaran loop `while`.

## 1. Mental Model: "The Continuous Circuit"

Bayangkan **While Loop** sebagai sebuah **Sirkuit Kontinu** yang akan terus mengalirkan energi selama saklar (kondisi) dalam posisi "ON". Berbeda dengan orbit satelit (`for`) yang putarannya sudah ditentukan sejak awal, sirkuit ini sangat berguna jika Anda tidak tahu kapan tepatnya tugas tersebut akan selesai.

![Continuous Circuit](./assets/while_circuit.svg)

---

## 2. Pengecekan di Awal (`while`)

Sirkuit ini sangat berhati-hati. Sebelum arus mengalir masuk, ia akan memeriksa saklar terlebih dahulu. Jika saklar "OFF" sejak awal, sirkuit tidak akan pernah berjalan.

```javascript
let power = 100;
while (power > 0) {
    console.log("Distributing energy...");
    power -= 10;
}
```

---

## 3. Pengecekan di Akhir (`do...while`)

Sirkuit ini lebih berani. Ia akan menjalankan aliran energi **setidaknya satu kali** sebelum memeriksa saklar. Jika saklar ternyata "OFF", ia baru akan berhenti setelah putaran pertama selesai.

```javascript
let count = 0;
do {
    console.log("Initializing Hub...");
    count++;
} while (count < 0); // Tetap jalan sekali meskipun kondisinya false
```

---

## 4. Sinyal Penghenti (Sentinel Value)

Karena durasi `while` tidak menentu, kita sering menggunakan **Sentinel Value** — nilai khusus yang jika muncul akan memicu perintah `break` untuk memutus sirkuit secara paksa.

---

## Arsitek Mindset: For vs While

Gunakan `for` jika Anda bisa menghitung jumlah putarannya (misal: panjang array). Gunakan `while` jika Anda hanya tahu alasan kenapa harus berhenti (misal: selama data masih mengalir dari sensor). **Hati-hati**: kegagalan memperbarui kondisi di dalam `while` adalah penyebab utama *Infinite Loop*.

---

## Hands-on: Lab Penanganan Arus
Buka file `examples/while_loops_lab.js` untuk melihat bagaimana kita menggunakan `while` untuk terus mendengarkan sinyal dari Hub hingga kita menerima sinyal "STOP".

---
*Back to [Loop Engines](../README.md)*
