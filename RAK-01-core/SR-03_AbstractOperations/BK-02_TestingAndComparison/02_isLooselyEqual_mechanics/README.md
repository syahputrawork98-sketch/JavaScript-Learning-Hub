# Bab 02: Mekanika IsLooselyEqual (==)

Berbeda dengan `===` yang sangat kaku, operator **Loose Equality** (`==`) di JavaScript memiliki sifat yang sangat "kompromis". Di balik layar, ia menjalankan algoritma **Abstract Operation `IsLooselyEqual(x, y)`** (Clause 7.2.13 pada ECMA-262).

Algoritma ini dirancang untuk mencoba menyamakan tipe data kedua ruas sebelum akhirnya membandingkan nilainya.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> `IsLooselyEqual` adalah **Sang Negosiator**. Jika tipe datamu tidak sama, dia tidak langsung mengusirmu. Dia akan mencoba "mendandani" salah satu ruas (melalui *Coercion*) agar memiliki seragam yang sama dengan ruas lainnya supaya bisa dibandingkan.

> **Analogi Panjang (Pasar Penukaran Kurs Mata Uang):**  
> Bayangkan kamu sedang berada di pasar internasional. Kamu punya Dolar (String) dan penjual mau Rupiah (Number).
> - Sang Negosiator (`==`) akan melihat kurs tukar (**Aturan Coercion**). Dia akan menukar Dolarmu menjadi Rupiah dulu. Jika setelah ditukar nilainya setara, maka transaksi dianggap **true**.
> - Masalahnya, terkadang Sang Negosiator ini terlalu kreatif. Dia bisa menganggap "Kertas Kosong" (String `""`) setara dengan "Kantong Kosong" (Angka `0`). Kreativitas inilah yang sering menyebabkan kejutan (*Surprise!*) bagi pengembang yang tidak waspada.

---

## Logika Algoritma `IsLooselyEqual(x, y)`

Berikut adalah urutan prioritas negosiasi yang dilakukan oleh *Engine*:

1. **Tipe Sama**: Jika tipe `x` dan `y` sama, lakukan `IsStrictlyEqual(x, y)`.
2. **Null & Undefined**: Jika `x` adalah **null** dan `y` adalah **undefined** (atau sebaliknya), return **true**. (Inilah satu-satunya kegunaan `==` yang direkomendasikan).
3. **String & Number**: Jika salah satu String, ubah String tersebut menjadi **Number** (`ToNumber`) lalu bandingkan lagi.
4. **Boolean & Tipe Lain**: Jika salah satu Boolean, ubah Boolean tersebut menjadi **Number** (`1` atau `0`) lalu bandingkan lagi.
5. **Object & (String/Number/Symbol)**: Jalankan operasi `ToPrimitive` pada Object tersebut agar menjadi nilai primitif, lalu bandingkan lagi.
6. **Lainnya**: Return **false**.

## Bahaya "Falsy Trap"

Karena banyaknya aturan negosiasi otomatis, banyak nilai yang secara visual berbeda namun dianggap "sama" oleh `==`.

```javascript
console.log(0 == false);   // true (Boolean false jadi Number 0)
console.log("" == 0);      // true (String kosong jadi Number 0)
console.log("" == false);  // true (Keduanya jadi Number 0)
```

## Rekomendasi Senior Architect

Hanya gunakan `==` untuk satu tujuan spesifik: **Nullish Check**.
```javascript
// Cara Efisien:
if (data == null) { 
    // Baris ini akan berjalan jika data bernilai null ATAU undefined
}

// Daripada menulis:
if (data === null || data === undefined) { ... }
```

Selain kasus di atas, **selalu gunakan `===`** untuk menjaga kedisiplinan kode.

## Contoh Eksekusi
Lihat pembuktian daftar "Negosiasi" unik pada folder [examples/](./examples/).
