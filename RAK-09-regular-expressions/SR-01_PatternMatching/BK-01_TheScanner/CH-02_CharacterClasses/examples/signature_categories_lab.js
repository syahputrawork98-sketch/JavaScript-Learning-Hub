/**
 * LAB: Character Classes (Signature Categories)
 * Mental Model: "Signature Categories"
 */

const rawLog = "LOG_ID: A-99 | STATUS: ALERT | TEMP: 45.2C | TIME: 10:30";

console.log("--- Membedah Log Grid ---");

// 1. Ekstrak Digit (Suhu & ID)
const digits = rawLog.match(/\d+/g);
console.log("Digit Ditemukan:", digits); // ["99", "45", "2", "10", "30"]

// 2. Ekstrak Kata Kunci (Alfanumerik)
const tags = rawLog.match(/[A-Z_]+/g);
console.log("Label Utama:", tags); // ["LOG_ID", "A", "STATUS", "ALERT", "TEMP", "C", "TIME"]

// 3. Mengidentifikasi Spasi (Cleanup simulation)
const spaceScanner = /\s/g;
const cleanLog = rawLog.replace(spaceScanner, "_");
console.log("Log Terkompresi:", cleanLog);

// 4. Negasi: Ambil apa pun kecuali spasi dan garis tegak
const contentOnly = rawLog.match(/[^\s|]+/g);
console.log("Konten Tanpa Separator:", contentOnly);
