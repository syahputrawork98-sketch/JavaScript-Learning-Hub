/**
 * CH-13: Well-known Intrinsics (Spec Lab)
 * 
 * Lab ini menunjukkan objek-objek intrinsik yang 
 * menjadi fondasi semua objek di JavaScript.
 */

// %Object.prototype%
const op = Object.prototype;
console.log(`Has toString: ${typeof op.toString}`);

// %Array.prototype%
const ap = Array.prototype;
console.log(`Has push: ${typeof ap.push}`);

/**
 * MENTAL MODEL:
 * Intrinsics adalah "Blueprints" asli yang disimpan aman 
 * di dalam brankas engine. Setiap kali Anda membuat [], 
 * engine mengambil cetakan dari %Array.prototype%.
 */
