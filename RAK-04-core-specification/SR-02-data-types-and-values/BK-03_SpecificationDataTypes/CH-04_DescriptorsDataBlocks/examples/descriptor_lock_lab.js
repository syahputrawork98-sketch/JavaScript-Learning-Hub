/**
 * LAB: Descriptor Integrity
 */
const obj = {};
Object.defineProperty(obj, "k", { value: 1, configurable: false });
delete obj.k;
console.log(`Lock integrity: ${obj.k}`);
