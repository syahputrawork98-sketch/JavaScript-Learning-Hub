/**
 * LAB: Safety Valves (ES2020)
 * Mental Model: "Safety Valves"
 */

// 1. Data Grid tidak stabil (Partial data)
const gridData = {
    sectorA: {
        sensors: { temperature: 25 }
    },
    sectorB: {
        // Sensors missing!
    }
};

console.log("--- Mengetes Akses Sensor (Optional Chaining) ---");

const getTemp = (sector) => gridData[sector]?.sensors?.temperature ?? "SENSOR_OFFLINE";

console.log(`Sektor A Temp: ${getTemp('sectorA')}`); // 25
console.log(`Sektor B Temp: ${getTemp('sectorB')}`); // SENSOR_OFFLINE
console.log(`Sektor C Temp: ${getTemp('sectorC')}`); // SENSOR_OFFLINE


// 2. Defaulting Logic (Nullish vs Logical OR)
const config = {
    minVoltage: 0, // Nilai valid
    maxVoltage: null
};

console.log("\n--- Mengetes Logika Default (Nullish Coalescing) ---");

// Menggunakan || (Bisa salah jika nilai 0 dianggap falsy)
console.log(`Min Voltage (OR): ${config.minVoltage || 10}`); // 10 (SALAH: 0 ditimpa)

// Menggunakan ?? (Benar: hanya menimpa null/undefined)
console.log(`Min Voltage (Nullish): ${config.minVoltage ?? 10}`); // 0 (BENAR)
console.log(`Max Voltage (Nullish): ${config.maxVoltage ?? 220}`); // 220
