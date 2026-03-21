/**
 * PILLAR 2: Shorthand Simulation (?, !)
 * Simulasi operator 'ReturnIfAbrupt' (?) dan jaminan sukses (!).
 */

function ReturnIfAbrupt(completion) {
    if (completion["[[Type]]"] !== "normal") {
        console.log(`[?] Bubbling up: ${completion["[[Type]]"]}`);
        return completion; 
    }
    return completion["[[Value]]"];
}

const abruptResult = { "[[Type]]": "throw", "[[Value]]": "Internal Error" };
const normalResult = { "[[Type]]": "normal", "[[Value]]": 42 };

console.log("--- Operation Execution ---");
const val = ReturnIfAbrupt(normalResult);
console.log(`Result of [?]: ${val}`);

ReturnIfAbrupt(abruptResult);
