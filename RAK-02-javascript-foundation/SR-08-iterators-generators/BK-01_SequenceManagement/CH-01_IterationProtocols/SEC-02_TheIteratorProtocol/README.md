# SEC-02: The Iterator Protocol (The Sequential Puller)

> **"Jika Iterable adalah jalurnya, maka Iterator adalah 'Unit Penarik' (The Sequential Puller) itu sendiri. Ia tahu posisi data saat ini dan tahu bagaimana cara menarik data berikutnya sampai seluruh aliran energi selesai."**

**Iterator Protocol** menentukan cara standar sebuah objek menghasilkan urutan nilai (baik terbatas maupun tidak terbatas). Sebuah objek adalah iterator jika ia memiliki metode `next()` yang mengembalikan objek hasil iterasi.

## Source Hub
- [MDN Web Docs - Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [MDN Web Docs - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)

---

## 1. Mental Model: "The Sequential Puller"

Bayangkan sebuah robot penarik di ujung ban berjalan (conveyor). 
1. Robot ini memiliki satu tombol kendali utama: **`next()`**.
2. Setiap kali tombol ditekan, robot akan menarik satu "Data Packet" dari jalur.
3. Setiap paket berisi laporan status dua bagian:
   - **`value`**: Muatan data yang ditarik.
   - **`done`**: Indikator status. Apakah ini data terakhir (`true`) atau masih ada data lain di belakangnya (`false`)?

![Iterator Puller Premium](./assets/iterator_puller_premium.svg)

```mermaid
flowchart LR
    A[iterator] --> B[next()]
    B --> C[{ value, done }]
    C -->|done false| D[next value available]
    C -->|done true| E[iteration finished]
```

---

## 2. Struktur Objek Hasil (`IteratorResult`)

Setiap pemanggilan `next()` harus mengembalikan objek dengan struktur sebagai berikut:

```javascript
{
  value: any,   // Nilai data saat ini (bisa undefined jika done: true)
  done: boolean // false jika masih ada data, true jika aliran selesai
}
```

Setelah iterator mengembalikan `done: true`, ia dianggap telah **Habis** (*Exhausted*). Pemanggilan `next()` selanjutnya biasanya akan terus mengembalikan `done: true`.

---

## 3. Sifat Statefulness (Mengingat Jejak)

Iterator bersifat *stateful*, artinya ia menyimpan kondisi/posisi internalnya. Ini memungkinkan kita untuk menghentikan proses penarikan data kapan saja, melakukan tugas lain, lalu kembali lagi untuk menarik data selanjutnya tepat dari posisi terakhir.

---

## Arsitek Mindset: Kendali Langkah demi Langkah

Sebagai arsitek Hub:
- **Precision Control**: Gunakan iterator jika Anda butuh kontrol manual kapan data harus diproses (misal: memuat file besar baris demi baris).
- **Infinite Streams**: Iterator memungkinkan Anda membuat aliran data yang tidak terbatas (misal: ID generator yang terus bertambah) tanpa memenuhi memori Hub.
- **Foundation of Generators**: Pahami protokol ini dengan baik, karena ini adalah mekanisme dasar yang menggerakkan fitur canggih seperti **Generators** dan **Async Iteration**.

---

## Hands-on: Lab Unit Penarik
Eksperimen dengan penarikan data manual dan pembuatan unit penarik kustom di `examples/manual_iterator_lab.js`.

---
*Status: [status.md](../../../status.md)*
