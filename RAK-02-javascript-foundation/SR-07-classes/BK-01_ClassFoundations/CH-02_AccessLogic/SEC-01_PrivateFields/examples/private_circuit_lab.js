/**
 * LAB: Private Fields (Internal Circuitry)
 * Mental Model: "Internal Circuitry"
 */

class SecureEnergyVault {
    #accessCode = "123-456"; // Private Field
    #storedEnergy = 1000;    // Private Field

    constructor(initialDeposit) {
        this.#storedEnergy = initialDeposit;
    }

    // Jalur akses publik resmi
    withdraw(amount, code) {
        if (code !== this.#accessCode) {
            console.log("[!] ALARM: Kode Akses Tidak Valid!");
            return 0;
        }

        if (amount > this.#storedEnergy) {
            console.log("[!] System: Energi di dalam vault tidak mencukupi.");
            return 0;
        }

        this.#storedEnergy -= amount;
        console.log(`[OK] Berhasil menarik ${amount} MW.`);
        return amount;
    }

    getBalance() {
        return `Current Vault Status: [REDACTED] MW (Protected)`;
    }
}

const myVault = new SecureEnergyVault(5000);

console.log("--- Mencoba Mengintip Sirkuit Internal ---");
console.log(`Saldo (Via Getter Resmi): ${myVault.getBalance()}`);
// console.log(myVault.#storedEnergy); // Inilah yang akan menyebabkan ERROR jika di-uncomment

console.log("\n--- Simulasi Penarikan Energi ---");
myVault.withdraw(200, "999-999"); // Salah kode
myVault.withdraw(500, "123-456"); // Benar kode
