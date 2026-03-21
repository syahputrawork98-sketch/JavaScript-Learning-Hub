/**
 * CH-16: Own vs Inherited Properties
 * 
 * Demonstrasi perbedaan deteksi harta milik sendiri vs warisan.
 */

// 1. Setup Prototype Chain
const parent = {
    surname: "Syahputra",
    greet() { return "Halo dari leluhur"; }
};

const child = Object.create(parent);
child.name = "Budi"; // Own Property

// 2. Deteksi Dasar
console.log("--- Deteksi Properti ---");
console.log("Apakah 'name' ada di child?", "name" in child);       // true (Own)
console.log("Apakah 'surname' ada di child?", "surname" in child); // true (Inherited)

// 3. Membedakan Own vs Inherited
console.log("\n--- Own Property Check ---");
// Method Modern: Object.hasOwn
console.log("Is 'name' OWN property?", Object.hasOwn(child, "name"));       // true
console.log("Is 'surname' OWN property?", Object.hasOwn(child, "surname")); // false

// 4. Konsep Shadowing (Penutupan)
child.surname = "Pratama"; // Menciptakan OWN property dengan nama yang sama
console.log("\n--- Shadowing Result ---");
console.log("Child Surname (Own shadow):", child.surname); // "Pratama"
console.log("Parent Surname (Original):", parent.surname); // "Syahputra" (Tetap aman)

// 5. Iterasi for...in (Hati-hati: Inherited Properties ikut muncul!)
console.log("\n--- for...in Loop ---");
for (let key in child) {
    if (Object.hasOwn(child, key)) {
        console.log(`- ${key}: (OWN)`);
    } else {
        console.log(`- ${key}: (INHERITED)`);
    }
}

console.log("\nOwn vs Inherited Verified: Gunakan Object.hasOwn() untuk keamanan data.");
