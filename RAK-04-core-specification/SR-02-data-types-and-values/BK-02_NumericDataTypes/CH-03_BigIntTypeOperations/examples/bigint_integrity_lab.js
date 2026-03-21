/**
 * LAB: BigInt Integrity and Isolation
 * 
 * Eksperimen ini membedah tipe BigInt untuk menangani angka besar 
 * sesuai Clause 6.1.6.2.
 */

// 1. Safely Handling Large IDs
console.log("--- 1. Large ID Integrity ---");
const hugeID_Number = 12345678901234567890; // Too large for Number
const hugeID_BigInt = 12345678901234567890n;
console.log(`ID as Number: ${hugeID_Number}`); // Rounded: 12345678901234567000
console.log(`ID as BigInt: ${hugeID_BigInt}`); // Accurate: 12345678901234567890n

// 2. Mixed Type Restriction
console.log("\n--- 2. Type Isolation Audit ---");
try {
    const error = 10n + 5; // Should throw TypeError
} catch (e) {
    console.log(`Caught Error: ${e.message}`);
}

// 3. Integral Division
console.log("\n--- 3. BigInt Division (Floor/Truncate) ---");
console.log(`5 / 2 (Number): ${5 / 2}`); // 2.5
console.log(`5n / 2n (BigInt): ${5n / 2n}`); // 2n (Truncated)

// 4. Conversion Behavior
console.log("\n--- 4. Explicit Conversion ---");
console.log(`BigInt(10): ${BigInt(10)}n`);
console.log(`Number(10n): ${Number(10n)}`);
