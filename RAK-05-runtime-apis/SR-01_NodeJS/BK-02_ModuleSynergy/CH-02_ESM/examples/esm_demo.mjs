/**
 * CH-02: ECMAScript Modules (ESM Lab)
 * 
 * Lab ini menunjukkan fitur modern ESM seperti Top-level Await.
 */

// simulasi fetch data
const data = await Promise.resolve({ user: 'Architect', status: 'Online' });

export const name = 'V8 Engine';

export function getStatus() {
    return data.status;
}

console.log(`--- ESM Loaded: ${name} ---`);
console.log(`Status: ${getStatus()}`);

/**
 * PERBEDAAN VITAL:
 * ESM bersifat asinkronus dalam fase resolusi dan loading.
 * Ini memungkinkan "Top-level Await" (menggunakan await tanpa fungsi async).
 */
