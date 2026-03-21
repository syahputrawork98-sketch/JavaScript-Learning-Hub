# CH-05: Divide & Remainder (The Energy Splitter)

> **"Distribusi energi seringkali memerlukan pembagian beban ke beberapa unit. `divide` (/) dan `remainder` (%) adalah 'Pembagi Energi' (The Energy Splitter) — mesin yang menentukan sisa kapasitas setelah energi dialirkan melalui jalur distribusi."**

*Pemetaan ECMA-262: Clause 6.1.6.1.5 & 6.1.6.1.6*

## 1. Mental Model: "The Energy Splitter"

- **`divide` (/)**: Membagi aliran energi secara merata. Jika arusnya tidak bisa dibagi bulat, Hub akan memberikan sisa desimal (Floating Point).
- **`remainder` (%)**: Sering disalahpahami sebagai 'Modulo'. Di Hub, ini adalah sisa bagi yang menjaga tanda angka aslinya (The Dividen).

---

## 2. Pembagian dengan Nol (Grid Safety)

Tidak seperti bahasa pemrograman lama yang meledakkan sistem saat dibagi nol, Hub sangat tenang:
- `Positive / 0` -> `+Infinity` (Aliran tak terbatas).
- `Negative / 0` -> `-Infinity`.
- `0 / 0` -> `NaN`.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Pembagi Energi ---");

// 1. Division
console.log(`10 / 3 = ${10 / 3}`); // 3.333...

// 2. Remainder (%)
console.log(`10 % 3  = ${10 % 3}`);  // 1
console.log(`-10 % 3 = ${-10 % 3}`); // -1 (Tanda tetap negatif!)

// 3. Divide by Zero
console.log(`5 / 0 = ${5 / 0}`); // Infinity
```

---

## Arsitek Mindset: Presisi Pembagian

Sebagai arsitek Hub:
- Hati-hati dengan hasil pembagian desimal yang tidak pernah berakhir (seperti `1/3`). Hub akan membulatkannya di bit terakhir, yang bisa menyebabkan akumulasi kesalahan kecil di masa depan.
- Gunakan `%` untuk menentukan sisa stok data, tetapi jika Anda butuh perhitungan modulo matematika murni (yang selalu positif), Anda harus menggunakan rumus: `((n % m) + m) % m`.

---
*Status: [status.md](../../../docs/status.md)*
