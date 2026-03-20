/**
 * CH-01: Overview & Implementation Context (Spec Lab)
 * 
 * Lab ini menunjukkan perbedaan antara:
 * 1. Ecma Core (Bahasa Inti)
 * 2. Host-defined (Lingkungan)
 * 3. Implementation-approximated (Presisi Mesin)
 */

console.log('--- 1. Ecma Core (Universal) ---');
console.log(`Type of array: ${typeof []}`); // Selalu 'object' di mana pun

console.log('\n--- 2. Host-defined (Platform Specific) ---');
if (typeof process !== 'undefined') {
    console.log('Environment: Node.js');
    console.log(`OS Platform: ${process.platform}`);
} else if (typeof window !== 'undefined') {
    console.log('Environment: Browser');
    console.log('Accessing DOM... (Host-defined)');
}

console.log('\n--- 3. Implementation-approximated (Engine Precision) ---');
// Presisi Math.sin bisa sedikit berbeda antar mesin (Clause 4.4.1)
const wave = Math.sin(Math.PI / 2);
console.log(`Sine wave peak: ${wave}`);

/**
 * MENTAL MODEL:
 * Jika kode Anda hanya menggunakan bagian 1, kode Anda "Portable".
 * Jika menggunakan bagian 2, kode Anda terikat pada platform tertentu.
 */
