# CH-02: Test Runners (High-Speed Validation)

Pengecekan kode (testing) seringkali menjadi bagian paling lambat dalam workflow pengembangan. Bun menyertakan Test Runner yang kompatibel dengan standar industri namun dengan kecepatan startup nol.

## 🏎️ Bun Test Architecture
Alih-alih memuat framework berat, Bun menggunakan mesin internalnya untuk menjalankan pengujian secara paralel.

```mermaid
graph TD
    Files[Test Files: *.test.ts] --> TP{Bun Test Pool}
    TP -->|Parallel Execute| T1[Worker 1]
    TP -->|Parallel Execute| T2[Worker 2]
    TP -->|Parallel Execute| T3[Worker 3]
    T1 & T2 & T3 --> Report[Instant Result]
    
    style TP fill:#3498db,stroke:#333
```

## 🌟 Fitur Utama
- **Jest Compatible**: Anda dapat menggunakan `expect`, `describe`, `test`, dan `beforeEach` persis seperti di Jest/Vitest.
- **Snapshot Testing**: Dukungan native untuk snapshot.
- **Auto-Reload (Watch Mode)**: Menjalankan ulang tes secara instan saat file berubah.
- **TypeScript Support**: Langsung menjalankan tes TS tanpa step kompilasi terpisah.

> [!TIP]
> **Performance Tip**: Jika suite pengujian Anda di Jest memakan waktu 10 detik, Bun Test seringkali dapat menyelesaikannya dalam kurang dari 1 detik.

---
*Lihat Lab: [Demo Bun Test](./examples/bun_test_demo.js)*  
*Kembali ke [BK-04](../README.md)*
