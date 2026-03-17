/**
 * CH-08: The Boolean Type & Objects
 * 
 * Demonstrasi Primitive Boolean vs Boolean Object 
 * dan aturan Truthy/Falsy.
 */

// 1. Primitive Boolean
const isReady = true;
const isDone = false;
console.log("Tipe isReady (Primitive):", typeof isReady);

// 2. Bahaya Boolean Object (WRONG PRACTICE)
const falseObj = new Boolean(false);
console.log("Tipe falseObj (Object):", typeof falseObj);

// Objek (sekalipun membungkus 'false') selalu TRUTHY!
if (falseObj) {
    console.log("BUG DETECTED: Objek 'new Boolean(false)' dianggap TRUE oleh mesin JS!");
}

// 3. Konversi ToBoolean (Truthy/Falsy)
function checkTruthy(val) {
    return !!val ? "TRUTHY" : "FALSY";
}

const falsySamples = [0, "", null, undefined, NaN, false];
console.log("Daftar Falsy:");
falsySamples.forEach(f => console.log(`- Value [${f}] is ${checkTruthy(f)}`));

const truthySamples = [{}, [], " ", 42, -1];
console.log("\nDaftar Truthy:");
truthySamples.forEach(t => console.log(`- Value [${JSON.stringify(t) || t.toString()}] is ${checkTruthy(t)}`));

// 4. Architect Wisdom: Explicit comparison
const count = 0;
// Buruk: if (count) { ... } -> 0 dianggap falsy, mungkin bukan itu niatnya.
// Baik: if (count > 0) { ... } atau if (count !== undefined) { ... }

console.log("\nBoolean Concept Verified: Hindari Boolean Object, pahami Falsy.");
