# CH-03: Methods (Unit Capabilities)

> **"Sebuah unit energi tidak hanya memiliki komponen, ia harus bisa bertindak. Methods adalah 'Modul Kemampuan' (Operational Modules) yang menentukan apa saja yang bisa dilakukan oleh unit tersebut di dalam Grid."**

Metode adalah fungsi yang didefinisikan di dalam class untuk menentukan perilaku dari instansi class tersebut.

## 1. Mental Model: "Operational Modules"

Bayangkan unit generator Anda memiliki tombol-tombol operasi:
- Tombol `start()`: Menyalakan aliran.
- Tombol `checkOutput()`: Membaca sensor daya.
- Tombol `recharge()`: Mengisi ulang cadangan baterai.

Setiap unit yang dibuat dari blueprint yang sama akan memiliki modul kemampuan yang identik.

---

## 2. Sintaksis Metode

Dalam class, kita tidak menggunakan kata kunci `function` untuk mendefinisikan metode.

```javascript
class PowerCell {
    constructor(charge) {
        this.charge = charge;
    }

    // Metode: Kemampuan unit
    drain(amount) {
        this.charge -= amount;
        console.log(`Energi berkurang. Sisa: ${this.charge}%`);
    }
}
```

---

## 3. Prototypes di Balik Layar

Meskipun Anda mendefinisikan metode di dalam `class`, JavaScript meletakkannya di **Prototype** class tersebut. Ini sangat efisien karena ribuan unit bisa berbagi satu set kode metode yang sama, menghemat memori Hub secara signifikan.

---

## Arsitek Mindset: Batas Kemampuan

Sebagai arsitek Hub:
- Pastikan setiap metode memiliki satu tanggung jawab yang jelas (*Single Responsibility*).
- Metode harus berinteraksi dengan state internal unit (`this`) untuk mengubah atau melaporkan kondisinya.
- Hindari membuat metode yang terlalu panjang; pecah menjadi beberapa sub-metode jika logika pemrosesannya terlalu rumit.

---

## Hands-on: Lab Modul Kemampuan
Buka file `examples/unit_capabilities_lab.js` untuk mencoba berbagai modul kemampuan yang kita pasang pada unit energi pintar.

---
*Status: [status.md](../../../status.md)*
