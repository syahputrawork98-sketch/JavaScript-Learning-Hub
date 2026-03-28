/**
 * LAB: The Conveyor Belt (Array Iteration)
 * ---------------------------------------
 * Dalam lab ini, kita akan memproses data Hub menggunakan paradigma fungsional.
 * Pelajari bagaimana Map, Filter, dan Reduce mengubah cara kita mengelola kargo.
 */

const sensorData = [
    { id: "S1", temp: 25, status: "Active" },
    { id: "S2", temp: 35, status: "Active" },
    { id: "S3", temp: 50, status: "Critical" },
    { id: "S4", temp: 20, status: "Inactive" },
    { id: "S5", temp: 45, status: "Active" }
];

// --- BAGIAN 1: FILTERING (Penyaringan) ---
console.log("--- Bagian 1: Filter Sensor Aktif ---");
const activeSensors = sensorData.filter(sensor => sensor.status === "Active");
console.log(`Jumlah Sensor Aktif: ${activeSensors.length}`);

// --- BAGIAN 2: MAPPING (Transformasi) ---
console.log("\n--- Bagian 2: Map Nilai Temperatur ---");
// Ambil hanya angka temperatur dan konversi ke Fahrenheit
const tempsF = sensorData.map(sensor => (sensor.temp * 9/5) + 32);
console.log(`Temperatur (F): ${tempsF}`);

// --- BAGIAN 3: REDUCING (Agregasi) ---
console.log("\n--- Bagian 3: Reduce Rata-rata Temperatur ---");
const totalTemp = sensorData.reduce((sum, sensor) => sum + sensor.temp, 0);
const avgTemp = totalTemp / sensorData.length;
console.log(`Rata-rata Suhu Hub: ${avgTemp}°C`);

// --- BAGIAN 4: FINDING (Pencarian Spesifik) ---
console.log("\n--- Bagian 4: Mencari Sensor Kritis ---");
const criticalSensor = sensorData.find(sensor => sensor.temp > 40);
console.log(`Sensor Kritis Ditemukan: ${criticalSensor.id} (${criticalSensor.temp}°C)`);

// --- BAGIAN 5: VALIDATION (Some & Every) ---
console.log("\n--- Bagian 5: Validasi Sistem ---");
const isAnyOverheating = sensorData.some(sensor => sensor.temp > 60);
const areAllOnline = sensorData.every(sensor => sensor.status !== "Offline");

console.log(`Ada yang overheat (>60)? ${isAnyOverheating}`);
console.log(`Apakah semua tidak offline? ${areAllOnline}`);

// --- BAGIAN 6: SIDE EFFECTS (forEach) ---
console.log("\n--- Bagian 6: Eksekusi Tugas per Sensor ---");
sensorData.forEach(sensor => {
    if (sensor.status === "Active") {
        console.log(`> Menyiapkan transmisi data untuk ${sensor.id}... [OK]`);
    }
});
