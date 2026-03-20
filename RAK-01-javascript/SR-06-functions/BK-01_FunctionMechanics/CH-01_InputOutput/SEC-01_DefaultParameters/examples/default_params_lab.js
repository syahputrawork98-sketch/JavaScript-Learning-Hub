/**
 * LAB: Default Parameters (Backup Fuel)
 * Mental Model: "The Backup Fuel"
 */

// 1. Fungsi dengan Default Statis
function setFanSpeed(speed = "AUTO") {
    console.log(`Radiator Fan Speed: ${speed}`);
}

setFanSpeed("MAX"); // MAX
setFanSpeed();      // AUTO

// 2. Fungsi dengan Default Dinamis (Expression)
function generateSerial() {
    return "SN-" + Math.floor(Math.random() * 1000);
}

function registerModule(name, serial = generateSerial()) {
    console.log(`Module [${name}] registered with Serial: ${serial}`);
}

registerModule("Solar-XP");
registerModule("Wind-Gen", "MANUAL-001");

// 3. Destructuring + Default (Advanced Safety)
function createReport({ target = "All", priority = "Low" } = {}) {
    console.log(`Generating report for ${target} with priority ${priority}`);
}

createReport({ target: "Engine-Room" });
createReport(); // Berkat default {}, ini tidak akan error
