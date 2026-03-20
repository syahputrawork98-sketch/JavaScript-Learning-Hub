/**
 * LAB: The this Keyword (Power Source)
 * Mental Model: "The Power Source"
 */

// 1. Method Binding (Direct Source)
const solarHub = {
    model: "X-200",
    checkStatus: function() {
        return `Hub Model: ${this.model}`;
    }
};
console.log(solarHub.checkStatus()); // 'this' merujuk ke solarHub

// 2. Explicit Binding (Re-routing)
const windHub = { model: "W-50" };
const externalCheck = solarHub.checkStatus;

// Menggunakan .call untuk memaksa 'this' merujuk ke windHub
console.log("Re-routed Status:", externalCheck.call(windHub)); 

// 3. Lost Binding (Disconnected)
const disconnected = solarHub.checkStatus;
console.log("Disconnected Status:", disconnected()); // Hub model: undefined

// 4. Practical Example: Auto-bind with .bind
const securedCheck = solarHub.checkStatus.bind(solarHub);
setTimeout(securedCheck, 100); // Tetap aman meskipun dipanggil via callback
