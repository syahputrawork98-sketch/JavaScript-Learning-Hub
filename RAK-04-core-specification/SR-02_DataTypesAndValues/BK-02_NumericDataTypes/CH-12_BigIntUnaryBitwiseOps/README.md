# CH-12: BigInt Unary & Bitwise (The Industrial Inverter)

> **"Mengolah beban industri berat memerlukan peralatan yang sebanding. `BigInt::unaryMinus` dan operasi bitwise-nya adalah 'Inverter Industri' (The Industrial Inverter) — mesin raksasa yang memanipulasi bit angka bulat tanpa batas presisi."**

*Pemetaan ECMA-262: Clause 6.1.6.2.1 s/d 6.1.6.2.11*

## 1. Mental Model: "The Industrial Inverter"

Berbeda dengan Number yang memiliki limit 32-bit, Inverter di jalur BigInt bekerja pada seluruh panjang angka:
- **`unaryMinus` (-n)**: Membalikkan angka positif/negatif.
- **Bitwise Ops (&, |, ^, ~)**: Menggunakan representasi **Two's Complement** biner yang secara teoritis tidak terbatas.

---

## 2. Kenapa Bitwise BigInt Berbeda?

Pada Number (32-bit), bit paling kiri adalah tanda. Pada BigInt, spesifikasi membayangkan angka negatif memiliki rentetan `1` yang tak terhingga di sisi kiri.
- **Contoh**: `~0n` menghasilkan `-1n`.
- Proses internalnya jauh lebih berat daripada jalur 32-bit konvensional.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Inverter Industri ---");

const bigValue = 12345678901234567890n;
console.log(`Inverted: ${-bigValue}`);

// Bitwise AND pada BigInt
console.log(`AND: ${0b1100n & 0b1010n}`); // 1000n (8n)
```

---

## Arsitek Mindset: Skalabilitas Bit

Sebagai arsitek Hub:
- Gunakan bitwise BigInt untuk manipulasi bendera (*flags*) atau topeng (*mask*) data yang sangat panjang yang tidak muat dalam 32-bit.
- Sadarilah bahwa `~n` pada BigInt berperilaku konsisten dengan matematika murni (Two's Complement) tidak peduli berapa besar angkanya.

---
*Status: [status.md](../../../docs/status.md)*
