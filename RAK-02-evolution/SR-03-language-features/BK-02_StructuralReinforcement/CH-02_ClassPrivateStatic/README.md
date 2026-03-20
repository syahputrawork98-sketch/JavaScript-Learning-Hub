# CH-02: Class Reinforcement (Private & Static Blocks)

> **"Tidak semua komponen di Hub boleh disentuh sembarang orang. Class Reinforcement adalah 'Lockdown Inti' (Core Lockdown) yang menyembunyikan mekanisme internal Hub di balik dinding baja yang tidak bisa ditembus oleh Grid luar."**

ES2022 menyempurnakan orientasi objek dengan fitur Private Class Fields, Private Methods, dan Static Initialization Blocks.

## 1. Mental Model: "Core Lockdown"

Bayangkan sebuah reaktor nuklir di dalam Hub.
- **Public**: Lampu-lampu panel yang bisa dilihat semua orang.
- **Private (`#`)**: Inti reaktor yang hanya bisa diakses oleh sistem internal reaktor tersebut. Tidak ada teknisi luar yang bisa menyentuh atau melihat langsung tanpa izin internal.
- **Static Blocks**: Sistem pengaturan awal reaktor yang berjalan otomatis tepat saat reaktor selesai dibangun, bahkan sebelum listrik mulai mengalir.

---

## 2. Fitur Keamanan Baru

### Private Fields (`#`)
Dandai dengan prefix `#`. Properti ini tidak bisa diakses dari luar kelas meskipun menggunakan objek instance.

```javascript
class Reactor {
    #coreTemperature = 5000; // Inti Tersembunyi
}
const r = new Reactor();
console.log(r.#coreTemperature); // ERROR: Syntax Error
```

### Static Initialization Blocks
Blok kode yang berjalan satu kali untuk mengatur data statis yang kompleks.

```javascript
class Hub {
    static sectors;
    static {
        // Logika inisialisasi statis yang kompleks
        this.sectors = ["ALPHA", "BETA"].map(s => s + "_UNIT");
    }
}
```

---

## 3. Method .at() (Bonus ES2022)

Membaca data dari Grid (Array/String) mulai dari belakang sekarang lebih mudah:
```javascript
const gridLogs = ["INIT", "ACTIVE", "ERROR"];
const lastLog = gridLogs.at(-1); // "ERROR" (Lebih bersih!)
```

---

## Arsitek Mindset: Enkapsulasi Total

Sebagai arsitek Hub:
- Selalu gunakan `#` untuk variabel internal yang jika diubah dari luar bisa menyebabkan ketidakstabilan sistem Hub.
- Manfaatkan **Static Blocks** jika Anda memiliki data konfigurasi kelas yang membutuhkan logika `try-catch` atau pengolahan array saat kelas didefinisikan.
- Gunakan `.at(-1)` untuk mendapatkan elemen terakhir array untuk meningkatkan keterbacaan kode teknisi Anda dibandingkan `length - 1`.

---

## Hands-on: Lab Lockdown Inti
Buka file `examples/core_lockdown_lab.js` untuk berlatih membangun reaktor yang aman dan menggunakan fitur `.at()` pada log sistem.

---
*Status: [status.md](../../../status.md)*
