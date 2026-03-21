/**
 * PILLAR 2: Static Initialization Blocks
 * Eksperimen startup kelas atomik.
 */

class HubCore {
    static status = "OFFLINE";
    static {
        console.log("... Booting Hub Systems ...");
        this.status = "ONLINE";
        this.startTime = Date.now();
    }
}

console.log(`Hub Status: ${HubCore.status}`);
console.log(`Boot Time: ${HubCore.startTime}`);
