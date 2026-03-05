# Scope Chain Lookup

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`4` pada Internals.
- Prasyarat langsung: `03-event-loop-detail.md`.
- Lanjut setelah ini: `05-prototype-chain-lookup.md`.

Prasyarat topik:
- Sudah paham execution context dan lexical environment.
- Sudah paham scope dasar (`global`, `function`, `block`) dari Foundations.

Referensi remedial:
- [`01-execution-context-lifecycle.md`](./01-execution-context-lifecycle.md)
- [`../foundations/02-scope-hoisting.md`](../foundations/02-scope-hoisting.md)

Kamus mini topik:
- `[baru]` Identifier resolution: proses mesin mencari sumber nilai identifier.
- `[baru]` Outer environment reference: pointer dari satu environment ke environment luar.
- `[baru]` Shadowing lookup: kondisi lookup berhenti pada variabel lokal yang menutupi variabel luar.
- `[baru]` Unresolvable reference: identifier tidak ditemukan di seluruh rantai scope.
- `[ulang]` Scope chain: rantai lexical environment untuk pencarian variabel.

## Pengantar Singkat Topik
Scope chain lookup membedah cara engine menemukan nilai variabel saat kode dieksekusi. Dengan paham lookup step-by-step, kamu bisa menjelaskan kenapa suatu variabel terbaca nilai tertentu atau memicu `ReferenceError`.

## 1) Big Picture
Bug logika sering terjadi ketika developer mengira variabel diambil dari scope tertentu, padahal engine berhenti di scope yang berbeda karena shadowing. Topik ini menjelaskan mekanisme lookup identifier melalui outer environment reference sampai nilai ditemukan atau dinyatakan tidak ada. Setelah paham, kamu bisa mengambil keputusan penamaan variabel, struktur function, dan strategi debug scope secara lebih presisi.

## 2) Small Picture
1. Saat identifier diakses, engine cek lexical environment saat ini.
2. Jika ada nama yang cocok, lookup berhenti dan nilai dikembalikan.
3. Jika tidak ada, engine naik ke outer environment reference.
4. Proses berulang sampai global environment.
5. Jika tetap tidak ada, engine menghasilkan unresolvable reference (`ReferenceError`).

## 3) Wireframe
```text
Alur utama:
[akses identifier] -> [cek environment lokal] -> [naik ke outer environment] -> [nilai ditemukan]

Alur jalan:
[nama sama di scope lokal] -> [shadowing terjadi] -> [lookup berhenti lebih cepat]

Alur error:
[identifier tidak ada di seluruh chain] -> [unresolvable reference] -> [ReferenceError]
```

## 4) Analogi
Bayangkan mencari dokumen dalam organisasi:
- Meja kerja sendiri = scope lokal.
- Supervisor = outer scope pertama.
- Divisi pusat = scope lebih luar.
Kamu berhenti saat dokumen pertama ditemukan; tidak lanjut mencari ke level atas.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: debug variabel `undefined`/`ReferenceError`, desain nested function, dan audit shadowing.
- Alasan pakai: memberi model mental jelas tentang "variabel ini sebenarnya diambil dari mana".
- Kapan tidak dipakai: tidak perlu terlalu detail jika kode flat tanpa nested scope.

## 6) Contoh Sederhana
```js
const name = 'global';

function outer() {
  const name = 'outer';

  function inner() {
    const role = 'dev';
    console.log(name, role);
  }

  inner();
}

outer();
```

### Bedah Output (Langkah Demi Langkah)
1. `inner` mengakses `name`, tetapi tidak ada `name` lokal di `inner`.
2. Engine naik ke outer environment (`outer`) dan menemukan `name = 'outer'`.
3. `role` ditemukan langsung di scope `inner`.
4. Output menjadi `outer dev`.
5. `name` global tidak dipakai karena lookup sudah berhenti di scope `outer`.

## 7) Jebakan Umum
- Mengira lookup selalu langsung ke global jika variabel tidak ada di baris terdekat.
- Menamai variabel lokal sama dengan variabel luar tanpa sadar (shadowing tidak disengaja).
- Menganggap `undefined` selalu berarti variabel tidak ada (bisa jadi ada, tapi nilainya memang `undefined`).

## 8) Prediksi Output Drill
```js
const x = 'global';

function a() {
  const x = 'a';
  function b() {
    console.log(x);
  }
  b();
}

a();
console.log(x);
```

### Kunci Jawaban Drill
- `console.log(x)` di `b` -> `a`
- `console.log(x)` global -> `global`
- Alasan: lookup di `b` naik ke `a` dan berhenti di sana karena menemukan `x` lokal `a`.

## 9) Debug Story
Kasus: helper mengambil config salah meski global config sudah diubah.
Langkah debug:
1. Cari apakah ada variable shadowing bernama `config` di function wrapper.
2. Lacak chain nested function dan catat sumber nilai `config` yang terbaca.
3. Rename variable lokal agar tidak menutupi config global tanpa sengaja.
4. Tambahkan log sumber scope saat debug sementara.

## 10) Checkpoint
- [ ] Bisa menjelaskan urutan lookup identifier dari local ke global.
- [ ] Bisa membedakan kasus shadowing vs unresolvable reference.
- [ ] Bisa memperbaiki bug scope dengan perubahan nama/struktur yang tepat.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `foundations/02-scope-hoisting.md`.
2. Jalankan contoh nested function sambil menandai scope per variabel.
3. Buat dua variasi: dengan dan tanpa shadowing, lalu bandingkan outputnya.
