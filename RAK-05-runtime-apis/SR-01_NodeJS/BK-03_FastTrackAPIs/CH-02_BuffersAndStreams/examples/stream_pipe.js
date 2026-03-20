/**
 * CH-02: Buffers & Streams (Pipe Lab)
 * 
 * Lab ini menunjukkan efisiensi penggunaan Stream dibanding 
 * pembacaan file biasa (fs.readFile) untuk file besar.
 */

const fs = require('fs');
const http = require('http');

// Membuat server yang menyajikan file besar via Stream
http.createServer((req, res) => {
    console.log('--- Request Received: Using Streams ---');
    
    // Aliran data (Stream) dari file ke response (Writable Stream)
    // res adalahWritable Stream yang dikirim ke browser
    const stream = fs.createReadStream('./large_file.txt');
    
    // .pipe() menghubungkan kran air (Readable) ke ember (Writable)
    stream.pipe(res);
    
    stream.on('end', () => console.log('Streaming finished.'));
}).listen(3000);

/**
 * MENTAL MODEL:
 * readFile: Membaca seluruh buku ke otak (RAM) dulu baru bicara.
 * Streams: Membaca kata demi kata dan langsung mengucapkannya.
 * RAM aman, performa terjaga.
 */
