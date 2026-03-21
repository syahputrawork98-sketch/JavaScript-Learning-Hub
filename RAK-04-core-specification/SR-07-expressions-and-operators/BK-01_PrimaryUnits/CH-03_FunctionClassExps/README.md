# CH-03: Function & Class Expressions

> **"Beberapa unit generator tidak berdiri sendiri, melainkan dirakit di dalam alur energi sebagai bagian dari ekspresi lain. `Function & Class Expressions` adalah 'Generator Portabel' — unit logika yang bisa dipindahkan dan dipasang secara dinamis di dalam Grid."**

*Pemetaan ECMA-262: Clause 13.2.1 & 13.2.6*

## 1. Mental Model: "Portable Generators"

Berbeda dengan *Declarations* (yang dipasang permanen saat pemindaian awal/Hoisting), *Expressions* baru aktif saat Hub mencapai baris kodenya.
- **Function Expression**: Membuat unit logika anonim atau bernama yang bisa disimpan dalam variabel.
- **Arrow Function `=>`**: Versi ringkas dan cepat yang secara otomatis mewarisi sinyal `this` dari lingkungan sekitarnya.
- **Class Expression**: Membuat blueprint struktur kompleks secara dinamis.

---

## 2. Kenapa Expressions Bukan Declarations?

| Karakteristik | Declaration | Expression |
| :--- | :--- | :--- |
| **Instalasi** | Hoisted (Pramuat) | Saat Eksekusi (On-the-fly) |
| **Identitas** | Wajib Memiliki Nama | Bisa Anonim |
| **Modularitas** | Kaku di Scope | Sangat Fleksibel |

---

## 3. Praktik Lapangan (Lab)

```javascript
// Function Expression (Generator Portabel)
const addEnergy = function(amount) {
    return amount + 10;
};

// Arrow Function (Quick Generator)
const multiplyEnergy = (x) => x * 2;

console.log(addEnergy(5));      // 15
console.log(multiplyEnergy(5)); // 10
```

---

## Arsitek Mindset: Fleksibilitas vs Performa

Sebagai arsitek Hub:
- Gunakan Arrow Functions untuk callback sederhana karena mereka lebih bersih dan tidak memiliki overhead `this` sendiri.
- Gunakan Name Function Expressions jika unit tersebut akan melakukan tugas rekursif (memanggil dirinya sendiri) agar Hub memiliki label identitas saat terjadi malfungsi (Debugging).

---
*Status: [status.md](../../../docs/status.md)*
