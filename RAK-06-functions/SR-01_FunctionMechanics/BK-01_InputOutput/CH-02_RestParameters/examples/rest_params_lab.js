/**
 * LAB: Rest Parameters (The Collector Bins)
 * Mental Model: "The Collector Bins"
 */

// 1. Pengumpul Beban Listrik Dinamis
function calculateLoad(zoneName, ...loads) {
    const total = loads.reduce((sum, current) => sum + current, 0);
    console.log(`Zone: ${zoneName}`);
    console.log(`  Units Count: ${loads.length}`);
    console.log(`  Total Impact: ${total} MW`);
}

calculateLoad("North-Grid", 100, 250, 50, 30);
calculateLoad("South-Grid", 1000); // Hanya satu unit tetap tertampung di array

// 2. Multi-argument Logger
function systemLog(level, ...messages) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] [${level}] ${messages.join(" | ")}`);
}

systemLog("INFO", "Hub Connected", "Stable", "Volt: 220V");
systemLog("ERROR", "Core Overheat");

// 3. Filter Data Masuk
function getHighEnergySources(threshold, ...sources) {
    return sources.filter(s => s.output > threshold);
}

const filtered = getHighEnergySources(
    500, 
    { name: "Solar", output: 300 },
    { name: "Nuclear", output: 2500 },
    { name: "Hydro", output: 800 }
);

console.log("\nSources meeting threshold:", filtered.map(f => f.name));
