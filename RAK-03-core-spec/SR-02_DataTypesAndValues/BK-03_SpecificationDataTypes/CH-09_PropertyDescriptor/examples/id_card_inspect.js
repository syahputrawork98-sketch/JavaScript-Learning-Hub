/**
 * CH-09: Property Descriptor (Spec Lab)
 * 
 * Lab ini menunjukkan bagaimana abstraksi "Descriptor" 
 * muncul ke permukaan JavaScript.
 */

const reactor = { type: "fusion" };

// Meminta "Record" internal dari objek
const descriptor = Object.getOwnPropertyDescriptor(reactor, "type");

console.log('--- Inspector View of Internal Record ---');
console.log(descriptor);

/**
 * MENTAL MODEL:
 * Property Descriptor adalah "Kartu Identitas" bagi 
 * setiap properti. Isinya bukan hanya nilai, tapi 
 * juga hak akses (writable, enumerable).
 */
