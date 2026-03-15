# Bab 02: Mekanika ToString (Representasi Teks)

Sama seperti kebutuhan JavaScript untuk melakukan perhitungan angka, bahasa ini juga perlu mengomunikasikan data mentah (seperti *Object*, *Array*, atau Angka) ke dalam bentuk teks yang bisa dibaca.

Di sinilah **Abstract Operation `ToString`** (Clause 7.1.17 pada ECMA-262) mengambil alih. Ia bertugas memaksa (*coerce*) nilai apa pun menjadi serangkaian *Code Units* (String).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> `ToString` itu seperti **Mesin Label**. Masukkan barang apapun ke dalamnya (sepatu, buku, atau angka 42), ia akan mencetak stiker teks yang mendeskripsikan barang tersebut (menjadi `"Sepatu"`, `"Buku"`, `"42"`).

> **Analogi Panjang (Lem Ambigu "+" pada JavaScript):**  
> Bayangkan operator `+` sebagai sebuah **Lem Super**. Masalahnya, Lem Super ini memiliki kepribadian ganda.
> - Jika ia melihat angka `10` dan `5`, ia akan berfungsi sebagai Lem Matematika dan meramunya menjadi `15`.
> - TAPI... Jika salah satu saja dari angka tersebut dibungkus plastik (berstatus String, seperti `"5"`), Lem Super itu akan langsung panik dan berubah menjadi **Lem Kertas**. Ia tidak akan menghitung, melainkan hanya menempelkan keduanya secara fisik menjadi `"105"`. Sikap panik ini diatur oleh spesifikasi *ECMAScript* yang memprioritaskan `ToString` di atas `ToNumber` saat bereksperimen dengan operator `+`.

---

## Aturan Konversi `ToString`

Berikut adalah hasil baku ketika `ToString` dieksekusi oleh *Engine*:

| Tipe Asal (*Input Object*) | Hasil Operasi `ToString` | Keterangan |
| :--- | :--- | :--- |
| **Undefined** | `"undefined"` | Teks harfiah. |
| **Null** | `"null"` | Teks harfiah. |
| **Boolean** | `"true"` atau `"false"` | |
| **Number** | `"42"` | Dikonversi sesuai basis desimal normal. |
| **Array** | `"1,2,3"` | Array `.join(',')` dipanggil secara internal. Array kosong `[]` menjadi `""`. |
| **Object** | `"[object Object]"`| Hasil dari `Object.prototype.toString`. Jarang berguna untuk UI. |

## Bahaya Operator `+` (Konkatenasi vs Penjumlahan)

Operator tambah (`+`) di JavaScript sangat rawan *bug* karena sifatnya yang *Overloaded* (bisa melayani dua operasi berbeda secara diam-diam).

Jika ada String di salah satu ruas `+`, JavaScript akan **menyerah** melakukan perhitungan matematika, memanggil `ToString()` pada ruas yang lain, dan sekadar menempelkan teksnya.

```javascript
console.log(10 + 5);      // 15 (Matematika Murni)
console.log("10" + 5);    // "105" (Konkatenasi Teks)
console.log("10" - 5);    // 5 (Tunggu, Kenapa?! Karena operator "-" TIDAK overloaded. Ia murni matematika, memanggil ToNumber. 🤯)
```

## `.toString()` Method vs Fungsi `String()`
Jangan bingung antara fungsi *Global* `String(val)` dan panggilan *Method* `val.toString()`.
- `String(val)`: Aman dipakai pada apa saja. Ini adalah implementasi langsung dari Operasi Abstrak `ToString`.
- `val.toString()`: **Berbahaya** jika `val` adalah `null` atau `undefined` (akan menyebabkan *Crash/TypeError*). *Method* ini tidak ada di semua Prototipe primitif.

## Contoh Eksekusi
Lihat pembuktian bahaya operator `+` dan keamanan `String()` pada folder [examples/](./examples/).
