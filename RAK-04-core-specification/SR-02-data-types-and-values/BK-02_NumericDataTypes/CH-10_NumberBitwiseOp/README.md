# CH-10: Bitwise Logic (The Logic Gates)

> **"Pemrosesan data tingkat rendah di Hub dilakukan melalui gerbang-gerbang elektrik. `bitwiseAND`, `bitwiseXOR`, dan `bitwiseOR` adalah 'Gerbang Logika' (The Logic Gates) yang memanipulasi sinyal bit demi bit untuk enkripsi, masking, dan optimasi performa."**

*Pemetaan ECMA-262: Clause 6.1.6.1.13 s/d 6.1.6.1.15*

## 1. Mental Model: "The Logic Gates"

Bayangkan aliran energi yang melewati persimpangan sensor:
- **AND (&)**: Sinyal hanya lewat jika kedua input aktif. (Masking data).
- **OR (|)**: Sinyal lewat jika salah satu atau kedua input aktif. (Merging data).
- **XOR (^)**: Sinyal lewat hanya jika input berbeda. (Detecting changes).

---

## 2. Konversi 32-Bit

Sama seperti Bit Shunter, gerbang ini hanya menerima input **32-bit Integer**.
- Angka Number akan dipaksa masuk ke register sebelum diproses.
- `NaN` dan `Infinity` akan menjadi `0` saat masuk ke gerbang logika ini.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Gerbang Logika ---");

// 1. Bitwise AND (Masking)
console.log(`5 & 1 = ${5 & 1}`); // 0101 & 0001 = 0001 (1)

// 2. Bitwise OR (Merging)
console.log(`5 | 2 = ${5 | 2}`); // 0101 | 0010 = 0111 (7)

// 3. Bitwise XOR (Flip)
console.log(`5 ^ 5 = ${5 ^ 5}`); // 0 (Equal values cancel out)
```

---

## Arsitek Mindset: Efisiensi Register

Sebagai arsitek Hub:
- Gunakan operator bitwise untuk menyimpan banyak status boolean dalam satu variabel Number (Bitfields). Ini adalah teknik "Kompresi Sinyal" yang sangat menghemat memori Grid.
- Hindari penggunaan bitwise pada BigInt secara berlebihan di jalur kritis karena algoritmanya lebih kompleks (Arbitrary precision) dibandingkan jalur 32-bit Number yang dioptimalkan hardware.

---
*Status: [status.md](../../../docs/status.md)*
