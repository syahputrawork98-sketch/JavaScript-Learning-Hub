/**
 * CH-03: EventEmitter (Observer Lab)
 * 
 * Lab ini menunjukkan cara kerja pola Observer di Node.js.
 */

const EventEmitter = require('events');

class RadioStation extends EventEmitter {}

const station = new RadioStation();

// 1. Berlangganan (Subscribe)
station.on('broadcast', (data) => {
    console.log(`[Listener A] Receiving message: ${data}`);
});

station.once('alert', () => {
    console.log('[Listener B] Alert received once! (Self-destructing)');
});

// 2. Mengirim (Emit)
console.log('--- Initializing Broadcast ---');
station.emit('broadcast', 'Energy is flowing');
station.emit('alert', 'System Overload!');
station.emit('alert', 'System Overload 2!'); // Tidak akan muncul karena .once

/**
 * MENTAL MODEL:
 * EventEmitter adalah menara radio. 
 * .on() adalah menyetel radio ke frekuensi tertentu.
 * .emit() adalah menyiarkan pesan dari menara.
 */
