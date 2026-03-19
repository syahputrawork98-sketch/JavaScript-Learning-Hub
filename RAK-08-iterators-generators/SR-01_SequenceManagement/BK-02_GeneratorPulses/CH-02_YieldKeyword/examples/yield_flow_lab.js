/**
 * LAB: The yield Keyword (Yield Gate)
 * Mental Model: "The Yield Gate"
 */

function* controlPanel() {
    console.log("[Unit] Menunggu OTORISASI...");
    const pin = yield "Input PIN Required";
    
    if (pin === 888) {
        console.log("[Unit] PIN Valid. Memproses Energi...");
        const confirmed = yield "Authorization Successful. Continue?";
        if (confirmed) {
            console.log("[Unit] Memancarkan Radiasi Energi Penuh!");
            yield 1000;
        }
    } else {
        console.log("[Unit] PIN GAGAL. Shutdown segera.");
    }
}

console.log("--- Mengakses Panel Kontrol ---");
const panel = controlPanel();

// 1. Dapatkan status awal
const step1 = panel.next();
console.log(`Status HUB: ${step1.value}`);

// 2. Berikan PIN
const step2 = panel.next(888); 
console.log(`Status HUB: ${step2.value}`);

// 3. Konfirmasi Kelanjutan
const step3 = panel.next(true);
console.log(`Status HUB: ${step3.value} MW emitted.`);
