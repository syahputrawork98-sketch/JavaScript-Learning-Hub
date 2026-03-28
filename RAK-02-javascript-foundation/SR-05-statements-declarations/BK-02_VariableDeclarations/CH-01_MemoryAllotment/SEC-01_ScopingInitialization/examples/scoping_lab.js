/**
 * LAB: Scoping & Initialization (The Storage Zones)
 * Mental Model: "The Storage Zones"
 */

// 1. Block Scope (Let & Const)
{
    const secureEnergy = "CORE-FUSION";
    let tempEnergy = 500;
    
    console.log("Inside Secure Block:");
    console.log(`  Source: ${secureEnergy}`);
    console.log(`  Level: ${tempEnergy}`);
    
    tempEnergy += 200; // Update baterai (let) OK
    console.log(`  Updated Level: ${tempEnergy}`);
    
    // secureEnergy = "HYDRO"; // Error! Baterai const tidak bisa diganti core-nya.
}

try {
    console.log(secureEnergy); // Error! Data terkunci di dalam ruangan {}
} catch (e) {
    console.log("\n[!] AKSES DITOLAK: Energi di dalam blok tidak bisa dijangkau dari luar.");
}


// 2. Hoisting & Var (The Old Way)
console.log("\n--- Testing Old Var Technology ---");
console.log(`Status Var: ${oldVar}`); // Undefined (Hoisted but empty)
var oldVar = "Legacy Energy";

try {
    console.log(hoistedLet);
} catch (e) {
    console.log("[!] PROTEKSI AKTIF: 'let' tidak bisa diakses sebelum diletakkan (TDZ).");
}
let hoistedLet = "Modern Energy";
