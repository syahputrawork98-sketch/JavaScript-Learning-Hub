/**
 * LAB: Recursion (The Fractal Engine)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Factorial (The Multiplier Chain)
// Perhitungan bertingkat: n * (n-1) * (n-2)...
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base Case
    return n * factorial(n - 1);     // Recursive Step
}

console.log("Factorial of 5:", factorial(5)); // 120
console.log("---");

// 2. Lanjutan: Fibonacci Sequence (The Growth Pattern)
const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

console.log("Fibonacci Position 7:", fib(7)); // 13
console.log("---");

// 3. Arsitektur: Deep Search (The Tree Explorer)
// Mencari nilai di dalam objek yang memiliki kedalaman tidak diketahui.
const hubNetwork = {
    id: "ROOT",
    subHubs: [
        { id: "NORTH-BRANCH", subHubs: [] },
        { 
            id: "SOUTH-BRANCH", 
            subHubs: [
                { id: "ENERGY-CORE", status: "ACTIVE" }
            ] 
        }
    ]
};

function findHubById(network, targetId) {
    // 1. Check current node
    if (network.id === targetId) return network;
    
    // 2. Recursive step: Check children
    if (network.subHubs) {
        for (let child of network.subHubs) {
            const result = findHubById(child, targetId);
            if (result) return result;
        }
    }
    
    return null; // Not found in this branch
}

const target = "ENERGY-CORE";
const foundNode = findHubById(hubNetwork, target);
console.log(`Searching for [${target}]...`);
console.log(foundNode ? `Found node: ${foundNode.id} | Status: ${foundNode.status}` : "Node not found.");

console.log("---");

// 4. Architect Warning: Finite Recursion
function countdown(n) {
    if (n < 0) return; // Base Case
    console.log(`System shutdown in ${n}...`);
    countdown(n - 1);
}

countdown(3);
