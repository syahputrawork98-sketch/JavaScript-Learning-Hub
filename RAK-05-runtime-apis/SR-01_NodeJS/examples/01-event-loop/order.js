/**
 * CH-01: Event Loop Order Lab
 * 
 * Jalankan file ini dengan: node order.js
 * Perhatikan urutan output untuk memahami prioritas eksekusi.
 */

console.log('1. Script Start (Sync)');

setTimeout(() => {
  console.log('2. setTimeout (Timer Phase)');
}, 0);

setImmediate(() => {
  console.log('3. setImmediate (Check Phase)');
});

process.nextTick(() => {
  console.log('4. process.nextTick (microTask - High Priority)');
});

Promise.resolve().then(() => {
  console.log('5. Promise (microTask)');
});

fs_read_lab();

function fs_read_lab() {
  const fs = require('fs');
  fs.readFile(__filename, () => {
    console.log('6. I/O Read (Poll Phase)');
    
    // Di dalam Poll Phase, setImmediate selalu jalan duluan dibanding setTimeout
    setTimeout(() => {
      console.log('7. Final setTimeout (Timer Phase)');
    }, 0);
    
    setImmediate(() => {
      console.log('8. Final setImmediate (Check Phase)');
    });
  });
}

console.log('9. Script End (Sync)');
