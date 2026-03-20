/**
 * LAB: Class Reinforcement (Core Lockdown)
 */

class EnergyReactor {
    // 1. Private Fields (#)
    #securityKey = "TOP_SECRET_123";
    #temp = 400;

    constructor(name) {
        this.name = name;
    }

    // 2. Private Method
    #validateAccess(key) {
        return key === this.#securityKey;
    }

    getReport(key) {
        if (!this.#validateAccess(key)) return "ACCESS_DENIED";
        return `[REPORT] Sensor: ${this.name}, Temperature: ${this.#temp}C`;
    }
}

// 3. Static Initialization Block
class GlobalGrid {
    static registry;
    static {
        console.log("[STATIC] Mengatur Registry Sektor Global...");
        this.registry = ["S-1", "S-2", "S-3"];
    }
}

console.log("--- Mengetes Keamanan Reaktor ---");
const r1 = new EnergyReactor("Reactor-Alpha");

console.log(r1.getReport("WRONG")); // Access Denied
console.log(r1.getReport("TOP_SECRET_123")); // Success

// Test .at()
const nodes = ["Node-1", "Node-2", "Node-Terminate"];
console.log(`\nNode Terakhir: ${nodes.at(-1)}`);
