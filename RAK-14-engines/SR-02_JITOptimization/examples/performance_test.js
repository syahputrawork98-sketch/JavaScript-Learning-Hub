/**
 * SR-02: Hidden Classes Performance Lab
 * 
 * Jalankan file ini dengan: node performance_test.js
 * 
 * Eksperimen ini menunjukkan perbedaan kecepatan antara objek dengan
 * "Shape" yang sama vs objek yang berubah-ubah bentuknya.
 */

const { performance } = require('perf_hooks');

function Point(x, y) {
  this.x = x;
  this.y = y;
}

// 1. Konsisten (Berbagi Hidden Class yang sama)
const consistentPoints = [];
for (let i = 0; i < 1000000; i++) {
  consistentPoints.push(new Point(i, i + 1));
}

// 2. Tidak Konsisten (Beda Hidden Class karena urutan penambahan properti)
const inconsistentPoints = [];
for (let i = 0; i < 1000000; i++) {
  const p = {};
  if (i % 2 === 0) {
    p.x = i;
    p.y = i + 1;
  } else {
    p.y = i + 1; // Urutan y duluan memicu Hidden Class baru
    p.x = i;
  }
  inconsistentPoints.push(p);
}

function sumPoints(points) {
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    sum += points[i].x + points[i].y;
  }
  return sum;
}

// Warm up JIT
sumPoints(consistentPoints);
sumPoints(inconsistentPoints);

console.log('--- Benchmarking Hidden Classes ---');

const start1 = performance.now();
sumPoints(consistentPoints);
const end1 = performance.now();
console.log(`Waktu Konsisten (Same Shape): ${(end1 - start1).toFixed(4)}ms`);

const start2 = performance.now();
sumPoints(inconsistentPoints);
const end2 = performance.now();
console.log(`Waktu Tidak Konsisten (Different Shapes): ${(end2 - start2).toFixed(4)}ms`);

console.log('\nKesimpulan: V8 jauh lebih cepat memproses objek yang memiliki "Shape" (Hidden Class) yang sama.');
