# CH-02: TCP & UDP (Net & Dgram)

Untuk aplikasi yang membutuhkan latensi rendah atau kontrol protokol sendiri, Node.js menyediakan modul `net` (TCP) dan `dgram` (UDP).

## 🕸️ TCP (Stream-based)
Digunakan untuk komunikasi yang andal (reliabel), menjamin data sampai secara berurutan.

```javascript
const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Halo dari TCP Server\n');
  socket.on('data', (data) => {
    console.log('Diterima:', data.toString());
  });
});

server.listen(8080);
```

## ⚡ UDP (Datagrams)
Digunakan untuk kecepatan maksimal tanpa jaminan pengiriman (misal: Video Streaming, Gaming).

```javascript
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Pesan dari ${rinfo.address}:${rinfo.port}: ${msg}`);
});

server.bind(41234);
```

---
*Kembali ke [BK-04](../README.md)*
