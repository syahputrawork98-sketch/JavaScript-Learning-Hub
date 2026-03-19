# CH-03: Regular Expression Literals (The Pattern Generators)

> **"Beberapa sinyal energi tidak bersifat statis; mereka adalah pola yang bisa berubah. `Regular Expression Literals` adalah 'Generator Pola' (The Pattern Generators) — sirkuit kompleks yang dibatasi oleh karakter `/` untuk mencari dan memetakan pola data di dalam Grid."**

*Pemetaan ECMA-262: Clause 11.8.5 (Regular Expression Literals)*

## 1. Mental Model: "The Pattern Generators"

Bayangkan sebuah detektor logam portabel di Hub.
- **Pattern**: Bentuk logam yang Anda cari (misal: "angka").
- **Flags**: Pengaturan detektor (misal: `g` untuk cari di seluruh area, `i` untuk tidak peduli ukuran besar/kecil).

## 2. Kenapa Ini 'Eksotis' di Level Lexical?

Regex literals unik karena penyaring Hub (Scanner) harus berhati-hati:
- Karakter `/` bisa berarti **Pembagi** (Arithmetical Punctuator) atau **Awal Regex**.
- Hub menggunakan status Parser untuk menentukan: Jika sebelumnya adalah angka, `/` kemungkinan besar adalah pembagi. Jika sebelumnya adalah kata kunci `return` atau `=`, `/` adalah awal dari Regex.

---

## 3. Praktik Lapangan (Lab)

```javascript
const scanner = /[A-Z]+/gi; // Sinyal pencarian huruf
const text = "Hub Alpha Sector";

const matches = text.match(scanner);
console.log(matches); // ["Hub", "Alpha", "Sector"]

// Ambiguitas /
const result = 10 / 2; // Punctuator (Division)
const pattern = /10/ / /2/; // Ini akan diproses sebagai (Regex) / (Regex) !!
```

---

## Arsitek Mindset: Keamanan Pola

Sebagai arsitek Hub:
- Waspadalah terhadap **ReDoS** (Regular Expression Denial of Service). Pola yang terlalu kompleks dapat membuat generator Hub bekerja tanpa henti (hang), menghabiskan seluruh energi reaktor.
- Gunakan alat bantu (seperti Regex Visualizer) untuk memastikan blueprint pola Anda efisien sebelum dipasang secara permanen di dalam sistem Grid.

---
*Status: [status.md](../../../docs/status.md)*
