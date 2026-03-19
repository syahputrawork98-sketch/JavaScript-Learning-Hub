# CH-02: Constructors (The Assembly Line)

> **"Blueprint saja tidak cukup; Anda harus tahu bagaimana cara merakit unit tersebut saat pertama kali keluar dari gudang. Constructor adalah 'Lini Perakitan' (Assembly Line) yang secara otomatis berjalan untuk memberikan identitas dan energi awal pada unit baru."**

Metode `constructor` adalah metode khusus untuk membuat dan menginisialisasi objek yang dibuat dengan sebuah class.

## 1. Mental Model: "The Assembly Line"

Bayangkan sebuah robot di pabrik. Begitu blueprint `Transformer` dipilih dan tombol `new` ditekan, robot perakit (`constructor`) langsung bekerja:
1.  Memasang label nama (`this.name`).
2.  Mengisi daya awal (`this.power`).
3.  Memastikan semua kabel terhubung sebelum unit dilepaskan ke Grid.

---

## 2. Inisialisasi Properti

Di dalam constructor, kita menggunakan kata kunci `this` untuk merujuk pada unit spesifik yang sedang dibangun.

```javascript
class Transformer {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.status = "OFFLINE"; // Status default awal
    }
}

const unitX = new Transformer("TX-99", 5000);
```

---

## 3. Aturan Penting

- Sebuah class hanya boleh memiliki **satu** metode `constructor`.
- Jika Anda tidak menulis `constructor`, JavaScript akan memberikan yang kosong secara otomatis.
- Di dalam inheritance (pewarisan), `this` tidak bisa digunakan sebelum Anda memanggil `super()`.

---

## Arsitek Mindset: Validasi Rakitan

Sebagai arsitek Hub:
- Gunakan constructor untuk memvalidasi input sebelum unit benar-benar dibuat (misal: pastikan kapasitas tidak negatif).
- Jangan meletakkan logika pemrosesan berat di dalam constructor. Constructor seharusnya hanya untuk perakitan awal yang ringan.

---

## Hands-on: Lab Lini Perakitan
Buka file `examples/assembly_line_lab.js` untuk mensimulasikan perakitan modul energi dengan berbagai spesifikasi input yang berbeda.

---
*Status: [status.md](../../../status.md)*
