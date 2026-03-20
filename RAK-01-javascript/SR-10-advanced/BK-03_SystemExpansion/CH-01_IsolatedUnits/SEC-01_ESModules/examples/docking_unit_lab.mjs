/**
 * LAB: ES Modules (Isolated Expansion Units)
 * Note: File ini menggunakan ekstensi .mjs agar Node.js mengenali sebagai modul ESM.
 */

// 1. Simulasi Modul Eksternal (Internal di file ini untuk contoh)
// Di dunia nyata, ini akan berada di file berbeda
const sensorTools = {
    getTemperature: () => 45,
    getHumidity: () => 0.8
};

export const SECTOR_CODE = "GAMMA-9";

export function logSensorData() {
    console.log(`[MODULE] Membaca sensor dari ${SECTOR_CODE}...`);
    console.log(`Temp: ${sensorTools.getTemperature()}C`);
}

export default class GridModule {
    constructor() {
        this.initialized = true;
    }
    status() { return "ONLINE"; }
}

/**
 * CARA MENJALANKAN DI GRID:
 * export default GridModule;
 * 
 * DI FILE LAIN:
 * import GridModule, { SECTOR_CODE, logSensorData } from './this_file.mjs';
 */
