# CH-02: Bitwise & Shift (The Logical Shifters)

> **"Di level terdalam, energi adalah aliran bit 32-lebar. `Bitwise Operators` adalah 'Pengubah Logika' (The Logical Shifters)—unit presisi yang memanipulasi sinyal langsung pada level biner untuk performa maksimal dan efisiensi ruang."**

*Pemetaan ECMA-262: Clause 13.10 & 13.14*

## 1. Mental Model: "The Logical Shifters"

JavaScript memperlakukan angka sebagai 64-bit float, namun untuk operasi Bitwise, Hub mengonversinya menjadi **32-bit Signed Integer** (atau Unsigned untuk `>>>`).
- **Bitwise AND (`&`)**: Hanya melewatkan bit jika keduanya aktif.
- **Bitwise OR (`|`)**: Melewatkan bit jika salah satu aktif.
- **Bitwise XOR (`^`)**: Hanya melewatkan bit jika posisinya berbeda.
- **Shift Operators (`<<`, `>>`, `>>>`)**: Menggeser seluruh blok bit ke kiri atau kanan (sering digunakan untuk perkalian/pembagian cepat dengan pangkat 2).

---

## 2. Kenapa Bitwise?

Sebagai arsitek Hub, Anda menggunakan Bitwise saat:
1.  **Flag Management**: Menyimpan 32 status boolean dalam satu variabel Integer tunggal.
2.  **Performa Ekstrim**: Melakukan kalkulasi matematika sederhana pada level bit yang lebih cepat daripada unit aritmatika standar.
3.  **Color Manipulation**: Membedah komponen warna (R, G, B, A) dari sinyal hex.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Menggunakan Bitwise Flag
const READ = 1;   // 0001
const WRITE = 2;  // 0010
const EXEC = 4;   // 0100

let perms = READ | WRITE; // 0011 (Read and Write)

console.log((perms & READ) !== 0); // true
console.log((perms & EXEC) !== 0); // false

// Shift for fast math
console.log(10 << 1); // 20 (Sama dengan 10 * 2)
console.log(20 >> 2); // 5  (Sama dengan 20 / 4)
```

---

## Arsitek Mindset: Batas 32-Bit

Sebagai arsitek Hub:
- Ingatlah bahwa Bitwise dibatasi pada **32-bit**. Jika Anda memiliki nilai energi di atas 2.14 miliar (2^31 - 1), operasi Bitwise akan menyebabkan *overflow* dan menghasilkan sinyal negatif atau tidak terduga.
- Gunakan `BigInt` Bitwise (`1n << 100n`) jika Anda butuh manipulasi bit pada skala energi raksasa yang melampaui batas 32-bit.

---
*Status: [status.md](../../../docs/status.md)*
