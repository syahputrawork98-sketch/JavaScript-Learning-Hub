/**
 * CH-01: Zig & Performance (Bun Lab)
 * 
 * Lab ini menunjukkan penggunaan Bun.serve() yang 
 * dioptimasi menggunakan bahasa Zig.
 * 
 * Cara Tes: bun run bun_http_bench.js
 */

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response("Bun is fast because of Zig!");
    },
});

console.log(`Listening on http://localhost:${server.port}...`);

/**
 * MENTAL MODEL:
 * Node.js (C++) adalah mobil sport yang handal.
 * Bun (Zig) adalah mobil Formula 1 yang dipreteli 
 * semua beban tidak perlunya untuk kecepatan murni.
 */
