/**
 * LAB: Lexical Safety (ASI & Regex)
 */

console.log("--- Mengetes Jebakan Sakelar Otomatis (ASI) ---");

function getPowerLevel() {
    // Jebakan: Baris Baru setelah return
    return 
    {
        level: 9000
    };
}

console.log(`Beban Daya: ${JSON.stringify(getPowerLevel())}`); // Expected: undefined (Triggered ASI)


// Kasus Benar
function getFixedPower() {
    return {
        level: 9000
    };
}
console.log(`Beban Daya (Fixed): ${JSON.stringify(getFixedPower())}`);


console.log("\n--- Mengetes Ambiguitas Pembagi vs Regex ---");

const x = 10;
const y = 2;
console.log(`Hasil Pembagian: ${x / y}`); // / adalah pembagi

const pattern = /10/; // / adalah pembatas regex
console.log(`Pola Ditemukan: ${pattern.test(x)}`);


console.log("\n--- Mengetes Template Tagged (Signal Interceptor) ---");

function energyAlert(strings, ...values) {
    console.log("[INTERCEPT] Mentransmisi sinyal...");
    return `STATUS: ${values[0]} | MSG: ${strings[0]}${strings[1]}`;
}

const unit = "ALPHA";
const alert = energyAlert`Unit ${unit} Terdeteksi!`;
console.log(alert);
