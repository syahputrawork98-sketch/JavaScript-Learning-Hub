# CH-04: Proxy Exotics (The Interceptor Shield)

> **"Untuk keamanan tingkat tinggi, Hub menyediakan perisai yang bisa mencegat setiap sinyal. `ProxyExoticObject` adalah 'Perisai Pencegat' (The Interceptor Shield) — unit transparan yang berdiri di depan mesin asli untuk memantau, mengubah, atau memblokir akses ke slot internal."**

*Pemetaan ECMA-262: Clause 10.5 (Proxy Exotic Objects)*

## 1. Mental Model: "The Interceptor Shield"

Bayangkan Anda ingin menyentuh tombol di Mesin A. Namun, Mesin A dibungkus oleh kaca pintar (Proxy).
- Saat tangan Anda mendekat (misal: memanggil `[[Get]]`), kaca tersebut mendeteksi gerakan Anda.
- Kaca tersebut memiliki **Traps** (Jebakan). Jika jebakan `get` aktif, kaca akan menjalankan logikanya sendiri sebelum (atau alih-alih) membiarkan Anda menyentuh mesin asli.

---

## 2. Mekanisme Pencegatan

Proxy adalah objek paling eksotis karena ia **mendefinisikan ulang seluruh 13 Metode Internal**.
- Jika Anda mendefinisikan `handler.get`, maka `[[Get]]` pada Proxy tersebut tidak lagi melakukan pencarian standar, melainkan memanggil fungsi `handler.get` Anda.
- Jika tidak ada jebakan yang didefinisikan, sinyal akan diteruskan (*forward*) ke mesin asli (`Target`).

---

## 3. Praktik Lapangan (Lab)

```javascript
const targetMachine = { power: 100 };
const shield = new Proxy(targetMachine, {
    get(target, prop) {
        console.log(`[LOG] Sinyal ke ${prop} dicegat!`);
        return target[prop] * 2; // Menggandakan output energi secara semu
    }
});

console.log(shield.power); // [LOG] Sinyal ke power dicegat! -> 200
```

---

## Arsitek Mindset: Biaya Keamanan

Sebagai arsitek Hub:
- Gunakan Proxy untuk validasi data, logging otomatis, atau membuat objek "Virtual" yang datanya diambil dari sumber jauh saat diakses.
- Waspadalah terhadap **Overhead Performa**. Setiap akses melalui Perisai Pencegat memerlukan eksekusi fungsi JavaScript tambahan, yang jauh lebih lambat daripada akses langsung ke terminal `Ordinary`.

---
*Status: [status.md](../../../docs/status.md)*
