# CH-02: Buffers & Streams (The Data Conveyor)

Menangani data besar di Node.js memerlukan strategi agar tidak membebani memori (RAM). Di sinilah **Buffers** dan **Streams** berperan.

## 📦 Buffers vs 🌊 Streams
- **Buffer**: Penampung sementara untuk data biner (dalam bentuk Array of Bytes). Cocok untuk data kecil yang sudah diketahui ukurannya.
- **Stream**: Urutan data yang tersedia seiring waktu. Cocok untuk data raksasa atau data yang belum selesai diunduh.

```mermaid
graph LR
    Source[(File / Network)] --> Chunk1[Chunk]
    Chunk1 --> Chunk2[Chunk]
    Chunk2 --> Chunk3[Chunk]
    subgraph "Stream Pipe"
        Chunk3 -->|Flow Control| Dest[(Destination)]
    end
    
    style Chunk1 fill:#f1c40f,stroke:#333
    style Chunk2 fill:#f1c40f,stroke:#333
    style Chunk3 fill:#f1c40f,stroke:#333
```

## 🛠️ Jenis Stream
1. **Readable**: Tempat asal data (misal: `fs.createReadStream`).
2. **Writable**: Tempat tujuan data (misal: `fs.createWriteStream`).
3. **Duplex**: Bisa dibaca dan ditulis (misal: Network Socket).
4. **Transform**: Dapat mengubah data saat mengalir (misal: Zlib Gzip).

> [!TIP]
> **Backpressure**: Jika sumber data lebih cepat daripada tujuan (misal: baca file SSD vs kirim via jaringan lemot), Node.js akan secara otomatis menghentikan pembacaan sementara untuk mencegah penumpukan data di RAM.

---
*Lihat Lab: [Demo Stream Pipe](./examples/stream_pipe.js)*  
*Kembali ke [BK-03](../README.md)*
