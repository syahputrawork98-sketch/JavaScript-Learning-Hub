/**
 * LAB: Point Interaction (Unary)
 * Mental Model: "Point Interaction"
 */

const component = {
    id: "UNIT-01",
    type: "Solar",
    output: 500
};

// 1. Typeof: Sensor Tipe
console.log("--- Diagnosa Komponen ---");
console.log("Tipe 'component':", typeof component);
console.log("Tipe 'component.id':", typeof component.id);
console.log("Tipe 'component.output':", typeof component.output);

// 2. Delete: Pemutus Kabel
console.log("\n--- Menghapus Port Output ---");
delete component.output;
console.log("Object setelah dihapus:", component);
console.log("Apakah 'output' masih ada?", "output" in component);

// 3. Unary Plus: Konversi Muatan
let rawReading = "150.5";
console.log("\n--- Konversi Sinyal ---");
console.log("Tipe String:", typeof rawReading);
console.log("Tipe Setelah (+) :", typeof (+rawReading), "Nilai:", +rawReading);

// 4. Void: Peredam Sinyal
console.log("\nNilai dari void(0):", void(0)); // Selalu undefined
