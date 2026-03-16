# CH-07: Properties and Attributes

Dalam keseharian, kita hanya menulis `obj.key = value`. Namun di balik layar, spesifikasi melihat sebuah properti sebagai struktur data yang kompleks dengan "bendera" unik.

## Mental Model: "Laci dengan Alarm dan Gembok"
Bayangkan setiap **Property** pada objek adalah sebuah laci.
- **Value:** Adalah isi di dalam laci.
- **Attributes:** Adalah pengaturan pada laci tersebut.
  - Apakah laci bisa diisi ulang? (*Writable*)
  - Apakah laci terdaftar di daftar isi? (*Enumerable*)
  - Apakah laci bisa dibongkar atau diubah aturannya? (*Configurable*)

---

## 1. Definisi Formal Properti
Properti adalah pasangan antara **Key** (String atau Symbol) dan sebuah **Property Descriptor**.

## 2. Mengenal Attributes (Property Descriptor)
Spesifikasi membagi properti menjadi dua jenis:

### A. Data Property
Memiliki nilai konkret.
- **[[Value]]**: Data yang disimpan.
- **[[Writable]]**: Jika `false`, nilai tidak bisa diubah.
- **[[Enumerable]]**: Jika `false`, properti tidak muncul di `for...in`.
- **[[Configurable]]**: Jika `false`, tipe properti tidak bisa diubah dan tidak bisa dihapus.

### B. Accessor Property (Getter/Setter)
Tidak memiliki nilai, tapi memiliki fungsi untuk mengelola akses.
- **[[Get]]**: Fungsi yang dipanggil saat membaca.
- **[[Set]]**: Fungsi yang dipanggil saat menulis.
- **[[Enumerable]]** & **[[Configurable]]**: Sama seperti di atas.

## 3. Method vs Property
Dalam spesifikasi, **Method** hanyalah sebuah properti yang kebetulan memiliki nilai bertipe *Object* yang bisa dipanggil (*Callable*). Tidak ada perbedaan fundamental di tingkat penyimpanan antara data dan fungsi.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami atribut properti memungkinkan Anda menciptakan objek yang "Immune" atau tidak bisa diacak-acak oleh library lain.
```javascript
Object.defineProperty(obj, 'secret', {
  value: 42,
  writable: false,
  configurable: false
});
// Sekarang 'secret' tidak bisa diubah atau dihapus.
```

---

## Tantangan Kecil
Jika Anda menggunakan `Object.freeze(obj)`, apa yang sebenarnya dialami oleh laci-laci (properti) di dalamnya?
(Jawabannya: Spesifikasi akan menetapkan semua laci menjadi `writable: false` dan `configurable: false` secara massal).

---
> [!NOTE]
> **Key Takeaway:** Properti bukan sekadar nilai, tapi sekumpulan aturan yang mendefinisikan bagaimana nilai tersebut dapat berinteraksi dengan dunia luar.
