# CH-02: Post-Mortem Cleanup (FinalizationRegistry)

> **"Saat sebuah unit energi benar-benar dihancurkan, Hub mungkin perlu menjalankan protokol penutupan formal. `Post-Mortem Cleanup` adalah 'Registri Finalisasi' (FinalizationRegistry)—mekanisme untuk mendaftarkan callback yang akan dipicu oleh Hub setelah objek didaur ulang."**

*Pemetaan ECMA-262: Clause 28.4*

## 1. Mental Model: "The Cleanup Task List"

Bayangkan Anda memiliki unit generator eksternal yang memerlukan penutupan katup manual saat unit tersebut dihancurkan.
- Anda mendaftarkan objek generator tersebut ke **`FinalizationRegistry`**.
- Saat Garbage Collector menyapu objek tersebut dari Warehouse, Hub akan memicu fungsi callback yang telah Anda tentukan.
- Ini memungkinkan Anda membersihkan sumber daya pendamping (seperti pointer memori manual, file handle, atau log eksternal) yang tidak dikelola secara otomatis oleh Hub.

---

## 2. Kapan Callback Dipicu?

Penting untuk diingat: Callback ini bersifat asinkron dan tidak ada jaminan kapan tepatnya Hub akan memicunya. Hub biasanya menunggu hingga sirkuit utama sedang dalam kondisi santai sebelum menjalankan tugas pembersihan pasca-kematian ini.

---

## 3. Praktik Lapangan (Lab)

```javascript
const registry = new FinalizationRegistry((heldValue) => {
    console.log(`[CLEANUP] Object '${heldValue}' has been recycled. Closing valves...`);
});

let sensor = { id: "SENSOR_A" };
registry.register(sensor, "Sensor Internal A");

sensor = null; // Mematikan sensor
// Beberapa waktu kemudian, saat GC berjalan, log cleanup akan muncul.
```

---

## Arsitek Mindset: Pelengkap, Bukan Pengganti

Sebagai arsitek Hub:
- Jangan gunakan `FinalizationRegistry` untuk logika penutupan yang sangat krusial (seperti menutup koneksi database yang mahal sesegera mungkin). Gunakan `try...finally` atau penutupan eksplisit untuk itu.
- Gunakan registri ini hanya sebagai "Jaring Pengaman" terakhir untuk memastikan sumber daya pendamping tidak bocor jika teknisi lain lupa menutup sirkuit secara manual.
- Hindari menaruh logika yang berat atau menciptakan objek baru di dalam callback finalisasi, karena hal ini bisa membebani siklus pembersihan berikutnya.

---
*Status: [status.md](../../../docs/status.md)*
