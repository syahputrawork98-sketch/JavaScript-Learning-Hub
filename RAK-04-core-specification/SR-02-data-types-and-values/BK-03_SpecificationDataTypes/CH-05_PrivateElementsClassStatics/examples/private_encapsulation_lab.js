/**
 * LAB: Private Element Protection and Static Blocks
 * 
 * Eksperimen ini membuktikan enkapsulasi sejati menggunakan Private Fields 
 * (#) dan inisialisasi aman via Static Blocks sesuai Clause 6.2.9.
 */

class HubCircuit {
    // 1. Private Element (Native Encapsulation)
    #secretKey = "0x-SECURE-KEY";
    
    // 2. Static State
    static version = "SR-02";
    
    // 3. Static Initialization Block
    static {
        console.log(">>> Static Block: Initializing Global Hub Context...");
        this.bootTime = Date.now();
    }

    constructor(user) {
        this.user = user;
    }

    // Accessor to private data
    getKey(auth) {
        return auth === "ADMIN" ? this.#secretKey : "Access Denied";
    }
}

// 4. Verification
console.log("\n--- 1. Static Initialization Check ---");
console.log(`Hub Version: ${HubCircuit.version}`);
console.log(`Boot Time: ${HubCircuit.bootTime}`);

console.log("\n--- 2. Private Access Violation ---");
const instance = new HubCircuit("Guest");
console.log(`Public user: ${instance.user}`);
console.log(`Accessing #secretKey directly? ${"instance.#secretKey"}`); 
// console.log(instance.#secretKey); // This would cause a syntax error (detected early)

console.log("\n--- 3. Authorized Access ---");
console.log(`Result (ADMIN): ${instance.getKey("ADMIN")}`);
console.log(`Result (GUEST): ${instance.getKey("GUEST")}`);
