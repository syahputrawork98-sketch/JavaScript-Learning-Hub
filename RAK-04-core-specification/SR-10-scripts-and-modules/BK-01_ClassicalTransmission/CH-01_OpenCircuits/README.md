# CH-01: Open Circuits (Global Execution)

> **"Dalam mode transmisi klasik, energi dialirkan langsung ke Grid tanpa isolasi kabel yang kuat. `Scripts` adalah 'Sirkuit Terbuka' (Open Circuits)—unit eksekusi di mana semua komponen berbagi satu jalur utama (Global Scope)."**

*Pemetaan ECMA-262: Clause 16.1*

## 1. Mental Model: "The Open Grid"

Bayangkan sebuah ruangan besar di mana semua orang berteriak di satu frekuensi yang sama. Jika dua orang memberikan instruksi berbeda untuk kabel yang sama (`var x`), malfungsi akan terjadi karena mereka saling menimpa.
- **Global Object Binding**: Setiap variabel yang dideklarasikan dengan `var` (dan fungsi standar) secara otomatis menempel pada Global Object Hub (seperti `window` di browser).
- **Hoisting Everywhere**: Seluruh isi sirkuit ditarik ke puncak sebelum Grid dinyalakan, sering menyebabkan kebingungan urutan energi.

---

## 2. Risiko Malfungsi

Karena sirkuitnya terbuka:
1.  **Tabrakan Sinyal**: Dua script berbeda bisa memiliki nama variabel yang sama dan saling merusak.
2.  **Keamanan Rendah**: Kode apa pun bisa mengakses dan memodifikasi status internal dari script lain yang berada dalam satu Grid.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Script A
var voltage = 220;

// Script B (berada di file berbeda tapi satu halaman)
var voltage = 110; 

console.log(window.voltage); // 110 (Terjadi tabrakan sinyal!)
```

---

## Arsitek Mindset: Batasi Sirkuit Terbuka

Sebagai arsitek Hub:
- Gunakan Scripts hanya untuk tugas-tugas sangat sederhana yang tidak memiliki dependensi kompleks.
- Selalu gunakan IIFE (*Immediately Invoked Function Expression*) jika Anda terpaksa menggunakan Scripts untuk membungkus energi agar tidak bocor ke Global Grid.
- Secara bertahap, alihkan semua transmisi ke **ES Modules** untuk keamanan dan skalabilitas Hub yang lebih baik.

---
*Status: [status.md](../../../docs/status.md)*
