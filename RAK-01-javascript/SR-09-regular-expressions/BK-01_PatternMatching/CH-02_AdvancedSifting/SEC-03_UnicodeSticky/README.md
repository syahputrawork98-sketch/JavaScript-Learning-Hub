# CH-03: Unicode & Sticky (Global Grid Standards)

> **"Hub Energi kini meluas ke seluruh galaksi, membawa simbol-simbol dari berbagai bahasa dan sistem data yang berbeda. Unicode & Sticky Flags adalah 'Standar Grid Global' (Global Grid Standards) yang memastikan scanner Anda bisa mengenali emoji, karakter non-Latin, serta memindai data secara berurutan tanpa melompati satu bit pun."**

Flag `u` (Unicode) dan `y` (Sticky) adalah fitur krusial untuk aplikasi modern dan performa tinggi.

## 1. Mental Model: "Global Grid Standards"

- **Unicode Flag (u)**: Tanpa flag ini, scanner Anda mungkin "rabun" terhadap karakter kompleks di luar jangkauan dasar (seperti emoji 🔌 atau aksara kuno). Flag `u` memberikan scanner penglihatan definisi tinggi untuk membedah karakter multi-byte secara akurat.
- **Sticky Flag (y)**: Seperti scanner yang hanya mau bekerja jika objek tepat berada di bawah sensornya (`lastIndex`). Jika data tidak cocok tepat di posisi tersebut, ia langsung menyerah (Gagal), alih-alih mencari di seluruh sisa string.

---

## 2. Cara Kerja Unicode flag

```javascript
/* Tanpa u: Salah menghitung panjang karakter kompleks */
console.log(/^.$/.test("🔌")); // Bisa False tergantung environment

/* Dengan u: Mengenali karakter astronimok */
console.log(/^.$/u.test("🔌")); // True
```

---

## 3. Cara Kerja Sticky flag

Sticky sangat berguna untuk membuat parser bahasa yang sangat cepat.

```javascript
const str = "Energy: 500MW";
const scanner = /\d+/y;

scanner.lastIndex = 8; // Tepat di angka '5'
console.log(scanner.exec(str)); // ["500"]

scanner.lastIndex = 7; // Masih di spasi
console.log(scanner.exec(str)); // null (Karena tidak 'melekat' pada awal digit)
```

---

## Arsitek Mindset: Standarisasi Masa Depan

Sebagai arsitek Hub:
- Gunakan flag `u` secara default jika Hub Anda memproses input dari pengguna global atau berurusan dengan emoji.
- Gunakan flag `y` jika Anda sedang membangun sistem pemecah kode (*Tokenizer*) yang membutuhkan performa maksimal dan kepastian lokasi data.

---

## Hands-on: Lab Standar Global
Buka file `examples/global_standards_lab.js` untuk melihat bagaimana scanner Anda menangani simbol-simbol eksotis dan aturan penempatan 'Sticky'.

---
*Status: [status.md](../../../status.md)*
