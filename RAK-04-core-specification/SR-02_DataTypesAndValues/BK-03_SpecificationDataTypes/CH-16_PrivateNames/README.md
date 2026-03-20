# CH-16: Private Names Specification Type

Nama privat (`#name`) di JavaScript bukan sekadar string dengan tanda pagar. Secara internal, mereka adalah tipe data unik bernama **Private Name** (Clause 6.2.12).

## Mental Model: "Sidik Jari yang Tak Terlihat"
Bayangkan Anda memiliki dua kunci yang sama-sama bertuliskan "#data".
- Gembok A hanya terbuka dengan Kunci dari Class A.
- Gembok B hanya terbuka dengan Kunci dari Class B.
Meskipun labelnya sama (#data), "Sidik Jari" (Private Name) mereka berbeda.

---

## 1. Definisi Private Name
Private Name mirip dengan **Symbol** (BK-01 CH-07), yaitu nilai unik yang tidak bisa diciptakan ulang. Namun, Private Name hanya bisa digunakan sebagai kunci untuk **PrivateElement**.

## 2. Struktur Record
Private Name memiliki satu field utama:
- **[[Description]]**: String labelnya (misal: "#myField"). Digunakan hanya untuk kebutuhan debugging.

## 3. Unik per Deklarasi
Setiap kali mesin menemui deklarasi `#name` di dalam sebuah Class, ia menciptakan **Private Name** baru yang unik. Inilah alasan mengapa Class anak bisa memiliki `#name` sendiri tanpa bentrok dengan `#name` milik Class induknya.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami Private Name mencegah Anda mencoba "menebak" atau memanipulasi field privat dari luar menggunakan string manipulasi. Mereka secara biner unik. Arsitek yang paham ini akan merasa tenang menggunakan field privat untuk menyimpan status sensitif karena tahu kunci aksesnya dipegang erat oleh Lexical Scope Class tersebut.

---

## Tantangan Kecil
Dapatkah kita membagikan sebuah Private Name antar dua Class yang berbeda?
(Jawabannya: **Secara Teknis TIDAK**. Private Name terikat secara leksikal pada Class di mana ia dideklarasikan. Inilah yang menjamin keamanan enkapsulasi).

---
> [!IMPORTANT]
> **Key Takeaway:** Private Name adalah simbol keamanan internal. Nama boleh sama, tapi identitas tetap unik selamanya.
