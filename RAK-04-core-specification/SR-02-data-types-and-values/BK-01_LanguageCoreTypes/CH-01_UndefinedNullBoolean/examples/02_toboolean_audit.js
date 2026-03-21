/**
 * PILLAR 2: ToBoolean Conversion & Falsy Audit
 * Eksperimen terhadap Abstract Operation ToBoolean (Clause 7.1.2).
 */

const falsyValues = [undefined, null, false, 0, -0, 0n, "", NaN];
const truthyValues = [" ", "false", [], {}, 1, -1];

console.log("--- Falsy Audit ---");
falsyValues.forEach(v => {
    console.log(`Value [${v}] is Boolean: ${Boolean(v)}`);
});

console.log("\n--- Truthy Surprises ---");
truthyValues.forEach(v => {
    console.log(`Value [${JSON.stringify(v) || v.toString()}] is Boolean: ${Boolean(v)}`);
});
