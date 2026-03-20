/**
 * LAB: Closures & Currying (The Currying Station)
 * Mental Model: "The Currying Station"
 */

// 1. Basic Currying: Power Calculator
function createLoadCalculator(ratePerMW) {
    return function(megawatts) {
        return ratePerMW * megawatts;
    };
}

const industrialRate = createLoadCalculator(150); // Setting rate sekali
const residentialRate = createLoadCalculator(85);

console.log("--- Energy Cost Calculation ---");
console.log(`Pabrik A (500MW): $${industrialRate(500)}`);
console.log(`Rumah B (10MW): $${residentialRate(10)}`);


// 2. Modern Currying with Arrow Functions
const sensorLogger = (zone) => (level) => (msg) => {
    console.log(`[${zone}] [${level}] Sensor Data: ${msg}`);
};

const northZoneLog = sensorLogger("NORTH-GRID");
const northAlert = northZoneLog("CRITICAL");

northAlert("Overheat on Unit 5");
northZoneLog("NORMAL")("Stable flow detected");


// 3. Encapsulation (Private Memory)
function createEnergyLock() {
    let _lockedEnergy = 1000; // Variable privat
    
    return {
        check: () => _lockedEnergy,
        use: (amount) => {
            if (amount <= _lockedEnergy) {
                _lockedEnergy -= amount;
                return true;
            }
            return false;
        }
    };
}

const vault = createEnergyLock();
console.log("\nVault Balance:", vault.check());
vault.use(300);
console.log("Vault Balance after use:", vault.check());
