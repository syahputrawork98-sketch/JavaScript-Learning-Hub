/**
 * LAB: Destructuring Assignment (The Unpacking Station)
 * Mental Model: "The Unpacking Station"
 */

// 1. Unpacking Object (Config Hub)
const hubResponse = {
    unitID: "ALPHA-1",
    metrics: {
        temp: 45,
        load: 0.7
    },
    protocols: ["FIREWALL", "AUTH"]
};

// Mengambil unitID dan temp (nested destructuring)
const { unitID, metrics: { temp } } = hubResponse;
console.log(`[Status] Unit ${unitID} Suhu: ${temp}°C`);

// 2. Unpacking Array (Signal Sequence)
const signalLog = ["INIT", "ACTIVE", "READY"];
const [start, state] = signalLog; // Mengambil 2 elemen pertama
console.log(`[Signal] Prosedur dimula dari ${start} ke status ${state}`);

// 3. Default Values (Safety Net)
const dataRusak = { id: "BETA" };
const { id, status = "OFFLINE" } = dataRusak;
console.log(`[Audit] Unit ${id} Status: ${status} (Default data applied)`);

// 4. Practical: Destructuring in Function Params
function reportStatus({ unitID, status = "STABLE" }) {
    console.log(`\n--- LAPORAN OTOMATIS: ${unitID} is ${status} ---`);
}
reportStatus(hubResponse);
