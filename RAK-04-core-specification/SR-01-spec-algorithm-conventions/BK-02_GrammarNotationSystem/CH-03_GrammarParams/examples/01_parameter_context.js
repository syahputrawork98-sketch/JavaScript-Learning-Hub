/**
 * PILLAR 1: Parameterized Productions ([+Yield], [~Await])
 * Simulasi bagaimana konteks fungsi (Generator/Async) mengubah aturan tata bahasa.
 */

function validateGrammar(context, token) {
    console.log(`--- Context: ${context} ---`);
    if (token === "yield") {
        return context === "GENERATOR" ? "VALID: Yield is a keyword" : "INVALID: Yield is an identifier";
    }
    if (token === "await") {
        return context === "ASYNC" ? "VALID: Await is a keyword" : "INVALID: Await is an identifier";
    }
    return "Neutral Token";
}

console.log(validateGrammar("NORMAL", "yield"));
console.log(validateGrammar("GENERATOR", "yield"));
console.log(validateGrammar("ASYNC", "await"));
