# CH-09: Complex Systems (Objects & Arrays Intro)

> **"Sistem yang kompleks membutuhkan wadah yang lebih canggih daripada sekadar baterai tunggal."**

Hingga saat ini, kita hanya menyimpan satu nilai energi dalam satu variabel. Namun, sebuah Web Hub yang nyata memiliki banyak sensor, banyak sektor, dan banyak rincian status. Untuk mengelola ini, kita menggunakan **Object** dan **Array**.

## 1. Mental Model: "Perangkat & Rak"

### A. Object: "Perangkat Multi-Komponen"
Ibarat sebuah stasiun Hub yang memiliki banyak spesifikasi (nama, lokasi, kapasitas). Semuanya terbungkus dalam satu unit fisik.
- **Key**: Nama komponen (misal: `capacity`).
- **Value**: Nilai komponen (misal: `5000`).

### B. Array: "Rak Baterai"
Ibarat rak panjang yang berisi banyak baterai dengan jenis yang sama. Kita mengaksesnya berdasarkan urutan atau nomor slotnya.
- **Index**: Nomor slot (dimulai dari `0`).
- **Element**: Isi di dalam slot tersebut.

---

## 2. Struktur Objek (The Object)

Objek menggunakan kurung kurawal `{}` untuk memetakan label ke nilai:

```javascript
const mainHub = {
    name: "Central Energy Station",
    capacity: 5000,
    isActive: true
};

console.log(mainHub.name); // Dot notation (Akses komponen)
```

---

## 3. Struktur Daftar (The Array)

Array menggunakan kurung siku `[]` untuk menyimpan daftar data:

```javascript
const sectors = ["Industrial", "Residential", "Hospital"];

console.log(sectors[0]); // Mengakses slot pertama (Industrial)
```

---

## Arsitek Mindset: Membangun Blueprint

Sebagai arsitek, Object dan Array adalah fondasi dari **Struktur Data**. Dengan menggabungkan keduanya (misalnya: Array yang berisi banyak Object), Anda bisa merepresentasikan seluruh infrastruktur kota digital Anda dalam satu struktur kode yang terorganisir.

---

## Hands-on: Stasiun Hub Kompleks
Buka file `examples/complex_systems_demo.js` untuk melihat bagaimana kita menggabungkan objek dan array untuk merepresentasikan stasiun hub yang lengkap.

---
*Status: [status.md](../../../../status.md)*
