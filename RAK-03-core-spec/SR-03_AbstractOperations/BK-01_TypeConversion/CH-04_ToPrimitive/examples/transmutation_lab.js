/**
 * LAB: Transmutation Chambers (ToPrimitive & ToNumber)
 * Mental Model: "The Base Machinery"
 */

console.log("--- Mengetes Transmutasi Kunci (ToPrimitive) ---");

const customUnit = {
    value: 500,
    name: "REAKTOR_A",
    [Symbol.toPrimitive](hint) {
        console.log(`[SYS] Ruang Transmutasi Menerima Hint: ${hint}`);
        return hint === "string" ? this.name : this.value;
    }
};

console.log(`Operasi Matematika (+): ${+customUnit}`); // 500
console.log(`Operasi Label (Template): ${customUnit}`); // REAKTOR_A


// 2. ToNumber Pitfalls
console.log("\n--- Mengetes Konversi Metrik (ToNumber) ---");
const testToNumber = (val, label) => {
    console.log(`${label.padEnd(10)} -> ${Number(val)}`);
};

testToNumber(null, "Null");           // 0
testToNumber(undefined, "Undefined"); // NaN
testToNumber(true, "True");           // 1
testToNumber(" 42 ", "String Space"); // 42
testToNumber("42n", "BigInt Str");    // NaN (Numeric literal only)


// 3. ToObject Transformation
console.log("\n--- Mengetes Perakitan Mesin (ToObject) ---");
const rawSignal = "PULSE";
// Mengakses properti pada primitif memicu ToObject sementara
console.log(`Panjang Sinyal: ${rawSignal.length}`); 
// Di level spec: length dipanggil pada ToObject("PULSE")
