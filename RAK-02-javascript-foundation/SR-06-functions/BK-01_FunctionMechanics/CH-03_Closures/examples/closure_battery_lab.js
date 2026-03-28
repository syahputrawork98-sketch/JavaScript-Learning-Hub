/**
 * LAB: Closure (The Persistent Battery)
 * Focus: Private State & Encapsulation
 */

// 1. Dasar: Membangun Brankas Data (Private State)
function createCounterHub(start = 0) {
    let internalCount = start; // Variabel private!

    return {
        increment: () => ++internalCount,
        decrement: () => --internalCount,
        getStatus: () => `Current Energy: ${internalCount}MW`
    };
}

const alphaHub = createCounterHub(100);
console.log(alphaHub.getStatus());
alphaHub.increment();
alphaHub.increment();
console.log(alphaHub.getStatus()); // 102
console.log("Accessing internalCount directly:", alphaHub.internalCount); // undefined (Aman!)

console.log("---");

// 2. Lanjutan: Memoization Simpel (Energy Cache)
function createEnergyCalculator() {
    const cache = {}; // Mengingat hasil perhitungan sebelumnya

    return function(input) {
        if (input in cache) {
            console.log(`[CACHE] Returning cached value for ${input}`);
            return cache[input];
        }
        
        console.log(`[COMPUTE] Performing heavy calculation for ${input}`);
        const result = input * 3.14159; // Simulasi beban berat
        cache[input] = result;
        return result;
    };
}

const calculator = createEnergyCalculator();
console.log(calculator(10));
console.log(calculator(10)); // Mengambil dari cache berkat closure

console.log("---");

// 3. Arsitek Drill: Scoping Trap in Loops
function createDelayedLoggers() {
    const loggers = [];

    // Menggunakan 'let' menciptakan scope baru di setiap iterasi (Closure yang benar)
    for (let i = 1; i <= 3; i++) {
        loggers.push(() => console.log(`Station-${i} reporting.`));
    }

    return loggers;
}

const stations = createDelayedLoggers();
stations.forEach(log => log());
