/**
 * LAB: Signal Combining (Logical)
 * Mental Model: "Signal Combining"
 */

const isSensorA_Active = true;
const isSensorB_Active = false;
const isEmergencyOverride = true;

// 1. Gerbang AND (Semua harus Aktif)
const isSystemReady = isSensorA_Active && isSensorB_Active;
console.log("Sinyal Sistem Ready (AND):", isSystemReady);

// 2. Gerbang OR (Salah satu aktif cukup)
const canStartEngine = isSystemReady || isEmergencyOverride;
console.log("Dapat Menyalakan Mesin (OR):", canStartEngine);

// 3. Short-circuit Analysis
console.log("\n--- Analisis Pemutusan Arus (Short-circuit) ---");

false && console.log("Ini tidak akan pernah muncul"); 
true || console.log("Ini juga tidak akan muncul");

// Pola Default
let customSetting = null;
let finalSetting = customSetting || "STANDBY_MODE";
console.log("Setting Akhir (Default Pattern):", finalSetting);

// 4. Inverter (NOT)
console.log("\nStatus Bahaya:", !isSensorA_Active); // Jika Sensor A aktif, bahaya = false
