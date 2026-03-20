# CH-03: Closures (Energy Persistent Memory)

> **"Closure adalah paket energi mandiri yang membungkus fungsi beserta lingkungannya. Ia memungkinkan sebuah fungsi untuk 'mengingat' variabel dari ruangan tempat ia dilahirkan, meskipun ruangan itu sudah ditutup."**

Closure sering dianggap sebagai topik paling menakutkan di JavaScript, padahal Anda mungkin sudah menggunakannya tanpa sadar.

## 1. Mental Model: "The Persistent Battery Pack"

Bayangkan Anda mengisi baterai di **Ruang Mesin**, lalu Anda membawa baterai itu keluar ke **Grid Utama**. Meskipun Anda sudah tidak berada di Ruang Mesin, baterai itu tetap membawa energi yang ia peroleh dari sana.

- **Fungsi Luar**: Ruang pengisian daya.
- **Fungsi Dalam**: Baterai yang dibawa keluar.
- **Closure**: Kabel gaib yang tetap menghubungkan baterai ke tangki energi di Ruang Mesin.

![Closure Battery](./assets/closure_battery.svg)

---

## 2. Bagaimana Closure Terbentuk?

Closure terbentuk secara otomatis saat Anda mendefinisikan sebuah fungsi di dalam fungsi lain, dan fungsi dalam tersebut mengakses variabel dari fungsi luar.

```javascript
function createPowerVault() {
    let energyStored = 0; // Variabel "terjebak"
    
    return function(amount) {
        energyStored += amount;
        return `Vault Level: ${energyStored}MW`;
    };
}

const myVault = createPowerVault(); 
// createPowerVault() sudah selesai dijalankan, 
// tapi 'myVault' MASIH bisa mengakses 'energyStored'.

console.log(myVault(100)); // Output: Vault Level: 100MW
console.log(myVault(50));  // Output: Vault Level: 150MW
```

---

## 3. Kegunaan Utama: Privasi Data

Dalam Hub Energi kita, kita tidak ingin sembarang orang bisa mengubah `energyStored` secara langsung (misal: `energyStored = -500`). Dengan Closure, `energyStored` menjadi **Private**. Satu-satunya cara mengubahnya adalah melalui fungsi yang kita kembalikan.

---

## Arsitek Mindset: Manajemen Memori

Closure adalah alat yang sangat kuat, tapi waspadalah terhadap **Memory Leaks**. Karena fungsi dalam terus memegang referensi ke variabel di luar, variabel tersebut tidak akan dihapus oleh sistem pembersihan otomatis (Garbage Collector). Gunakan Closure dengan bijak untuk enkapsulasi data, bukan sebagai gudang penyimpanan barang yang tidak perlu.

---

## Hands-on: Brankas Energi Terkunci
Buka file `examples/closure_lab.js` untuk melihat bagaimana kita membuat sistem ID unik yang tidak bisa dimanipulasi dari luar menggunakan kekuatan Closure.

---
*Status: [status.md](../../../status.md)*
