# CH-01: Zig & Performance (The Speed Engine)

Bun dikenal sebagai runtime tercepat saat ini. Rahasianya bukan hanya pada engine JavaScriptnya (JavaScriptCore), tapi pada bahasa yang membangunnya: **Zig**.

## ⚡ Mengapa Zig?
Zig memberikan kontrol manual tingkat rendah terhadap memori, mirip dengan C, tetapi dengan keamanan modern. Ini memungkinkan Bun melakukan optimasi I/O yang tidak bisa dilakukan Node.js.

```mermaid
graph LR
    JS[JS Code] --> JSC[JavaScriptCore Engine]
    JSC --> Zig[Bun Glue Code: Zig]
    Zig --> Sys[System Calls / IO]
    
    style Zig fill:#f1c40f,stroke:#333
    style JSC fill:#3498db,stroke:#333
```

## 🚀 Optimasi Utama
1. **No System Call Overhead**: Bun meminimalkan jumlah instruksi yang dikirim ke kernel.
2. **Fast Context Switching**: Perpindahan antara dunia JS dan dunia sistem operasi di Bun jauh lebih cepat dibanding Node.js.
3. **Memory Management**: Zig memungkinkan Bun mengelola alokasi memori secara sangat efisien untuk tugas-tugas berat seperti HTTP server.

> [!IMPORTANT]
> **Internalist Insight**: Bun tidak menggunakan V8 (seperti Node/Deno), ia menggunakan **JavaScriptCore (JSC)** milik Apple yang memiliki waktu startup lebih instan.

---
*Lihat Lab: [Benchmark Bun](./examples/bun_http_bench.js)*  
*Kembali ke [BK-02](../README.md)*
