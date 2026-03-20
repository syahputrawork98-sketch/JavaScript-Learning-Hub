/**
 * CH-03: TypeScript Native (Deno Lab)
 * 
 * Lab ini menunjukkan eksekusi TypeScript langsung 
 * tanpa tsconfig.json atau tsc.
 */

interface EnergyPoint {
    id: string;
    value: number;
    active: boolean;
}

const point: EnergyPoint = {
    id: "EP-01",
    value: 5000,
    active: true
};

function displayEnergy(e: EnergyPoint): void {
    console.log(`--- Energy Analysis: ${e.id} ---`);
    console.log(`Status: ${e.active ? 'ACTIVE' : 'INACTIVE'}`);
    console.log(`Output: ${e.value} MHz`);
}

displayEnergy(point);

/**
 * OBSERVASI:
 * Jalankan langsung dengan: deno run deno_ts_native.ts
 * Deno akan melakukan type-checking dan caching di latar belakang.
 */
