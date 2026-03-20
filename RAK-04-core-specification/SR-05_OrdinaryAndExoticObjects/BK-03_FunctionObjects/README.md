# Buku 03: Function Objects (The Engine Units)

Buku ini membedah unit penggerak utama di dalam Hub: **Function Objects**. Objek ini eksotis karena mereka memiliki kemampuan untuk dipanggil (`[[Call]]`) dan digunakan sebagai cetakan konstruksi (`[[Construct]]`).

## 🏗️ Infrastruktur Penggerak

1.  **[Bab 01: Normal Functions](./CH-01_NormalFunctions/)**: Struktur internal fungsi biasa dan bagaimana `[[Environment]]` direkam.
2.  **[Bab 02: Generator & Async Functions](./CH-02_GeneratorAsyncFunctions/)**: Sistem katup dan tunda eksekusi pada unit-unit asinkron.

## 🔍 Arsitek Insight
Setiap fungsi di JavaScript adalah objek, tetapi tidak setiap objek adalah fungsi. Memahami perbedaan Internal Slots antara fungsi biasa dan fungsi asinkron akan membantu Anda mengoptimalkan alur kerja energi di dalam Hub.

---
*Status: Gold Standard Upgrade in Progress*
