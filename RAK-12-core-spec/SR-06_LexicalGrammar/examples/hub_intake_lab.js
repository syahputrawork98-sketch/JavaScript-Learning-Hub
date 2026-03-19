/**
 * LAB: Hub Intake (Literals & Tokens)
 */

console.log("--- Mengetes Tangki Beban (Numeric Literals) ---");

const industrialLoad = 1_000_000_000_000n; // BigInt with separators
const hexSignal = 0xABC_DEF;                // Hex with separators

console.log(`Load Industri (Parsed): ${industrialLoad}`);
console.log(`Sinyal Hex (Parsed): ${hexSignal}`);


console.log("\n--- Mengetes Sinyal Fleksibel (Template Literals) ---");

const unitId = "UNIT-X";
const status = "STANDBY";

// Interpolasi + Multi-line
const report = `[STATUS REPORT]
Unit: ${unitId}
Power: ${status}
Path: ${String.raw`C:\Archive\Logs\UnitX`} (Mode Raw)`;

console.log(report);


console.log("\n--- Mengetes Sakelar Pintar (Punctuators) ---");

let config = { 
    main: { frequency: 50 },
    // backup: { frequency: 60 }
};

// Optional Chaining (?. ) -> Menghindari Arus Pendek (Error)
const fallbackFreq = config.backup?.frequency ?? 10;
console.log(`Frekuensi Cadangan: ${fallbackFreq} Hz`);
