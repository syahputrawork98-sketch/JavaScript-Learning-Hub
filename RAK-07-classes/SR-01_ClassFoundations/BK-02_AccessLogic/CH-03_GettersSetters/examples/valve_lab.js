/**
 * LAB: Getters & Setters (Regulation Valves)
 * Mental Model: "Regulation Valves"
 */

class HeatRegulator {
    #celsius = 25;

    constructor(initialTemp) {
        this.#celsius = initialTemp;
    }

    // Katup Baca (Getter)
    get temperature() {
        return `${this.#celsius}°C`;
    }

    get fahrenheit() {
        return `${(this.#celsius * 9/5) + 32}°F`;
    }

    // Katup Tulis (Setter) - Dengan Filter Keamanan
    set temperature(newValue) {
        if (newValue > 100) {
            console.warn("[!] BAHAYA: Suhu melebihi batas didih! Menurunkan ke 100 secara otomatis.");
            this.#celsius = 100;
        } else if (newValue < -50) {
            console.warn("[!] BAHAYA: Suhu terlalu beku! Menaikkan ke -50 secara otomatis.");
            this.#celsius = -50;
        } else {
            this.#celsius = newValue;
            console.log(`[Update] Suhu diatur ke ${newValue}°C`);
        }
    }
}

const ac = new HeatRegulator(25);

console.log(`--- Laporan Suhu Awal ---`);
console.log(`Status: ${ac.temperature} / ${ac.fahrenheit}`);

console.log(`\n--- Mencoba Mengubah Arus Suhu ---`);
ac.temperature = 35;   // Normal
ac.temperature = 150;  // Terlalu panas
ac.temperature = -200; // Terlalu dingin

console.log(`\nLaporan Akhir: ${ac.temperature}`);
