# CH-13: BigInt Arithmetic (The Industrial Powerhouse)

> **"Saat Hub memproses transaksi finansial raksasa atau ID Grid yang masif, `BigInt` arithmetic adalah 'Pusat Tenaga Industri' (The Industrial Powerhouse) — mesin kalkulasi yang memberikan hasil bulat sempurna tanpa pembulatan."**

*Pemetaan ECMA-262: Clause 6.1.6.2.12 s/d 6.1.6.2.20*

## 1. Mental Model: "The Industrial Powerhouse"

- **Penjumlahan/Perkalian**: Tidak ada batas `Infinity`. Angka akan terus tumbuh sampai memori sistem habis.
- **Pembagian (/)**: Selalu memotong desimal (*Truncation*). Tidak ada angka di belakang koma di Pusat Tenaga ini.
- **Eksponensial (**)**: Sangat kuat, tapi dilarang menggunakan pangkat negatif (untuk mencegah hasil desimal yang tidak didukung BigInt).

---

## 2. Protokol Keselamatan (Errors)

Hub akan segera menghentikan proses (Panic) jika Anda mencoba:
- Membagi BigInt dengan `0n`.
- Melakukan pemangkatan dengan angka negatif.
- Mencampur operasional dengan tipe `Number` tanpa konversi eksplisit.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Pusat Tenaga Industri ---");

const heavy_1 = 100n;
const heavy_2 = 3n;

console.log(`Bagi Industri (100n / 3n): ${heavy_1 / heavy_2}`); // 33n (TIDAK ADA DESIMAL)
console.log(`Sisa Industri (100n % 3n): ${heavy_1 % heavy_2}`); // 1n
```

---

## Arsitek Mindset: Kejernihan ID

Sebagai arsitek Hub:
- Gunakan BigInt untuk manipulasi ID mentah dari sistem luaran yang menggunakan skema 64-bit ke atas.
- Jangan gunakan BigInt untuk data yang kemungkinan akan dikonversi kembali ke Number di masa depan, karena risiko kehilangan data saat "Penyempitan" (*narrowing*) sangat tinggi.

---
*Status: [status.md](../../../docs/status.md)*
