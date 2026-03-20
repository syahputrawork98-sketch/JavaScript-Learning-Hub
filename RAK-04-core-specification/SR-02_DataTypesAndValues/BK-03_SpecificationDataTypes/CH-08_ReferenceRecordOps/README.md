# CH-08: Reference Record Operations

Di CH-07 kita mengenal "Amplop Alamat" (Reference). Sekarang kita akan membedah bagaimana spesifikasi menggunakan amplop tersebut untuk melakukan aksi nyata melalui algoritma di Clause 6.2.5.1 - 6.2.5.6.

---

## 1. GetBase ( V )
Mengambil isi dari field `[[Base]]` pada reference `V`. Ini memberitahu mesin di mana letak variabel/properti tersebut.

## 2. GetReferencedName ( V )
Mengambil nama (string/symbol) yang dicari.

## 3. GetValue ( V )
Inilah operasi paling krusial. Algoritma ini "Membuka Amplop" dan mengambil nilai aslinya.
- Jika `V` bukan Reference (tapi sudah nilai mentah), langsung kembalikan `V`.
- Jika `V` adalah *unresolvable*, lempar `ReferenceError`.
- Jika `V` adalah properti objek, panggil metode internal `[[Get]]`.

## 4. PutValue ( V, W )
Inilah algoritma di balik operator penugasan (`=`).
- Ia mengambil "Tempat" dari `V` dan mengisinya dengan nilai `W`.
- Jika `V` adalah *unresolvable* dan bukan strict mode, ia justru menciptakan variabel global baru (Inilah alasan mengapa variabel bisa jadi global secara tidak sengaja!).

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami `GetValue` dan `PutValue` membantu Anda mendesain sistem yang aman dari kebocoran variabel global. Anda juga memahami mengapa pesan error tertentu muncul (misal: "Assignment to constant variable" terjadi karena `PutValue` mendeteksi bahwa *base*-nya adalah binding yang tidak bisa diubah).

---

## Tantangan Kecil
Apa yang terjadi jika Anda memanggil `GetValue` pada sebuah Reference yang base-nya adalah `null`?
(Jawabannya: **TypeError**. Ini adalah dasar dari error yang sangat populer: "Cannot read property of null").

---
> [!IMPORTANT]
> **Key Takeaway:** `GetValue` untuk membaca, `PutValue` untuk menulis. Keduanya beroperasi pada Reference Record, bukan pada nilai langsung.
