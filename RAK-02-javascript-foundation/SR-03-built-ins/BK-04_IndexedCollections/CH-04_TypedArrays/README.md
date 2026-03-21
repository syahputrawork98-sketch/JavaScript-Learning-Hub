# CH-04: TypedArrays (Binary Data Buffers)

> **"Untuk performa tinggi dan komunikasi data mentah (seperti WebGL atau Audio), kita menggunakan TypedArrays — buffer memori dengan tipe data tetap yang sangat efisien."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- **Technical Reference**: [ECMA-262 - Structured Data](https://tc39.es/ecma262/#sec-structured-data)

## 🎓 Senior Terminology
- **ArrayBuffer**: Objek yang merepresentasikan blok memori mentah berukuran tetap (container data biner).
- **DataView**: Antarmuka tingkat rendah yang memberikan kendali penuh untuk membaca dan menulis berbagai tipe data ke dalam ArrayBuffer.
- **Memory-mapped Data**: Teknik pemetaan data biner langsung ke tipe data numerik (seperti `Uint8Array`) untuk akses super cepat tanpa overhead objek JavaScript biasa.

## 1. Mental Model: "The High-Speed Pipeline"

Bayangkan **TypedArrays** sebagai **Pipa Kecepatan Tinggi** di Hub Energi kita. Berbeda dengan rel transportasi biasa (Array) yang bisa membawa kargo apa saja, pipa ini hanya dirancang untuk satu jenis energi mentah (misal: hanya byte angka bulat 0-255). Karena kargonya seragam dan ukurannya tetap, energi bisa mengalir jauh lebih cepat dan langsung ke mesin grafis (WebGL) atau pemroses suara tanpa hambatan.

![TypedArrays Pipeline](./assets/typed_arrays.svg)

---

## 2. Kontainer Memori: `ArrayBuffer`

Segala sesuatu dimulai dengan `ArrayBuffer`. Ini adalah blok memori mentah yang "buta" — ia hanya tahu berapa banyak memori yang kita pesan (dalam byte), tapi tidak tahu data apa yang ada di dalamnya.

```javascript
let buffer = new ArrayBuffer(16); // Memesan 16 byte memori kosong
```

---

## 3. Lensa Data: TypedArray Views

Untuk bisa melihat dan memanipulasi isi `ArrayBuffer`, kita butuh "lensa" khusus (View):
- **`Uint8Array`**: Melihat memori sebagai angka bulat 8-bit tanpa tanda (0-255).
- **`Float32Array`**: Melihat memori sebagai angka desimal 32-bit.
- **`Int32Array`**: Melihat memori sebagai angka bulat 32-bit bertanda.

```javascript
let view = new Uint8Array(buffer);
view[0] = 255;
```

---

## 4. Keuntungan Performa Senior

Objek Array biasa di JavaScript bersifat sangat fleksibel, namun fleksibilitas itu membebani memori dan CPU. TypedArrays dilepaskan dari beban itu:
- **Predictable Memory**: Mesin JavaScript tahu persis berapa byte yang digunakan tiap elemen.
- **Zero-copy Transfer**: Data bisa dikirim ke *Web Worker* atau *GPU* tanpa perlu disalin ulang, menghemat tenaga Hub secara drastis.

**Arsitek Mindset**: Gunakan TypedArrays saat Anda membangun sistem visualisasi data real-time atau pengolah file biner di Hub.

---

## Hands-on: Lab Stream Data Biner
Buka file `examples/typed_arrays_lab.js` untuk melihat bagaimana kita membuat struktur pesan biner kustom menggunakan `ArrayBuffer` dan `DataView` untuk komunikasi antar Hub yang super hemat bandwidth.

---
*Back to [Indexed Collections](../README.md)*
