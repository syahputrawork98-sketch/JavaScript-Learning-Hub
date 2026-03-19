# CH-03: Classes in JS (The Modern Design Suite)

> **"Teknologi berkembang. Arsitek kini beralih dari sketsa manual ke perangkat lunak desain modern yang lebih teratur, terstruktur, dan mudah dikelola."**

Meskipun Prototipe dan Konstruktor yang kita pelajari sebelumnya bekerja dengan baik, JavaScript modern (ES6+) memberikan cara penulisan yang jauh lebih bersih dan intuitif melalui kata kunci **`class`**. Mari kita beralih ke **Modern Design Suite**.

## 1. Mental Model: "Modern Design Suite"

Bayangkan Anda menggunakan perangkat lunak desain arsitektur terbaru:
- **`class`**: Folder proyek yang berisi seluruh desain perangkat.
- **`constructor`**: Ruang perakitan utama (sama seperti fungsi konstruktor lama).
- **Methods**: Fitur-fitur yang sudah terintegrasi langsung di dalam folder proyek tersebut.
- **`extends`**: Membuat variasi desain baru berdasarkan desain dasar yang sudah ada (Sub-Blueprint).

## 2. Sintaks Dasar Class

Semua instruksi kini berada di dalam satu blok `{}` yang rapi.

```javascript
class Reactor {
    constructor(id, fuel) {
        this.id = id;
        this.fuel = fuel;
    }

    // Metode otomatis masuk ke Prototype
    getPower() {
        return `Daya Sektor ${this.id}: ${this.fuel * 10}kW`;
    }
}
```

## 3. Pewarisan Modern: `extends` & `super`

Kita bisa membuat "Spesialisasi" perangkat dengan sangat mudah.

```javascript
class FusionReactor extends Reactor {
    constructor(id, fuel, heatLevel) {
        super(id, fuel); // Memanggil "Ruang Perakitan Utama" dari induknya
        this.heatLevel = heatLevel;
    }

    getNuclearStatus() {
        return `Status Panas Fusion: ${this.heatLevel} C`;
    }
}
```

## 4. Keuntungan Class

1. **Readability**: Jauh lebih mudah dibaca daripada menghubungkan prototipe secara manual.
2. **Encapsulation**: Semua logika terkait satu objek berkumpul di satu tempat.
3. **Inheritance**: Alur pewarisan menggunakan `extends` jauh lebih jelas.

---

## Arsitek Mindset: Evolusi Desain

Meski `class` terlihat berbeda, di "bawah kap mesin", JavaScript tetap menggunakan sistem Prototipe yang kita pelajari di bab sebelumnya. `class` hanyalah cara penulisan yang lebih manis (*Syntactic Sugar*). Sebagai arsitek modern, gunakanlah `class` untuk membangun sistem yang kompleks agar kode Anda tetap profesional dan mudah dipelihara oleh tim lain.

---

## Hands-on: Reaktor Generasi Terbaru
Buka file `examples/modern_reactor.js` untuk melihat bagaimana kita membangun hierarki reaktor energi menggunakan sintaks `class` yang modern.

---
*Status: [status.md](../../../../status.md)*
