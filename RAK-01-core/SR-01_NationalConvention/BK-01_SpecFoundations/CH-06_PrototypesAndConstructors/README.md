# CH-06: Prototypes and Constructors

Banyak pengembang bingung antara properti `.prototype` pada fungsi dan link internal `[[Prototype]]` pada objek. Mari kita bedah definisi formalnya agar tidak tertukar lagi.

## Mental Model: "Alat Cetak vs Hasil Cetakan"
- **Constructor:** Adalah alat cetak (stempel).
- **Prototype:** Adalah desain atau pola yang ada pada stempel tersebut.
- **Instance (Object):** Adalah hasil cap dari stempel yang membawa "bayangan" (link) dari desain induknya.

---

## 1. Definisi Formal Prototype
Menurut Clause 4.4: *"A Prototype is an object that provides shared properties for other objects."*

Poin kuncinya adalah **Shared Properties**. Prototype bukan sekadar orang tua, tapi gudang pengetahuan yang bisa diakses bersama oleh semua "anak-anaknya" tanpa harus menduplikasi datanya.

## 2. Definisi Formal Constructor
Menurut Clause 4.4: *"A Function object that creates and initializes objects."*

Setiap fungsi yang memiliki metode internal `[[Construct]]` bisa menjadi Constructor. Saat fungsi ini dipanggil dengan keyword `new`, dia akan:
1. Membuat objek baru.
2. Menghubungkan slot `[[Prototype]]` objek baru tersebut ke `.prototype` milik fungsi Constructor.

## 3. Memutus Kebingungan: `.prototype` vs `[[Prototype]]`

| Nama | Lokasi | Peran |
| :--- | :--- | :--- |
| **property `prototype`** | Hanya pada Fungsi | "Peta" yang akan diberikan kepada anak-anaknya nanti saat mereka lahir. |
| **slot `[[Prototype]]`** | Di SEMUA Objek | Link aktif ke parent yang sekarang sedang memberikan warisan properti. |

Di dunia nyata (kode), kita mengakses `[[Prototype]]` melalui `Object.getPrototypeOf()` atau properti non-standar `__proto__`.

## 4. Rantai Pewarisan (Prototype Chain)
Jika sebuah properti tidak ditemukan dalam objek itu sendiri, spesifikasi memerintahkan algoritma untuk memeriksa **[[Prototype]]**-nya secara rekursif hingga menemukan properti tersebut atau mencapai `null`.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami perbedaan ini memungkinkan Anda melakukan optimasi memori. Properti yang diletakkan di **Prototype** hanya memakan memori satu kali, tidak peduli berapa ribu objek yang Anda buat.

---

## Tantangan Kecil
Jika saya mengubah `Array.prototype.map = ( ) => "Broken"`, apakah semua array di seluruh aplikasi akan rusak?
(Jawabannya: **Ya**. Karena semua instance array merujuk ke **Shared Property** yang sama di prototype-nya. Inilah kekuatan dan bahaya dari Prototype).

---
> [!IMPORTANT]
> **Key Takeaway:** Konstruktor adalah "Siapa yang membuat saya?", sedangkan Prototype adalah "Dari mana saya belajar perilaku saya?".
