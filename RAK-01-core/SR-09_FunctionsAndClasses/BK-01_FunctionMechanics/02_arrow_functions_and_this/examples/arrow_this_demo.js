/**
 * Pembuktian Arrow Function vs Regular Function (this behavior)
 * Menunjukkan bagaimana konteks 'this' ditangani oleh masing-masing jenis fungsi.
 */

const pahlawan = {
    nama: "Gatotkaca",
    keahlian: ["Terbang", "Kuat", "Tahan Pukul"],
    
    // 1. Regular Function sebagai Method
    cetakKeahlianRegular: function() {
        console.log(`=== Regular Function (Method) ===`);
        console.log(`this adalah objek:`, this.nama === "Gatotkaca");
        
        // Jebakan Callback: this akan hilang di dalam callback regular
        this.keahlian.forEach(function(item) {
            try {
                // 'this' di sini adalah undefined (strict mode) atau Global
                console.log(`${this.nama} punya keahlian: ${item}`);
            } catch (e) {
                console.log(`Error: this.nama tidak terjangkau di dalam regular callback!`);
            }
        });
    },

    // 2. Arrow Function sebagai Callback
    cetakKeahlianArrow: function() {
        console.log(`\n=== Arrow Function (Callback) ===`);
        this.keahlian.forEach((item) => {
            // Arrow function mengambil 'this' dari cetakKeahlianArrow (lexical)
            console.log(`${this.nama} punya keahlian: ${item}`);
        });
    }
};

pahlawan.cetakKeahlianRegular();
pahlawan.cetakKeahlianArrow();

// 3. Arrow Function cannot be a constructor
console.log("\n=== 3. Constructor Test ===");
const Manusia = () => {};
try {
    new Manusia();
} catch (e) {
    console.log("Arrow Function as Constructor: Gagal! (TypeError: Manusia is not a constructor)");
}
