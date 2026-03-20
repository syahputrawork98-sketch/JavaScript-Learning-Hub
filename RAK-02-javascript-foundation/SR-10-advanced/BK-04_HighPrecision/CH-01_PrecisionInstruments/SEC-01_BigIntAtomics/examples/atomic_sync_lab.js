/**
 * LAB: Atomic Sync (Grid Traffic Light)
 * Mental Model: "High-Precision Instruments" - Synchronization
 */

// Menyiapkan buffer untuk status (0 = Green, 1 = Red)
const buffer = new SharedArrayBuffer(4);
const status = new Int32Array(buffer);

console.log("--- Simulasi Lampu Lalu Lintas Grid (Atomics) ---");

// 1. Operasi Pertukaran (Exchange) secara Atomik
const oldStatus = Atomics.exchange(status, 0, 1); // Ubah index 0 menjadi 1
console.log(`Status lama: ${oldStatus === 0 ? "GREEN" : "RED"}`);
console.log(`Status baru: ${Atomics.load(status, 0) === 1 ? "RED" : "GREEN"}`);

// 2. Compare and Swap (Safe Update)
// Hanya ubah ke 0 jika nilai saat ini adalah 1
const swappedValue = Atomics.compareExchange(status, 0, 1, 0);
console.log(`Berhasil dikembalikan ke GREEN? ${swappedValue === 1 ? "YA" : "TIDAK"}`);
console.log(`Nilai Real-time: ${Atomics.load(status, 0)}`);

// 3. Penambahan Atomik (Hitung Beban)
Atomics.add(status, 0, 500);
console.log(`Beban terdaftar: ${Atomics.load(status, 0)} units.`);
