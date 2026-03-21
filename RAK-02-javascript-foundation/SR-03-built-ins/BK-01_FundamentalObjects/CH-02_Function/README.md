# CH-02: Function (The Executable Unit)

> **"Function adalah unit logika mandiri yang dapat dipanggil dan dieksekusi. Di JavaScript, fungsi juga merupakan objek tingkat tinggi (First-class Object)."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- **Technical Reference**: [ECMA-262 - Function Objects](https://tc39.es/ecma262/#sec-function-objects)

## 🎓 Senior Terminology
- **First-class Object**: Entitas yang dapat disimpan dalam variabel, dikirim sebagai argumen, atau dikembalikan sebagai hasil dari fungsi lain.
- **Execution Context**: Lingkungan tempat kode dieksekusi, yang menentukan nilai `this` dan akses variabel.
- **Function Prototype**: Objek prototipe dasar yang memberikan metode seperti `.call()`, `.apply()`, dan `.bind()` ke semua fungsi.

## 1. Mental Model: "The Dynamic Engine"

Jika Object adalah gudang penyimpanan, maka **Function** adalah **Mesin Dinamis** yang mengolah energi (data) menjadi hasil yang berguna. Kerennya, di JavaScript, mesin ini pun sebenarnya adalah sebuah objek khusus yang bisa Anda pindahkan, simpan, atau modifikasi seperti barang lainnya.

![The Dynamic Engine](./assets/dynamic_engine.svg)

---

## 2. Fungsi sebagai Objek (First-class)

Karena fungsi adalah objek, ia memiliki properti bawaan:
- **`name`**: Nama mesin (fungsi) tersebut.
- **`length`**: Jumlah input (parameter) yang diharapkan oleh mesin.

```javascript
function generatePower(amount) { return amount * 2; }
console.log(generatePower.name);   // "generatePower"
console.log(generatePower.length); // 1
```

---

## 3. Remote Control: `call`, `apply`, & `bind`

Semua fungsi mewarisi metode dari `Function.prototype` yang memungkinkan Anda mengendalikan "siapa yang memberikan tenaga" (`this`) ke mesin tersebut:

- **`.call()`**: Menjalankan mesin secara langsung dengan konteks `this` tertentu.
- **`.apply()`**: Sama seperti `.call()`, tapi input dikirim dalam bentuk array.
- **`.bind()`**: Menciptakan salinan mesin baru dengan konteks `this` yang terkunci secara permanen.

---

## Arsitek Mindset: Mesin yang Dapat Digunakan Kembali

Gunakan `.bind()` saat Anda ingin mengirim "Unit Mesin" ke bagian lain dari sistem (seperti *Event Listener*) tapi tetap ingin mesin tersebut menggunakan daya dari hub asalnya. Ini mencegah kesalahan konteks yang sering membuat sistem kehilangan tenaga (*logic errors*).

---

## Hands-on: Lab Pengendalian Mesin
Buka file `examples/function_mechanics.js` untuk melihat perbandingan performa antara pembuatan fungsi massal dan penggunaan metode prototipe untuk menghemat memori.

---
*Back to [Fundamental Objects](../README.md)*
