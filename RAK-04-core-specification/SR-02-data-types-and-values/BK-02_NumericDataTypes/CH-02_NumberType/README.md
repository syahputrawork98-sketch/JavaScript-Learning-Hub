# CH-02: The Number Type (IEEE 754)

*Pemetaan ECMA-262: Clause 6.1.6.1*

Tipe **Number** memiliki tepat 18,437,736,874,454,810,627 nilai. Nilai ini direpresentasikan sebagai double-precision 64-bit format binary floating-point sesuai standar **IEEE 754-2019**.

## 🏗️ Bit Layout (64-bit)

```mermaid
grid-layout
    [Sign: 1 bit] [Exponent: 11 bits] [Fraction/Mantissa: 52 bits]
```

## 🔍 Nilai Spesial (Non-Numeric)
Spesifikasi mendefinisikan nilai-nilai unik yang bukan merupakan angka riil:
1. **NaN**: Not-a-Number (Hasil dari operasi ilegal seperti `0 / 0`).
2. **+Infinity / -Infinity**: Hasil dari pembagian dengan nol (kecuali `0/0`).
3. **+0 / -0**: Memiliki bit tanda yang berbeda, namun dianggap sama (`+0 === -0`).

> [!IMPORTANT]
> **Precision Limits**: Karena hanya memiliki 52 bit mantissa, Number tidak bisa merepresentasikan semua angka desimal secara akurat. Inilah mengapa `0.1 + 0.2 === 0.30000000000000004`.

---
*Lihat Lab: [Inspeksi Bit](./examples/bit_inspector.js)*  
*Kembali ke [BK-02](../README.md)*
