/**
 * PILLAR 1: Uniqueness & Hidden Properties
 * Menggunakan Symbol sebagai kunci properti yang terenkapsulasi.
 */

const SECRET_KEY = Symbol("key");
const obj = {
    publicId: "PUB-001"
};

obj[SECRET_KEY] = "SEC-999";

console.log("--- Property Access ---");
console.log(`Public: ${obj.publicId}`);
console.log(`Secret: ${obj[SECRET_KEY]}`);
console.log(`Direct lookup fail: ${obj["SECRET_KEY"]}`);

console.log("\n--- Visibility Audit ---");
console.log(`Object.keys: ${Object.keys(obj)}`);
console.log(`JSON.stringify: ${JSON.stringify(obj)}`);
console.log(`OwnSymbols: ${Object.getOwnPropertySymbols(obj).map(s => s.description)}`);
