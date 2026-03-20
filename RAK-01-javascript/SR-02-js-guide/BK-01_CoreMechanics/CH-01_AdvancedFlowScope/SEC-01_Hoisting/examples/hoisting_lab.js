/**
 * LAB: Hoisting (Lifting the Pins)
 * Mental Model: "Lifting the Pins"
 */

// 1. Function Hoisting (The Blueprint Lift)
// Kita bisa memanggil generator bahkan sebelum didefinisikan secara eksplisit.
console.log("Status Generator:", checkGenerator()); 

function checkGenerator() {
    return "ONLINE";
}

// 2. Variable Hoisting (The 'var' Leak)
// var didefinisikan sebagai undefined di bagian atas sirkuit.
console.log("Voltase (var):", voltage); // undefined
var voltage = 220;
console.log("Voltase Sekarang:", voltage); // 220

// 3. Temporal Dead Zone (The 'let/const' Guard)
try {
    console.log("Current (let):", current); // ReferenceError
} catch (e) {
    console.log("Error Terdeteksi:", e.message);
}
let current = 10;
console.log("Current Sekarang:", current);
