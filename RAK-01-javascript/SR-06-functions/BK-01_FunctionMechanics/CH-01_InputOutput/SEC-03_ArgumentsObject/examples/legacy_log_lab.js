/**
 * LAB: The arguments Object (The Legacy Fuel Log)
 * Mental Model: "The Legacy Fuel Log"
 */

function legacyMonitor() {
    console.log("--- Membaca Buku Log Manual (arguments) ---");
    console.log(`Jumlah Input: ${arguments.length}`);
    
    // Iterasi manual karena bukan array (tidak bisa .forEach)
    for (let i = 0; i < arguments.length; i++) {
        console.log(`  Entri #${i + 1}: ${arguments[i]}`);
    }
}

legacyMonitor("TEMP_HIGH", 85, "SECTOR-B");

// Perbandingan dengan Rest (Modern)
function modernMonitor(...args) {
    console.log("\n--- Membaca Penampung Modern (Rest) ---");
    // Bisa langsung pakai Array API
    args.forEach((item, index) => {
        console.log(`  Unit #${index + 1}: ${item}`);
    });
}

modernMonitor("VOLT_LOW", 190, "SECTOR-A");

// Simulasi Error di Arrow Function
const arrowFail = () => {
    try {
        console.log(arguments);
    } catch (e) {
        console.log("\n[!] KONDIRI ERROR: Arrow Function tidak punya akses ke 'arguments'.");
    }
};

arrowFail();
