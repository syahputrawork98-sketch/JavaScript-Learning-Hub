# CH-02: String Methods (Text Surgery Kit)

> **"Jika String adalah bahan bakunya, maka String Methods adalah alat bedah yang kita gunakan untuk memotong, menyambung, dan mentransformasi teks di seluruh sistem Hub Energi."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - String Instance Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)
- **Technical Reference**: [ECMA-262 - String Prototype Methods](https://tc39.es/ecma262/#sec-properties-of-the-string-prototype-object)

## 🎓 Senior Terminology
- **Method Chaining**: Teknik pemanggilan beberapa metode secara berurutan dalam satu baris kode (seperti `.trim().toLowerCase().includes()`).
- **Case Folding**: Proses menyeragamkan huruf besar/kecil (Upper/Lower Case) untuk standarisasi perbandingan teks.
- **Substring vs Slice**: Perbedaan halus dalam cara mengambil bagian dari string, terutama saat menangani indeks negatif atau urutan indeks yang terbalik.

## 1. Mental Model: "The Text Surgery Kit"

Bayangkan **String Methods** sebagai satu set **Alat Bedah Presisi**. Karena String itu sendiri tidak bisa diubah (Immutable), alat-alat ini bekerja dengan cara mengambil bagian dari pesan lama, memprosesnya, dan menjahitnya kembali menjadi pesan baru yang sesuai dengan kebutuhan Hub.

![Text Surgery Kit](./assets/text_surgery.svg)

---

## 2. Navigasi & Pencarian

Sebelum membedah, kita harus menemukan lokasi data:
- **`includes(sub)`**: Memeriksa apakah kata kunci ada di dalam aliran pesan.
- **`startsWith(sub)` / `endsWith(sub)`**: Memeriksa identitas di awal atau akhir pesan.
- **`indexOf(sub)`**: Menemukan koordinat (indeks) tepat dari sebuah kata kunci.

---

## 3. Pemotongan & Pengambilan (Slicing)

- **`slice(start, end)`**: Cara paling direkomendasikan untuk mengambil potongan pesan. Ia mendukung indeks negatif (menghitung dari belakang).
- **`substring(start, end)`**: Mirip `slice`, tapi tidak mendukung indeks negatif.

```javascript
let log = "ERROR: Hub Overload";
let status = log.slice(0, 5); // "ERROR"
```

---

## 4. Transformasi & Pembersihan

- **`replace(old, new)`**: Mengganti kargo pesan. Bisa menggunakan Regex untuk pencarian pola.
- **`trim()`**: Membuang spasi kosong (noise) di awal dan akhir pesan.
- **`split(sep)`**: Memecah pesan menjadi potongan-potongan kecil (Array) berdasarkan pemisah tertentu.

---

## Arsitek Mindset: Method Chaining

Karena setiap metode mengembalikan string baru, Anda bisa menghubungkan mereka seperti sirkuit berantai:

```javascript
let rawData = "  Alpha-01:Active  ";
let cleanData = rawData.trim().toUpperCase().replace("-", "_");
// Hasil: "ALPHA_01:ACTIVE"
```

Teknik ini membuat kode jauh lebih ringkas, tapi pastikan setiap rantai tetap mudah dibaca oleh teknisi lain.

---

## Hands-on: Lab Pembersihan Log
Buka file `examples/string_methods_lab.js` untuk melihat bagaimana kita menggunakan *Method Chaining* untuk membersihkan ribuan data sensor mentah yang kotor menjadi format yang siap dianalisis.

---
*Back to [Text Processing](../README.md)*
