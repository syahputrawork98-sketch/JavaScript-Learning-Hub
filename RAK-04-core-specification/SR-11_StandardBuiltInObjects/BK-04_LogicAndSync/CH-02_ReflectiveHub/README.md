# CH-02: Reflective Hub (Proxy & Reflect)

> **"Untuk kontrol keamanan dan pemantauan energi tingkat tinggi, Hub menyediakan sistem interupsi. `Reflective Hub` adalah 'Pusat Refleksi'—mekanisme untuk mencegat, memodifikasi, dan memantau setiap interaksi dengan objek target."**

*Pemetaan ECMA-262: Clause 28*

## 1. Mental Model: "The Invisible Guard"

- **`Proxy`**: Sebuah "Penjaga Gerbang" yang membungkus objek target. Setiap kali seseorang mencoba membaca (`get`) atau menulis (`set`) data ke objek tersebut, Penjaga Gerbang akan mencegatnya terlebih dahulu.
- **`Reflect`**: Pustaka utilitas yang menyediakan cara standar untuk melakukan operasi objek yang sama dengan yang dilakukan oleh Proxy (seperti `Reflect.get()`). Ia sering digunakan di dalam Proxy untuk meneruskan sinyal ke objek target setelah pemeriksaan selesai.

---

## 2. Traps: Perangkap Sinyal

Proxy menggunakan "Perangkap" (Traps) untuk menginterupsi operasi:
- **`get(target, prop)`**: Perangkap saat seseorang mencoba membaca sinyal. Bisa digunakan untuk log aktivitas atau memberikan nilai default.
- **`set(target, prop, value)`**: Perangkap saat seseorang mencoba menyuntikkan energi. Bisa digunakan untuk validasi tipe data atau keamanan.

---

## 3. Praktik Lapangan (Lab)

```javascript
const targetHub = { power: 100 };

const secureProxy = new Proxy(targetHub, {
    get(target, prop) {
        console.log(`ACCESS LOG: Reading ${prop}`);
        return Reflect.get(target, prop);
    },
    set(target, prop, value) {
        if (value < 0) throw new Error("VALVE_ERROR: Power cannot be negative!");
        return Reflect.set(target, prop, value);
    }
});

secureProxy.power = 200; // Logged & Success
// secureProxy.power = -50; // THROW ERROR!
```

---

## Arsitek Mindset: Metaprogramming

Sebagai arsitek Hub:
- Gunakan **Proxy** untuk membangun sistem *Reactive Data Binding* (seperti pada framework modern) atau untuk menciptakan lapisan keamanan tambahan yang transparan bagi konsumen data.
- Sadari bahwa Proxy memiliki biaya komputasi (Overhead). Sirkuit yang dibungkus Proxy akan berjalan sedikit lebih lambat daripada sirkuit mentah, jadi gunakan hanya pada titik-titik kontrol yang krusial.
- Gunakan **Reflect** bersama Proxy agar Anda selalu mengikuti spesifikasi standar Hub saat melakukan forwarding sinyal, menghindari malfungsi perilaku internal objek.

---
*Status: [status.md](../../../docs/status.md)*
