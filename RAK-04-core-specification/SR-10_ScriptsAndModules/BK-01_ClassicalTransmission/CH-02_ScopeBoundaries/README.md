# CH-02: Scope Boundaries (Script Isolation)

> **"Meskipun berada dalam Grid terbuka, Hub memiliki protokol untuk menciptakan batas-batas sementara. `Scope Boundaries` adalah 'Isolasi Sinyal'—usaha teknisi untuk mengurung energi agar tidak mencemari jalur global."**

*Pemetaan ECMA-262: Clause 16.1.1*

## 1. Mental Model: "The Temporary Seal"

Sebelum adanya Modul resmi, teknisi menggunakan trik arsitektur untuk menciptakan batas:
- **IIFE (Immediately Invoked Function Expression)**: Menciptakan "Brankas Sekali Pakai" menggunakan fungsi. Energi di dalamnya tidak bisa keluar, tapi bisa mengakses sinyal global.
- **Block Scoping**: Menggunakan `let` dan `const` di dalam blok `{ ... }` untuk membatasi rentang kabel, meskipun script-nya tetap berada di jalur global.

---

## 2. Script vs Module Scope

Di dalam **Script**, `this` pada level teratas merujuk ke Global Object. Di dalam **Module**, `this` pada level teratas adalah `undefined`. Ini adalah "Segel Keamanan" pertama yang membedakan keduanya.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Teknik IIFE untuk Isolasi
(function() {
    var secretPower = "INTERNAL_ONLY";
    console.log("Sinyal terkurung di brankas.");
})();

// console.log(secretPower); // ERROR: Sinyal tidak bocor.
```

---

## Arsitek Mindset: Disiplin Batas

Sebagai arsitek Hub:
- Jangan pernah mengandalkan variabel global untuk bertukar data antar-sirkuit. Gunakan objek konfigurasi yang dikelola atau, lebih baik lagi, gunakan sistem **Exports/Imports** dari Buku 3.
- Mengurung energi bukan hanya soal keamanan, tapi juga soal memori. Sinyal yang terkurung dalam scope pendek akan lebih cepat dibersihkan oleh sistem Garbage Collection Hub (Unit Pembersihan Energi).

---
*Status: [status.md](../../../docs/status.md)*
