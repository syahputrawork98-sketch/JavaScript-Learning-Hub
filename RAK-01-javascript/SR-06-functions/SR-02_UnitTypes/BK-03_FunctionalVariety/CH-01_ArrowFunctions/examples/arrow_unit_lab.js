/**
 * LAB: Arrow Functions (Compact Specialized Units)
 * Mental Model: "The Compact Unit"
 */

// 1. Konsistensi 'this' (Self-Repairing Sensor)
const repairUnit = {
    id: "REP-01",
    tasks: ["Check Cables", "Verify Output"],
    
    // Regular Function: 'this' bocor ke global di dalam setTimeout
    runRegular: function() {
        setTimeout(function() {
            console.log("\n--- REGULAR ATTEMPT ---");
            console.log(`Unit ${this.id} starting...`); // Error: id undefined
        }, 100);
    },

    // Arrow Function: 'this' tetap merujuk ke repairUnit
    runArrow: function() {
        setTimeout(() => {
            console.log("\n--- ARROW ATTEMPT ---");
            console.log(`Unit ${this.id} starting... OK!`); // Berhasil!
        }, 200);
    }
};

repairUnit.runRegular();
repairUnit.runArrow();


// 2. Ringkasnya Transformasi (Signal Processing)
const rawSignals = [10, 20, 30, 40, 50];

// Sangat bersih untuk pemrosesan data satu baris
const ampSignals = rawSignals.map(s => s * 1.5).filter(s => s > 30);

console.log("\nProcessed Signals (Arrow Pipeline):", ampSignals);
