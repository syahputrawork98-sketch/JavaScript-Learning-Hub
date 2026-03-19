/**
 * LAB: Async Iterators (Future Energy Streams)
 * Mental Model: "Future Energy Streams"
 */

// Simulasi Sensor Jauh yang lambat
const slowGridSensor = {
    [Symbol.asyncIterator]() {
        let count = 1;
        return {
            async next() {
                // Simulasi delay transmisi 500ms
                await new Promise(resolve => setTimeout(resolve, 500));
                
                if (count <= 3) {
                    return { value: `Packet-${count++}`, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

async function startMonitoring() {
    console.log("--- Memulai Monitoring Sensor Jauh ---");
    
    // Antarmuka ban berjalan asinkron
    for await (const data of slowGridSensor) {
        console.log(`[RECV] Terdeteksi: ${data}`);
    }
    
    console.log("--- Monitoring Selesai. Seluruh data diterima. ---");
}

startMonitoring();
