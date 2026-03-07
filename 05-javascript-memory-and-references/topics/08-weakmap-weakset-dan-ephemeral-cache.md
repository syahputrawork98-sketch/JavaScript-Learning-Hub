# WeakMap, WeakSet, dan Ephemeral Cache

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/weakmap-weakset-ephemeral-cache-map.svg`](../assets/weakmap-weakset-ephemeral-cache-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`8` pada Buku 05.
- Prasyarat langsung: `07-closure-retention-dan-memory-traps.md`.
- Lanjut setelah ini: lanjut latihan lintas buku.

Prasyarat topik:
- Sudah paham reachability.
- Sudah paham cache biasa dan risikonya.

Referensi remedial:
- [`01-memory-lifecycle-garbage-collection.md`](./01-memory-lifecycle-garbage-collection.md)
- [`05-memory-leak-patterns-dan-cleanup.md`](./05-memory-leak-patterns-dan-cleanup.md)

Kamus mini topik:
- `[baru]` WeakMap: map dengan key object yang tidak mencegah GC key.
- `[baru]` WeakSet: set berbasis reference object yang weakly held.
- `[baru]` Ephemeral cache: cache sementara yang boleh hilang saat key tidak dipakai lagi.

## Pengantar Singkat Topik
WeakMap/WeakSet berguna untuk metadata object sementara tanpa memperpanjang lifecycle object secara paksa.

## 1) Big Picture
Cache berbasis `Map` kuat menahan key/value dan bisa menyebabkan leak jika tidak dibersihkan. `WeakMap` membantu skenario metadata object sementara karena key tidak mencegah garbage collection.

## 2) Small Picture
1. `Map` menyimpan key kuat (strong reference).
2. `WeakMap` hanya menerima object sebagai key.
3. Jika tidak ada reference lain ke key object, key bisa di-GC.
4. WeakMap tidak iterable agar tidak bergantung pada urutan/isi yang bisa hilang kapan saja.

## 3) Wireframe
```text
[object key masuk WeakMap] -> [metadata tersedia]
[object key tidak direferensikan lagi] -> [key eligible GC] -> [entry bisa hilang otomatis]
```

## 4) Analogi
WeakMap seperti sticky note di barang sewaan. Saat barang dikembalikan dan hilang dari inventaris, catatan ikut hilang.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: metadata instance, memoization ringan berbasis object key.
- Alasan pakai: mengurangi risiko cache leak untuk key object sementara.

## 6) Contoh Sederhana
```js
const meta = new WeakMap();

function tag(obj, label) {
  meta.set(obj, { label });
}

let node = { id: 1 };
tag(node, 'tracked');

console.log(meta.get(node).label); // tracked
node = null; // jika tak ada reference lain, key bisa di-GC
```

### Bedah Output (Langkah Demi Langkah)
1. Metadata disimpan berdasarkan key object.
2. Selama key object ada, metadata bisa diakses.
3. Saat key object tidak direferensikan lagi, runtime boleh membersihkan entry tersebut.

## 7) Jebakan Umum
- Mengira WeakMap bisa diiterasi seperti Map.
- Menyimpan primitive sebagai key WeakMap (tidak valid).
- Tetap menahan key object di array/global sehingga manfaat weak reference hilang.

## 8) Prediksi Output Drill
```js
const wm = new WeakMap();
const key = {};
wm.set(key, 123);
console.log(wm.get(key));
```

### Kunci Jawaban Drill
- Output: `123`
- Catatan: perilaku GC entry tidak bisa dipastikan waktunya secara sinkron.

## 9) Debug Story
Kasus: metadata komponen menumpuk di cache Map saat halaman panjang.
Langkah debug:
1. Evaluasi apakah key berbasis object sementara.
2. Jika ya, pertimbangkan migrasi ke WeakMap.
3. Pastikan tidak ada reference kuat lain yang menahan key object.

## 10) Checkpoint
- [ ] Bisa menjelaskan beda Map vs WeakMap dari sisi lifecycle key.
- [ ] Bisa memilih kapan WeakMap cocok dipakai.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik 01 dan 05.
2. Coba eksperimen metadata object dengan Map dan WeakMap.

