# CH-02: Buffers and Streams (Binary Data)

Node.js dirancang untuk efisiensi tinggi dalam menangani aliran data besar tanpa membebani memori.

## 📦 Buffer
`Buffer` adalah area memori sementara yang digunakan untuk menyimpan data biner mentah.

## 🌊 Streams
Streams memungkinkan Anda membaca data sepotong demi sepotong (chunks) alih-alih memuat semuanya ke memori sekaligus.

**Jenis Streams:**
1. **Readable**: Untuk membaca data (misal: `fs.createReadStream`).
2. **Writable**: Untuk menulis data (misal: `fs.createWriteStream`).
3. **Duplex**: Bisa baca dan tulis (misal: TCP sockets).
4. **Transform**: Bisa mengubah data saat lewat (misal: `zlib.createGzip`).

## 🛠️ Lab: Stream Piping
Lihat contoh di [examples/02-streams/pipe.js](../../../examples/02-streams/pipe.js) untuk melihat bagaimana data dialirkan secara efisien.

---
*Kembali ke [BK-03](../README.md)*
