# CH-01: Arithmetic & Unary (The Single Converters)

> **"Energi mentah harus diubah bentuknya melalui proses transmutasi. `Unary & Arithmetic Operators` adalah 'Konverter Tunggal' (The Single Converters) — modul yang mengubah nilai numerik melalui operasi matematika dasar atau mengubah kondisi sinyal secara instan."**

*Pemetaan ECMA-262: Clause 13.4 - 13.7*

## 1. Mental Model: "Energy Transmutation"

- **Update Operators (`++`, `--`)**: Menambah atau mengurangi 1 unit energi secara langsung pada baterai (variabel).
- **Unary Operators**:
    - **`typeof`**: Sensor untuk mendeteksi jenis energi.
    - **`!` (Logical Not)**: Membalikkan polaritas sinyal (true <-> false).
    - **`+` (Unary Plus)**: Memaksa transmutasi sinyal non-numerik menjadi angka (ToNumber).
- **Arithmetic Operators (`*`, `/`, `+`, `-`, `%`, `**`)**: Mesin kalkulasi standar untuk menggabungkan atau membagi beban energi.

---

## 2. Kasus Khusus: Exponentiation `**`

Operator `**` adalah **Turbo Generator** yang memiliki prioritas unik. Ia dievaluasi dari **kanan ke kiri** (Right-Associative).
`2 ** 3 ** 2` diinterpretasikan sebagai `2 ** (3 ** 2)` = 512, bukan `(2 ** 3) ** 2` = 64.

---

## 3. Praktik Lapangan (Lab)

```javascript
let power = 10;

// Update & Unary
power++;     // 11
const isActive = !false; // true
const numVal = +"42";    // Angka 42 (Hasil transmutasi string)

// Arithmetic
const load = (10 * 2) ** 2; // 400

console.log(`Power: ${power}, Active: ${isActive}, Load: ${load}`);
```

---

## Arsitek Mindset: Kehati-hatian Transmutasi

Sebagai arsitek Hub:
- Waspada terhadap **Precision Loss** pada angka desimal (0.1 + 0.2 != 0.3). Gunakan pembulatan atau unit `BigInt` jika akurasi adalah prioritas utama.
- Gunakan Unary `+` sebagai cara tercepat untuk mengonversi string input menjadi angka, namun pastikan input tersebut valid agar tidak menghasilkan sinyal `NaN` (Not-a-Number) yang merusak sirkuit.

---
*Status: [status.md](../../../docs/status.md)*
