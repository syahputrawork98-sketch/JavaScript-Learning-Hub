/**
 * LAB: Arrow vs Regular Functions
 * Mental Model: "The this Context"
 */

const powerPlant = {
    name: "SOLAR-STATION-A",
    voltage: 220,
    
    // Regular Function: Memiliki 'this' sendiri (Dynamic)
    reportStatus: function() {
        console.log(`[Regular] Unit: ${this.name}, Voltase: ${this.voltage}V`);
    },
    
    // Arrow Function: Mengambil 'this' dari luar (Lexical)
    reportStatusArrow: () => {
        // 'this' di sini merujuk ke Global scope (Node.js Global / Window)
        console.log(`[Arrow] Unit: ${this ? this.name : 'Unknown'}, Voltase: ${this ? this.voltage : '0'}V`);
    },
    
    delayedReport: function() {
        console.log("\n--- Menjalankan Delay Report ---");
        
        // Di dalam setTimeout, regular function kehilangan 'this' originalnya
        setTimeout(function() {
            console.log("[Timeout Regular] This Name:", this ? this.name : "Lost identity");
        }, 100);
        
        // Arrow function mempertahankan 'this' dari delayedReport
        setTimeout(() => {
            console.log("[Timeout Arrow] This Name:", this.name);
        }, 200);
    }
};

powerPlant.reportStatus();
powerPlant.reportStatusArrow();
powerPlant.delayedReport();
