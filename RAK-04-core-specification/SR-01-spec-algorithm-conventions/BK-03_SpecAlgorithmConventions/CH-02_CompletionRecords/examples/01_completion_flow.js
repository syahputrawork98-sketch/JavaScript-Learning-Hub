/**
 * PILLAR 1: Completion Records & Throw Logic
 * Simulasi alur [[Type]] 'throw' dan bagaimana ia memutus sirkuit algoritma.
 */

const Completion = (type, value) => ({ "[[Type]]": type, "[[Value]]": value });

function unsafeOp(val) {
    if (val < 0) return Completion("throw", new Error("Spec Break: Negative Value"));
    return Completion("normal", val * 10);
}

const inputs = [5, -1];

inputs.forEach(i => {
    const res = unsafeOp(i);
    console.log(`Input ${i} -> Completion Type: ${res["[[Type]]"]}`);
    if (res["[[Type]]"] === "throw") {
        console.log(`   Message: ${res["[[Value]]"].message}`);
    }
});
