/**
 * CH-02: Generational GC (Observer)
 * 
 * Lab ini menunjukkan bagaimana V8 mengelola objek muda 
 * dan memindahkannya ke Old Space (Promotion).
 * 
 * Jalankan dengan flag trace:
 * node --trace-gc gc_observer.js
 */

function createGarbage() {
    const garbage = [];
    for (let i = 0; i < 10000; i++) {
        // Objek kecil yang umurnya pendek
        garbage.push({ data: new Array(100).fill('waste') });
    }
    return garbage;
}

console.log('--- Phase 1: Rapid Allocations ---');
for (let i = 0; i < 50; i++) {
    const temp = createGarbage();
    // temp akan langsung menjadi sampah setelah iterasi selesai
}

console.log('--- Phase 2: Promoting to Old Space ---');
const survivors = [];
for (let i = 0; i < 10; i++) {
    // Objek ini akan bertahan lama dan dipindahkan ke Old Generation
    survivors.push(createGarbage());
}

/**
 * OBSERVASI (dengan --trace-gc):
 * Anda akan melihat log seperti:
 * [7214:0x...] Scavenge 2.4 -> 1.8 MB (Minor GC di New Space)
 * [7214:0x...] Mark-sweep 10.5 -> 8.2 MB (Major GC di Old Space)
 * 
 * Scavenge jauh lebih sering dan cepat daripada Mark-sweep.
 */
