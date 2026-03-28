/**
 * LAB: Lexical Scoping (The Containment Units)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Accessing Outer Scope
const globalSignal = "INTERNET-BACKBONE";

function regionalHub() {
    const regionalSignal = "LOCAL-FIBER";

    function terminalNode() {
        // Inner unit bisa mengakses semua lapisan di atasnya
        console.log(`Connected to: ${globalSignal} via ${regionalSignal}`);
    }

    terminalNode();
}

regionalHub();
console.log("---");

// 2. Efek Shadowing (Variable Overlap)
// Variabel lokal 'menutupi' variabel luar dengan nama yang sama.
const version = "v1.0.0";

function updateFirmware() {
    const version = "v2.5.0-ALPHA"; // Shadowing occurs
    console.log("Current Firmware inside function:", version);
}

updateFirmware();
console.log("Global Firmware status:", version); // Tetap v1.0.0
console.log("---");

// 3. Static Nature (Scope is born at definition)
const energyType = "Solar";

function reportEnergy() {
    console.log(`Current Energy Source: ${energyType}`);
}

function nuclearPowerPlant() {
    const energyType = "Nuclear";
    // Meskipun dipanggil di dalam lingkungan 'Nuclear', 
    // reportEnergy() tetap setia pada lingkup 'Solar' tempat ia dilahirkan.
    reportEnergy(); 
}

nuclearPowerPlant(); // Output: Solar
console.log("---");

// 4. Architect Drill: Nested Scope Chain
function deepLevelAudit() {
    const level1 = "A";
    
    return function() {
        const level2 = "B";
        
        return function() {
            const level3 = "C";
            console.log(`Auditing Sequence: ${level1} -> ${level2} -> ${level3}`);
        };
    };
}

const step1 = deepLevelAudit();
const step2 = step1();
step2(); // Akses ke level 1, 2, dan 3 tetap terjaga
