/**
 * LAB: The Dead Line & Empty Socket (Undefined & Null)
 */

console.log("--- Mengetes Kondisi Jalur Grid ---");

// 1. Undefined Case
let lineA; // Belum diisi daya
console.log(`Status Jalur A: ${lineA}`);

// 2. Null Case
let socketB = { battery: "LI-ION" };
socketB = null; // Dicabut sengaja
console.log(`Status Soket B: ${socketB}`);

// 3. ToBoolean Testing (The Switch)
console.log("\n--- Mengetes Logika Sakelar (Truthy/Falsy) ---");
const testSwitch = (val, name) => {
    console.log(`Input ${name} (${val}): ${Boolean(val) ? "GRID_ON 🟢" : "GRID_OFF 🔴"}`);
};

testSwitch(undefined, "Undefined");
testSwitch(null, "Null");
testSwitch(0, "Numeric Zero");
testSwitch("", "Empty String");
testSwitch({}, "Empty Object");


// 4. String Immutability
console.log("\n--- Mengetes Ketahanan Pulsa (String) ---");
let msg = "VOLTAGE_STABLE";
msg[0] = "X"; // Gagal diam-diam (non-strict)
console.log(`Hasil Modifikasi String: ${msg} (Tidak Berubah)`);
