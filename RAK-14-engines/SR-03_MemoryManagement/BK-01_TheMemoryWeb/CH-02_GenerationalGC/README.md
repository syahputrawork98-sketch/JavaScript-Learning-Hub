# CH-02: Generational Garbage Collection

V8 menggunakan strategi **Generational Garbage Collection**, berdasarkan hipotesis bahwa "sebagian besar objek mati saat masih muda".

## 👶 Young Generation (New Space)
Area kecil di mana objek baru dialokasikan.
- **Algo**: **Scavenge (Copying)**.
- **Cara Kerja**: Membagi New Space menjadi dua (From-Space & To-Space). Objek yang masih hidup disalin ke To-Space, lalu From-Space dibersihkan.

## 👴 Old Generation (Old Space)
Objek yang bertahan setelah dua siklus pembersihan di New Space dipindahkan ("promoted") ke sini.
- **Algo**: **Mark-Sweep-Compact**.
- **Cara Kerja**: Menandai objek yang masih terjangkau, menyapu objek yang mati, dan merapatkan memori untuk menghindari fragmentasi.

## ⚡ Orinoco
Orinoco adalah nama proyek V8 untuk membuat GC berjalan secara **Parallel, Incremental, dan Concurrent**, guna meminimalkan "Stop-the-world" (jeda eksekusi JS).

---
*Kembali ke [BK-01](../README.md)*
