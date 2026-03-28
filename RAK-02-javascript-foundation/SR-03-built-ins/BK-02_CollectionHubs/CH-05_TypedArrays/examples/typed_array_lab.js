/**
 * LAB: The High-Speed Pipeline (TypedArrays)
 * -----------------------------------------
 * Dalam lab ini, kita akan mengelola memori biner mentah menggunakan TypedArrays.
 * Pelajari bagaimana satu blok memori bisa dilihat dengan berbagai kacamata (Views).
 */

// --- BAGIAN 1: MEMBANGUN RESERVOIR (ArrayBuffer) ---
console.log("--- Bagian 1: Alokasi Memori Mentah ---");

// Alokasi 16 byte memori (cukup untuk 16 unit 8-bit atau 4 unit 32-bit)
const buffer = new ArrayBuffer(16);
console.log(`Kapasitas Buffer: ${buffer.byteLength} bytes`);

// --- BAGIAN 2: KACAMATA 8-BIT (Uint8Array) ---
console.log("\n--- Bagian 2: View 8-bit Integer ---");

const uint8 = new Uint8Array(buffer);
uint8[0] = 255; // Nilai max 8-bit
uint8[1] = 128;
uint8[2] = 42;

console.log("Isi Uint8Array:", uint8);

// --- BAGIAN 3: KACAMATA 32-BIT (Float32Array) ---
console.log("\n--- Bagian 3: View 32-bit pada Buffer yang SAMA ---");

// Menempatkan view 32-bit float mulai dari byte ke-0
const float32 = new Float32Array(buffer);
float32[1] = 3.14159; // Ini menempati byte ke-4 hingga ke-7

console.log(`Nilai Float di indeks 1: ${float32[1]}`);
console.log(`Dampak pada Uint8 di byte [4-7]:`, uint8.slice(4, 8));

// --- BAGIAN 4: DATAVIEW (Akses Fleksibel) ---
console.log("\n--- Bagian 4: DataView untuk Kontrol Manual ---");

const view = new DataView(buffer);
// Menulis 16-bit integer di byte ke-10 dengan skema Little-Endian
view.setInt16(10, 5000, true);

console.log(`Hasil Baca Int16 dari Offset 10: ${view.getInt16(10, true)}`);

// --- BAGIAN 5: KASUS PENGGUNAAN (Simulasi Warna) ---
console.log("\n--- Bagian 5: Simulasi Warna RGBA ---");
// RGBA butuh 4 byte (8-bit per channel)
const pixelBuffer = new ArrayBuffer(4);
const rgba = new Uint8Array(pixelBuffer);
rgba[0] = 255; // Red
rgba[1] = 0;   // Green
rgba[2] = 0;   // Blue
rgba[3] = 255; // Alpha (Opaque)

console.log("Warna Merah Pekat (RGBA):", rgba);
