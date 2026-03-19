/**
 * LAB: Extends (Model Series)
 * Mental Model: "Model Series"
 */

// Model Dasar (Blueprint Umum)
class GridModule {
    constructor(id) {
        this.id = id;
        this.load = 0;
    }

    status() {
        console.log(`[STATUS] ${this.id}: ${this.load} MW`);
    }
}

// Upgrade Model: Solar Module
class SolarModule extends GridModule {
    // Mewarisi constructor dan metode status()
    collectSunlight() {
        this.load += 50;
        console.log(`[${this.id}] Menyerap energi matahari... (+50MW)`);
    }
}

// Upgrade Model: Wind Module
class WindModule extends GridModule {
    captureWind() {
        this.load += 80;
        console.log(`[${this.id}] Menangkap angin... (+80MW)`);
    }
}

console.log("--- Inisialisasi Seri Model Baru ---");

const solarX = new SolarModule("SOL-A1");
const windX = new WindModule("WIN-B2");

solarX.collectSunlight();
windX.captureWind();

console.log("\nLaporan Terpadu:");
solarX.status();
windX.status();
