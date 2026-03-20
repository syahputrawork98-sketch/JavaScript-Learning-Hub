/**
 * LAB: String Methods (Replacement Stations)
 * Mental Model: "Replacement Stations"
 */

// 1. Stasiun Penggantian Format (Replace + Groups)
const rawData = "Price: USD 500, Price: USD 1200";
const formatted = rawData.replace(/USD (\d+)/g, "$ $1");

console.log("--- Format Currency Check ---");
console.log(`Original: ${rawData}`);
console.log(`Formatted: ${formatted}`); // Price: $ 500, Price: $ 1200


// 2. Stasiun Masking (Replace with Callback)
const secretLog = "Admin: Syahputra, Key: SECURE_123, Admin: John, Key: PASS_XYZ";
const maskedLog = secretLog.replace(/Key: (\w+)/g, (match, p1) => {
    return "Key: " + "*".repeat(p1.length);
});

console.log("\n--- Masking Data Rahasia ---");
console.log(maskedLog);


// 3. Stasiun Ekstraksi Massal (matchAll)
const multiSignal = "SIG-A:88, SIG-B:99, SIG-C:101";
const signalScanner = /SIG-(?<name>\w):(?<val>\d+)/g;

console.log("\n--- Forensik Sinyal (matchAll) ---");
for (const match of multiSignal.matchAll(signalScanner)) {
    console.log(`[STREAM] Sensor ${match.groups.name} melaporkan intensitas ${match.groups.val}`);
}
