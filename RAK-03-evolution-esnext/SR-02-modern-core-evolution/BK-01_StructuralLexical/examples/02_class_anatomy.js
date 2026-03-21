/**
 * PILLAR 2: Class Anatomy & Prototype Linking
 * Membuktikan bahwa Class modern tetap menggunakan mekanisme prototipe.
 */

class HubNode {
    constructor(id) { this.id = id; }
    ping() { return `Node ${this.id} active`; }
}

const node1 = new HubNode("CORE-01");

console.log("--- Class Anatomy ---");
console.log(node1.ping());

// Proof: Inherited from prototype
console.log(`method 'ping' in instance? ${node1.hasOwnProperty('ping')}`); // false
console.log(`method 'ping' in prototype? ${HubNode.prototype.hasOwnProperty('ping')}`); // true
console.log(`Identity: ${Object.getPrototypeOf(node1) === HubNode.prototype}`); // true
