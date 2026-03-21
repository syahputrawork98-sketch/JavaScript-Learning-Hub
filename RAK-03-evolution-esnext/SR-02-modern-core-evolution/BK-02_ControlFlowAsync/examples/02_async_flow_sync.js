/**
 * PILLAR 2: Async/Await Sequential Flow
 * Menunjukkan bagaimana await mensimulasikan aliran sekuensial.
 */

async function fetchHubData(id) {
    console.log(`Step 1: Requesting Node [${id}]...`);
    // Simulated delay
    return new Promise(r => setTimeout(() => r({ id, energy: 100 }), 100));
}

async function startAudit() {
    console.log("--- Audit Started ---");
    
    // Aliran terlihat sinkron tapi sebenarnya suspensif
    const data = await fetchHubData("A-99");
    console.log(`Step 2: Data Received -> Energy: ${data.energy}`);
    
    console.log("--- Audit Finished ---");
}

startAudit();
