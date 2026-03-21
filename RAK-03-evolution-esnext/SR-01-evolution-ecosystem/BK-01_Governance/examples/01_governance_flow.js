/**
 * PILLAR 1: TC39 Consensus Simulation
 * Simulasi bagaimana delegasi Hub mencapai konsensus untuk sebuah proposal.
 */

const delegates = [
    { name: "Google", vote: "neutral" },
    { name: "Mozilla", vote: "support" },
    { name: "Apple", vote: "support" },
    { name: "Microsoft", vote: "support" }
];

function checkConsensus(proposal, delegates) {
    console.log(`--- Auditing Proposal: ${proposal} ---`);
    
    const opposition = delegates.filter(d => d.vote === "oppose");
    
    if (opposition.length === 0) {
        console.log("CONSENSUS ACHIEVED: No fundamental opposition found.");
        return true;
    } else {
        console.log("CONSENSUS FAILED: Fundamental opposition from " + opposition.map(d => d.name).join(", "));
        return false;
    }
}

checkConsensus("Optional Chaining", delegates);

// Case 2: One delegate opposes
delegates[0].vote = "oppose";
checkConsensus("Experimental API", delegates);
