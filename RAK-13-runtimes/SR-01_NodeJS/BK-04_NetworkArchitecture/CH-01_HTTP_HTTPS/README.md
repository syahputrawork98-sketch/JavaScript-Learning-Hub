# CH-01: HTTP & HTTPS (Web Servers)

Node.js memiliki modul `http` dan `https` yang sangat powerful untuk membuat server tanpa perlu library pihak ketiga seperti Express (meskipun Express tetap populer).

## 🌐 Dasar HTTP Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Vanilla Node.js HTTP Server!');
});

server.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
```

## 🔒 HTTPS (Keamanan)
Modul `https` memerlukan sertifikat SSL/TLS.

```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
  res.end('Koneksi Aman!');
}).listen(443);
```

---
*Kembali ke [BK-04](../README.md)*
