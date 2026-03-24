# CH-01: Base Models (Standard Power Plants)

> **"Di dalam Grid, logika tidak boleh dibiarkan liar. `Standard Generators` adalah 'Pembangkit Tenaga' (Power Plants)—unit pembungkus kode yang dirancang untuk menerima input energi (Parameters), mengolahnya, dan mengirimkan output (Return)."**

*Pemetaan ECMA-262: Clause 15.2*

## 1. Mental Model: "The Power Plant"

Fungsi standar bertindak sebagai blueprint tetap:
- **Function Declaration**: Unit yang terpasang permanen di dalam Hub sebelum Grid dinyalakan (Hoisted). Anda bisa memanggilnya meskipun unitnya tertulis di bagian bawah blueprint.
- **Function Expression**: Unit portabel yang disimpan di dalam slot variabel. Ia hanya bisa digunakan setelah jalur energinya dideklarasikan (Not Hoisted).

---

## 2. Anatomy of a Generator

Setiap unit fungsional memiliki:
1.  **Input Chutes (Parameters)**: Tempat masuknya data.
2.  **Internal Reactor (Body)**: Tempat pengolahan logika.
3.  **Output Transmission (Return)**: Tempat mengirimkan hasil akhir. Jika tidak ada, ia tetap mengirimkan sinyal kosong (`undefined`).

---

## 3. Praktik Lapangan (Lab)

```javascript
// Declaration (Hoisted)
activateCore(); 

function activateCore() {
    console.log("CORE_STATUS: ONLINE");
}

// Expression (Non-Hoisted)
const pumpEnergy = function(amount) {
    return amount * 1.5;
};

console.log(`Energy Pumped: ${pumpEnergy(10)}`);
```

---

## Arsitek Mindset: Disiplin Nama

Sebagai arsitek Hub:
- Berikan nama yang deskriptif untuk setiap unit (seperti `calculateLoad` daripada `fn1`). Nama fungsi adalah label pada panel kontrol yang membantu teknisi lain memahami fungsi sirkuit tersebut tanpa harus membedah isinya.
- Pahami perbedaan *Shadowing*. Variabel di dalam "Reactor" fungsi tidak akan mempengaruhi variabel dengan nama yang sama di luar fungsi (Environment Records).

---
*Status: [status.md](../../../docs/status.md)*
