/**
 * LAB: Connection Scoping (Relational)
 * Mental Model: "Connection Scoping"
 */

class HubComponent {
    constructor(name) {
        this.name = name;
    }
}

const solarPanel = new HubComponent("SP-V1");
const simpleNode = { port: 80 };

// 1. Operator 'in' (Pemindai Port)
console.log("--- Pengecekan Port (in) ---");
console.log("Apakah 'port' ada di simpleNode?", "port" in simpleNode); // true
console.log("Apakah 'id' ada di simpleNode?", "id" in simpleNode); // false
console.log("Apakah 'name' ada di solarPanel?", "name" in solarPanel); // true

// 2. Operator 'instanceof' (Verifikator Blueprint)
console.log("\n--- Verifikasi Blueprint (instanceof) ---");
console.log("Apakah solarPanel adalah HubComponent?", solarPanel instanceof HubComponent); // true
console.log("Apakah simpleNode adalah HubComponent?", simpleNode instanceof HubComponent); // false

// 3. Relational Strings & Numbers
console.log("\n--- Perbandingan Relasional ---");
console.log("Apakah 10 > 5?", 10 > 5);
console.log("Apakah 'apple' < 'banana'?", "apple" < "banana"); // true (Alpabetis)
