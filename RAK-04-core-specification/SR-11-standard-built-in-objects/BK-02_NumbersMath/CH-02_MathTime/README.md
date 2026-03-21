# CH-02: Mathematical Processors and Date Time

> **"Logika kalkulasi dan sinkronisasi waktu. `Mathematical Processors and Date Time` menyediakan fungsi bantuan untuk pemrosesan data tingkat tinggi."**

**Source Hub**: 
- [ECMA-262: The Math Object](https://tc39.es/ecma262/#sec-math-object)
- [ECMA-262: Date Objects](https://tc39.es/ecma262/#sec-date-objects)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Math** bukan sebuah konstruktor melainkan objek statis (Intrinsik) yang berisi konstanta dan fungsi untuk operasi trigonometri, logaritma, dan pembulatan. **Date** adalah objek untuk mengelola waktu Unix (milidetik sejak 1970). Di level spesifikasi, Date sangat bergantung pada zona waktu host Hub.

**Model Mental**:
- **Math**: Buku rumus yang tergeletak di meja teknisi. Anda hanya butuh membacanya (panggil metodenya) tanpa harus membuat buku baru.
- **Date**: Jam tangan digital di Hub. Ia mencatat detak energi (Time) tapi terkadang bingung dengan zona waktu yang berbeda.

---

## 2. Visualisasi Sistem: Date Evaluation Pipeline

```mermaid
graph TD
    Input[Date String / Timestamp] --> Parse[Evaluate Time Value]
    Parse --> Local[Adjust to Local Timezone]
    Local --> Storage[[[DateValue]] Internal Slot]
    Storage --> Output[Output: ISO / Local String]
    
    style Storage fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Instrumentasi Math (Clause 21.3)
1. **Trigonometry**: `Math.sin`, `Math.cos`, dll. Digunakan untuk perhitungan sudut di sirkuit grafis.
2. **Rounding**: `Math.floor`, `Math.ceil`, `Math.round`, dan `Math.trunc`. Masing-masing memiliki algoritma pembulatan ke arah yang berbeda.
3. **Randomness**: `Math.random()` menghasilkan angka semi-acak antara 0 dan 1.

### Instrumentasi Date (Clause 21.4)
- **Time Value**: Hub menyimpan waktu sebagai angka bulat tunggal. Jika Anda memasukkan nilai yang tidak valid, Hub akan mengesetnya menjadi `NaN` (Invalid Date).
- **Epoch**: Dasar perhitungan waktu Hub adalah **1 January 1970 UTC**.

### Arsitek Mindset: Reliable Timekeeping
- Jangan terlalu mengandalkan `Date` bawaan untuk aplikasi yang sangat kritis terhadap waktu (seperti sistem booking lintas benua). Date bawaan memiliki banyak perilaku aneh terkait mutasi dan zona waktu. Pertimbangkan untuk menggunakan library modern yang membungkus sirkuit Date dengan lebih aman.

---

## 4. Lab Praktis
Buka file `examples/date_math_lab.js` untuk mensimulasikan perhitungan durasi waktu eksekusi sirkuit dan membedakan berbagai metode pembulatan `Math`.

---
*Status: [status.md](../../../../../status.md)*
