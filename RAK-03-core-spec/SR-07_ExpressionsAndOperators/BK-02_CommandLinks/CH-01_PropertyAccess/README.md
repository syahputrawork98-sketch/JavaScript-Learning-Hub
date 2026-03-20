# CH-01: Property Access (The Routing Links)

> **"Setelah energi terstruktur, kita butuh cara untuk mengakses slot spesifik. `Property Access` adalah 'Pipa Penghubung Rute' (The Routing Links) — sistem navigasi untuk mengambil atau mengirim energi ke dalam properti sebuah unit."**

*Pemetaan ECMA-262: Clause 13.3 (Left-Hand Side Expressions)*

## 1. Mental Model: "The Routing Links"

Ada tiga cara utama untuk menghubungkan rute di Hub:
1.  **Dot Notation (`.`)**: Rute statis yang sudah dipastikan namanya. Sangat cepat dan mudah dibaca.
2.  **Bracket Notation (`[]`)**: Rute dinamis yang namanya bisa ditentukan oleh ekspresi lain (seperti sensor atau variabel).
3.  **Optional Chaining (`?.`)**: Rute aman yang memiliki detektor kegagalan otomatis. Jika di tengah jalan jalur terputus (null/undefined), aliran energi segera dihentikan dengan aman alih-alih menyebabkan ledakan sistem (Crash).

---

## 2. Super-Access: New & Call Expressions

- **`new` Operator**: Membangun instansi baru dari blueprint (Constructor).
- **Call Expression `( )`**: Memicu unit (fungsi) untuk memproses energi dan menghasilkan output.

---

## 3. Praktik Lapangan (Lab)

```javascript
const grid = {
    sector_1: { power: 500 },
    sector_2: null // Jalur terputus
};

// 1. Rute Statis
console.log(grid.sector_1.power); // 500

// 2. Rute Dinamis
const target = "sector_1";
console.log(grid[target].power); // 500

// 3. Rute Aman (Optional Chaining)
console.log(grid.sector_2?.power); // undefined (Aman, tidak error!)
```

---

## Arsitek Mindset: Keamanan Navigasi

Sebagai arsitek Hub:
- Selalu prioritaskan `?.` saat mengakses properti dari data eksternal (API/Database) yang strukturnya tidak bisa Anda jamin 100%. Ini adalah asuransi terbaik terhadap error "Cannot read property of undefined".
- Ingatlah bahwa akses properti (`.`) memiliki prioritas yang sangat tinggi di Hub, dievaluasi jauh sebelum operator aritmatika seperti `+` atau `-`.

---
*Status: [status.md](../../../docs/status.md)*
