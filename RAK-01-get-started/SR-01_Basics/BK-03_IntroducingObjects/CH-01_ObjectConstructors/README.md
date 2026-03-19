# CH-01: Object Constructors (The Device Blueprint)

> **"Daripada merakit setiap perangkat energi dari nol, seorang arsitek membuat satu Cetak Biru (Blueprint) yang bisa digunakan untuk memproduksi ribuan unit serupa dengan cepat."**

Sampai saat ini, kita membuat objek secara manual (Object Literal). Namun, jika Hub memiliki 100 Sektor, membuat 100 objek manual akan sangat melelahkan. Di sinilah **Object Constructor** (Konstruktor Objek) berperan.

## 1. Mental Model: "Cetak Biru Perangkat" (Blueprint)

- **Constructor Function**: Adalah lembar instruksi atau "Cetak Biru". Ia mendefinisikan standar properti (daya, id, status) dan perilaku (metode) yang harus dimiliki setiap unit.
- **`new` Keyword**: Adalah tombol "PRODUKSI". Saat Anda menekan tombol ini, satu unit fisik (objek) baru akan tercipta berdasarkan cetak biru tersebut.
- **`this`**: Merujuk pada unit fisik spesifik yang sedang dirakit saat itu.

---

## 2. Membuat Cetak Biru (Constructor)

Secara konvensi, fungsi konstruktor ditulis dengan huruf kapital di awal namanya.

```javascript
function EnergySector(id, capacity) {
    this.sectorId = id;
    this.maxCapacity = capacity;
    this.status = "OFFLINE";
    
    this.activate = function() {
        this.status = "ONLINE";
        console.log(`Sektor ${this.sectorId} telah aktif.`);
    };
}
```

---

## 3. Produksi Unit (`new`)

Kita menggunakan kata kunci `new` untuk menciptakan "instance" (unit nyata) dari cetak biru tersebut.

```javascript
const sectorAlpha = new EnergySector("S-01", 1000);
const sectorBeta = new EnergySector("S-02", 500);

sectorAlpha.activate(); // "Sektor S-01 telah aktif."
```

---

## Arsitek Mindset: Skalabilitas Sistem

Sebagai arsitek, berpikirlah secara modular. Gunakan konstruktor untuk menstandarisasi komponen-komponen besar dalam Hub Anda. Jika di masa depan Anda ingin menambahkan fitur baru (misal: `maintenanceDate`), Anda cukup menambahkannya di satu tempat (pada Cetak Biru), dan semua unit yang diproduksi setelahnya akan memiliki fitur tersebut.

---

## Hands-on: Produksi Massal Sektor
Buka file `examples/blueprint_demo.js` untuk melihat bagaimana kita membangun infrastruktur Sektor secara massal hanya dengan satu cetak biru.

---
*Status: [status.md](../../../../status.md)*
