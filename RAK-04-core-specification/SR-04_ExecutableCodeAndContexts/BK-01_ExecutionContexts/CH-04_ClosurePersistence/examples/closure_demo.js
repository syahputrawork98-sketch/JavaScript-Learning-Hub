/**
 * Pembuktian Closure Persistence (Ransel Ajaib)
 * Menunjukkan bagaimana variabel tetap hidup meskipun fungsi induk sudah selesai.
 */

function buatBank(namaNasabah) {
    let saldo = 1000; // Variabel "Private" dalam ransel

    return {
        cekSaldo: function() {
            console.log(`Saldo ${namaNasabah}: Rp${saldo}`);
        },
        setor: function(jumlah) {
            saldo += jumlah;
            console.log(`Setor Rp${jumlah} Berhasil.`);
        }
    };
}

console.log("=== 1. Kelahiran Ransel Ajaib ===");
const dompetBudi = buatBank("Budi"); 
// Saat baris ini selesai, fungsi 'buatBank' sudah keluar dari Call Stack.
// TAPI, 'saldo' tetap hidup di dalam 'dompetBudi'.

dompetBudi.cekSaldo();
dompetBudi.setor(500);
dompetBudi.cekSaldo();

console.log("\n=== 2. Isolasi Ransel (Privasi Data) ===");
console.log(`Coba akses langsung saldo:`, dompetBudi.saldo); // undefined
// Kita tidak bisa menyentuh 'saldo' kecuali melalui fungsi yang disediakan.

console.log("\n=== 3. Setiap Instance Punya Ransel Sendiri ===");
const dompetSusi = buatBank("Susi");
dompetSusi.cekSaldo(); // Tetap 1000 (Terpisah dari milik Budi)
