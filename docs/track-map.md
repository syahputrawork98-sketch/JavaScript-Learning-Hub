# Track Map v2

Dokumen ini mendefinisikan rak resmi JavaScript Learning Hub v2.

## Tujuan

- Menetapkan nomor rak dan urutan belajar tingkat tinggi.
- Menjadi acuan penempatan buku baru.
- Menjaga agar domain antarrak tidak tumpang tindih.

## Daftar Rak

1. `R01` Fondasi Bahasa  
   Fokus: sintaks inti, tipe data, kontrol alur, fungsi dasar, object/array dasar.
2. `R02` Runtime Dasar  
   Fokus: execution context, scope, closure, `this`, call stack, event loop fundamental.
3. `R03` Asynchronous  
   Fokus: promise, async/await, concurrency patterns, cancellation, observability async.
4. `R04` Object Model  
   Fokus: prototype chain, descriptor, class mechanics, composition, Proxy/Reflect.
5. `R05` Memory & References  
   Fokus: perilaku reference, mutability, GC high-level, leak patterns, profiling dasar.
6. `R06` Modules & Program Structure  
   Fokus: ES modules, dependency graph, boundary design, organisasi program.
7. `R07` Engine & Performance  
   Fokus: engine pipeline, optimization/deoptimization, performa JavaScript dasar-menengah.
8. `R08` Spec Companion  
   Fokus: jembatan konsep praktis ke istilah formal ECMAScript specification.
9. `R09` Exercises & Case Study  
   Fokus: drill, debugging, dan studi kasus integratif lintas rak.

## Aturan Penomoran

- Kode rak tetap (`R01` sampai `R09`) dan tidak dipindah urutan tanpa keputusan eksplisit.
- Buku di dalam rak boleh punya penomoran sendiri (`B01`, `B02`, dan seterusnya).
- Bab di dalam buku boleh punya penomoran sendiri (`C01`, `C02`, dan seterusnya).

## Aturan Evolusi

- Rak baru hanya ditambahkan jika domain baru tidak cocok ke rak yang sudah ada.
- Jika scope rak berubah signifikan, update dokumen ini lebih dulu sebelum menambah buku.
