# CH-01: Object (The Root Entity)

> **"Object adalah akar dari segala entitas di JavaScript. Hampir segala hal yang Anda sentuh dalam bahasa ini, di bawah permukaannya, adalah sebuah objek."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- **Technical Reference**: [ECMA-262 - Object Objects](https://tc39.es/ecma262/#sec-object-objects)

## 🎓 Senior Terminology
- **Prototype Chain**: Urutan rujukan internal yang memungkinkan objek meminjam properti/metode dari prototipenya.
- **Own Properties**: Properti yang didefinisikan langsung pada objek tersebut, bukan warisan dari rantai prototipe.
- **Object Descriptor**: Atribut tersembunyi (`writable`, `enumerable`, `configurable`) yang mengatur perilaku sebuah properti.

## 1. Mental Model: "The Master Container"

Bayangkan **Object** sebagai **Gudang Induk** di Hub Energi kita. Hampir semua komponen lain (Fungsi, Array, bahkan tanggal) adalah "kotak-kotak khusus" yang semuanya disimpan di rak-rak gudang induk ini. Jika Anda kehilangan jejak dari mana suatu fitur berasal, kemungkinan besar ia ada di dalam `Object.prototype`.

![The Master Container](./assets/master_container.svg)

---

## 2. Properti: Kunci dan Nilai

Di dalam Gudang Induk, informasi disimpan dalam pasangan **Key** (Kunci) dan **Value** (Nilai).
- **Kunci**: Selalu berupa String atau Symbol.
- **Nilai**: Bisa berupa apa saja — dari angka mentah hingga fungsi kompleks (Metode).

```javascript
const energyHub = {
    id: "HUB-01",
    capacity: 5000,
    getStatus: function() {
        return `Hub ${this.id} is active.`;
    }
};
```

---

## 3. Rantai Prototipe Dasar

Setiap objek yang Anda buat secara otomatis terhubung ke `Object.prototype`. Ini adalah alasan mengapa Anda bisa memanggil metode seperti `.toString()` atau `.hasOwnProperty()` meskipun Anda tidak pernah mendefinisikannya di objek Anda sendiri.

**Arsitek Mindset**: Jangan pernah mengubah `Object.prototype` secara langsung (Prototype Pollution), karena ini akan mengubah perilaku seluruh objek di sistem Anda, yang bisa menyebabkan kerusakan sirkuit global.

---

## 4. Manipulasi Objek Tingkat Lanjut

Sebagai arsitek senior, Anda harus tahu cara mengelola struktur gudang dengan presisi:
- **`Object.keys(obj)`**: Mendapatkan daftar semua kunci yang ada.
- **`Object.values(obj)`**: Mendapatkan daftar semua nilai yang tersimpan.
- **`Object.entries(obj)`**: Mendapatkan pasangan kunci-nilai untuk iterasi massal.

---

## Hands-on: Eksplorasi Gudang Induk
Buka file `examples/object_deep_dive.js` untuk melihat bagaimana kita bisa mengunci gudang menggunakan `Object.freeze()` dan membedah isi properti menggunakan *Property Descriptors*.

---
*Back to [Fundamental Objects](../README.md)*
