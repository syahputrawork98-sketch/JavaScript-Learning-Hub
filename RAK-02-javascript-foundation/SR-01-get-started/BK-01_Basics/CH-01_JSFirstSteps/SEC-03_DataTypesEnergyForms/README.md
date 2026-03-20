# CH-03: Data Types (The Energy Forms)

> **"Data bukan sekadar informasi; ia adalah 'bentuk energi' yang menentukan bagaimana JavaScript memprosesnya."**

Setelah memiliki baterai (variabel) untuk menyimpan energi, kita perlu tahu **jenis energi** apa yang disimpan di dalamnya. Dalam JavaScript, "bentuk energi" ini disebut sebagai **Tipe Data**.

## 1. Mental Model: "Bentuk-Bentuk Energi"

Setiap perangkat membutuhkan jenis energi yang berbeda:
- **Number**: Ibarat **Wattage/Daya Panas** (Digunakan untuk perhitungan).
- **String**: Ibarat **Aliran Informasi** (Pesan teks, label).
- **Boolean**: Ibarat **Saklar Lampu** (On atau Off).

---

## 2. Peta Energi: 7 Primitive Types

JavaScript memiliki 7 tipe data dasar (Primitives) yang bersifat "atomik" (tidak bisa dipecah lagi):

| Bentuk Energi | Deskripsi | Contoh |
| :--- | :--- | :--- |
| **Number** | Angka (bulat atau desimal). | `42`, `3.14` |
| **String** | Teks atau urutan karakter. | `"Hallo Hub!"` |
| **Boolean** | Logika benar atau salah. | `true`, `false` |
| **Undefined** | Baterai ada, tapi isinya belum terdefinisi. | `let x;` |
| **Null** | Baterai sengaja dikosongkan. | `let x = null;` |
| **BigInt** | Energi super besar (angka luar biasa besar). | `9007199254740991n` |
| **Symbol** | Label unik yang tidak bisa diduplikasi. | `Symbol("id")` |

---

## 3. Energy Scanner: Operator `typeof`

Bagaimana kita tahu bentuk energi apa yang ada di dalam sebuah variabel? Gunakan pemindai bawaan JavaScript: `typeof`.

```javascript
let energy = 100;
console.log(typeof energy); // "number"
```

---

## Arsitek Mindset: Presisi Bentuk Energi

Sebagai arsitek, Anda harus presisi dalam memilih bentuk energi. Mengirimkan **String** ("10") ke dalam fungsi kalkulasi matematika mungkin akan memberikan hasil yang tidak terduga karena JavaScript mencoba melakukan "Energy Transformation" (Type Coercion). Selalu pastikan "bentuk" data sesuai dengan peruntukannya.

---

## Hands-on: Memindai Energi
Buka file `examples/types_demo.js` untuk mencoba memindai berbagai bentuk energi menggunakan `typeof`.

---
*Status: [status.md](../../../../status.md)*
