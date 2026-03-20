/**
 * CH-10: Property Attributes (Spec Lab)
 * 
 * Lab ini menunjukkan perbedaan antara Data Property 
 * dan Accessor Property melalui Descriptor.
 */

const core = {};

// 1. Data Property
Object.defineProperty(core, 'voltage', {
    value: 220,
    writable: false, // Tidak bisa diubah
    enumerable: true
});

// 2. Accessor Property (Getter/Setter)
let internalHeat = 50;
Object.defineProperty(core, 'temperature', {
    get() { return `${internalHeat}°C`; },
    set(v) { internalHeat = v; },
    enumerable: true
});

console.log('--- Property Audit ---');
console.log(`Voltage: ${core.voltage}`);
core.voltage = 300; // Gagal (Silent in non-strict)
console.log(`Voltage after update: ${core.voltage}`); // Tetap 220

console.log(`Current Temp: ${core.temperature}`);
core.temperature = 80;
console.log(`New Temp: ${core.temperature}`);

/**
 * MENTAL MODEL:
 * Atribut adalah "Izin Akses" (Read/Write/Delete) 
 * yang dipasang pada setiap label di dalam objek.
 */
