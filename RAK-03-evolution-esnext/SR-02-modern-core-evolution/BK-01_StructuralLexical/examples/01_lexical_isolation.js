/**
 * PILLAR 1: Lexical Isolation (Block Scoping)
 * Membuktikan isolasi ketat let/const dibandingkan var.
 */

console.log("--- Lexical Isolation Test ---");

{
    var leaked = "I am global now";
    let isolated = "I am private";
    const locked = "I am immutable & private";
    console.log(`Inside block: ${isolated}`);
}

console.log(`Outside: leaked = ${leaked}`); 

try {
    console.log(isolated);
} catch (e) {
    console.log(`Outside: isolated = Caught: ${e.message}`);
}
