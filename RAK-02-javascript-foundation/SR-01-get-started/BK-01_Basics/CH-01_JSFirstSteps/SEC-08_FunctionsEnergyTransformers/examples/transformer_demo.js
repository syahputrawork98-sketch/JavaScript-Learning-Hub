/**
 * transformer_demo.js
 * 
 * Demonstrasi pembuatan dan penggunaan fungsi sebagai 
 * unit pemroses energi (transformer).
 */

// 1. Fungsi Tradisional (Energy Calculator)
function calculateMonthlyBill(consumptionWh, pricePerKWh) {
    const consumptionKWh = consumptionWh / 1000;
    return consumptionKWh * pricePerKWh;
}

// 2. Arrow Function (Modern & Concise)
const formatPowerReport = (label, power) => `[${label.toUpperCase()}] Current Load: ${power}kW`;

// 3. Menjalankan Transformer
const usage = 45000; // 45,000 Watt-hours
const rate = 1500;   // Rupiah per kWh

const totalBill = calculateMonthlyBill(usage, rate);
const report = formatPowerReport("Main Hub", 45);

console.log("--- Aktivitas Transformer Hub ---");
console.log(report);
console.log(`Tagihan Energi Bulan Ini: Rp${totalBill.toLocaleString('id-ID')}`);

// 4. Fungsi tanpa Return (Hanya Aksi)
function triggerAlarm(sector) {
    console.log(`\n!!! ALARM: Gangguan Terdeteksi di Sektor ${sector} !!!`);
}

triggerAlarm("Sektor C");
