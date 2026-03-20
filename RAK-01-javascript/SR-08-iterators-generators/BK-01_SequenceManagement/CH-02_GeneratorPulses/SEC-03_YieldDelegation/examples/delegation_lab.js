/**
 * LAB: yield* (Pulse Delegation)
 * Mental Model: "Pulse Delegation"
 */

function* checkBattery() {
    console.log("[Module] Scanning Battery...");
    yield "Batt: 85%";
    yield "Batt: OK";
}

function* checkNetwork() {
    console.log("[Module] Scanning Network...");
    yield "Net: Stable";
    yield "Net: Latency 10ms";
}

function* globalDiagnostic() {
    console.log("--- Memulai Diagnostik Hub ---");
    
    // Delegasi ke Battery
    yield* checkBattery();
    
    // Delegasi ke Network
    yield* checkNetwork();
    
    // Delegasi ke Array Sederhana
    console.log("[Module] Finalizing...");
    yield* ["Final-Report-Signed", "System-Healthy"];
    
    console.log("--- Diagnostik Selesai ---");
}

const scanner = globalDiagnostic();

for (const step of scanner) {
    console.log("Received Pulse:", step);
}
