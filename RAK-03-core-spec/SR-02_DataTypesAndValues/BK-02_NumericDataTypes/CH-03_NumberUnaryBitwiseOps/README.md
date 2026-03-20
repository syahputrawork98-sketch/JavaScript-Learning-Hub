# CH-03: Unary Minus & Bitwise NOT (The Polarity Inverter)

> **"Terkadang kita perlu membalikkan arah aliran energi atau melakukan inverting pada sinyal bit. `unaryMinus` dan `bitwiseNOT` adalah 'Inverter Polaritas' (The Polarity Inverter) — alat dasar untuk mengubah fase data di Hub."**

*Pemetaan ECMA-262: Clause 6.1.6.1.1 & 6.1.6.1.2*

## 1. Mental Model: "The Polarity Inverter"

Bayangkan sebuah sakelar yang membalikkan kutub magnet di dalam pipa:
- **`unaryMinus` (-)**: Membalikkan tanda angka. Positif jadi Negatif, dan yang paling krusial: **`+0` jadi `-0`**.
- **`bitwiseNOT` (~)**: Membalikkan setiap bit individual (0 jadi 1, 1 jadi 0) setelah memaksa angka masuk ke jalur 32-bit.

---

## 2. Aturan Inverter (Numeric Logic)

1.  **Unary Minus (-x)**:
    - Menjaga besaran energi tapi membalikkan arahnya.
    - `-NaN` tetap `NaN`.
    - `-(-0)` adalah `+0`.
2.  **Bitwise NOT (~x)**:
    - Melakukan `ToInt32(x)`.
    - Membalikkan bit (Two's Complement).
    - Rumus praktis di Grid: `~x` adalah `-(x + 1)`.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Inverter Polaritas ---");

// 1. Unary Minus
const zeroPos = +0;
const zeroNeg = -zeroPos;
console.log(`Negatif dari 0: ${zeroNeg}`); // -0

// 2. Bitwise NOT
console.log(`~5  = ${(~5)}`);  // -6
console.log(`~-1 = ${(~-1)}`); // 0 (The sentinel trick)
```

---

## Arsitek Mindset: Batas 32-Bit

Sebagai arsitek Hub:
- Waspadalah bahwa `bitwiseNOT` (~), seperti semua operator bitwise di JavaScript (kecuali yang BigInt), hanya bekerja pada **jalur 32-bit**.
- Jangan gunakan `~` pada angka yang sangat besar (di atas 2 miliar) karena hasilnya akan terpotong secara paksa oleh Grid.
- Gunakan `~str.indexOf(..)` untuk kode yang ringkas tetapi pastikan teknisi lain di Hub memahami maksud "Sentinel Value" ini.

---
*Status: [status.md](../../../docs/status.md)*
