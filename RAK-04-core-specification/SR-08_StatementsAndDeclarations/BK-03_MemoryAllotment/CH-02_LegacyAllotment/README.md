# CH-02: Legacy Allotment (Open-Path Slots)

> **"Sebelum standarisasi Hub modern, alokasi memori dilakukan melalui jalur yang jauh lebih longgar. `var` adalah 'Slot Arus Terbuka' (Open-Path Slots)—mekanisme lama yang sering menyebabkan kebocoran energi antar-sirkuit."**

*Pemetaan ECMA-262: Clause 14.3.2*

## 1. Mental Model: "The Leaky Cable"

Tidak seperti `let`, `var` memiliki perilaku **Function-Scoped** (atau Global). Ia tidak peduli dengan batas brankas `{ ... }`. Jika Anda memasangnya di dalam blok `if` atau `for`, kabelnya akan tetap melintang keluar sampai ke batas fungsi terdekat.

---

## 2. Hoisting Tanpa TDZ

Pada unit `var`, Hub akan menarik deklarasi ke puncak fungsi secara otomatis dan memberinya nilai awal `undefined`. Ini berarti teknisi bisa mengakses kabel tersebut sebelum dipasang, tanpa terkena sengatan `ReferenceError` (hanya akan mendapatkan sinyal `undefined`).

---

## 3. Praktik Lapangan (Lab)

```javascript
function legacyTest() {
    console.log(oldSignal); // undefined (Hoisted!)
    
    if (true) {
        var oldSignal = "GHOST_SIGNAL";
    }
    
    console.log(oldSignal); // "GHOST_SIGNAL" (Bocor keluar dari IF!)
}
```

---

## Arsitek Mindset: Museum Teknologi

Sebagai arsitek Hub:
- **JANGAN GUNAKAN `var`** di proyek Hub baru. Gunakan hanya jika Anda sedang membedah atau memperbaiki sirkuit kuno (*Legacy Codebase*).
- Pahami bahwa `var` bisa menyebabkan bug yang sangat sulit dilacak karena variabel bisa berubah nilai dari tempat-tempat yang tidak Anda duga (Variable Re-declaration diizinkan tanpa peringatan).

---
*Status: [status.md](../../../docs/status.md)*
