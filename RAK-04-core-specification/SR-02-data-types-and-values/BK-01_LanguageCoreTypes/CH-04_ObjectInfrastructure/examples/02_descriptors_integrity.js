/**
 * PILLAR 2: Property Descriptors & Integrity
 * Mengontrol metadata properti (Writable, Enumerable, Configurable).
 */

const system = {};

Object.defineProperty(system, "KERNEL_VERSION", {
    value: "4.2.0",
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(`Kernel: ${system.KERNEL_VERSION}`);

// Attempt modify
system.KERNEL_VERSION = "5.0.0";
console.log(`After modify attempt: ${system.KERNEL_VERSION}`);

// Attempt delete
delete system.KERNEL_VERSION;
console.log(`After delete attempt: ${system.KERNEL_VERSION}`);
