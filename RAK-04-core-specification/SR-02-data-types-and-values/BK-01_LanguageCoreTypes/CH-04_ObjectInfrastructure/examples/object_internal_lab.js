/**
 * LAB: Object Internal Methods and Exotic Behaviors
 */
const hub = { energy: 100 };
const exoticHub = new Proxy(hub, {
    get(target, prop) {
        console.log(`[[Get]] Trap: ${prop}`);
        return target[prop];
    }
});
console.log(exoticHub.energy);
Object.defineProperty(hub, "coreID", { value: "0xFFFF", writable: false });
hub.coreID = "0";
console.log(`coreID: ${hub.coreID}`);
console.log(`{} === {}: ${{} === {}}`);
