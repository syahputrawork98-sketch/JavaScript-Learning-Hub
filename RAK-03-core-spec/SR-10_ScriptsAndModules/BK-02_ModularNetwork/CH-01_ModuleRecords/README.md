# CH-01: Module Records (The Structural Blueprints)

> **"Berbeda dengan script yang langsung dieksekusi, modul membutuhkan fase persiapan. `Module Records` adalah 'Denah Jaringan' (Structural Blueprints)—deskripsi statis yang memetakan dependensi, ekspor, dan impor sebelum arus energi (kode) dialirkan."**

*Pemetaan ECMA-262: Clause 16.2.1*

## 1. Mental Model: "The Network Map"

Saat Hub menemukan Modul, ia tidak langsung menyalakannya. Ia membuat **Module Record**:
1.  **Static Analysis**: Hub memindai seluruh file untuk mencari kata kunci `import` dan `export`.
2.  **Dependency Graph**: Hub membangun peta yang menghubungkan modul satu sama lain. Jika ada kabel yang putus (Import yang salah nama), Hub akan memutus arus SEBELUM baris kode pertama dieksekusi.

---

## 2. Stateless & Singleton

Setiap Modul di dalam Hub adalah **Singleton**. Jika 10 sirkuit berbeda mengimpor modul yang sama, Hub hanya akan memuat dan mengeksekusi modul tersebut SATU KALI. Semua sirkuit akan berbagi "Paket Energi" yang sama dari modul tersebut.

---

## 3. Praktik Lapangan (Lab)

```javascript
// config.js
export const voltage = 220;
console.log("Module Config Initialized!"); // Hanya akan muncul 1x di log

// app.js
import { voltage } from './config.js';
import { voltage as v2 } from './config.js'; // Mengambil dari instance yang sama
```

---

## Arsitek Mindset: Keuntungan Statis

Sebagai arsitek Hub:
- Manfaatkan sifat statis ESM untuk **Tree Shaking**. Hub bisa mendeteksi bagian modul mana yang tidak pernah digunakan oleh sirkuit lain dan membuangnya dari transmisi akhir untuk menghemat daya (Bundle Size).
- Pahami bahwa karena analisisnya statis, Anda tidak bisa menempatkan `import` di dalam blok `if` atau `function` (Gunakan Buku 3 untuk solusi dinamis).

---
*Status: [status.md](../../../docs/status.md)*
