/**
 * PILLAR 1: Internal Environment Record Simulation
 * Simulasi penyimpanan variabel dalam sirkuit lingkungan internal.
 */

class SpecEnvironment {
    constructor() {
        this.bindings = {};
    }

    CreateBinding(name, value) {
        console.log(`Spec: Binding [${name}] created with value [${value}].`);
        this.bindings[name] = value;
    }

    GetBindingValue(name) {
        if (!this.bindings[name]) return "ReferenceError (Spec)";
        return this.bindings[name];
    }
}

const env = new SpecEnvironment();
env.CreateBinding("coreEnergy", 100);
console.log(`Fetch: ${env.GetBindingValue("coreEnergy")}`);
console.log(`Fetch Ghost: ${env.GetBindingValue("void")}`);
