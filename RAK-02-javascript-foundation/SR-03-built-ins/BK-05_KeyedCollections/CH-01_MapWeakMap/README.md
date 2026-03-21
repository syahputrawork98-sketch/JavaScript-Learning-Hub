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

---
*Back to [Keyed Collections](../README.md)*
