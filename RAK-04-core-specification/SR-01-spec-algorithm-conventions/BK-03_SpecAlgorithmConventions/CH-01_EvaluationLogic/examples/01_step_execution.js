/**
 * PILLAR 1: Step Execution Simulation
 * Simulasi bagaimana Hub mengeksekusi algoritma secara berurutan.
 */

function SpecAlgorithm(input) {
    console.log("--- Start Algorithm Execution ---");
    
    // Step 1: Validate input
    console.log("1. Validating input...");
    if (typeof input !== "number") return "Type Error (Spec)";

    // Step 2: Transform input (Mathematical Value)
    console.log("2. Converting to Mathematical Value (MV)...");
    let mv = input; // Abstract simulation

    // Step 3: Calculation step
    console.log("3. Performing core calculation...");
    let result = mv * 2;

    // Step 4: Finalize
    console.log("4. Finalizing and returning value.");
    return result;
}

console.log(`Result: ${SpecAlgorithm(21)}`);
