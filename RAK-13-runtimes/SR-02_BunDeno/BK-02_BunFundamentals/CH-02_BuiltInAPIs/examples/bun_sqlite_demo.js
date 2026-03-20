/**
 * CH-02: Built-in APIs (Bun Lab)
 * 
 * Lab ini menunjukkan penggunaan Bun:sqlite yang 
 * sudah terintegrasi secara native.
 */

import { Database } from "bun:sqlite";

const db = new Database(":memory:");
const query = db.query("select 'Hello from Zig-powered SQLite' as message");

console.log('--- Bun Native SQLite Lab ---');
console.log(query.get());

/**
 * KEUNGGULAN:
 * Anda tidak butuh 'npm install sqlite3' atau 'npm install better-sqlite3'.
 * Bun sudah membundelnya dalam binary yang dioptimasi untuk kecepatan.
 */
