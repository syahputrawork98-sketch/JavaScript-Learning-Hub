# CH-01: Iterator Protocol (Modern Repetition Standard)

> **"Di era JavaScript modern, kita tidak hanya mengulang angka. Iterator Protocol memungkinkan kita mengulang objek apa pun dengan cara yang seragam dan efisien."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- **Technical Reference**: [ECMA-262 - Iteration](https://tc39.es/ecma262/#sec-iteration)

## 🎓 Senior Terminology
- **Iterable Interface**: Standar yang mengizinkan sebuah objek mendefinisikan perilaku pengulangannya (seperti `Symbol.iterator`).
- **The `next()` Method**: Fungsi inti yang mengembalikan objek dengan properti `value` (data saat ini) dan `done` (apakah pengulangan sudah selesai).
- **Generator Function**: Fungsi khusus (`function*`) yang mempermudah pembuatan iterator kompleks menggunakan kata kunci `yield`.

## 1. Mental Model: "The Manual Feed"

Bayangkan **Iterator Protocol** sebagai sebuah **Sistem Penyuap Manual** di Hub Energi kita. Jika array adalah tumpukan kargo yang sudah siap, Iterator adalah mekanismenya: ia tidak memberikan semua kargo sekaligus, tapi memberikannya satu per satu hanya saat Anda meminta "Lanjut!" (`next()`). Ini sangat efisien karena Hub tidak perlu memuat semua data ke memori sekaligus.

![Manual Feed Iterator](./assets/iterator_feed.svg)

---

## 2. Antarmuka Iterable (`Symbol.iterator`)

Sebuah objek bisa diulang menggunakan `for...of` jika ia memiliki "Pintu Rahasia" bernama `Symbol.iterator`. Pintu ini, saat dibuka, akan mengeluarkan sebuah **Iterator**.

```javascript
const energyStack = {
    [Symbol.iterator]: function() {
        // Logika untuk mengeluarkan iterator...
    }
};
```

---

## 3. Protokol `next()`

Iterator bekerja dengan satu perintah utama: `.next()`. Perintah ini mengembalikan sebuah paket informasi:
- **`value`**: Kargo data saat ini.
- **`done`**: Status sinyal (apakah pengiriman sudah selesai?).

---

## 4. Generator: Generator Energi Otomatis

Menulis iterator secara manual bisa sangat melelahkan. JavaScript menyediakan **Generator** (`function*`) untuk mempermudah ini. Gunakan kata kunci `yield` untuk "menghasilkan" data satu per satu tanpa menghentikan sirkuit fungsi secara permanen.

```javascript
function* powerGenerator() {
    yield "Low Power";
    yield "Normal Power";
    yield "Peak Power";
}

const gen = powerGenerator();
console.log(gen.next().value); // "Low Power"
```

---

## Arsitek Mindset: Lazy Evaluation

Gunakan Iterator dan Generator untuk memproses **Infinite Data Streams** atau file yang sangat besar. Dengan teknik ini, Hub hanya memproses apa yang dibutuhkan di saat itu saja (*Lazy Evaluation*), menghemat penggunaan memori (RAM) secara signifikan dibandingkan memuat seluruh data ke dalam Array.

---

## Hands-on: Lab Aliran Data Raksasa
Buka file `examples/iterator_lab.js` untuk melihat bagaimana kita membuat generator angka yang tak terhingga untuk mensimulasikan aliran data sensor Hub tanpa pernah kehabisan memori.

---
*Back to [Iterables & Iterators](../README.md)*
