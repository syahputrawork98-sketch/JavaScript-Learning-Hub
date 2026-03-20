/**
 * LAB: Quality Control Sensors (Strict vs Loose Equality)
 */

console.log("--- Mengetes Sensor Fleksibel (==) vs Presisi (===) ---");

const testEquality = (x, y) => {
    console.log(`Bandingkan [${typeof x}: ${x}] vs [${typeof y}: ${y}]`);
    console.log(`  Sensor Fleksibel (==) : ${x == y}`);
    console.log(`  Sensor Presisi (===) : ${x === y}`);
};

testEquality(0, false);     // true, false
testEquality(null, undefined); // true, false
testEquality("123", 123);   // true, false


// 2. Anomali NaN
console.log("\n--- Mengetes Anomali Sinyal Error (NaN) ---");
const signal = NaN;
console.log(`Sinyal === Dirinya sendiri? ${signal === signal}`); // false
console.log(`Deteksi via Object.is: ${Object.is(signal, NaN)}`); // true (SameValue)


// 3. Sensor Identitas (SameValueZero)
console.log("\n--- Mengetes Pemindai Identitas (Zero Bias) ---");
const map = new Map();
map.set(-0, "NEGATIVE_SIDE");
console.log(`Akses via 0: ${map.get(0)}`); // NEGATIVE_SIDE
// SameValueZero (Map/Set) menganggap +0 dan -0 sama.


// 4. The Strange Case of [] == ![]
console.log("\n--- Master Challenge: [] == ![] ---");
console.log(`Hasil: ${[] == ![]}`); // true
/* 
   Spec Logic:
   1. ![] -> false
   2. [] == false -> ToNumber(false) = 0
   3. [] == 0 -> ToPrimitive([]) = ""
   4. "" == 0 -> ToNumber("") = 0
   5. 0 == 0 -> true
*/
