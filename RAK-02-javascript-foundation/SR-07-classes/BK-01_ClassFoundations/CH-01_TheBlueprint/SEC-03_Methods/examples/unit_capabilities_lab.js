/**
 * LAB: Methods (Unit Capabilities)
 * Mental Model: "Operational Modules"
 */

class SmartHub {
    constructor(name) {
        this.name = name;
        this.isOnline = false;
        this.securityLevel = 1;
    }

    // Module: Power Toggle
    bootUp() {
        this.isOnline = true;
        console.log(`[${this.name}] Systems Online. Security set to Level ${this.securityLevel}`);
    }

    // Module: Security Upgrade
    upgradeSecurity() {
        if (this.securityLevel < 5) {
            this.securityLevel++;
            console.log(`[${this.name}] Security upgraded to Level ${this.securityLevel}`);
        } else {
            console.log(`[${this.name}] Security already at MAX level.`);
        }
    }

    // Module: Status Report
    report() {
        return `HUB ${this.name}: ${this.isOnline ? 'ACTIVE' : 'OFFLINE'} (Sec: ${this.securityLevel})`;
    }
}

const hub01 = new SmartHub("ALPHA-GRID");

console.log("--- Mengetes Kemampuan Unit ---");
console.log(hub01.report());

hub01.bootUp();
hub01.upgradeSecurity();
hub01.upgradeSecurity();

console.log("\nLaporan Akhir:");
console.log(hub01.report());
