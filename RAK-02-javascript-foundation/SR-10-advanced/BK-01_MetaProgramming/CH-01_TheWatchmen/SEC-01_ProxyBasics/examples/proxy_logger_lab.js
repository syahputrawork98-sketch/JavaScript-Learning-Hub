/**
 * LAB: Proxy Logging (The Watchman Tracker)
 * Mental Model: "The Interceptor" - Monitoring Phase
 */

const sensitiveData = {
    apiKey: "HUB-XYZ-123",
    lastLogin: "2026-03-19",
    accessLevel: 5
};

const loggingHandler = {
    get(target, prop) {
        const value = target[prop];
        console.log(`[WATCHMAN-LOG] Akses properti '${prop}': ${value}`);
        return value;
    },
    deleteProperty(target, prop) {
        console.warn(`[WATCHMAN-ALERT] Percobaan penghapusan properti '${prop}' dicegat!`);
        return false; // Mencegah penghapusan
    }
};

const monitoredData = new Proxy(sensitiveData, loggingHandler);

console.log("--- Memulai Pemantauan Data Sensitif ---");

// Test Get Logging
const key = monitoredData.apiKey;
const level = monitoredData.accessLevel;

// Test Delete Prevention
delete monitoredData.apiKey;
console.log(`Status API Key setelah delete: ${monitoredData.apiKey}`);
