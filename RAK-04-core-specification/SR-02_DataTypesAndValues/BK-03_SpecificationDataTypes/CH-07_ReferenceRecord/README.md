# CH-07: Reference Record Specification Type

Pernahkah Anda bertanya-tanya apa yang sebenarnya terjadi saat Anda menulis nama variabel `x` di kode Anda? Mesin tidak langsung melihat nilainya, tapi ia menciptakan sebuah **Reference Record** (Clause 6.2.5).

## Mental Model: "Alamat pada Amplop"
Bayangkan Anda sedang mencari seseorang.
- **Value:** Adalah orangnya.
- **Reference:** Adalah amplop yang berisi alamat rumah orang tersebut.
Saat Anda menulis `x`, JavaScript memberikan Anda "Amplop" tersebut. Anda baru akan mendapatkan "Orangnya" (Value) setelah Anda membuka amplopnya (proses *Dereferencing*).

---

## 1. Struktur Reference Record
Reference Record adalah cara spesifikasi menjelaskan "Letak" sebuah data. Komponen utamanya:
- **[[Base]]**: Di mana data ini berada? (Bisa berupa Object, Environment Record, atau nilai primitif).
- **[[ReferencedName]]**: Nama datanya (String atau Symbol).
- **[[Strict]]**: Apakah akses ini terjadi di dalam *Strict Mode*?
- **[[ThisValue]]**: Khusus untuk akses properti yang melibatkan `super` atau *accessor*.

## 2. Kenapa Butuh Reference?
Tanpa Reference, JavaScript tidak bisa membedakan antara:
- **Mengambil Nilai:** `let a = x;` (Kita butuh nilai dari x).
- **Mengubah Nilai:** `x = 10;` (Kita tidak butuh nilai x yang lama, kita butuh *"Tempat"* di mana x berada agar bisa kita isi ulang).

## 3. Unresolvable Reference
Jika Anda mengakses variabel yang tidak pernah dideklarasikan, mesin menciptakan Reference Record dengan `[[Base]]: ~unresolvable~`. Inilah yang memicu `ReferenceError` saat kita mencoba mengambil nilainya.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami Reference Record adalah kunci untuk memahami perilaku `this`. Banyak bug `this` yang "hilang" (seperti saat memindahkan method ke variabel lain) terjadi karena **Reference Record-nya hancur** dan berubah menjadi nilai mentah. Arsitek yang paham ini bisa menjaga integritas konteks `this` di seluruh aplikasinya.

---

## Tantangan Kecil
Apa hasil dari `typeof x` jika `x` tidak pernah dideklarasikan?
(Jawabannya: **"undefined"**. Mengapa tidak error? Karena operator `typeof` dirancang khusus dalam spesifikasi untuk menangani *Unresolvable Reference* tanpa melempar error, melainkan mengembalikan string "undefined").

---
> [!IMPORTANT]
> **Key Takeaway:** Reference adalah "Penunjuk" bukan "Isi". Ia menjelaskan *di mana* data berada dan *siapa* nama datanya.
