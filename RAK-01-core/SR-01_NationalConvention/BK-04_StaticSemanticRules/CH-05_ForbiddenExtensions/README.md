# CH-05: Forbidden Extensions

Meskipun ECMA-262 memberikan kebebasan bagi *Host* untuk menambah fitur (seperti `console`), spesifikasi juga menetapkan "Garis Merah" yang tidak boleh dilanggar. Inilah **Forbidden Extensions** (Clause 17).

## Mental Model: "Aturan Modifikasi Mobil"
Bayangkan spesifikasi adalah aturan keamanan jalan raya. Anda boleh memodifikasi mobil (Engine/Host) Anda dengan stiker atau audio yang lebih bagus (*Host-defined features*). Tapi, Anda dilarang keras mengubah fungsi rem atau lampu sein menjadi sesuatu yang membingungkan pengemudi lain.

---

## 1. Menjaga Integritas Bahasa
Tujuan dari *Forbidden Extensions* adalah untuk memastikan bahwa kode yang valid menurut spesifikasi standar **tidak akan berperilaku berbeda** atau gagal di mesin yang memiliki ekstensi.

## 2. Apa Saja yang Dilarang?
Beberapa poin penting dari Clause 17 meliputi:
- **Jangan Mengubah Syntax Standar:** Engine dilarang menambah keyword baru yang bisa membuat kode standar menjadi tidak valid.
- **Jangan Mengubah Semantik Objek Standar:** Anda tidak boleh mengubah cara `Array.prototype.push` bekerja.
- **Batasan pada Global Object:** Host dilarang menambahkan properti ke objek global yang namanya bisa bentrok dengan fitur masa depan spesifikasi, kecuali mengikuti pola tertentu.

## 3. Ekstensi yang Diizinkan (Annex B)
Beberapa ekstensi "terlarang" sebenarnya diizinkan melalui **Annex B** hanya demi kompatibilitas web lama (*Legacy compatibility*). Contohnya adalah penggunaan `__proto__` atau fungsi-fungsi string HTML seperti `anchor()`.

---

## Mengapa Arsitek Harus Tahu Ini?
Sebagai arsitek, Anda harus skeptis terhadap fitur "Magic" yang hanya ada di satu browser. Jika fitur tersebut melanggar *Forbidden Extensions*, kemungkinan besar fitur itu tidak akan pernah menjadi standar dan akan membuat kode Anda sulit di-maintain di masa depan.

---

## Tantangan Kecil
Jika sebuah engine JavaScript ingin menambah tipe data baru, misalnya `Bignum` (sebelum ada BigInt), apakah mereka boleh melakukannya?
(Jawabannya: **Sangat Berisiko**. Jika mereka menambah syntax baru untuk itu, mereka mungkin melanggar *Forbidden Extensions* karena bisa merusak parser standar).

---
> [!IMPORTANT]
> **Key Takeaway:** Spesifikasi adalah kontrak sosial. *Forbidden Extensions* memastikan kontrak tersebut tidak dilanggar secara sepihak oleh vendor browser.
