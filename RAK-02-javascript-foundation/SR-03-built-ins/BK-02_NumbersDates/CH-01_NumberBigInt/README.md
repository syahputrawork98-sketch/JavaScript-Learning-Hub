# CH-01: Number & BigInt (Numerical Precision)

> **"Number mengelola arus energi standar (floating point), sementara BigInt menangani lonjakan energi raksasa yang melampaui batas kapasitas normal."**

## 🔗 Source Hub
- **Primary Source (Number)**: [MDN Web Docs - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- **Primary Source (BigInt)**: [MDN Web Docs - BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- **Technical Reference**: [ECMA-262 - Numbers](https://tc39.es/ecma262/#sec-numbers)

## 🎓 Senior Terminology
- **IEEE 754 Standard**: Format representasi angka 64-bit yang digunakan JavaScript, yang kadang menyebabkan masalah presisi pada angka desimal (seperti `0.1 + 0.2`).
- **Arbitrary-precision Integer**: Karakteristik BigInt yang memungkinkannya menampung angka bulat sebesar apa pun tanpa kehilangan presisi.
- **NaN (Not-a-Number)**: Nilai khusus yang menandakan hasil operasi numerik yang tidak valid atau tidak dapat didefinisikan.

## 1. Mental Model: "The High-Precision Sensor & The Heavy-Duty Battery"

Bayangkan Hub Energi kita:
- **Number**: Adalah **Sensor Presisi**. Ia sangat cepat dan serbaguna (bisa menangani desimal), tapi ia memiliki batas kapasitas. Jika angka terlalu besar atau terlalu kecil (desimal sangat dalam), ia akan mulai kehilangan akurasi karena keterbatasan format 64-bit.
- **BigInt**: Adalah **Baterai Berat**. Ia tidak bisa menangani desimal, tapi ia bisa menampung angka bulat sebesar apa pun tanpa pernah kehilangan satu bit pun data.

![Numerical Power](./assets/numerical_power.svg)

---

## 2. Batas Aman (The Safe Zone)

Di JavaScript, tipe `Number` hanya aman digunakan untuk angka bulat hingga ±9 katriliun (`2^53 - 1`). Di luar itu, sirkuit angka mulai tidak stabil.

```javascript
const maxSafe = Number.MAX_SAFE_INTEGER;
console.log(maxSafe + 1); // 9007199254740991
console.log(maxSafe + 2); // 9007199254740992 (Tunggu, harusnya 0993!)
```

**Arsitek Mindset**: Selalu gunakan `BigInt` jika Anda berurusan dengan ID transaksi bank atau hash kriptografi yang seringkali jauh melampaui `MAX_SAFE_INTEGER`.

---

## 3. BigInt: Kapasitas Tanpa Batas

BigInt dibuat dengan menambahkan akhiran `n` pada angka atau menggunakan fungsi `BigInt()`.

```javascript
const megaPower = 9007199254740991n;
console.log(megaPower + 2n); // 9007199254740993n (Akurat!)
```

---

## 4. Masalah Presisi Floating Point

Pernahkah Anda melihat `0.1 + 0.2 === 0.30000000000000004`? Ini bukan bug JavaScript, tapi cara komputer (IEEE 754) menyimpan angka desimal dalam biner.

**Solusi Senior**:
1.  **Scaling**: Ubah desimal menjadi angka bulat saat perhitungan (misal: sen, bukan dollar), lalu bagi kembali di akhir.
2.  **External Libraries**: Gunakan library khusus untuk aplikasi finansial yang kritis.

---

## Hands-on: Lab Presisi Numerik
Buka file `examples/numerical_lab.js` untuk melihat bagaimana kita menangani perhitungan pajak yang rumit dan konversi data sensor besar menggunakan `BigInt`.

---
*Back to [Numbers & Dates](../README.md)*
