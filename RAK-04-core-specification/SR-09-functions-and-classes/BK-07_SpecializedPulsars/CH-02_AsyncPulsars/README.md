# CH-02: Async Pulsars (Delayed Transmission)

> **"Dalam Grid yang luas, beberapa sinyal membutuhkan waktu untuk sampai dari server jauh. `Async Pulsars` adalah 'Pulsar Tunda' (Delayed Transmission)—unit yang memungkinkan Hub menunggu sinyal eksternal tanpa membekukan seluruh sistem (Non-blocking)."**

*Pemetaan ECMA-262: Clause 15.8 (v2025)*

## 1. Mental Model: "The Non-Blocking Wait"

- **`async`**: Memberi label pada unit bahwa ia akan selalu mengembalikan **Promise** (Janji Energi).
- **`await`**: Instruksi untuk "Istirahat sejenak" di baris tersebut sampai Promise terpenuhi. Hub akan melepaskan resource untuk mengerjakan tugas lain sambil menunggu sinyal ini kembali.

---

## 2. Microtask Integration

Secara internal, saat `await` dipicu, Hub memecah fungsi menjadi dua bagian. Bagian setelah `await` dijadwalkan masuk ke **Microtask Queue**—jalur prioritas tinggi yang akan dijalankan segera setelah sirkuit utama saat ini selesai.

---

## 3. Praktik Lapangan (Lab)

```javascript
async function fetchPowerGrid() {
    try {
        console.log("Requesting external energy...");
        const response = await promiseBasedAPI(); // Menunggu tanpa membeku
        console.log("Energy Received:", response);
    } catch (err) {
        console.log("Transmission Failed");
    }
}
```

---

## Arsitek Mindset: Disiplin Asinkron

Sebagai arsitek Hub:
- Gunakan `async/await` daripada `Promise.then()` yang bersarang (Callback Hell) untuk menjaga blueprint tetap bersih dan mudah dibaca secara linier.
- Selalu bungkus `await` di dalam **try-catch** karena malfungsi pada sinyal asinkron bisa menyebabkan kegagalan fatal yang sulit dilacak jika tidak ditangkap.

---
*Status: [status.md](../../../docs/status.md)*
