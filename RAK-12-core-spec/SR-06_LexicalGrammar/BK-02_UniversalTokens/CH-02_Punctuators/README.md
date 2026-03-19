# CH-02: Punctuators (The Connector Switches)

> **"Data dan nama unit tidak bisa mengalir tanpa adanya sakelar yang menghubungkan mereka. `Punctuators` adalah 'Sakelar Penghubung Sinyal' (The Connector Switches) — simbol-simbol teknis yang menentukan arah dan jenis arus energi di dalam sirkuit."**

*Pemetaan ECMA-262: Clause 11.7 (Punctuators)*

## 1. Mental Model: "The Connector Switches"

Bayangkan Punctuators sebagai komponen kecil di papan sirkuit:
- **Assignment (`=`)**: Menghubungkan tangki data ke unit penyimpan.
- **Arithmetic (`+`, `-`, `*`)**: Mengarahkan sinyal ke unit kalkulasi.
- **Blocks (`{`, `}`)**: Menciptakan ruang isolasi baru untuk arus energi.
- **Chains (`.`, `?.`)**: Melompat dari satu komponen ke komponen lain di dalam Grid.

---

## 2. Koleksi Sakelar (The Switchboard)

1.  **Optional Chaining (`?.`)**: Sakelar pintar yang akan memutuskan aliran dengan aman jika komponen yang dituju tidak ada, mencegah arus pendek (error).
2.  **Nullish Coalescing (`??`)**: Sakelar cadangan yang hanya aktif jika jalur utama benar-benar mati (null/undefined).
3.  **Logical Assignment (`||=`, `&&=`)**: Kombinasi sensor dan sakelar dalam satu unit tunggal.

---

## 3. Praktik Lapangan (Lab)

```javascript
let hubPower = null;
const backup = 100;

// Menggunakan Sakelar Cadangan (??)
let activePower = hubPower ?? backup; 
console.log(activePower); // 100

// Menggunakan Sakelar Pintar (?.)
const technicalData = { logs: { sensor: "A" } };
console.log(technicalData.logs?.sensor); // "A"
console.log(technicalData.reports?.status); // undefined (Aman!)
```

---

## Arsitek Mindset: Pemilihan Sakelar

Sebagai arsitek Hub:
- Gunakan `?.` dan `??` untuk membuat sirkuit yang lebih tangguh (Resilient) terhadap kegagalan komponen di Grid.
- Hindari penggunaan operator yang terlalu padat dalam satu baris, agar teknisi lain yang membaca sirkuit Anda tidak kebingungan menentukan arah aliran energinya.

---
*Status: [status.md](../../../docs/status.md)*
