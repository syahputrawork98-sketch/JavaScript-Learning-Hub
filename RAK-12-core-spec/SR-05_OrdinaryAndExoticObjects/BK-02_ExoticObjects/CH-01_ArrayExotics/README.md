# CH-01: Array Exotics (The Length Piston)

> **"Beberapa unit di Hub memiliki sistem hidrolik otomatis. `ArrayExoticObject` adalah 'Unit Piston Panjang' (The Length Piston) — mesin yang secara otomatis menyesuaikan kapasitas penyimpanannya setiap kali sebuah komponen baru ditambahkan ke indeks numerik."**

*Pemetaan ECMA-262: Clause 10.4.2 (Array Exotic Objects)*

## 1. Mental Model: "The Length Piston"

Fisika dasar di JavaScript mengatakan bahwa mengubah properti tidak boleh mempengaruhi properti lainnya. Namun, **Array** melanggar aturan ini.
- Bayangkan sebuah pipa elastis dengan piston di ujungnya bernama `length`.
- Jika Anda memasukkan data ke indeks `100`, piston `length` akan otomatis terdorong ke posisi `101`.
- Jika Anda menarik piston `length` kembali ke posisi `5`, semua data di indeks `5` ke atas akan dibuang secara paksa dari pipa.

---

## 2. Kenapa Ini 'Eksotis'?

Array disebut eksotis karena ia memodifikasi metode internal **`[[DefineOwnProperty]]`**.
Saat Anda menulis `arr[10] = "A"`, secara internal Hub menjalankan logika:
1.  Jika nama properti adalah angka (Index).
2.  Jika index >= `length`.
3.  Ubah nilai `length` menjadi `index + 1`.
4.  Lakukan penyimpanan data standar.

---

## 3. Praktik Lapangan (Lab)

```javascript
const energyGrid = ["ALPHA", "BETA"];
console.log(energyGrid.length); // 2

energyGrid[10] = "OMEGA"; // Mendorong piston secara drastis
console.log(energyGrid.length); // 11

energyGrid.length = 1; // Menarik piston kembali (Destructive!)
console.log(energyGrid[10]); // undefined (Data terbuang)
```

---

## Arsitek Mindset: Performa Piston

Sebagai arsitek Hub:
- Jangan mendorong piston `length` terlalu jauh (misal: `arr[1000000] = 1`). Hub akan mencoba menciptakan array "Sparse" (berlubang) yang mungkin memakan memori lebih besar atau memperlambat optimasi mesin.
- Gunakan `length = 0` sebagai cara tercepat untuk mengosongkan seluruh pipa energi dalam satu instruksi tunggal.

---
*Status: [status.md](../../../docs/status.md)*
