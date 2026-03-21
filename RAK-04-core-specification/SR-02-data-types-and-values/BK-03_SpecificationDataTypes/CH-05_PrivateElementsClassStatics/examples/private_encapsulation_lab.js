/**
 * LAB: Private Elements
 */
class Hub {
    #key = "secret";
    static { console.log("Static boot..."); }
    getKey() { return this.#key; }
}
const h = new Hub();
console.log(`Private access: ${h.getKey()}`);
