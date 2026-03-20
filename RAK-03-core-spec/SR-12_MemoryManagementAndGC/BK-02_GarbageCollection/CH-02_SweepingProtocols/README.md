# CH-02: Sweeping Protocols (How GC Cleans Up)

> **"Setelah atlas pemetaan selesai, tim pembersih mulai bergerak. `Sweeping Protocols` adalah 'Protokol Pembersihan'—algoritma otonom yang membebaskan ruang Warehouse dari objek-objek terisolasi tanpa menghentikan aliran energi utama."**

*Pemetaan Konseptual Arsitektur Hub*

## 1. Mental Model: "Mark and Sweep"

Meskipun setiap mesin JavaScript (V8, SpiderMonkey, dsb) memiliki teknik berbeda, protokol dasarnya adalah **Mark-and-Sweep**:
1.  **Mark (Menandai)**: Tim pembersih berjalan dari Roots dan menandai semua objek yang dapat dijangkau sebagai "Safe" (Aman).
2.  **Sweep (Menyapu)**: Tim pembersih menyisir Warehouse (Heap). Semua objek yang tidak memiliki tanda "Safe" akan dihancurkan, dan ruangnya dibuka kembali untuk alokasi baru.

---

## 2. Generational Collection (Optimasi Hub)

Hub modern tidak membersihkan semua objek setiap saat. Mereka menggunakan strategi **Generational**:
- **Young Generation**: Objek baru yang sering kali mati muda. Dibersihkan sangat sering.
- **Old Generation**: Objek yang selamat dari beberapa siklus pembersihan. Dianggap stabil dan jarang diperiksa untuk menghemat daya Hub.

---

## 3. Karakteristik "Invisible Cleanup"

Sebagai arsitek, Anda tidak bisa memicu pembersihan memori secara manual (`gc()` tidak ada dalam spesifikasi standar). Hub memutuskan sendiri kapan waktu terbaik untuk membersihkan berdasarkan beban kerja dan kapasitas Warehouse yang tersisa.

---

## Arsitek Mindset: Membantu Tim Pembersih

Sebagai arsitek Hub:
- Jangan mencoba menebak kapan GC akan berjalan. Sebaliknya, bantu GC dengan segera memutus referensi (`object = null`) segera setelah tugas selesai.
- Berhati-hatilah dengan **Closures** yang besar. Jika sebuah fungsi kecil di dalam closure menahan referensi ke objek masif, objek tersebut tidak akan pernah dibersihkan selama fungsi tersebut masih "hidup" di sirkuit mana pun.

---
*Status: [status.md](../../../docs/status.md)*
