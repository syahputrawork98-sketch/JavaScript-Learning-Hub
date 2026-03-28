/**
 * CH-03: Deoptimization (Deopt Trigger)
 * 
 * Lab ini menunjukkan bagaimana perubahan struktur objek yang 
 * mendadak bisa memicu Deoptimization (Bailout) di V8.
 */

function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

// 1. Warm up dengan struktur objek yang konsisten (Monomorphic)
const consistentItems = [];
for (let i = 0; i < 10000; i++) {
    consistentItems.push({ price: i });
}

console.log('--- Phase 1: Heavy Execution (Optimized) ---');
console.time('Optimized');
calculateTotal(consistentItems);
console.timeEnd('Optimized');

// 2. Tiba-tiba kita mengubah bentuk objek (Price bukan lagi Number, tapi String)
// Atau menambah properti baru yang tidak ada sebelumnya
const chaoticItems = [
    { price: 10 },
    { price: 20 },
    { val: 30 } // Tidak ada properti 'price'
];

console.log('--- Phase 2: Triggering Deopt ---');
// Memanggil fungsi dengan data "kacau" akan memicu bailout
calculateTotal(chaoticItems);

/**
 * APA YANG TERJADI?
 * TurboFan sudah membuat kode mesin yang berasumsi items[i] 
 * selalu memiliki properti 'price' bertipe Number.
 * 
 * Saat ia bertemu { val: 30 }, asumsi tersebut hancur. 
 * V8 harus melakukan "Bailout", membuang kode mesin, 
 * dan kembali ke Ignition (Bytecode) untuk memproses data tersebut dengan aman.
 */
