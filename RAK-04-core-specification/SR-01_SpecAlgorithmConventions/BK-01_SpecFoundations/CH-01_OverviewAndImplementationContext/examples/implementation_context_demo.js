/**
 * CH-01: Overview & Implementation Context
 * 
 * Demonstrasi perbedaan antara Inti Bahasa (Core) dan Fitur Lingkungan (Host).
 */

// 1. Core ECMAScript (Pasti sama di mana-mana)
const result = [1, 2, 3].map(x => x * 2);
console.log("Core ECMAScript (Array.map):", result);

// 2. Host-defined (Berbeda tergantung di mana kodenya berjalan)
try {
    // Di Node.js, `process` adalah Host-defined object
    if (typeof process !== 'undefined') {
        console.log("Host Environment: Node.js");
        console.log("Node version:", process.version);
    } 
    // Di Browser, `window` adalah Host-defined object
    else if (typeof window !== 'undefined') {
        console.log("Host Environment: Browser");
        console.log("URL:", window.location.href);
    }
} catch (e) {
    console.log("Host feature not found.");
}

// 3. Implementation-approximated (Presisi Matematika)
// Mesin boleh memberikan hasil yang sangat sedikit berbeda pada operasi sangat kompleks,
// meskipun untuk Math.sin standarnya sangat ketat.
console.log("Math.sin(1):", Math.sin(1));

console.log("\nKesimpulan: Selalu pisahkan logika bisnis (Core) dari manipulasi lingkungan (Host).");
