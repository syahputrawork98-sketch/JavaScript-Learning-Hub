/**
 * CH-02: Number Type (Spec Lab)
 * 
 * Lab ini menunjukkan representasi bit internal dari 
 * Number (IEEE 754 Double Precision).
 */

function inspectBits(number) {
    const buffer = new ArrayBuffer(8);
    new Float64Array(buffer)[0] = number;
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = bytes.length - 1; i >= 0; i--) {
        binary += bytes[i].toString(2).padStart(8, '0');
    }
    return binary;
}

const value = 1.0;
const bits = inspectBits(value);

console.log(`Value: ${value}`);
console.log(`Bits (64-bit):`);
console.log(`S |   Exponent (11-bit)   |          Mantissa (52-bit)`);
console.log(`${bits[0]} | ${bits.substring(1, 12)} | ${bits.substring(12)}`);

/**
 * MENTAL MODEL:
 * Angka di JS disimpan sebagai 64 kotak kecil (bit). 
 * 1 untuk Tanda, 11 untuk Ukuran (Eksponen), 
 * dan 52 untuk Detail (Mantissa).
 */
