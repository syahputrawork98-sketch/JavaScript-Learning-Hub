# CH-01: Energy Leaks (Common Scenarios)

> **"Kebocoran energi tidak selalu terjadi karena kesalahan Hub, melainkan karena desain sirkuit yang buruk. `Energy Leaks` adalah 'Kebocoran Memori'—skenario di mana objek tetap hidup di Warehouse meskipun sudah tidak dibutuhkan lagi."**

*Pemetaan Konseptual Arsitektur Hub*

## 1. Mental Model: "The Clogged Pipe"

Kebocoran memori terjadi saat Anda membiarkan kabel keras (Strong Reference) tetap terhubung ke objek yang sudah tidak terpakai, sehingga tim pembersih (GC) tidak berani mendaur ulangnya.

---

## 2. Skenario Kebocoran Umum

- **Global Accidents**: Menaruh data besar di variabel Global (Roots) secara tidak sengaja. Karena Global adalah Root abadi, data tersebut tidak akan pernah dibersihkan.
- **Forgotten Timers**: `setInterval` yang terus berjalan dan memegang referensi ke objek besar di dalam closure-nya, meskipun tugasnya sudah selesai.
- **Lingering Event Listeners**: Menambahkan listener ke elemen yang sudah dihapus dari DOM tanpa membuang listener-nya secara manual (terutama di Hub lingkungan browser).
- **Uncleared Closures**: Fungsi yang menahan variabel besar dari lingkup luar yang tidak pernah dihentikan.

---

## 3. Praktik Lapangan (Lab)

```javascript
function leakEnergy() {
    // Kebocoran! 'hugeData' terikat ke Global Root
    globalThis.hugeData = new Array(1000000).fill("⚡");
}

function stableEnergy() {
    const hugeData = new Array(1000000).fill("⚡");
    // 'hugeData' akan dibersihkan saat fungsi selesai 
    // karena scope-nya berakhir dan tidak ada kabel luar.
}
```

---

## Arsitek Mindset: Disiplin Sirkuit

Sebagai arsitek Hub:
- Selalu batasi penggunaan scope Global. Gunakan **Modules** untuk mengisolasi data dalam lingkup yang lebih kecil.
- Pastikan setiap `setInterval` memiliki `clearInterval` pendamping saat komponen atau tugas dihentikan.
- Manfaatkan **WeakMap/WeakSet** (Buku SR-11) untuk menyimpan metadata objek tanpa risiko menahan siklus hidup objek tersebut.

---
*Status: [status.md](../../../docs/status.md)*
