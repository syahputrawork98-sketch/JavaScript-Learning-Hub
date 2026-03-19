/**
 * CH-02: Stream Pipe Lab
 * 
 * Program ini menyalin file besar dengan sangat hemat memori.
 */

const fs = require('fs');
const path = require('path');

const source = __filename;
const destination = path.join(__dirname, 'copy-of-script.js');

// Cara lama (Loading full memory)
// fs.readFile(source, (err, data) => fs.writeFile(destination, data, () => {}));

// Cara baru (Streaming - Chunks)
const readStream = fs.createReadStream(source);
const writeStream = fs.createWriteStream(destination);

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File berhasil disalin menggunakan Stream Pipe!');
  
  // Hapus file copy setelah selesai demonstrasi
  fs.unlinkSync(destination);
});
