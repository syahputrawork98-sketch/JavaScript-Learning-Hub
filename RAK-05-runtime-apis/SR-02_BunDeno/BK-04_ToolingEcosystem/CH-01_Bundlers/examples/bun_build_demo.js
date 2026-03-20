/**
 * CH-01: Bundlers (Bun Build Lab)
 * 
 * Lab ini menunjukkan penggunaan Bun.build() 
 * untuk membundel proyek tanpa tool eksternal (Vite/Webpack).
 */

console.log('--- Bun Build Execution ---');

await Bun.build({
  entrypoints: ['./index.ts'], // File entry
  outdir: './dist',           // Folder output
  target: 'browser',          // Bisa juga 'node' atau 'bun'
  minify: true,               // Mengecilkan ukuran file
});

console.log('Build Done! Check ./dist folder.');

/**
 * KEUNGGULAN:
 * Bun.build() seringkali 10-100x lebih cepat daripada tsc + webpack.
 * Ia sudah mendukung TypeScript dan JSX secara out-of-the-box.
 */
