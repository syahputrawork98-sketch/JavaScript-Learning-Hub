# CH-01: Base Expressions (The Core Generators)

> **"Setiap perhitungan dimulai dari sumber terkecil. `Base Expressions` adalah 'Generator Inti' (The Core Generators) — unit ekspresi paling dasar yang menghasilkan nilai mentah atau referensi identitas langsung dari dalam Grid."**

*Pemetaan ECMA-262: Clause 13.1 & 13.2 (Primary Expressions)*

## 1. Mental Model: "The Core Generators"

Bayangkan Base Expressions sebagai sel baterai utama:
- **`this` Keyword**: Mengambil referensi ke unit kontrol saat ini (Execution Context).
- **Identifier Reference**: Memanggil nilai dari baki penyimpanan (Environment Record) berdasarkan label namanya.
- **Literal Expressions**: Menghasilkan nilai energi mentah langsung di tempat (seperti `100`, `"ACTIVE"`, `true`).

---

## 2. Unit Penampung: Parenthesized Expression `( )`

Terkadang kita perlu membungkus arus energi agar tidak bercampur dengan unit lain di sekitarnya. Tanda kurung `( )` bertindak sebagai **Isolator Arus**, memastikan bahwa ekspresi di dalamnya dievaluasi sebagai satu kesatuan utuh sebelum diteruskan ke sirkuit berikutnya.

---

## 3. Praktik Lapangan (Lab)

```javascript
const reactorCode = "R-101";

// Evaluasi Identifier
console.log(reactorCode); // Menghasilkan "R-101"

// Evaluasi Literal
console.log(500); // Menghasilkan nilai Number 500

// Evaluasi dengan Isolator ( )
const result = (10 + 2) * 5; 
console.log(result); // 60 (Tanpa kurung akan menjadi 20)
```

---

## Arsitek Mindset: Presisi Identitas

Sebagai arsitek Hub:
- Gunakan `this` dengan hati-hati. Di dalam Hub, nilai `this` bisa berubah tergantung bagaimana sebuah unit (fungsi) dipicu. Selalu pastikan Anda tahu di "Sektor" mana Anda berada sebelum memanggil referensi `this`.
- Gunakan Parenthesized Expression secara eksplisit jika sirkuit Anda kompleks, meskipun Hub memiliki aturan prioritas otomatis. Kejelasan blueprint lebih berharga daripada penghematan karakter.

---
*Status: [status.md](../../../docs/status.md)*
