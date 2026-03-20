/**
 * CH-02: Test Runners (Bun Test Lab)
 * 
 * Lab ini menunjukkan penggunaan 'bun:test' yang 
 * kompatibel dengan Jest tapi berjalan jauh lebih cepat.
 */

import { expect, test, describe } from "bun:test";

describe("Energy Core Test", () => {
  test("Addition of power signals", () => {
    expect(2 + 2).toBe(4);
  });

  test("Object shape verification", () => {
    const energy = { type: 'solar', active: true };
    expect(energy).toHaveProperty('active', true);
  });
});

/**
 * CARA JALANKAN: bun test bun_test_demo.js
 * Bun akan secara otomatis mendeteksi file *.test.js atau *_test.js.
 */
