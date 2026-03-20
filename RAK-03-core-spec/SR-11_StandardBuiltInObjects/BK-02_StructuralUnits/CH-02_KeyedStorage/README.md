# CH-02: Keyed Storage (Map, Set, WeakMap, WeakSet)

> **"Beberapa sinyal energi lebih mudah dicari menggunakan label unik daripada urutan angka. `Keyed Storage` adalah 'Unit Penyimpanan Berbasis Kunci'—sistem pencarian data yang sangat cepat dan teroptimasi untuk hubungan kunci-nilai."**

*Pemetaan ECMA-262: Clause 24*

## 1. Mental Model: "The Labeling Vault"

- **`Map`**: Kamus energi. Berbeda dengan objek biasa, kunci dalam `Map` bisa berupa apa saja (objek, fungsi, angka). Ia menjaga urutan penyisipan data.
- **`Set`**: Koleksi nilai unik. Berguna untuk memastikan tidak ada duplikasi sinyal dalam satu sirkuit.
- **`Weak` Variants**: Versi "Ramah Memori". `WeakMap` dan `WeakSet` tidak menghalangi sistem Garbage Collection untuk membersihkan objek yang menjadi kunci jika tidak digunakan lagi di tempat lain.

---

## 2. Kenapa Tidak Menggunakan Objek Biasa?

Meskipun Objek (`{}`) bisa menyimpan kunci-nilai, `Map` memiliki keunggulan transmisi:
1.  **Iterasi Mudah**: `Map` memiliki properti `size` dan bisa langsung di-loop.
2.  **Performa Konstan**: Untuk penambahan dan penghapusan data masif, `Map` jauh lebih cepat daripada Objek.
3.  **Kunci Non-String**: Anda bisa memetakan objek langsung sebagai kunci (misal: memetakan metadata ke sebuah unit generator).

---

## 3. Praktik Lapangan (Lab)

```javascript
// 1. Map untuk Metadata Generator
const registry = new Map();
const generatorA = { id: "GEN_01" };

registry.set(generatorA, { status: "ACTIVE", lastTest: Date.now() });
console.log("Generator Status:", registry.get(generatorA));

// 2. Set untuk Data Unik
const signals = new Set(["ALPHA", "BETA", "ALPHA"]);
console.log("Unique Signals Count:", signals.size); // 2
```

---

## Arsitek Mindset: Keamanan Memori

Sebagai arsitek Hub:
- Gunakan **`Map`** untuk kamus data yang membutuhkan frekuensi akses tinggi atau kunci non-string.
- Gunakan **`WeakMap`** jika Anda ingin mengaitkan metadata privat ke sebuah objek tanpa risiko kebocoran memori (Memory Leaks).
- Manfaatkan fitur baru **ES2025 Set Methods** (`union`, `intersection`, `difference`) untuk melakukan operasi logika himpunan pada stream energi Anda dengan sintaks yang elegan.

---
*Status: [status.md](../../../docs/status.md)*
