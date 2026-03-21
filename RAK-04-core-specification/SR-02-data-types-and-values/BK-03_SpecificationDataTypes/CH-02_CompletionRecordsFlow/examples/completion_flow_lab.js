/**
 * LAB: Completion Record Propagation and Catch Transition
 * 
 * Eksperimen ini mensimulasikan bagaimana Completion Records (Normal vs Abrupt) 
 * bekerja di balik layar kontrol aliran sesuai Clause 6.2.4.
 */

// 1. Completion Record Factory
const Completion = (type, value) => ({ type, value });

// 2. Simulated Function with Abrupt Completion
function simulatedLogic(energy) {
    if (energy <= 0) {
        console.log("! Detecting Critical Failure (Throw Signal)");
        return Completion("throw", new Error("Baterai Habis"));
    }
    return Completion("normal", energy * 2);
}

// 3. Simulated Try-Catch Dispatcher
function runWithCatch(energyInput) {
    console.log(`\n--- Running with Energy: ${energyInput} ---`);
    let record = simulatedLogic(energyInput);

    if (record.type === "throw") {
        console.log("? Catching Abrupt Completion...");
        // Recovery logic: Transition from 'throw' back to 'normal'
        record = Completion("normal", 0); 
        console.log(`Record Status: ${record.type} (Recovered to 0)`);
    } else {
        console.log(`Record Status: ${record.type} (Value: ${record.value})`);
    }
}

runWithCatch(10);
runWithCatch(0);
