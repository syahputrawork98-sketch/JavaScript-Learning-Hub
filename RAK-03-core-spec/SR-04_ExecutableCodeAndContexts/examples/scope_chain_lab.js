/**
 * LAB: Scope Chains & Shadowing (The Outer Link)
 */

console.log("--- Mengetes Jalur Kabel (Scope Chain) ---");

const hubZone = "CENTRAL_CONTROL";

function outerUnit() {
    const backupId = "B-99";
    
    function innerUnit() {
        // Shadowing: Membuat kabel dengan nama yang sama di baki yang lebih tinggi
        const hubZone = "SECTOR_ALPHA_LOCAL";
        
        console.log(`Lokasi Sekarang: ${hubZone}`); // Menggunakan kabel terdekat
        console.log(`ID Cadangan: ${backupId}`);    // Merogoh ke Outer Link (outerUnit)
    }
    
    innerUnit();
}

outerUnit();


// 2. Closure Persistence (The Eternal Link)
console.log("\n--- Mengetes Ketahanan Kabel (Closure) ---");

function createTerminal(terminalId) {
    // Variable ini hidup di Environment Record function context
    return function logAccess() {
        // Meskipun baki createTerminal sudah dibuang dari Stack, 
        // baki logAccess tetap memegang 'Pipa Outer Link' ke gudangnya.
        console.log(`[ACCESS] Terminal ${terminalId} mencatat aktivitas.`);
    }
}

const term1 = createTerminal("HUB_001");
const term2 = createTerminal("HUB_002");

term1();
term2();
term1();
