# Buku 02: Exotic Objects (The Hybrid Units)

Buku ini membedah unit-unit mesin hibrida yang memiliki perilaku khusus di luar standar objek biasa. Di dalam spesifikasi ECMA-262, unit-unit ini disebut sebagai **Exotic Objects**.

## 🏗️ Katalog Unit Eksotis

Setiap unit di bawah ini memiliki "piston" atau "segel" internal yang bekerja secara otomatis:

1.  **[Bab 01: Array Exotics](./CH-01_ArrayExotics/)**: Unit dengan sinkronisasi otomatis antara slot data dan properti `length`.
2.  **[Bab 02: Bound Function Exotics](./CH-02_BoundFunctionExotics/)**: Unit fungsi yang terkunci pada `this` dan argument tertentu.
3.  **[Bab 03: String Exotics](./CH-03_StringExotics/)**: Unit string yang membungkus nilai primitif dan menyediakan akses index read-only.
4.  **[Bab 04: Proxy Exotics](./CH-04_ProxyExotics/)**: Unit "Interceptor" yang memungkinkan arsitek mendefinisikan perilaku kustom untuk 13 Internal Methods.

## 🔍 Mengapa Memahami Eksotisme?
Memahami bagaimana Array atau Proxy bekerja di level "Exotic" membantu arsitek memprediksi efek samping (seperti performa atau mutabilitas) saat menggunakan unit-unit ini di dalam Grid yang padat.

---
*Status: Gold Standard Upgrade in Progress*
