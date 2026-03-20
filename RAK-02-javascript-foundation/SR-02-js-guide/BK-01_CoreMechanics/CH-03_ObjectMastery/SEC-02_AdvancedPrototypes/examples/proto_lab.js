/**
 * LAB: Advanced Prototypes (Extensions)
 * Mental Model: "The Master Blueprint"
 */

// 1. Prototype Base Module
function HubComponent(id) {
    this.id = id;
}

HubComponent.prototype.activate = function() {
    console.log(`[Base] Component ${this.id} is ACTIVATING...`);
};

// 2. Specialized Extension
function SensorModule(id, type) {
    HubComponent.call(this, id); // Inherit properti
    this.type = type;
}

// Menghubungkan Proto Chain
SensorModule.prototype = Object.create(HubComponent.prototype);
SensorModule.prototype.constructor = SensorModule;

// Polimorfisme: Override method base
SensorModule.prototype.activate = function() {
    console.log(`[Sensor] ${this.type} sensor (${this.id}) is scanning environment...`);
};

// 3. Testing Chain
const heatSensor = new SensorModule("S-001", "THERMAL");
heatSensor.activate();

console.log("\n--- Prototype Chain Check ---");
console.log("Is heatSensor a SensorModule?", heatSensor instanceof SensorModule);
console.log("Is heatSensor a HubComponent?", heatSensor instanceof HubComponent);
