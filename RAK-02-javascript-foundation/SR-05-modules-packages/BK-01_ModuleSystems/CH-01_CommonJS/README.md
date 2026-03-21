# CH-01: CommonJS (Legacy Module Standard)

> **"CommonJS adalah sistem modul sinkron yang mempopulerkan modularitas di sisi server melalui Node.js, menggunakan pola `require` dan `module.exports`."**

## 🔗 Source Hub
- **Primary Source**: [Node.js Documentation - CommonJS Modules](https://nodejs.org/api/modules.html)
- **Technical Reference**: [CommonJS Project History](https://en.wikipedia.org/wiki/CommonJS)

## 🎓 Senior Terminology
- **`require` & `module.exports`**: Unit sintaks utama untuk mengimpor dan mengekspor logika antar file dalam sistem CommonJS.
- **Synchronous Loading**: Mekanisme di mana modul dimuat tepat saat dipanggil, yang dapat menghentikan eksekusi kode lain hingga modul selesai dimuat.
- **Single Instance (Singleton)**: Karakteristik di mana setiap modul hanya dieksekusi satu kali dan hasilnya disimpan dalam cache untuk pemanggilan berikutnya.

## 1. Mental Model: "The Warehouse Box"

Bayangkan **CommonJS** sebagai sistem **Kotak Gudang**. Setiap file JavaScript adalah sebuah kotak tertutup. Untuk mendapatkan isi dari kotak lain, Anda harus memanggil kurir (`require`) yang akan pergi mengambil kotak tersebut, membukanya, dan membawakan isinya kepada Anda secara langsung (sinkron). Karena kurirnya bekerja satu per satu, seluruh pekerjaan di Hub akan terhenti sejenak sampai kurir kembali dengan kargonya.

![CommonJS Box](./assets/cjs_box.svg)

---

## 2. Mengekspor Kargo (`module.exports`)

Untuk membuat kargo Anda bisa digunakan oleh file lain, Anda harus meletakkannya di atas palet pengiriman `module.exports`:

```javascript
// energy_module.js
const power = 5000;
module.exports = { power };
```

---

## 3. Mengimpor Kargo (`require`)

Saat Anda membutuhkan kargo tersebut, Anda memanggilnya dengan `require`. Hasilnya adalah salinan dari apa pun yang diletakkan di `module.exports` tadi.

```javascript
const { power } = require('./energy_module');
```

---

## 4. Mekanisme Caching (Satu Kotak, Satu Kali)

JavaScript sangat efisien. Jika Anda memanggil kotak yang sama berkali-kali (`require` file yang sama), ia tidak akan pergi ke gudang lagi. Ia akan memberikan kargo yang sama yang sudah pernah ia ambil sebelumnya (Cache).

**Arsitek Mindset**: Pastikan Anda tidak mengubah isi kargo modul secara tidak sengaja di satu tempat, karena perubahan itu akan terbawa ke semua tempat lain yang memanggil modul tersebut.

---

## Hands-on: Lab Gudang Klasik
Buka file `examples/commonjs_lab.js` untuk melihat bagaimana kita menyusun dependensi antar sirkuit menggunakan sistem `require` dan memahami bagaimana cache modul bekerja di dalam Hub.

---
*Back to [Module Systems](../README.md)*
