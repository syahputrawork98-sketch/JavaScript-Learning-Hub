# CH-04: Object Defined

Kita sering mendengar "Everything in JavaScript is an Object". Tapi apakah spesifikasi setuju? Mari kita lihat definisi formalnya di Clause 4.4.

## Mental Model: "Lemari Kabinet Properi"
Bayangkan sebuah **Object** sebagai satu unit lemari kabinet.
- Lemari ini tidak punya nilai tunggal (seperti angka atau string).
- Lemari ini adalah **wadah** yang menampung banyak laci kecil.
- Setiap laci disebut **Property**.
- Selain laci, lemari ini punya "catatan rahasia" di bagian belakang yang disebut **Internal Slots**.

---

## 1. Definisi Formal Object
Menurut spesifikasi: *"An Object is a member of the type Object. It is a collection of properties."*

Ini adalah definisi yang sangat sederhana namun punya implikasi besar:
1. **Bukan Primitif:** Jika sesuatu adalah Object, maka dia bukan Number, String, BigInt, dsb.
2. **Koleksi Properti:** Kekuatan utama Object bukan pada nilainya, tapi pada kemampuannya menyimpan properti yang merujuk ke nilai lain.

## 2. Struktur Anatomi Object
Setiap Object dalam spesifikasi memiliki dua komponen utama:

### A. Properti (Dapat Diakses Kode)
Ini adalah apa yang kita manipulasi sehari-hari.
```javascript
let car = { color: "red" }; // 'color' adalah properti
```

### B. Internal Slots & Internal Methods (Tersembunyi)
Ini adalah bagian paling penting bagi seorang Arsitek. Spesifikasi menggunakan notasi kurung siku ganda `[[...]]` untuk mendefinisikannya.
- **[[Prototype]]**: Merujuk ke objek induk (untuk inheritance).
- **[[Get]]**: Metode internal yang dipanggil saat kita membaca properti.
- **[[Set]]**: Metode internal yang dipanggil saat kita menulis properti.

## 3. "Everything is an Object" - Mitos atau Fakta?
**Fakta Teknis:** Tidak, tidak semuanya adalah Object.
- Primitif (seperti `42` atau `"hello"`) **bukan** Object. Mereka tidak punya properti dan tidak punya metode internal.
- Namun, JavaScript melakukan "Autoboxing" (membungkus primitif menjadi Object sementara) sehingga kita *terasa* seperti memanggil metode pada primitif.

---

## Mengapa Arsitek Harus Tahu Ini?
Saat Anda mendesain sistem yang kompleks atau melakukan optimasi performa, Anda harus sadar bahwa setiap kali Anda membuat Object, Anda sedang membuat sebuah struktur data yang memiliki *internal slots* dan *internal methods* yang berat.

---

## Tantangan Kecil
Jika Anda melakukan `Object.create(null)`, apakah objek tersebut masih memiliki `[[Prototype]]`?
(Jawabannya: Ya, dia punya slot `[[Prototype]]`, tapi nilainya adalah **null**. Dia adalah objek yang "telanjang" tanpa warisan dari `Object.prototype`).

---
> [!IMPORTANT]
> **Key Takeaway:** Object dalam spesifikasi didefinisikan oleh **perilakunya** (melalui internal methods), bukan hanya oleh data yang disimpannya.
