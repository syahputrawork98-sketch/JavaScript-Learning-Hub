# CH-03: WebSockets (Real-time)

WebSockets memungkinkan komunikasi dua arah (Full-Duplex) antara client dan server melalui satu koneksi TCP yang persisten.

## 🚀 Mengapa WebSockets?
Berbeda dengan HTTP yang bersifat Request-Response (Client bertanya, Server menjawab), WebSockets memungkinkan Server mengirim data ke Client secara instan kapan saja.

## 🛠️ Implementasi
Meskipun ada modul `ws`, Node.js mendukung upgrade koneksi dari HTTP secara manual.

```javascript
const http = require('http');
const server = http.createServer();

server.on('upgrade', (req, socket, head) => {
  // Logika handshake WebSocket...
});
```

---
*Kembali ke [BK-04](../README.md)*
