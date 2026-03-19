# CH-01: The Global Stage (The Primary Terminal)

> **"Saat Hub dinyalakan, unit pertama yang aktif adalah 'Panggung Global' (The Global Stage). Ini adalah terminal utama yang menyediakan semua alat dasar (Intrinsics) dan ruang lingkup awal bagi seluruh sistem untuk mulai beroperasi."**

*Pemetaan ECMA-262: Clause 8.1.1.4 (Global Environment Records)*

## 1. Mental Model: "The Global Stage"

Bayangkan sebuah layar raksasa di pusat kendali Hub.
- **Global Object**: Meja kerja utama yang berisi semua tombol standar (seperti `Object`, `Array`, `parseInt`).
- **Global Scope**: Ruang udara di sekitar meja kerja di mana variabel yang Anda deklarasikan di tingkat paling atas akan melayang dan bisa diakses oleh siapa saja di Grid.

---

## 2. Struktur Panggung (Execution Context)

Sebelum baris kode pertama dijalankan, Hub melakukan:
1.  **Creation Phase**: Membuat *Global Execution Context*.
2.  **Environment Setup**: Menyiapkan *Global Object* (window di Browser, global di Node.js).
3.  **This Binding**: Menetapkan kata kunci `this` ke Global Object tersebut.

---

## 3. Praktik Lapangan (Lab)

```javascript
/* Berada di Panggung Global */
var hubName = "TERMINAL_ONE"; // Menempel di Global Object (var)
let version = "2.0";          // Berada di Global Scope (tapi tidak menempel di Object)

console.log(this.hubName); // "TERMINAL_ONE"
console.log(this.version); // undefined
```

---

## Arsitek Mindset: Membersihkan Panggung

Sebagai arsitek Hub:
- Hindari mengotori Panggung Global dengan terlalu banyak variabel. Gunakan **Modul** agar setiap unit memiliki "Ruang Terisolasi"-nya sendiri.
- Sadarilah bahwa variabel `var` di tingkat global akan menjadi properti dari Global Object, yang bisa diakses (dan dirusak) secara tidak sengaja oleh skrip lain di Grid.

---
*Status: [status.md](../../../docs/status.md)*
