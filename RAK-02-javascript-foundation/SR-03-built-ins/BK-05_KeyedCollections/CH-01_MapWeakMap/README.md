# CH-01: Map & WeakMap (Advanced Dictionaries)

> **"Jika objek biasa adalah gudang sederhana, maka Map adalah hub penyimpanan logistik canggih yang mendukung kunci bertipe apa pun dengan performa tinggi."**

## 🔗 Source Hub
- **Primary Source (Map)**: [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- **Primary Source (WeakMap)**: [MDN Web Docs - WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- **Technical Reference**: [ECMA-262 - Keyed Collections](https://tc39.es/ecma262/#sec-keyed-collections)

## 🎓 Senior Terminology
- **Arbitrary Key Types**: Kemampuan `Map` untuk menggunakan objek, fungsi, atau tipe data apa pun sebagai kunci (tidak terbatas hanya string/symbol seperti pada objek biasa).
- **Weak Reference**: Karakteristik `WeakMap` di mana referensi terhadap kunci bersifat "lemah", memungkinkan kunci tersebut dihapus dari memori oleh Garbage Collector jika sudah tidak digunakan lagi di tempat lain.
- **Entry Iteration**: Urutan penyimpanan data dalam `Map` yang selalu sesuai dengan urutan saat data tersebut dimasukkan (*insertion order*).

## 1. Mental Model: "The Logistics Hub"

Bayangkan **Map** sebagai **Hub Logistik Canggih**. Berbeda dengan gudang biasa (Object) yang hanya menerima label kertas (String/Symbol), Hub Logistik ini bisa menggunakan apa saja sebagai kunci pintu gudangnya — mulai dari kunci fisik (Objek), surat perintah (Fungsi), hingga energi mentah (Primitive). Hub ini juga sangat rapi; ia selalu mengingat urutan barang yang masuk.

![Logistics Hub](./assets/logistics_hub.svg)

---

## 2. Map vs Object: Kapan Harus Berpindah?

Meskipun `Object` sudah lama kita gunakan sebagai kamus, `Map` memberikan keunggulan arsitektural:
- **Kunci Apa Pun**: Anda bisa menggunakan objek sebagai kunci.
- **Ukuran Langsung**: Cukup panggil `.size` untuk tahu berapa banyak kargo di dalamnya.
- **Iterasi Stabil**: Data selalu keluar sesuai urutan masuknya.

```javascript
const hubCapacities = new Map();
hubCapacities.set(hubAlpha, 5000); // hubAlpha adalah OBJEK
console.log(hubCapacities.get(hubAlpha)); // 5000
```

---

## 3. WeakMap: Pengelola Memori Otomatis

**WeakMap** adalah varian khusus di mana kuncinya **harus berupa Objek**. Perbedaannya adalah ia tidak mencegah objek tersebut dihapus oleh *Garbage Collector*. Jika objek kunci tersebut hancur di bagian lain Hub, datanya di dalam WeakMap akan otomatis hilang.

**Arsitek Mindset**: Gunakan `WeakMap` untuk menyimpan metadata rahasia tentang sebuah unit energi tanpa takut menyebabkan kebocoran memori (*Memory Leaks*).

---

## 4. Efisiensi Pencarian

Pada koleksi data yang sangat besar, `Map` cenderung memiliki performa yang lebih stabil dan cepat untuk operasi penambahan (*set*) dan penghapusan (*delete*) dibandingkan dengan objek biasa.

---

## Hands-on: Lab Manajemen Kargo
Buka file `examples/keyed_collections_lab.js` untuk membandingkan penggunaan `Object` dan `Map` dalam skenario pelacakan status ribuan sirkuit dinamis di Hub.

---
*Back to [Keyed Collections](../README.md)*
