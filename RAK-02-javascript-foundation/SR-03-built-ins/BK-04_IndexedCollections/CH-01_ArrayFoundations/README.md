# CH-01: Array Foundations (Sequence Architecture)

> **"Array adalah objek mirip list yang menyimpan unit data secara berurutan berdasarkan indeks numerik. Ia adalah struktur data paling fundamental untuk mengelola koleksi di Hub Energi."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- **Technical Reference**: [ECMA-262 - Array Objects](https://tc39.es/ecma262/#sec-array-objects)

## 🎓 Senior Terminology
- **List-like Object**: Karakteristik Array di JavaScript yang sebenarnya adalah objek dengan kunci numerik dan properti `length` otomatis.
- **Zero-based Indexing**: Standar di mana elemen pertama selalu dimulai dari indeks `0`.
- **Sparse Array**: Kondisi di mana sebuah array memiliki "lubang" (indeks yang kosong) di tengah-tengah urutannya.

## 1. Mental Model: "The Transport Rail"

Bayangkan **Array** sebagai **Rel Transportasi** di Hub Energi kita. Setiap gerbong (elemen) memiliki nomor urut (indeks) yang tetap. Anda bisa menambah gerbong di belakang, mencopot gerbong di depan, atau mengganti isi kargo dalam gerbong tertentu. Rel ini sangat efisien untuk memindahkan banyak data sekaligus dalam satu rangkaian.

![The Transport Rail](./assets/transport_rail.svg)

---

## 2. Struktur Induk (Zero-based Indexing)

Di Hub, kita selalu mulai menghitung dari **0**.
- **Indeks 0**: Gerbong pertama.
- **Indeks (length - 1)**: Gerbong terakhir.

```javascript
let powerUnits = ["Core-A", "Core-B", "Core-C"];
console.log(powerUnits[0]); // "Core-A"
console.log(powerUnits.length); // 3
```

---

## 3. Dinamisitas & Kapasitas

Array di JavaScript bersifat dinamis. Ia akan otomatis memanjang saat Anda menambahkan data baru. Namun, jika Anda melompati indeks (misal: mengisi indeks 10 padahal baru ada 3 data), JavaScript akan menciptakan **Sparse Array** (array yang berlubang).

**Arsitek Mindset**: Hindari pembuatan Sparse Array karena mesin JavaScript (V8) akan memperlakukan array tersebut sebagai objek biasa (Dictionary), yang jauh lebih lambat daripada array padat (*Dense Array*) yang dioptimalkan di memori.

---

## 4. Array adalah Objek Khusus

Secara teknis, Array adalah objek dengan kunci numerik. Anda bisa menambahkan properti string ke dalamnya, tapi itu tidak akan dihitung dalam properti `.length`.

---

## Hands-on: Lab Inspeksi Rel
Buka file `examples/array_foundations_lab.js` untuk membedah perbedaan performa antara Array Padat dan Array Sparse dalam skenario pemrosesan data sensor massal.

---
*Back to [Indexed Collections](../README.md)*
