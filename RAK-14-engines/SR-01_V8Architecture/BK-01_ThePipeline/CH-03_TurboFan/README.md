# CH-03: TurboFan (The Optimizing Compiler)

TurboFan adalah "senjata rahasia" V8 yang mengubah JavaScript menjadi kode mesin yang setara kecepatannya dengan C++.

## 🚀 Hot Functions
Jika Ignition mendeteksi sebuah fungsi dipanggil berkali-kali ("Hot Function"), data profiling dikirim ke TurboFan.

## 🛠️ Proses Optimasi
TurboFan menggunakan informasi tipe data yang dikumpulkan Ignition untuk membuat asumsi ("Speculative Optimization"). Misalnya, jika fungsi `add(a, b)` selalu menerima angka, TurboFan akan membuat versi Machine Code yang hanya khusus untuk penambahan angka, tanpa perlu mengecek jenis data lagi.

## ⚠️ Deoptimization
Jika asumsi TurboFan salah (misal: tiba-tiba fungsi `add` dipanggil dengan String), maka V8 akan melakukan **Deoptimization** (Bailout) dan kembali menjalankan Bytecode via Ignition.

---
*Kembali ke [BK-01](../README.md)*
