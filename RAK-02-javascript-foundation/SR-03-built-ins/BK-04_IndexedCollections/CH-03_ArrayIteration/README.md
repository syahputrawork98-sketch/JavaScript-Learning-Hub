# CH-03: Array Iteration (Collection Orchestration)

> **"Mengelola ribuan unit energi satu per satu tidaklah efisien. Array Iteration memberikan orkestrasi fungsional untuk memproses seluruh koleksi secara elegan."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Array Iteration Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)
- **Technical Reference**: [ECMA-262 - Array Prototype Iteration](https://tc39.es/ecma262/#sec-array.prototype.foreach)

## 🎓 Senior Terminology
- **High-Order Iteration**: Metode seperti `.map()`, `.filter()`, dan `.reduce()` yang menerima fungsi lain sebagai instruksi pemrosesan data.
- **Predicate Function**: Fungsi yang mengembalikan nilai boolean (`true`/`false`), digunakan oleh metode seperti `.find()` atau `.some()` untuk pengujian data.
- **Accumulator**: Variabel penampung hasil komulatif dalam metode `.reduce()` yang merangkum seluruh elemen array menjadi satu nilai tunggal.

## 1. Mental Model: "The Conveyor Belt"

Bayangkan **Array Iteration** sebagai **Sabuk Konveyor Otomatis** di Hub Energi kita. Rangkaian unit energi (array) berjalan di atas sabuk, dan di setiap stasiun (metode), kita memberikan instruksi (callback) tentang apa yang harus dilakukan pada setiap unit yang lewat.
- **Map**: Mengubah bentuk setiap unit.
- **Filter**: Membuang unit yang cacat.
- **Reduce**: Melebur semua unit menjadi satu baterai raksasa.

![Conveyor Belt](./assets/conveyor_belt.svg)

---

## 2. Transformasi dengan `map()`

`map()` menciptakan array baru dengan ukuran yang sama, tapi isinya sudah ditransformasi:

```javascript
let voltages = [110, 220, 240];
let signals = voltages.map(v => `${v}V`); 
// signals: ["110V", "220V", "240V"]
```

---

## 3. Seleksi dengan `filter()`

`filter()` menciptakan array baru yang hanya berisi unit-unit yang lolos pemeriksaan (predikat):

```javascript
let units = [10, 50, 100, 150];
let highPower = units.filter(u => u > 80);
// highPower: [100, 150]
```

---

## 4. Akumulasi dengan `reduce()`

Ini adalah alat paling kuat di Hub. Ia merangkum seluruh koleksi menjadi satu nilai (angka, objek, atau array lain):

```javascript
let load = [10, 20, 30];
let totalLoad = load.reduce((acc, curr) => acc + curr, 0);
// totalLoad: 60
```

---

## Arsitek Mindset: Immuntability & Chaining

Metode iterasi modern tidak mengubah array asli (*Immutable*), melainkan mengembalikan array baru. Hal ini memungkinkan Anda untuk merangkai instruksi (**Chaining**):

```javascript
let finalSignals = data
    .filter(d => d.active)
    .map(d => d.value * 2);
```

**Peringatan Senior**: Rangkaian yang terlalu panjang bisa membebani memori karena setiap langkah menciptakan array baru sementara. Gunakan `reduce` jika Anda perlu melakukan filter dan map dalam satu putaran sabuk konveyor untuk efisiensi maksimal.

---

## Hands-on: Lab Pengolah Sinyal
Buka file `examples/array_iteration_lab.js` untuk melihat bagaimana kita mengolah ribuan log sensor mentah menjadi laporan status Hub yang ringkas menggunakan kombinasi `filter` dan `reduce`.

---
*Back to [Indexed Collections](../README.md)*
