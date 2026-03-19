# CH-01: Global Realms (The Power Zones)

> **"Grid tidak berjalan dalam satu blok besar yang kacau. `Realms` adalah 'Zona Daya' (The Power Zones) — area isolasi lengkap yang memiliki set peralatan standar dan panggung globalnya sendiri."**

*Pemetaan ECMA-262: Clause 9.2 (Realms)*

## 1. Mental Model: "The Power Zones"

Bayangkan Hub memiliki beberapa ruangan kedap suara.
- **Setiap Realm memiliki**: Global Object-nya sendiri, satu set intrinsik (seperti `Array.prototype` asli), dan kode yang dieksekusi di dalamnya.
- **Isolasi**: Array yang lahir di Ruangan A bukan merupakan `instanceof Array` di Ruangan B. Mereka menggunakan "cetakan" yang berbeda meskipun namanya sama.

---

## 2. Komponen Realm

Sebuah Realm di Hub terdiri dari:
1.  **`[[Intrinsics]]`**: Semua objek bawaan standar yang sudah terpasang.
2.  **`[[GlobalObject]]`**: Bos utama di zona tersebut.
3.  **`[[GlobalEnv]]`**: Lingkungan variabel paling luar.

Di browser, setiap `<iframe>` baru menciptakan Realm baru di dalam Hub Anda.

---

## 3. Praktik Lapangan (Lab)

```javascript
/* Mencoba melintasi Zona Daya (Pseudo-code untuk Iframe) */
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);

const IframeArray = iframe.contentWindow.Array;
const localArray = [];

console.log(localArray instanceof IframeArray); // false! (Beda Zona Daya)
```

---

## Arsitek Mindset: Keamanan Multi-Zona

Sebagai arsitek Hub:
- Waspadalah saat data mentah (seperti Array atau Object) berpindah antar Realm (misal: antar Window atau Worker). Pengecekan `instanceof` tradisional akan gagal.
- Gunakan `Array.isArray()` daripada `instanceof Array` karena metode ini dirancang khusus oleh spesifikasi untuk mengenali "Kabel Array" dari zona manapun.

---
*Status: [status.md](../../../docs/status.md)*
