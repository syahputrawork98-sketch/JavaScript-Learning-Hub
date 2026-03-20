# CH-02: Object Vitality (Creation to Death)

> **"Energi tidak pernah hilang, ia hanya berubah bentuk atau didaur ulang. `Object Vitality` adalah 'Siklus Hidup Objek'—perjalanan sebuah unit data dari saat ia dilahirkan di Heap hingga ia dihancurkan oleh sistem pembersihan Hub."**

*Pemetaan Konseptual Arsitektur Hub*

## 1. Mental Model: "The Energy Pulse Cycle"

Siklus hidup objek mengikuti pola yang ketat:
1.  **Birth (Allocation)**: Perintah `new` atau literal `{}` memicu Hub untuk memesan blok di Warehouse (Heap).
2.  **Activity (Reference)**: Objek dihubungkan ke sirkuit (variabel). Selama ada kabel (referensi) yang terhubung ke "Root" Hub, objek dianggap **Alive** (Hidup).
3.  **Maturity**: Objek mungkin berpindah-pindah antar sirkuit atau dikaitkan sebagai properti objek lain.
4.  **Isolation (Unreachable)**: Saat kabel terakhir diputus, objek menjadi terisolasi. Hub tidak bisa lagi menemukannya.
5.  **Death (Garbage Collection)**: Mesin pembersih mendeteksi objek terisolasi dan mengembalikan ruangnya ke Warehouse untuk energi baru.

---

## 2. Inisialisasi & Destruksi

Tidak seperti bahasa tingkat rendah, Hub mengelola destruksi secara otomatis. Namun, kita bisa menggunakan **FinalizationRegistry** (lihat Buku 3) untuk menjalankan protokol tertentu saat sebuah objek "mati".

---

## 3. Praktik Lapangan (Lab)

```javascript
let core = { id: "01" }; // Birth
let backup = core;      // Activity (2 references)

core = null;            // 1 reference left (backup)
backup = null;          // 0 references (Isolated!)

// Hub akan menghancurkan objek { id: "01" } di siklus pembersihan berikutnya.
```

---

## Arsitek Mindset: Memutus Koneksi

Sebagai arsitek Hub:
- Ingatlah bahwa "Kebocoran" terjadi bukan karena Hub gagal membersihkan, tapi karena Anda (sang arsitek) membiarkan kabel tetap terhubung ke objek yang sudah tidak dibutuhkan (misalnya di dalam variabel Global atau Closure yang tidak pernah berakhir).
- Gunakan `null` secara eksplisit jika Anda ingin "mematikan" sebuah sirkuit besar secara manual sebelum Garbage Collector datang secara otomatis.

---
*Status: [status.md](../../../docs/status.md)*
