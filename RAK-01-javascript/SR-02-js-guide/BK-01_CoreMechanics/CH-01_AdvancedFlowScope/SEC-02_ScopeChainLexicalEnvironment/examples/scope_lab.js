/**
 * LAB: Scope Chain & Lexical Environment
 * Mental Model: "Scope Containment"
 */

// Global Hub Environment
const hubID = "GLOBAL-HUB-01";

function powerStation() {
    // Outer Environment
    const stationID = "STATION-X";
    
    function relayModule() {
        // Inner Environment
        const relayID = "RELAY-01";
        
        console.log("--- Scanning Environment ---");
        console.log("Akses Relay ID:", relayID); // Lokal
        console.log("Akses Station ID:", stationID); // Outer (Scope Chain)
        console.log("Akses Hub ID:", hubID); // Global (Scope Chain)
    }
    
    relayModule();
    
    try {
        console.log(relayID); // Error: Tidak bisa mengakses ke dalam (Containment)
    } catch(e) {
        console.log("\nContainment Check: Relay ID tidak dapat diakses dari Station.");
    }
}

powerStation();
