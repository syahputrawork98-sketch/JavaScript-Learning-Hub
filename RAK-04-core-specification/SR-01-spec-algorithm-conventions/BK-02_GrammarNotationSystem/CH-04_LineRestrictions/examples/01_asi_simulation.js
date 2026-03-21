/**
 * PILLAR 1: Automatic Semicolon Insertion (ASI)
 * Simulasi bagaimana Hub memasukkan titik koma pada batas baris tertentu.
 */

function simulateASI(line1, line2) {
    console.log(`--- Lines: [${line1}] [${line2}] ---`);
    
    // Rule: Restricted Production (return [no LineTerminator here] Expression)
    if (line1.trim() === "return") {
        console.log("ASI Triggered: return is followed by LineTerminator.");
        return "return; \n " + line2;
    }
    
    return line1 + " " + line2;
}

console.log(simulateASI("return", "x + 1"));
console.log(simulateASI("x =", "10"));
