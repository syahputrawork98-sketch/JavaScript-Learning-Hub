/**
 * LAB: Lexical Scoping (Internal Factory Wiring)
 * Mental Model: "Internal Factory Wiring"
 */

const mainGridLoad = 5000; // Global

function factoryRoom() {
    const roomLoad = 1000;
    
    function machineUnit() {
        const machineLoad = 200;
        
        console.log("--- Diagnostic: Machine Unit ---");
        console.log(`Global Access: ${mainGridLoad} MW`); // OK
        console.log(`Room Access: ${roomLoad} MW`);       // OK (Lexical Parent)
        console.log(`Machine Local: ${machineLoad} MW`);   // OK
    }
    
    machineUnit();
    
    console.log("\n--- Diagnostic: Factory Room ---");
    try {
        console.log(`Can see machineLoad? ${machineLoad}`);
    } catch (e) {
        console.log("[!] AKSES DITOLAK: Room tidak bisa melihat kabel ke dalam Machine.");
    }
}

factoryRoom();
