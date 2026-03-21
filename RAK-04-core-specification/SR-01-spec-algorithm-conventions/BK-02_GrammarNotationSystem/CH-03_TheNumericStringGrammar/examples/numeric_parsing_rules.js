/**
 * CH-03: The Numeric String Grammar
 * 
 * Melakukan validasi string apakah bisa dikonversi menjadi angka.
 */

const tests = ["123", "0xAF", "0b101", "0o77", "12n", "0xGG", "hello"];

function validateNumericString(str) {
  console.log(`\nValidating: "${str}"`);
  
  // 1. Check Hex (0x...)
  if (/^0x[0-9a-fA-F]+$/i.test(str)) {
    console.log("✅ Match: HexadecimalDigits");
    return;
  }

  // 2. Check Binary (0b...)
  if (/^0b[01]+$/i.test(str)) {
    console.log("✅ Match: BinaryDigits");
    return;
  }

  // 3. Check Octal (0o...)
  if (/^0o[0-7]+$/i.test(str)) {
    console.log("✅ Match: OctalDigits");
    return;
  }

  // 4. Check BigInt suffix (n)
  if (/^\d+n$/.test(str)) {
    console.log("✅ Match: BigIntLiteral");
    return;
  }

  // 5. Check Decimal
  if (/^\d+(\.\d+)?(e[+-]?\d+)?$/.test(str)) {
    console.log("✅ Match: DecimalDigits");
    return;
  }

  console.log("❌ Error: Does not match any NumericString grammar production.");
}

console.log("--- Numeric Grammar Validation ---");
tests.forEach(validateNumericString);

/**
 * ARCHITECT INSIGHT:
 * Numeric String Grammar berbeda dengan Lexical Grammar biasa.
 * Grammar ini digunakan secara khusus saat Anda memanggil `Number("string")`.
 * Jika string tidak sesuai dengan aturan di CH-03 -> Hasilnya adalah NaN.
 */
