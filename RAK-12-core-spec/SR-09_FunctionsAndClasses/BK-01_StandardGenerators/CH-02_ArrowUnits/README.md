# CH-02: Arrow Units (High-Efficiency Signals)

> **"Untuk transmisi data yang ringkas dan cepat, Hub menyediakan unit aerodinamis. `Arrow Units` adalah 'Sinyal Efisiensi Tinggi' (High-Efficiency Signals)—tipe fungsi minimalis yang dirancang untuk integrasi cepat tanpa membawa beban konteks sendiri."**

*Pemetaan ECMA-262: Clause 15.3*

## 1. Mental Model: "The Lightweight Signal"

Berbeda dengan "Power Plant" standar, Arrow Function (`=>`) adalah komponen ringan:
- **Tanpa `this` Sendiri**: Ia tidak memiliki konteks `this` internal. Ia meminjam konteks dari lingkungan sirkuit tempat ia dilahirkan (Lexical `this`).
- **Tanpa `arguments`**: Ia tidak membawa baki data `arguments`. Gunakan **Rest Parameters** (`...args`) jika Anda butuh banyak input.
- **Tanpa `prototype`**: Ia tidak bisa digunakan sebagai blueprint konstruktor untuk membangun objek baru.

---

## 2. Sintaksis Aerodinamis

Jika sirkuit hanya berisi satu instruksi pengembalian, Anda bisa melepas kurung kurawal dan kata kunci `return`.
```javascript
const double = (x) => x * 2; // Arus langsung kembali (Implicit Return)
```

---

## 3. Praktik Lapangan (Lab)

```javascript
const grid = {
    voltage: 220,
    // Arrow meminjam 'this' dari grid jika diletakkan di metode standar
    activate: function() {
        const check = () => console.log(`Voltage check: ${this.voltage}V`);
        check();
    }
};

grid.activate();
```

---

## Arsitek Mindset: Kapan Menggunakan Arrow?

Sebagai arsitek Hub:
- Gunakan Arrow Units untuk **Callback** (seperti di `.map()` atau `.filter()`) dan di mana pun Anda ingin menjaga konteks `this` tetap konsisten dengan lingkungan luar.
- Jangan gunakan Arrow Units untuk **Metode Objek** utama jika Anda ingin metode tersebut bisa mengakses properti objeknya sendiri melalui `this`.

---
*Status: [status.md](../../../docs/status.md)*
