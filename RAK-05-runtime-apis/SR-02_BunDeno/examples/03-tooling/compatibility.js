/**
 * CH-04: Cross-Runtime Compatibility Lab
 * 
 * Kode ini dirancang untuk dapat dijalankan di Bun dan Deno tanpa modifikasi.
 */

// Gunakan deteksi runtime
const runtime = typeof Bun !== 'undefined' ? 'Bun' : (typeof Deno !== 'undefined' ? 'Deno' : 'Node.js');

console.log(`Menjalankan lab pada: ${runtime}`);

if (runtime === 'Bun') {
  console.log('Versi Bun:', Bun.version);
} else if (runtime === 'Deno') {
  console.log('Versi Deno:', Deno.version.deno);
}

// Gunakan API standar web (Fetch) yang didukung semua runtime modern
async function testFetch() {
  try {
    const res = await fetch('https://api.github.com/zen');
    const text = await res.text();
    console.log('Hasil Fetch Standar Web:', text);
  } catch (err) {
    console.log('Fetch gagal (Mungkin butuh --allow-net di Deno)');
  }
}

testFetch();
