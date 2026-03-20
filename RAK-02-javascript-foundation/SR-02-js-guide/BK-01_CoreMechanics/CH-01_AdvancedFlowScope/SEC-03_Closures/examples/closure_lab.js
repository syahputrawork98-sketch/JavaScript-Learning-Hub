/**
 * LAB: Closures (Persistent Memory)
 * Mental Model: "The Closure Battery"
 */

function createBatteryCell(initialCharge) {
    // Variabel ini "terperangkap" di dalam closure
    let charge = initialCharge;
    
    return {
        useEnergy: function(amount) {
            if (charge >= amount) {
                charge -= amount;
                console.log(`Energi digunakan: ${amount} MW. Sisa: ${charge} MW`);
            } else {
                console.log("Energi TIDAK CUKUP!");
            }
        },
        getCharge: function() {
            return charge;
        }
    };
}

// 1. Inisialisasi Baterai
const myBattery = createBatteryCell(100);

// 2. Penggunaan Energi
myBattery.useEnergy(30);
myBattery.useEnergy(50);

// 3. Persistensi Data
// Meskipun 'createBatteryCell' sudah selesai dieksekusi, 'charge' tetap hidup!
console.log("Total Muatan Terakhir:", myBattery.getCharge(), "MW");

// 4. Isolasi Data
const secondBattery = createBatteryCell(50);
console.log("Baterai Kedua:", secondBattery.getCharge(), "MW (Terpisah dari baterai pertama)");
