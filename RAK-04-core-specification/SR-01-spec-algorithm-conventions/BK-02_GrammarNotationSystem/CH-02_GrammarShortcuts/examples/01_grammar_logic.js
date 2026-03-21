/**
 * PILLAR 1: Optionality and OneOf Logic
 * Simulasi aturan tata bahasa Hub yang memiliki komponen opsional.
 */

// Rule: Statement : Expression? ;
function parseStatement(tokens) {
    if (tokens.length === 0) return "Empty Statement (Legal)";
    return `Expression Statement: ${tokens.join(" ")}`;
}

console.log("--- Optionality Simulation ---");
console.log(`Input empty: ${parseStatement([])}`);
console.log(`Input x + 1: ${parseStatement(["x", "+", "1"])}`);

// Rule: Literal :: BooleanLiteral | NullLiteral
const literals = ["true", "false", "null"];
function isLiteral(t) {
    return literals.includes(t) ? "Match: OneOf Literacy" : "No Match";
}

console.log(`\nCheck 'true': ${isLiteral("true")}`);
console.log(`Check 'obj': ${isLiteral("obj")}`);
