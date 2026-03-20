# CH-02: Iteration Units (The Energy Cycles)

> **"Beberapa tugas membutuhkan aliran energi yang berulang-ulang sampai target tercapai. `Iteration Units` adalah 'Siklus Energi' (The Energy Cycles)—modul perulangan yang memutar sirkuit eksekusi berkali-kali berdasarkan kondisi tertentu."**

*Pemetaan ECMA-262: Clause 14.7*

## 1. Mental Model: "The Energy Cycles"

Ada tiga jenis mesin siklus utama di Hub:
1.  **While Cycle (`while`, `do-while`)**: Terus berputar selama sinyal kontrol tetap aktif. Perbedaan `do-while` adalah ia menjamin setidaknya **satu putaran** sirkuit dikerjakan bahkan jika sinyal mati di awal.
2.  **For Cycle (`for`)**: Siklus presisi yang memiliki penghitung putaran, sensor penghenti, dan pengupdate status dalam satu panel kontrol.
3.  **Collection Cycle (`for-in`, `for-of`)**: Robot pembuai yang menelusuri setiap item dalam sebuah baki penyimpanan (Array atau Object) secara otomatis.

---

## 2. Iteration Protocols

Di balik layar, `for-of` menggunakan **Sinyal Iterasi** (Iteration Protocol). Ia meminta unit yang ditelusuri untuk memberikan item satu per satu sampai unit tersebut mengirimkan sinyal "SELESAI" (`done: true`).

---

## 3. Praktik Lapangan (Lab)

```javascript
// Siklus Presisi (For)
for (let i = 0; i < 3; i++) {
    console.log(`Pumping energy cycle ${i}`);
}

// Siklus Otomatis (For-Of)
const batteryPacks = ["A", "B", "C"];
for (const pack of batteryPacks) {
    console.log(`Activating pack ${pack}`);
}
```

---

## Arsitek Mindset: Pencegahan Loop Abadi

Sebagai arsitek Hub:
- **AWAS**: Pastikan sensor penghenti (kondisi loop) Anda tidak pernah terjebak dalam posisi `true` selamanya. Ini akan menyebabkan "Deadly Loop" yang membekukan seluruh Grid (Browser Hang).
- Gunakan `for-of` untuk koleksi data (Array/Set/Map) karena lebih aman dan bersih daripada `for-in` yang seringkali tidak sengaja menarik data sampah dari rantai prototipe unit tersebut.

---
*Status: [status.md](../../../docs/status.md)*
