# CH-02: Prototypal Inheritance (The Master Blueprint)

> **"Daripada memberikan setiap perangkat satu buku manual tebal yang sama, berikan mereka satu perpustakaan pusat yang bisa dikunjungi untuk membaca instruksi yang mereka butuhkan."**

Dalam bab sebelumnya, kita menaruh fungsi `reportStatus` di dalam konstruktor. Ini berarti jika kita punya 1.000 sektor, kita punya 1.000 salinan fungsi yang sama di memori. Ini sangat tidak efisien. Solusinya adalah **Prototypal Inheritance**.

## 1. Mental Model: "Manual Pusat" (Prototype)

Bayangkan sebuah Hub dengan ribuan perangkat:
- **Instance Properties**: Data unik milik perangkat tersebut (seperti Serial Number atau Sisa Daya). Ditaruh di dalam konstruktor (`this.id`).
- **Prototype (Shared Instructions)**: Manual pusat yang berisi cara kerja perangkat (seperti cara aktivasi atau cara lapor status). Ditaruh di `Constructor.prototype`.

## 2. Menggunakan `.prototype`

Alih-alih menaruh metode di dalam konstruktor, kita menaruhnya di properti `prototype` dari fungsi konstruktor tersebut.

```javascript
function Sector(id) {
    this.id = id; // Unik untuk tiap instansi
}

// Berbagi instruksi yang sama untuk semua Sektor
Sector.prototype.reboot = function() {
    console.log(`Sektor ${this.id} sedang melakukan reboot sistem...`);
};
```

## 3. Rantai Sinyal (Prototype Chain)

Saat Anda memanggil `sectorAlpha.reboot()`, JavaScript melakukan pencarian bertahap:
1. Apakah `sectorAlpha` punya `reboot` sendiri? (Tidak).
2. Lihat ke "Garis Keturunan" (Prototype). Apakah `Sector.prototype` punya `reboot`? (Ya! Jalankan itu).
3. Jika masih tidak ada, cari terus sampai ke `Object.prototype`. Jika sampai ujung tidak ketemu, barulah keluar pesan error.

## 4. Keuntungan Memori

Metode pada prototipe hanya ada **satu salinan** di memori, namun bisa digunakan oleh ribuan objek. Ini sangat krusial dalam membangun aplikasi besar agar penggunaan energi (RAM) tetap rendah.

---

## Arsitek Mindset: Optimalisasi Sumber Daya

Sebagai arsitek, selalu tanyakan: "Apakah informasi ini unik atau umum?". Jika informasi tersebut adalah metode yang fungsinya sama untuk semua unit, jangan taruh di dalam `this` pada konstruktor. Gunakan prototipe untuk menjaga efisiensi infrastruktur Hub Anda.

---

## Hands-on: Pelacakan Rantai Warisan
Buka file `examples/inheritance_chain_demo.js` untuk melihat bagaimana objek-objek sektor yang berbeda berbagi satu manual instruksi yang sama di perpustakaan pusat.

---
*Status: [status.md](../../../../status.md)*
