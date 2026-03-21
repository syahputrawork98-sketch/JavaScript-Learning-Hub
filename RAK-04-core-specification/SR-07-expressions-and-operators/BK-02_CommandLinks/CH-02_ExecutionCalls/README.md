# CH-02: Execution Calls (The Command Triggers)

> **"Sebuah unit logika tidak akan menghasilkan energi tanpa dipicu. `Call Expressions` adalah 'Pemicu Perintah' (The Command Triggers) — mekanisme untuk mengaktifkan unit fungsi, mengirimkan pasokan data (Arguments), dan menerima hasil pemrosesannya."**

*Pemetaan ECMA-262: Clause 13.3.6 (Call Expressions)*

## 1. Mental Model: "The Command Triggers"

- **Function Call `f()`**: Memicu unit fungsi standar.
- **Method Call `obj.m()`**: Memicu unit yang menempel pada sebuah objek (mewarisi konteks objek tersebut).
- **Optional Call `f?.()`**: Pemicu aman yang akan batal secara otomatis jika unit yang dipanggil ternyata tidak terpasang (null/undefined).

---

## 2. Pasokan Data (Argument Passing)

Saat memicu unit, kita bisa mengirimkan **Arguments**. Hub menggunakan mekanisme *Pass-by-Value*, di mana nilai atau referensi memori disalin ke dalam unit penerima.
- **Spread in Call `f(...args)`**: Membongkar baki penyimpanan (Array) dan mengirimkan isinya sebagai aliran sinyal individu.

---

## 3. Praktik Lapangan (Lab)

```javascript
const reactor = {
    start: (power) => `Reactor ON at ${power}MW`,
    stop: null
};

// Pemicu Standar
console.log(reactor.start(500));

// Pemicu Aman (Batal otomatis jika null)
console.log(reactor.stop?.()); // undefined (Aman, tidak error!)

// Pemicu dengan Spread
const params = [100];
console.log(reactor.start(...params));
```

---

## Arsitek Mindset: Integritas Panggilan

Sebagai arsitek Hub:
- Hindari panggilan fungsi yang terlalu bersarang (*Deeply Nested Calls*) karena ini akan menumpuk beban pada **Tumpukan Terminal** (Call Stack) dan bisa menyebabkan `Stack Overflow`.
- Gunakan `f?.()` secara konsisten jika fungsi tersebut bersifat opsional (seperti plugin atau callback user) untuk menjaga stabilitas Grid.

---
*Status: [status.md](../../../docs/status.md)*
