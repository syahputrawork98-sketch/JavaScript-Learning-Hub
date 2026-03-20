/**
 * LAB: Higher-Order Functions (Orchestrators)
 * Mental Model: "The Orchestrator"
 */

const energyLoads = [100, 250, 400, 50, 600];

// 1. HOF: filter (Penyaringan Sinyal)
const criticalLoads = energyLoads.filter(load => load > 300);
console.log("Beban Kritis (>300):", criticalLoads);

// 2. HOF: map (Transformasi Sinyal)
const boostedLoads = energyLoads.map(load => load * 1.5);
console.log("Beban Setelah Boost (x1.5):", boostedLoads);

// 3. HOF: reduce (Akumulasi Total Energi)
const totalGridEnergy = energyLoads.reduce((total, load) => total + load, 0);
console.log("Total Energi Grid:", totalGridEnergy, "MW");

// 4. Custom HOF (Orchestrator)
function safetyProtocol(load, checkerFunc) {
    return checkerFunc(load) ? "SAFE" : "DANGER";
}

console.log("\n--- Safety Check ---");
const isSafe = safetyProtocol(450, (l) => l < 500);
console.log("Status Load 450:", isSafe);
