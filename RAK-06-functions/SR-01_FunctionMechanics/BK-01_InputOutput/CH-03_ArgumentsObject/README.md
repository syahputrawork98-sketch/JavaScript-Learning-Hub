# CH-03: The `arguments` Object (The Legacy Fuel Log)

> **"Sebelum ada sistem penampung modern (Rest), Hub menggunakan 'Buku Log Bahan Bakar' (arguments Object). Ini adalah catatan otomatis yang mencatat semua yang masuk, tapi bentuknya kaku dan tidak mudah dikelola seperti Array modern."**

Objek `arguments` adalah objek mirip array (*array-like*) yang tersedia secara lokal di dalam fungsi non-arrow.

## 1. Mental Model: "The Legacy Fuel Log"

Bayangkan sebuah mesin tua. Ia tidak memiliki keranjang khusus untuk menampung barang sisa. Namun, ia memiliki buku log yang secara otomatis mencatat setiap barang yang dilemparkan ke dalam mesin oleh operator. Anda bisa membaca buku log tersebut, tapi Anda tidak bisa menggunakan fitur modern seperti "menyaring" atau "memetakan" isi buku log tersebut secara langsung tanpa memindahkannya ke tabel baru.

---

## 2. Karakteristik Arguments

- **Otomatis**: Selalu ada (kecuali di Arrow Functions).
- **Array-like**: Memiliki properti `.length` dan bisa diakses via index `[0]`, tapi **bukan Array asli**.
- **Kaku**: Tidak memiliki metode seperti `.map()` atau `.pop()`.

```javascript
function legacyLogger() {
    console.log("Jumlah argumen masuk:", arguments.length);
    console.log("Argumen pertama:", arguments[0]);
}

legacyLogger("VOLT", 220);
```

---

## 3. Arrow Function Exception

**PENTING**: Arrow functions **tidak memiliki** objek `arguments` sendiri. Inilah alasan utama mengapa teknisi modern lebih memilih **Rest Parameters** (`...args`) yang tersedia di segala jenis fungsi dan bersifat Array asli.

---

## Arsitek Mindset: Modernisasi Sistem

Sebagai arsitek Hub:
- Gunakan objek `arguments` hanya jika Anda sedang memelihara (*maintenance*) sirkuit lama (kode kuno).
- Untuk pembangunan Hub baru, selalu gunakan **Rest Parameters**. Ini adalah standar industri yang jauh lebih aman dan bertenaga.

---

## Hands-on: Lab Buku Log Kuno
Buka file `examples/legacy_log_lab.js` untuk melihat perbandingan antara pembacaan buku log manual (`arguments`) dengan sistem penampung otomatis modern.

---
*Status: [status.md](../../../status.md)*
