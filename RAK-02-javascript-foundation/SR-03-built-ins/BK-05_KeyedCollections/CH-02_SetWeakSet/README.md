# CH-02: Set & WeakSet (Unique Hub Units)

> **"Dalam Hub Energi, terkadang kita hanya butuh memastikan sebuah unit tidak terdaftar dua kali. Set adalah koleksi yang menjamin keunikan setiap elemennya."**

## 🔗 Source Hub
- **Primary Source (Set)**: [MDN Web Docs - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- **Primary Source (WeakSet)**: [MDN Web Docs - WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

## 🎓 Senior Terminology
- **Value Uniqueness**: Aturan utama `Set` yang secara otomatis mengabaikan penambahan nilai yang sudah ada di dalam koleksi tersebut.
- **Garbage Collection Optimization**: Alasan utama penggunaan `WeakSet` untuk menyimpan koleksi objek sementara yang harus bisa dihapus dari memori secara otomatis.
- **Set Theory Operations**: Kegunaan `Set` untuk mempermudah operasi matematika himpunan seperti *Union*, *Intersection*, dan *Difference*.

## 1. Mental Model: "The Verification Gate"

Bayangkan **Set** sebagai **Gerbang Verifikasi Ketat** di Hub Energi kita. Setiap unit yang ingin masuk harus menunjukkan identitasnya. Jika unit dengan identitas yang sama sudah ada di dalam, gerbang tidak akan mengizinkan duplikat masuk. Ini adalah cara termudah untuk membersihkan "kebisingan" (duplikasi data) dalam sirkuit kita.

![Verification Gate](./assets/verification_gate.svg)

---

## 2. Menjamin Keunikan

`Set` secara otomatis membuang nilai yang sama. Ini sangat berguna untuk membersihkan data mentah dari sensor:

```javascript
let rawSignals = [10, 20, 10, 30, 20];
let uniqueSignals = new Set(rawSignals);
// uniqueSignals: Set { 10, 20, 30 }
```

---

## 3. Efisiensi Pemeriksaan (`has`)

Salah satu alasan senior menggunakan `Set` bukannya `Array` untuk pengecekan keberadaan data adalah kecepatan:
- **Array**: Harus memeriksa gerbong satu per satu dari awal (O(n)).
- **Set**: Langsung tahu apakah data ada atau tidak (O(1)).

```javascript
if (activeHubs.has("ALPHA-01")) { 
    // Eksekusi instan tanpa perlu melintasi seluruh koleksi
}
```

---

## 4. WeakSet: Koleksi Objek Sementara

Sama seperti `WeakMap`, **WeakSet** hanya menerima **Objek** dan tidak mencegah objek tersebut dihapus oleh *Garbage Collector*. Gunakan ini jika Anda hanya perlu mencatat status sementara dari unit-unit fisik di Hub.

---

## Arsitek Mindset: Membersihkan Array

Trik tercepat untuk menghapus duplikat dari Array di Hub adalah dengan memanfaatkan Set dan operator spread:

```javascript
const cleanArray = [...new Set(noisyArray)];
```

---

## Hands-on: Lab Deteksi Duplikat
Buka file `examples/set_lab.js` untuk melihat bagaimana kita membangun sistem "Daftar Hitam" (*Blacklist*) yang sangat cepat untuk memblokir ID perangkat yang rusak menggunakan `Set`.

---
*Back to [Keyed Collections](../README.md)*
