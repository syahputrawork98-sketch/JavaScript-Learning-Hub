# CH-01: If-Else (The Primary Logic Gate)

> **"If-Else adalah gerbang logika paling dasar di Hub Energi. Ia menentukan apakah arus akan mengalir ke sirkuit A atau dialihkan ke sirkuit B berdasarkan sinyal kebenaran (Boolean)."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- **Technical Reference**: [ECMA-262 - The if Statement](https://tc39.es/ecma262/#sec-if-statement)

## 🎓 Senior Terminology
- **Truthiness & Falsiness**: Konsep di mana JavaScript mengevaluasi nilai non-boolean (seperti `0`, `""`, atau `null`) sebagai `false` (falsy) atau selain itu sebagai `true` (truthy).
- **Ternary Operator**: Cara ringkas menulis `if-else` dalam satu baris menggunakan sintaks `kondisi ? hasil_true : hasil_false`.
- **Short-Circuit Evaluation**: Mekanisme di mana JavaScript berhenti mengevaluasi kondisi logika segera setelah hasilnya sudah bisa dipastikan (menggunakan `&&` dan `||`).

## 1. Mental Model: "The Logic Gate"

Bayangkan **If-Else** sebagai **Gerbang Logika** di Hub Energi kita. Arus kode akan mengalir dan tertahan di gerbang ini. Jika sinyal yang diberikan adalah "Benar" (Truthy), gerbang pertama terbuka dan arus mengalir ke Sirkuit A. Jika "Salah" (Falsy), gerbang pertama tertutup dan arus dialihkan ke Sirkuit B (Else).

![Logic Gate](./assets/logic_gate.svg)

---

## 2. Mengenal Truthy & Falsy

Di JavaScript, Gerbang Logika tidak hanya menerima Boolean murni. Segala sesuatu yang lewat akan dievaluasi:
- **Falsy (Gerbang Tertutup)**: `0`, `""`, `null`, `undefined`, `NaN`, dan tentu saja `false`.
- **Truthy (Gerbang Terbuka)**: Segala sesuatu yang bukan Falsy (termasuk `[]`, `{}`, dan `"0"`).

**Arsitek Mindset**: Selalu berhati-hati dengan angka `0`. Seringkali kita ingin gerbang terbuka jika ada angka, tapi `0` akan menutup gerbang tersebut secara otomatis.

---

## 3. Operator Ternary: Sirkuit Ringkas

Untuk percabangan sederhana, kita bisa menggunakan Operator Ternary (`? :`) agar kode lebih bersih:

```javascript
const status = power > 50 ? "Stable" : "Critical";
```

---

## 4. Evaluasi Hubung-Singkat (Short-Circuit)

Kita bisa menggunakan `&&` dan `||` untuk mengontrol arus tanpa perintah `if` penuh:
- **`&&` (AND)**: Jalankan perintah hanya jika gerbang pertama Terbuka.
- **`||` (OR)**: Berikan nilai cadangan jika gerbang pertama Tertutup.

```javascript
// Jika active, jalankan start()
isActive && startHub();

// Gunakan kapasitas 100 jika capacity tidak ada
const finalCapacity = capacity || 100;
```

---

## Arsitek Mindset: Guard Clauses

Daripada menumpuk `if` di dalam `if` (Pyramid of Doom), gunakan **Guard Clauses**. Periksa kondisi error di awal dan segera keluar (`return`) agar alur utama tetap lurus dan mudah dibaca.

---

## Hands-on: Lab Gerbang Keamanan
Buka file `examples/logic_gates_lab.js` untuk melihat bagaimana kita menyusun logika izin akses Hub menggunakan kombinasi Guard Clauses dan Short-circuit evaluation.

---
*Back to [Conditional Signals](../README.md)*
