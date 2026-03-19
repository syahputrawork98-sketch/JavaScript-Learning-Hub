# CH-02: Bound Function Exotics (The Wrapper)

> **"Beberapa unit fungsi perlu difiksasi konteksnya untuk misi tertentu. `BoundFunctionExoticObject` adalah 'Unit Pembungkus' (The Wrapper) — fungsi baru yang membungkus fungsi asli dengan kabel `this` dan parameter yang sudah terkunci."**

*Pemetaan ECMA-262: Clause 10.4.1 (Bound Function Exotic Objects)*

## 1. Mental Model: "The Wrapper"

Bayangkan sebuah pusat komando (Function) yang sangat fleksibel. Anda ingin membuat salinan pusat komando ini yang **hanya bisa diperintah oleh Sektor A**.
- `bind()` menciptakan unit eksotis baru.
- Unit ini menyimpan `[[BoundTargetFunction]]` (Fungsi asli) dan `[[BoundThis]]` (Konteks permanen).
- Saat dipanggil, unit eksotis ini secara otomatis menghubungkan sinyal ke fungsi asli melalui kabel `this` yang sudah Anda tentukan.

---

## 2. Kenapa Ini 'Eksotis'?

Metode internal **`[[Call]]`** dan **`[[Construct]]`** pada Bound Function dimodifikasi.
- Mereka tidak lagi membuat *Execution Context* standar bagi dirinya sendiri.
- Sebaliknya, mereka langsung mempersiapkan argumen dan `this`, lalu memanggil `[[Call]]` pada fungsi target aslinya.

---

## 3. Praktik Lapangan (Lab)

```javascript
function logPower() {
    console.log(`Daya di ${this.sector}: ${this.power}`);
}

const sectorA = { sector: "ALPHA", power: 100 };
const lockedLog = logPower.bind(sectorA);

lockedLog(); // "Daya di ALPHA: 100" (Konteks Terkunci)

// Mencoba mengganti konteks lagi tidak akan berhasil!
lockedLog.call({ sector: "BETA", power: 999 }); // Tetap ALPHA: 100
```

---

## Arsitek Mindset: Kekakuan Konteks

Sebagai arsitek Hub:
- Gunakan `bind()` saat Anda ingin mengirimkan fungsi callback ke unit lain tetapi ingin menjamin fungsi tersebut tetap memiliki akses ke data di unit asalnya.
- Sadarilah bahwa unit pembungkus ini sedikit lebih berat bagi Hub dibandingkan fungsi biasa karena adanya lapisan delegasi internal tambahan.

---
*Status: [status.md](../../../docs/status.md)*
