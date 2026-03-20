# CH-02: Super (Parent Link)

> **"Saat Anda meng-upgrade model unit, terkadang Anda masih butuh bantuan dari sirkuit model lama. Kata kunci `super` adalah 'Kabel Induk' (Parent Link) yang menghubungkan unit baru Anda ke blueprint asalnya untuk sinkronisasi data dan kemampuan."**

Kata kunci `super` digunakan untuk memanggil fungsi-fungsi pada objek induk dari sebuah class.

## 1. Mental Model: "The Parent Link"

Bayangkan Anda membangun `TurboUnit` dari blueprint `BaseUnit`.
- Saat perakitan (`constructor`), Anda memanggil `super()`: "Tolong rakit unit ini menggunakan prosedur dasar `BaseUnit` dulu sebelum saya tambahkan komponen Turbo saya."
- Saat menjalankan metode, Anda menggunakan `super.method()`: "Jalankan protokol pengamanan dasar dari pusat, baru jalankan protokol keamanan tambahan saya."

---

## 2. Dua Penggunaan Utama

### A. Dalam Constructor
Wajib dipanggil di baris pertama jika anak memiliki constructor sendiri.

```javascript
class Child extends Parent {
    constructor(id, special) {
        super(id); // Memanggil constructor Parent
        this.special = special;
    }
}
```

### B. Dalam Method (Method Overriding)
Menggunakan kemampuan induk sambil menambahkannya.

```javascript
class Child extends Parent {
    operate() {
        super.operate(); // Jalankan dasar
        console.log("Operasi tambahan aktif.");
    }
}
```

---

## 3. Aturan `this`

Anda **tidak boleh** menyentuh kata kunci `this` sebelum memanggil `super()` di dalam constructor anak. Ini memastikan sirkuit dasar sudah terpasang stabil sebelum Anda memodifikasinya.

---

## Arsitek Mindset: Sinkronisasi Blueprint

Sebagai arsitek Hub:
- Gunakan `super` untuk menjaga agar unit anak tetap patuh pada standar dasar unit induk.
- `super` memungkinkan Anda memperluas fungsionalitas tanpa harus menyalin ulang seluruh logika unit induk (reusability).

---

## Hands-on: Lab Kabel Induk
Buka file `examples/parent_link_lab.js` untuk melihat bagaimana koordinasi terjadi antara unit prototipe dan unit upgrade melalui kabel `super`.

---
*Status: [status.md](../../../status.md)*
