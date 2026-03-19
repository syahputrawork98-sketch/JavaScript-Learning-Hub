# CH-02: Agents & Jobs (The Micro-Scheduler)

> **"Di balik setiap eksekusi, ada pengawas yang tidak pernah tidur. `Agents` dan `Jobs` adalah 'Penjadwal Mikro' (The Micro-Scheduler) — sistem yang memastikan tugas-tugas kecil (Microtasks) disisipkan dengan tepat di antara siklus energi Hub."**

*Pemetaan ECMA-262: Clause 9.7 & 9.8 (Agents & Jobs)*

## 1. Mental Model: "The Micro-Scheduler"

- **Agent**: Seperti seorang teknisi tunggal yang bertugas menjalankan Call Stack. Satu teknisi hanya bisa mengerjakan satu baki dalam satu waktu.
- **Job (Microtask)**: Seperti catatan kecil yang ditempelkan di pinggiran baki. Teknisi harus menyelesaikan semua catatan kecil ini SEBELUM dia boleh mengambil baki baru dari luar (Event Loop).

---

## 2. Antrean Pekerjaan (Job Queue)

Dalam spesifikasi, ada dua antrean utama:
1.  **ScriptJobs**: Untuk menjalankan blok kode skrip baru.
2.  **PromiseJobs**: Untuk menjalankan penyelesaian `Promise` (`.then`, `await`). Ini yang kita kenal sebagai Microtasks.

**Aturan Emas:** Sebuah baki Context tidak akan dianggap selesai sampai antrean `PromiseJobs` kosong.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("1. Aliran Utama");

Promise.resolve().then(() => {
    console.log("3. Job Selesai (Microtask)");
});

console.log("2. Aliran Utama Selesai");
// Hasil: 1 -> 2 -> 3
```

---

## Arsitek Mindset: Kelaparan Event Loop

Sebagai arsitek Hub:
- Jangan memasukkan terlalu banyak `Jobs` (Microtasks) secara berulang-ulang dalam satu siklus. Jika antrean Microtask tidak pernah habis, teknisi Hub tidak akan pernah sempat menarik baki baru (seperti Input User atau Rendering UI), menyebabkan Hub terlihat "hang" atau membeku.
- Pahami bahwa `Jobs` selalu memiliki prioritas lebih tinggi daripada `Tasks` (seperti `setTimeout`).

---
*Status: [status.md](../../../docs/status.md)*
