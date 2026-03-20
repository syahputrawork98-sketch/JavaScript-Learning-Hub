/**
 * CH-03: Drop-in Reliability (Bun Lab)
 * 
 * Lab ini membuktikan kompatibilitas Bun terhadap 
 * API warisan Node.js.
 */

// Menggunakan modul core Node.js di Bun
import fs from "node:fs";
import path from "node:path";

console.log('--- Node.js Compatibility Lab in Bun ---');

// Global Node.js yang tersedia di Bun
console.log(`__dirname:  ${__dirname}`);
console.log(`Platform:   ${process.platform}`);

// Operasi FS standar Node.js
const content = fs.readFileSync(__filename, "utf8");
console.log(`Read self (${path.basename(__filename)}) successful.`);

/**
 * MENTAL MODEL:
 * Bun menyediakan "Polyfill" tingkat native untuk hampir 
 * semua API Node.js. Anda bisa memindahkan proyek Node.js 
 * ke Bun tanpa mengubah satu baris kode pun (seringkali).
 */
