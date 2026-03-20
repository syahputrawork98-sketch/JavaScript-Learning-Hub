/**
 * CH-02: TCP/UDP (Echo Server Lab)
 * 
 * Lab ini menunjukkan komunikasi level rendah (Layer 4)
 * menggunakan modul 'net'.
 */

const net = require('net');

// Membuat TCP Server
const server = net.createServer((socket) => {
    console.log('--- Client Connected ---');
    
    // Menanggapi data yang masuk
    socket.on('data', (data) => {
        console.log(`Received: ${data}`);
        socket.write(`Echo: ${data}`); // Kirim balik (Echo)
    });

    socket.on('end', () => console.log('Client Disconnected.'));
});

server.listen(5000, '127.0.0.1', () => {
    console.log('TCP Echo Server is active on 127.0.0.1:5000');
});

/**
 * CARA TES:
 * Gunakan perintah 'telnet 127.0.0.1 5000' atau 'nc 127.0.0.1 5000'
 * Ketik apa saja, dan server akan menjawab.
 */
