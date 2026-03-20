# Lab: WebSocket Handshake Anatomy

WebSocket dimulai sebagai koneksi HTTP biasa yang kemudian "Ditingkatkan" (Upgraded) menjadi koneksi full-duplex.

## ⚙️ Manual Upgrade in Node.js
Tanpa library (seperti `socket.io`), Anda bisa menangkap event `upgrade` pada server HTTP:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('I am an HTTP server');
});

server.on('upgrade', (req, socket, head) => {
  // 1. Verifikasi Sec-WebSocket-Key
  // 2. Kirim Header Upgrade
  socket.write('HTTP/1.1 101 Switching Protocols\r\n' +
               'Upgrade: websocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');
  
  console.log('WebSocket Handshake Successful');
  
  // 3. Socket kini terbuka untuk komunikasi dua arah
  socket.on('data', (data) => {
      // Decode data (masking) dan proses...
  });
});

server.listen(6000);
```

## 🧠 Mengapa Perlu?
- **Real-time**: Tanpa polling berulang.
- **Efficient**: Header sangat kecil setelah handshake selesai.
- **Bi-directional**: Server bisa mengirim data tanpa diminta client.
