/**
 * PILLAR 1: Internal Methods & Proxy Traps
 * Membedah bagaimana [[Get]] dan [[Set]] bekerja pada Exotic Objects.
 */

const coreData = { energy: 100 };

const secureHub = new Proxy(coreData, {
    get(target, prop) {
        console.log(`[[Get]] intercept for: ${prop}`);
        return prop in target ? target[prop] : "NULL_SECTOR";
    },
    set(target, prop, value) {
        if (value < 0) throw new Error("Energy cannot be negative");
        console.log(`[[Set]] intercept for: ${prop} = ${value}`);
        target[prop] = value;
        return true;
    }
});

console.log(`Access: ${secureHub.energy}`);
console.log(`Unknown: ${secureHub.status}`);
secureHub.energy = 50;
