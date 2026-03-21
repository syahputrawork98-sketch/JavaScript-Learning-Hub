/**
 * CH-07: The Undefined & Null Types
 * 
 * Demonstrasi perbedaan semantik antara Undefined dan Null.
 */

// 1. Undefined (Absence by Default)
let unassigned; // Otomatis undefined
function noReturn() {} // Mengembalikan undefined secara implisit

console.log("Variabel tanpa nilai:", unassigned);
console.log("Fungsi tanpa return:", noReturn());

// 2. Null (Absence by Intent)
let user = null; // Kita sengaja bilang: "User belum ada"
console.log("User sengaja dikosongkan:", user);

// 3. Persamaan & Perbedaan (Equality)
console.log("undefined == null:", undefined == null);   // true (Loose equality: sama-sama 'kosong')
console.log("undefined === null:", undefined === null); // false (Strict equality: tipe berbeda!)

// 4. Keanehan typeof
console.log("typeof undefined:", typeof undefined); // "undefined" (Akurat)
console.log("typeof null:", typeof null);           // "object" (Legacy Bug!)

// 5. Penggunaan dalam Praktik (Architect Perspective)
const person = {
    name: "Syahputra",
    spouse: null, // Kita tahu dia single (eksplisit kosong)
    // job: undefined // Sebaiknya jangan lakukan ini, biarkan saja propertinya tidak ada
};

console.log(`Status: ${person.spouse === null ? "Single" : "Married"}`);
console.log(`Pekerjaan: ${person.job === undefined ? "Tidak Diketahui" : person.job}`);

console.log("Undefined vs Null Verified: Gunakan Null untuk sinyal eksplisit.");
