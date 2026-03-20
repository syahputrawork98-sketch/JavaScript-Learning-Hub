/**
 * CH-01: Basic HTTP Server Lab
 * 
 * Program ini menjalankan server web sederhana tanpa library luar.
 */

const http = require('http');

const PORT = 3005;

const server = http.createServer((req, res) => {
  const url = req.url;
  
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Welcome to Node.js Networking Lab!", path: url }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`HTTP Server berjalan di: http://localhost:${PORT}`);
  
  // Menutup server secara otomatis setelah 5 detik untuk kebutuhan demonstrasi/lab
  setTimeout(() => {
    console.log('Menutup server lab...');
    server.close();
  }, 5000);
});
