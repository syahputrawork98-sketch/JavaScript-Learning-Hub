# CH-15: ClassFieldDefinition Record

Saat Anda mendefinisikan field di Class, mesin tidak langsung membuatnya di memori. Ia menyimpan "Resep" penciptaannya terlebih dahulu dalam **ClassFieldDefinition** (Clause 6.2.11).

## Mental Model: "Resep Masakan"
Bayangkan Class Anda adalah sebuah buku resep.
- **ClassFieldDefinition:** Adalah satu baris instruksi: *"Saat menyajikan piring (Instansiasi), tambahkan satu sendok gula (Nilai 'default' Field)."*
- **Instansiasi:** Adalah proses memasaknya.

---

## 1. Struktur ClassFieldDefinition
Record ini menyimpan:
- **[[Name]]**: Nama field-nya.
- **[[Initializer]]**: Sebuah Abstract Closure (CH-11) yang berisi instruksi bagaimana menghitung nilai awal field tersebut.

## 2. Kenapa Butuh Initializer?
Karena nilai awal field bisa dinamis.
```javascript
class X {
  time = Date.now();
}
```
Mesin butuh menyimpan "Cara menghitung Date.now()" di dalam `[[Initializer]]` agar setiap objek baru mendapatkan waktu yang unik saat diciptakan.

## 3. Eksekusi
Initializer dijalankan di dalam constructor (tepat setelah `super()` dipanggil). Inilah saat di mana ClassFieldDefinition diubah menjadi properti nyata pada objek `this`.

---

## Mengapa Arsitek Harus Tahu Ini?
Pengetahuan ini menjelaskan urutan eksekusi yang sering membingungkan di Class: apakah field dibuat duluan atau constructor duluan? Jawabannya: Field disimpan sebagai **Definition**, tapi baru di-"masak" menjadi nilai nyata di dalam alur Constructor.

---

## Tantangan Kecil
Apa yang terjadi jika [[Initializer]] melempar error?
(Jawabannya: Proses instansiasi (`new Class()`) akan gagal dan melempar error tersebut, karena Initializer adalah bagian dari alur pembuatan objek).

---
> [!NOTE]
> **Key Takeaway:** ClassFieldDefinition adalah cetak biru untuk masa depan objek. Ia menjamin setiap instansi mendapatkan nilai awal yang segar.
