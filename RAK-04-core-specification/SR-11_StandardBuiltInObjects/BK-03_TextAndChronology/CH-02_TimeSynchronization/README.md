# CH-02: Time Synchronization (Date)

> **"Setiap peristiwa di dalam Hub harus memiliki stempel waktu yang akurat untuk audit energi. `Time Synchronization` adalah 'Pewaktu Hub' (Date)—unit yang melacak waktu berdasarkan milidetik sejak epoch universal."**

*Pemetaan ECMA-262: Clause 21.4*

## 1. Mental Model: "The Millisecond Counter"

Objek `Date` di Hub bekerja berdasarkan **Unix Epoch** (1 Januari 1970). Semua waktu internal dihitung sebagai jumlah milidetik yang telah berlalu sejak titik nol tersebut.
- **Local vs UTC**: Hub bisa menampilkan waktu berdasarkan zona waktu lokal teknisi atau standar universal (UTC).
- **Mutable State**: Hati-hati! Berbeda dengan String, objek `Date` bersifat **Mutable**. Mengubah jam pada objek date yang sama akan mengubah nilai aslinya.

---

## 2. Temporal API (Masa Depan Hub)

Dunia Hub modern sedang bertransformasi menuju **Temporal API** (sedang dalam tahap standarisasi lanjut) yang jauh lebih tangguh, tidak dapat diubah (Immutable), dan menangani zona waktu dengan lebih cerdas daripada objek `Date` klasik.

---

## 3. Praktik Lapangan (Lab)

```javascript
// 1. Stempel Waktu Sekarang
const now = new Date();
console.log("Hub Time (ISO):", now.toISOString());

// 2. Kalkulasi Durasi
const start = Date.now();
// ... proses pemrosesan energi ...
const end = Date.now();
console.log(`Execution Pulse: ${end - start}ms`);

// 3. Akses Komponen
console.log("Year:", now.getFullYear());
```

---

## Arsitek Mindset: Disiplin Waktu

Sebagai arsitek Hub:
- Selalu simpan dan kirim waktu antar-sirkuit dalam format **ISO 8601** (`toISOString()`) atau **Timestamp** (milidetik) untuk menghindari kekacauan zona waktu.
- Untuk manipulasi tanggal yang kompleks (seperti menambah 3 bulan atau menghitung hari kerja), pertimbangkan untuk menggunakan pustaka eksternal yang stabil seperti *date-fns* atau mulai melirik *Temporal API* jika Hub Anda mendukungnya.
- Hindari penggunaan `new Date()` di dalam loop yang sangat ketat karena instansiasi objek berulang kali bisa membebani pembersihan memori.

---
*Status: [status.md](../../../docs/status.md)*
