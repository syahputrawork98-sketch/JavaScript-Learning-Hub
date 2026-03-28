/**
 * LAB: The Message Stream (String Foundations)
 * -------------------------------------------
 * Dalam lab ini, kita akan melihat bagaimana string bekerja sebagai
 * aliran karakter yang tidak bisa diubah (immutable) di Hub Energi.
 */

// --- BAGIAN 1: DEFINISI PESAN ---
console.log("--- Bagian 1: Definisi Pesan ---");

const hubName = "Alpha-Core";          // Single/Double quotes
const status = 'Online';
const report = `Hub: ${hubName}
Status: ${status}
Energy: ${100}%`;                      // Template Literal (Multi-line + Interpolasi)

console.log(report);

// --- BAGIAN 2: BUKTI IMMUTABILITY ---
console.log("\n--- Bagian 2: Sifat Immutable ---");

let message = "Kinetic";
console.log(`Pesan Asli: ${message}`);

// Mencoba mengubah karakter pertama
message[0] = "C"; 
console.log(`Setelah mencoba ubah index [0]: ${message}`); 
// Hasilnya tetap 'Kinetic'! String di JS tidak bisa diubah per karakter.

// Cara yang benar: Membuat string baru
message = "C" + message.slice(1);
console.log(`Pesan Baru (Re-assignment): ${message}`);

// --- BAGIAN 3: ESCAPE SEQUENCES ---
console.log("\n--- Bagian 3: Karakter Khusus ---");

const alertMsg = "WARNING:\tSystem \"Overload\"\nAction:\tShutting down...";
console.log(alertMsg);

// --- BAGIAN 4: INSPEKSI DASAR ---
console.log("\n--- Bagian 4: Inspeksi ---");
console.log(`Panjang Pesan: ${message.length} karakter`);
console.log(`Karakter di index 3: ${message.charAt(3)}`);
console.log(`Unicode karakter ke-1: ${message.charCodeAt(1)}`);
