/**
 * LAB: Dynamic Module Loading (ES2022)
 * Note: .mjs required for Top-Level Await
 */

const MODE = "MAINTENANCE"; // Bisa datang dari env
console.log(`[SYSTEM] Menjalankan Hub dalam mode: ${MODE}`);

// 1. Conditional loading dengan Top-Level Await
let tool;
if (MODE === "MAINTENANCE") {
    // Simulasi import modul diagnostik
    const diag = await Promise.resolve({ run: () => "Cleaning pipes..." });
    tool = diag;
} else {
    const prod = await Promise.resolve({ run: () => "Pumping energy..." });
    tool = prod;
}

console.log(`[ACTION] ${tool.run()}`);

export const activeTool = tool;
