/**
 * LAB: Descriptor Integrity and Lock Meta-State
 * 
 * Eksperimen ini membedah bagaimana modifikasi atribut descriptor 
 * memengaruhi integritas objek sesuai Clause 6.2.6.
 */

// 1. Defining a Locked Property
console.log("--- 1. Manual Descriptor Lockdown ---");
const secureObj = {};
Object.defineProperty(secureObj, "kernel", {
    value: "V1-GOLD",
    writable: false,
    enumerable: true,
    configurable: false // Cannot be deleted or re-defined
});

console.log(`Kernel: ${secureObj.kernel}`);

// 2. Attempting Mutation
console.log("\n--- 2. Mutation Attempt ---");
secureObj.kernel = "V2-HACK"; // Fails
delete secureObj.kernel;      // Fails
console.log(`Kernel still: ${secureObj.kernel}`);

// 3. Metadata Awareness
console.log("\n--- 3. Descriptor Inspection ---");
const desc = Object.getOwnPropertyDescriptor(secureObj, "kernel");
console.log("Internal Record State:", desc);

// 4. Sealing the Entire Circuit
console.log("\n--- 4. Object.seal() Effect ---");
const app = { port: 8080 };
Object.seal(app); 
// Seal = Configurable: false for ALL properties + PreventExtensions
const appDesc = Object.getOwnPropertyDescriptor(app, "port");
console.log(`Is 'port' configurable after seal? ${appDesc.configurable}`); // false
