/**
 * LAB: Generator Dinamis (SR-09 Functions & Methods)
 * 
 * Eksperimen ini membedah unit pembangkit tenaga yang lebih tinggi: 
 * Kelas, Method Accessors, dan Pulsar Generator/Async.
 */

console.log("--- Mengetes Lab Generator Dinamis (Dynamic Generators) ---\n");

// 1. Uji Coba Industrial Blueprint (BK-03)
class PowerStation {
    #id = "ST-01"; // Private Slot
    constructor(voltage) { this.voltage = voltage; }
    get info() { return `Station ${this.#id} at ${this.voltage}V`; }
}
const myHub = new PowerStation(220);
console.log("Blueprint Info:", myHub.info);

// 2. Uji Coba Heritage Chain (BK-03)
class SolarHub extends PowerStation {
    constructor(voltage, panels) {
        super(voltage);
        this.panels = panels;
    }
    get info() {
        return `${super.info} with ${this.panels} solar panels`;
    }
}
const solar = new SolarHub(220, 50);
console.log("Heritage Chain:", solar.info);

// 3. Uji Coba Generator Pulsar (BK-04)
console.log("\n--- Mengetes Siklus Generator Pulsar ---");
function* energyPulsar() {
    yield "PULSE_ALPHA";
    yield "PULSE_BETA";
}
const it = energyPulsar();
console.log("Cycle 1:", it.next().value);
console.log("Cycle 2:", it.next().value);

console.log("\n--- Lab Selesai ---");
