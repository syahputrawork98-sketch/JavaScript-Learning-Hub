/**
 * PILLAR 1: Completion Propagation Simulation
 * Simulasi alur [[Type]] 'normal' vs 'abrupt' (throw/return).
 */

const Completion = (type, value) => ({ "[[Type]]": type, "[[Value]]": value });

function executeStep(val) {
    if (val < 0) return Completion("throw", new Error("Negative Input"));
    if (val === 0) return Completion("return", "Early Exit");
    return Completion("normal", val * 2);
}

const steps = [5, 0, -1];

steps.forEach(s => {
    const res = executeStep(s);
    console.log(`Input ${s} -> Completion Type: ${res["[[Type]]"]}, Value: ${res["[[Value]]"]}`);
});
