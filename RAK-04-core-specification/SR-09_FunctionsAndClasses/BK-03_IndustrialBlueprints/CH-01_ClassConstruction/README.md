# CH-01: Class Construction (Hub Blueprints)

> **"Untuk membangun infrastruktur Hub yang masif dan terstandarisasi, kita membutuhkan cetak biru yang kaku namun modular. `Classes` adalah 'Cetak Biru Industri' (Hub Blueprints)—sistem perakitan objek yang elegan di atas fondasi prototipe."**

*Pemetaan ECMA-262: Clause 15.7*

## 1. Mental Model: "The Blueprint"

Kelas di JavaScript bertindak sebagai instruksi perakitan:
- **`constructor`**: Ruang instalasi awal. Sinyal yang masuk ke sini akan menetapkan status awal unit (Properti).
- **Prototypal Foundation**: Di balik layar, Hub tidak menciptakan tipe data baru, melainkan menggunakan sistem **Prototype** yang sudah kita pelajari di SR-05 namun dengan sintaks yang lebih manusiawi.

---

## 2. Public vs Private Slots

Standar Hub modern (ES2022+) mengizinkan pemasangan **Private Fields** (`#field`). Ini adalah slot energi yang terkunci rapat di dalam blueprint dan tidak bisa diakses oleh teknisi luar, bahkan dengan paksaan.

---

## 3. Praktik Lapangan (Lab)

```javascript
class PowerStation {
    #serialNumber = "SN-999"; // Private Slot
    
    constructor(name) {
        this.name = name; // Public Slot
    }
    
    boot() {
        console.log(`Booting ${this.name}... Serial: ${this.#serialNumber}`);
    }
}

const myStation = new PowerStation("Alpha-1");
myStation.boot();
// console.log(myStation.#serialNumber); // ERROR: Private access denied!
```

---

## Arsitek Mindset: Kelas vs Objek Literal

Sebagai arsitek Hub:
- Gunakan **Classes** saat Anda butuh menciptakan banyak unit dengan perilaku (Metode) yang sama. Ini jauh lebih hemat memori karena metode hanya disimpan satu kali di prototipe.
- Gunakan **Object Literals** jika Anda hanya butuh satu unit unik (*Singular Unit*) tanpa perlu proses perakitan berulang.

---
*Status: [status.md](../../../docs/status.md)*
