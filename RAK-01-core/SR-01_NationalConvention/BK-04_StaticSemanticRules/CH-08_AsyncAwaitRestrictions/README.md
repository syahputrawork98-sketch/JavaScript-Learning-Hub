# CH-08: Async/Await Restrictions

Keyword `async` dan `await` terlihat sederhana, namun di balik layar, spesifikasi harus melakukan "Senam Logika" statis untuk memastikan mereka tidak disalahgunakan.

## Mental Model: "Izin Paspor Asinkronus"
Bayangkan `await` adalah sebuah visa khusus. Anda hanya boleh menggunakan visa ini jika paspor Anda (Fungsi induk) sudah dicap sebagai `async`.
- Jika Anda mencoba menggunakan `await` tanpa cap `async`, petugas imigrasi (Static Semantics) akan menolak Anda di gerbang keberangkatan.

---

## 1. Konteks [Await] pada Grammar
Spesifikasi menggunakan parameter grammar `[Await]` (yang kita pelajari di BK-02) untuk membawa status asinkronus dari atas ke bawah.
- Jika sebuah fungsi dideklarasikan dengan `async`, maka seluruh isi di dalamnya akan memiliki flag `[Await]` aktif.
- Di dalam wilayah berflag `[Await]`, keyword `await` dianggap sebagai token valid. Jika tidak, `await` dianggap sebagai identifier biasa (atau dilarang di modul).

## 2. Reservasi Keyword di Modul
Di dalam ECMAScript Module (ESM), keyword `await` adalah **Reserved Word** di level top-level.
- Inilah mengapa *Top-level Await* bisa bekerja: Spesifikasi memberikan izin khusus di level ModuleBody, namun tetap melarangnya di dalam fungsi reguler.

## 3. Early Error: Async in Accessors
Salah satu aturan statis yang sering dilupakan: Anda dilarang keras membuat **Getter** atau **Setter** yang asinkron.
```javascript
let obj = {
  async get data() { ... } // EARLY ERROR: SyntaxError
};
```
Mengapa? Karena secara arsitektur, akses properti haruslah instan (atau mengembalikan nilai langsung). Menjadikannya asinkron akan merusak ekspektasi dasar tentang bagaimana objek bekerja.

---

## Mengapa Arsitek Harus Tahu Ini?
Memahami batasan statis ini akan menghindarkan Anda dari mencoba pola-pola "ajaib" yang dilarang bahasa. Anda akan mengerti bahwa `await` bukan sekadar fungsi, tapi pengubah perilaku parser yang harus dikunci di scope tertentu.

---

## Tantangan Kecil
Dapatkah kita memiliki fungsi asinkron di dalam constructor class?
(Jawabannya: **Tidak secara langsung**. Constructor tidak bisa diawali kata `async`. Jika Anda butuh inisialisasi asinkron, arsitektur yang benar adalah menggunakan *Static Factory Method*).

---
> [!IMPORTANT]
> **Key Takeaway:** `await` adalah fitur yang "Context-sensitive". Status validitasnya ditentukan sepenuhnya oleh posisi leksikalnya terhadap keyword `async` terdekat.
