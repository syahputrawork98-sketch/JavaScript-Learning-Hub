# CH-01: Memory Domains (Stack vs Heap)

> **"Setiap energi yang dialirkan ke Hub membutuhkan ruang penyimpanan yang sesuai dengan karakteristiknya. `Memory Domains` adalah 'Pembagian Wilayah Memori'—distribusi data antara Stack yang instan dan Heap yang luas."**

*Pemetaan Konseptual Arsitektur Hub*

## 1. Mental Model: "The Workbench vs The Warehouse"

Hub mengelola memori dalam dua wilayah utama:
- **Stack (The Workbench)**: Meja kerja yang cepat dan teratur. Digunakan untuk menyimpan variabel primitif (angka, boolean) dan alamat referensi. Data di sini memiliki ukuran tetap dan durasi hidup yang singkat (hanya selama fungsi berjalan).
- **Heap (The Warehouse)**: Gudang besar yang tidak teratur. Digunakan untuk menyimpan objek, array, dan fungsi. Data di sini bisa berubah ukuran dan hidup lebih lama, tetapi membutuhkan waktu lebih lama untuk diakses dan dibersihkan.

---

## 2. Allocation Lifecycle

1.  **Allocation**: Hub memesan ruang saat Anda mendeklarasikan variabel atau membuat objek baru.
2.  **Usage**: Sirkuit membaca dan menulis data ke ruang tersebut.
3.  **Release**: Saat data tidak lagi terhubung ke sirkuit mana pun, Hub menandainya untuk daur ulang (ini adalah tugas Garbage Collector).

---

## 3. Praktik Lapangan (Lab)

```javascript
function setupNode() {
    // 'voltage' disimpan di STACK ( workbench)
    const voltage = 220; 

    // 'config' (referensi) di STACK, 
    // tapi isi objeknya di HEAP (warehouse)
    const config = { type: "CORE", active: true }; 
}

setupNode(); // Setelah fungsi selesai, STACK dibersihkan secara instan.
```

---

## Arsitek Mindset: Kesadaran Ruang

Sebagai arsitek Hub:
- Sadari bahwa data di **Stack** dikelola secara otomatis oleh sistem "Last-In, First-Out" (LIFO) yang sangat efisien.
- Data di **Heap** adalah tempat di mana kebocoran energi (Memory Leaks) biasanya terjadi jika Anda lupa memutuskan koneksi ke objek yang sudah tidak terpakai.
- Gunakan tipe data primitif jika memungkinkan untuk data-data kecil yang sering berubah guna memaksimalkan penggunaan Stack yang berkinerja tinggi.

---
*Status: [status.md](../../../docs/status.md)*
