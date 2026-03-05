# Execution Context Lifecycle
## Metadata Migrasi
- Status: `normalized`
- Source: `02-javascript-first-principles (decommissioned legacy source)`
- Boundary:
  - Async queue detail -> ../../03-asynchronous-javascript-model/topics/
  - Object/prototype detail -> ../../04-javascript-object-model/topics/
  - Memory/reference detail -> ../../05-javascript-memory-and-references/topics/

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/execution-context-lifecycle-map.svg`](../assets/execution-context-lifecycle-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`1` pada Internals.
- Prasyarat langsung: `./06-this-binding-lanjutan.md`.
- Lanjut setelah ini: `08-call-stack-web-apis-queues.md`.

Prasyarat topik:
- Sudah paham scope dan hoisting dasar.
- Sudah paham fungsi sebagai unit eksekusi.

Referensi remedial:
- [`./02-scope-hoisting.md`](./02-scope-hoisting.md)
- [`./03-function-closure-dasar.md`](./03-function-closure-dasar.md)

Kamus mini topik:
- `[baru]` Execution context: lingkungan eksekusi yang menyimpan variabel, `this`, dan referensi scope.
- `[baru]` Creation phase: fase persiapan context sebelum baris kode dieksekusi.
- `[baru]` Execution phase: fase saat statement berjalan baris demi baris.
- `[baru]` Lexical environment: struktur scope tempat identifier dicari saat runtime.
- `[ulang]` Hoisting: deklarasi diproses saat fase pembuatan context.

## Pengantar Singkat Topik
Execution context lifecycle menjelaskan apa yang mesin JavaScript siapkan sebelum kode berjalan, lalu bagaimana kode benar-benar dieksekusi. Topik ini jadi fondasi untuk memahami call stack dan event loop secara mekanis.

## 1) Big Picture
Banyak kebingungan runtime muncul karena kita melihat kode seolah dieksekusi "langsung", padahal engine melewati fase persiapan dulu. Topik ini menjelaskan dua fase utama context (creation dan execution) supaya perilaku hoisting, binding `this`, dan akses identifier bisa diprediksi. Setelah paham, kamu bisa mengambil keputusan debug berdasarkan model mesin, bukan tebakan urutan baris.

## 2) Small Picture
1. Saat script/function dipanggil, engine membuat execution context baru.
2. Di creation phase, engine menyiapkan memory untuk declaration dan hubungan scope.
3. Function declaration siap penuh; `var` diinisialisasi `undefined`; `let/const` dibuat tetapi belum bisa diakses (TDZ).
4. Di execution phase, assignment, expression, dan call dijalankan berurutan.
5. Setiap pemanggilan function membuat context baru yang punya lifecycle sendiri.

## 3) Wireframe
```text
Alur utama:
[kode masuk engine] -> [creation phase] -> [execution phase] -> [hasil runtime]

Alur jalan:
[function dipanggil] -> [context baru dibuat] -> [statement function dieksekusi]

Alur error:
[akses let/const sebelum inisialisasi] -> [masih di TDZ] -> [ReferenceError]
```

## 4) Analogi
Bayangkan panggung teater:
- Creation phase = kru menata panggung, lampu, dan properti dulu.
- Execution phase = aktor mulai memainkan adegan.
- Kalau aktor minta properti yang belum siap, pertunjukan berhenti (error).

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: membaca perilaku hoisting, memahami scope lookup, dan debugging runtime error.
- Alasan pakai: memberi mental model mesin yang konsisten sebelum masuk call stack/event loop detail.
- Kapan tidak dipakai: jangan terlalu tenggelam di detail internal saat problem bisa selesai dengan refactor sederhana.

## 6) Contoh Sederhana
```js
console.log(title); // undefined
var title = 'JS Internals';

run();

function run() {
  // console.log(count); // ReferenceError (TDZ)
  let count = 1;
  console.log(`run-${count}`);
}
```

### Bedah Output (Langkah Demi Langkah)
1. Global execution context dibuat.
2. Creation phase global: `var title` disiapkan `undefined`, `function run` siap dipanggil.
3. Execution phase global: `console.log(title)` mencetak `undefined`, lalu `title` diisi `'JS Internals'`.
4. `run()` dipanggil dan membuat function execution context baru.
5. Di dalam `run`, `let count` ada di TDZ sebelum deklarasi; setelah inisialisasi, log mencetak `run-1`.

## 7) Jebakan Umum
- Mengira hoisting berarti baris kode benar-benar dipindah ke atas.
- Menganggap `let/const` tidak di-hoist (sebenarnya di-hoist, tetapi belum usable karena TDZ).
- Lupa bahwa setiap pemanggilan function punya execution context baru.

## 8) Prediksi Output Drill
```js
var a = 1;

function test() {
  console.log(a);
  var a = 2;
  return a;
}

console.log(test());
console.log(a);
```

### Kunci Jawaban Drill
- `console.log(a)` di dalam `test` -> `undefined`
- `console.log(test())` -> `2`
- `console.log(a)` global -> `1`
- Alasan: `var a` lokal di-hoist ke context function dengan nilai awal `undefined`, menutupi `a` global.

## 9) Debug Story
Kasus: nilai config global tampak "hilang" saat masuk function util.
Langkah debug:
1. Cari deklarasi lokal bernama sama (`shadowing`) di function tersebut.
2. Cek apakah deklarasi lokal memakai `var` dan terbaca sebelum assignment.
3. Ubah nama variabel lokal atau pindah assignment agar niat kode eksplisit.
4. Ulangi test dengan log `typeof` dan scope terdekat.

## 10) Checkpoint
- [ ] Bisa menjelaskan beda creation phase dan execution phase tanpa lihat catatan.
- [ ] Bisa memprediksi efek hoisting `var` vs `let/const` di contoh baru.
- [ ] Bisa melacak bug sederhana yang disebabkan context lokal menutupi nilai global.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `02-scope-hoisting.md`.
2. Jalankan ulang contoh sambil menandai fase creation dan execution per baris.
3. Latih 3 soal kecil yang membandingkan `var` lokal vs variabel global.




