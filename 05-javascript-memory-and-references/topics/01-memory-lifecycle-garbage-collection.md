# Memory Lifecycle dan Garbage Collection

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/memory-lifecycle-gc-map.svg`](../assets/memory-lifecycle-gc-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`1` pada Buku 05.
- Prasyarat langsung: `../../04-javascript-object-model/topics/03-prototype-chain-lookup.md`.
- Lanjut setelah ini: `02-primitive-vs-reference-behavior.md`.

Prasyarat topik:
- Sudah paham reference pada object/function dan efek closure.
- Sudah paham relation object melalui scope chain dan prototype chain.

Referensi remedial:
- [`../../02-javascript-runtime-first-principles/topics/01-values-types-coercion.md`](../../02-javascript-runtime-first-principles/topics/01-values-types-coercion.md)
- [`../../02-javascript-runtime-first-principles/topics/03-function-closure-dasar.md`](../../02-javascript-runtime-first-principles/topics/03-function-closure-dasar.md)
- [`../../04-javascript-object-model/topics/03-prototype-chain-lookup.md`](../../04-javascript-object-model/topics/03-prototype-chain-lookup.md)

Kamus mini topik:
- `[baru]` Allocation: proses runtime menyediakan memori untuk nilai/object baru.
- `[baru]` Reachability: status objek masih bisa dijangkau dari root reference.
- `[baru]` Mark-and-sweep: strategi GC menandai objek terjangkau lalu membersihkan sisanya.
- `[baru]` Memory leak: memori tetap terpegang walau secara logika sudah tidak dibutuhkan.
- `[ulang]` Reference: acuan ke object/function di memori heap.

## Pengantar Singkat Topik
Memory lifecycle membahas perjalanan data dari dialokasikan, dipakai, lalu dibersihkan oleh garbage collector. Memahami ini penting agar aplikasi tetap stabil tanpa konsumsi memori berlebihan.

## 1) Big Picture
Masalah performa jangka panjang sering bukan dari syntax, melainkan dari object yang tetap tertahan reference-nya sehingga tidak pernah dibersihkan. Topik ini menjelaskan siklus memori JavaScript (allocate-use-release) dan cara GC menentukan objek mana yang masih hidup berdasarkan reachability. Setelah paham, kamu bisa mengambil keputusan desain data/closure/event listener yang lebih aman dari memory leak.

## 2) Small Picture
1. Saat membuat object/array/function, runtime melakukan allocation di heap.
2. Selama ada reference dari root (global, stack aktif, closure hidup), object dianggap reachable.
3. GC periodik menjalankan mark phase untuk menandai object reachable.
4. Object yang tidak tertandai dibersihkan pada sweep phase.
5. Leak terjadi jika reference tidak dilepas meski object tidak lagi diperlukan secara bisnis.

## 3) Wireframe
```text
Alur utama:
[object dibuat] -> [dipakai lewat reference] -> [reference dilepas] -> [GC membersihkan]

Alur jalan:
[object masih reachable dari root] -> [ditandai saat mark phase] -> [tetap hidup]

Alur error:
[reference tertahan tak sengaja] -> [object tetap reachable] -> [memory leak / penggunaan memori naik]
```

## 4) Analogi
Bayangkan gudang inventaris:
- Allocation = barang masuk gudang.
- Reachability = barang masih tercatat di daftar aktif.
- GC = audit berkala: barang tanpa catatan aktif dibuang.
Kalau daftar aktif tidak pernah dibersihkan, gudang terus penuh meski barang sudah tidak dipakai.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: analisis memory leak, desain cache, manajemen lifecycle listener dan closure.
- Alasan pakai: membantu menjaga aplikasi tetap responsif dan hemat memori saat runtime panjang.
- Kapan tidak dipakai: jangan over-engineer optimasi memori mikro sebelum ada indikasi bottleneck nyata.

## 6) Contoh Sederhana
```js
function createCache() {
  const store = {};
  return {
    set(key, value) {
      store[key] = value;
    },
    clear() {
      for (const key in store) delete store[key];
    },
  };
}

const cache = createCache();
cache.set('user:1', { name: 'Ari' });
cache.set('user:2', { name: 'Bima' });

cache.clear(); // reference ke object tersimpan dilepas dari store
```

### Bedah Output (Langkah Demi Langkah)
1. `createCache` membuat closure yang menahan object `store`.
2. `set` menaruh object user ke dalam `store`, membuat reference aktif.
3. `clear` menghapus key sehingga reference dari `store` dilepas.
4. Jika tidak ada reference lain ke object user tersebut, object menjadi unreachable.
5. Pada siklus GC berikutnya, object unreachable bisa dibersihkan.

## 7) Jebakan Umum
- Menyimpan data besar di cache global tanpa kebijakan expiry/clear.
- Lupa melepas event listener atau interval yang mempertahankan reference.
- Mengira `obj = null` selalu cukup, padahal masih ada reference dari tempat lain.

## 8) Prediksi Output Drill
```js
let list = [{ id: 1 }, { id: 2 }];
let alias = list;

list = null;
console.log(alias.length);

alias = null;
// kapan object array bisa di-GC?
```

### Kunci Jawaban Drill
- `console.log(alias.length)` -> `2`
- Array belum bisa di-GC setelah `list = null` karena masih direferensikan oleh `alias`.
- Array baru eligible untuk GC setelah `alias` juga dilepas dan tidak ada reference lain.

## 9) Debug Story
Kasus: penggunaan memori terus naik saat halaman dashboard dibuka lama.
Langkah debug:
1. Snapshot heap berkala untuk mencari objek yang terus bertambah.
2. Lacak retention path: reference mana yang menahan object tetap reachable.
3. Audit closure listener/interval/cache yang tidak pernah di-cleanup.
4. Tambahkan mekanisme disposal (`removeEventListener`, `clearInterval`, cache eviction).
5. Verifikasi ulang dengan snapshot sebelum-sesudah perbaikan.

## 10) Checkpoint
- [ ] Bisa menjelaskan konsep reachability tanpa melihat dokumentasi.
- [ ] Bisa membedakan object yang eligible GC vs masih tertahan reference.
- [ ] Bisa menyebut minimal 3 sumber memory leak umum di JavaScript.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `../../02-javascript-runtime-first-principles/topics/01-values-types-coercion.md` bagian reference.
2. Ulangi `../../02-javascript-runtime-first-principles/topics/03-function-closure-dasar.md` untuk efek closure pada lifecycle data.
3. Latih eksperimen kecil: object dengan 2 reference, lalu lepas satu per satu sambil prediksi eligibility GC.



