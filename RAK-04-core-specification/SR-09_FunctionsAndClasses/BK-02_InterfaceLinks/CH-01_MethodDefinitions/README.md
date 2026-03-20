# CH-01: Method Definitions (Object Connectors)

> **"Sebuah unit mandiri (Object) membutuhkan jalur untuk melakukan aksi. `Method Definitions` adalah 'Konektor Objek' (Object Connectors)—fungsi yang terpasang langsung pada sirkuit objek untuk memanipulasi datanya."**

*Pemetaan ECMA-262: Clause 15.4*

## 1. Mental Model: "The Integrated Connector"

Metode adalah fungsi yang hidup di dalam konteks objek. Sejak standar Hub modern (ES6+), kita tidak lagi membutuhkan kata kunci `function` untuk memasang metode:
```javascript
const hub = {
    id: "H1",
    activate() { // Sintaks ringkas (Method Definition)
        console.log(`Activating ${this.id}`);
    }
};
```

---

## 2. Keunggulan Internal

Metode yang didefinisikan dengan sintaks ringkas memiliki akses ke kata kunci **`super`** (untuk menembus ke prototipe atas) dan secara otomatis memiliki label internal `[[HomeObject]]` yang mengikatnya ke objek tempat ia didefinisikan.

---

## 3. Praktik Lapangan (Lab)

```javascript
const station = {
    voltage: 0,
    setVoltage(v) {
        this.voltage = v;
        console.log(`Station Voltage: ${this.voltage}V`);
    }
};

station.setVoltage(220);
```

---

## Arsitek Mindset: Metode vs Properti Fungsi

Sebagai arsitek Hub:
- Gunakan sintaks metode ringkas `{ fn() {} }` untuk semua fungsi yang menempel pada objek. Ini lebih bersih dan memberikan kemampuan `super` yang tidak dimiliki oleh properti fungsi biasa `{ fn: function() {} }`.
- Ingat bahwa metode objek standar memiliki `this` yang dinamis, berbeda dengan Arrow Functions yang `this`-nya statis.

---
*Status: [status.md](../../../docs/status.md)*
