# CH-09: Standard and Built-in Objects

Dalam navigasi spesifikasi, Anda akan sering bertemu istilah *Standard Object* dan *Built-in Object*. Meskipun terdengar sama, keduanya memiliki nuansa definisi yang berbeda di Clause 4.

## Mental Model: "Kitab Suci vs Barang Bawaan"
- **Standard Object:** Adalah objek-objek yang **tertulis di dalam buku** spesifikasi (ECMA-262). Mereka adalah bagian dari "Hukum Negara".
- **Built-in Object:** Adalah objek yang **disediakan oleh implementasi** saat Anda menjalankan kodenya.

---

## 1. Standard Objects
Ini adalah objek yang definisinya bisa Anda temukan di Clause 19 hingga 28 pada ECMA-262.
- **Contoh:** `Object`, `Array`, `String`, `Number`, `Boolean`, `Date`, `Math`, `JSON`, `Promise`.
- Objek ini wajib ada di setiap lingkungan JavaScript yang patuh pada standar.

## 2. Built-in Objects
Ini adalah istilah yang lebih luas. Semua *Standard Object* adalah *Built-in Object*, tapi tidak semua *Built-in Object* adalah *Standard Object*.
- **Standard Built-in:** Objek yang ada di spec (seperti `Array`).
- **Host Built-in:** Objek yang disediakan oleh host (seperti `window` di browser atau `process` di Node.js).

## 3. Well-known Intrinsic Objects
Spesifikasi juga memiliki tabel "Instrinsic" (biasanya ditandai dengan `%name%`). Ini adalah referensi internal ke objek standar yang tidak bisa diubah oleh pengembang.
- **Contoh:** `%Array%` adalah referensi ke constructor array asli, bahkan jika Anda melakukan `Array = null` di kode Anda, spesifikasi tetap bisa menggunakan `%Array%` aslinya.

---

## Mengapa Arsitek Harus Tahu Ini?
Mengetahui apa yang "Standard" membantu Anda menulis kode yang **Universal** (bisa jalan di mana saja). Jika Anda terlalu bergantung pada objek yang bukan *Standard* (misal: API khusus Chrome), aplikasi Anda akan sulit dipindahkan ke lingkungan lain.

---

## Tantangan Kecil
Apakah `console` adalah Standard Object?
(Jawabannya: **Tidak**. `console` tidak ada di spesifikasi ECMA-262. Dia adalah *Host Built-in Object* yang distandardisasi oleh kelompok kerja lain (WHATWG), namun karena sangat populer, hampir semua environment menyediakannya).

---
> [!TIP]
> **Pro-Tip:** Jika Anda ingin mengecek apakah sebuah fitur itu "Pasti Ada" di semua mesin JS, cek apakah dia terdaftar di Clause 19-28 ECMA-262. Jika tidak ada, berarti itu adalah bonus dari Host Anda.
