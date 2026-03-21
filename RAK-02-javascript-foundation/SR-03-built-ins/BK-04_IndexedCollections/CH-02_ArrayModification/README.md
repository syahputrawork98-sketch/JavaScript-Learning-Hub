# CH-02: Array Modification (Collection Mutation)

> **"Sebuah koleksi data bersifat dinamis. Kita membutuhkan alat untuk menambah, menghapus, dan menyisipkan unit energi ke dalam urutan array dengan presisi tinggi."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Array Instance Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- **Technical Reference**: [ECMA-262 - Array Prototype Mutation](https://tc39.es/ecma262/#sec-properties-of-the-array-prototype-object)

## 🎓 Senior Terminology
- **Stack Methods**: Operasi `push()` dan `pop()` yang mengelola data dari ujung akhir array (Last-In, First-Out).
- **Queue Methods**: Operasi `shift()` dan `unshift()` yang mengelola data dari ujung awal array (First-In, First-Out).
- **Splice Surgery**: Metode paling kuat yang mampu menghapus, menambah, dan mengganti elemen di posisi mana pun dalam array secara bersamaan.

## 1. Mental Model: "The Dynamic Platform"

Bayangkan **Array Modification** sebagai **Operasi di Platform Stasiun**.
- **Push & Pop**: Menaruh atau mengambil barang dari gerbong paling belakang. Ini sangat cepat karena tidak mengganggu urutan gerbong lain.
- **Shift & Unshift**: Menaruh atau mengambil barang dari gerbong paling depan. Ini jauh lebih berat karena Anda harus menggeser nomor urut (indeks) seluruh gerbong di belakangnya.

![Array Operations](./assets/array_ops.svg)

---

## 2. Operasi Tumpukan (Stack: LIFO)

Metode yang paling efisien karena hanya menyentuh ujung akhir array:
- **`push(item)`**: Menambahkan unit energi baru ke akhir rel.
- **`pop()`**: Mengambil unit energi terakhir.

```javascript
let stack = [];
stack.push("Log-1"); // ["Log-1"]
stack.pop();         // "Log-1", stack is []
```

---

## 3. Operasi Antrian (Queue: FIFO)

Operasi ini lebih "mahal" secara performa karena memicu re-indexing:
- **`unshift(item)`**: Menambahkan di depan.
- **`shift()`**: Mengambil dari depan.

**Arsitek Mindset**: Dalam aplikasi Hub yang menangani ribuan data, hindari penggunaan `shift()` jika memungkinkan. Gunakan teknik lain seperti membalikkan array atau menggunakan struktur data *Linked List* kustom jika performa di depan sangat kritis.

---

## 4. Bedah Internal: `splice`

`splice()` adalah alat bedah paling serbaguna. Ia bisa:
1.  **Menghapus**: `splice(index, count)`
2.  **Menyisipkan**: `splice(index, 0, newItem)`
3.  **Mengganti**: `splice(index, 1, newItem)`

```javascript
let cores = ["A", "B", "D"];
cores.splice(2, 0, "C"); // Menyisipkan "C" di indeks 2
// cores: ["A", "B", "C", "D"]
```

---

## Hands-on: Lab Optimasi Sirkuit
Buka file `examples/array_performance.js` untuk membandingkan kecepatan antara 100.000 operasi `push` vs 100.000 operasi `unshift` di Hub Energi Anda.

---
*Back to [Indexed Collections](../README.md)*
