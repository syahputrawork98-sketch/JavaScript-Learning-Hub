# Copy Strategies: Shallow vs Deep

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/copy-strategies-shallow-vs-deep-map.svg`](../assets/copy-strategies-shallow-vs-deep-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`6` pada Buku 05.
- Prasyarat langsung: `05-memory-leak-patterns-dan-cleanup.md`.
- Lanjut setelah ini: `07-closure-retention-dan-memory-traps.md`.

Prasyarat topik:
- Sudah paham mutasi vs immutability.
- Sudah paham shared reference pada nested object.

Referensi remedial:
- [`03-mutation-vs-immutability.md`](./03-mutation-vs-immutability.md)
- [`04-referential-equality.md`](./04-referential-equality.md)

Kamus mini topik:
- `[baru]` Shallow copy: menyalin level pertama saja.
- `[baru]` Deep copy: menyalin struktur nested sampai level dalam.
- `[baru]` `structuredClone`: API native untuk clone data terstruktur tertentu.
- `[ulang]` Shared reference: dua path menunjuk object nested yang sama.

## Pengantar Singkat Topik
Topik ini membantu memilih strategi copy data yang tepat agar perubahan nested data tidak menimbulkan efek samping yang mengejutkan.

## 1) Big Picture
Mayoritas bug state modern muncul saat developer merasa sudah â€œcopy objectâ€, padahal yang terjadi hanya shallow copy dan nested data tetap sharing reference. Dengan memahami strategi copy, kamu bisa menghindari mutasi tersembunyi.

## 2) Small Picture
1. Spread/Object.assign membuat shallow copy.
2. Nested object masih berbagi reference pada shallow copy.
3. Deep copy dibutuhkan jika nested data akan dimodifikasi.
4. `structuredClone` aman untuk banyak kasus plain data, tetapi tidak semua tipe/custom behavior.
5. Pilih strategi berdasarkan bentuk data dan kebutuhan performa.

## 3) Wireframe
```text
[copy data] -> [shallow/deep?] -> [cek nested update impact]
```

## 4) Analogi
Shallow copy = menyalin daftar folder tanpa menyalin isi file di dalamnya.
Deep copy = menyalin sampai isi terdalam.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: update state nested object, data transformation aman.
- Alasan pakai: mencegah mutasi data asal saat memproses turunan data.

## 6) Contoh Sederhana
```js
const original = { user: { name: 'Ari' } };
const shallow = { ...original };
const deep = structuredClone(original);

shallow.user.name = 'Bima';
console.log(original.user.name); // Bima (terkena)

deep.user.name = 'Cici';
console.log(original.user.name); // tetap Bima
```

### Bedah Output (Langkah Demi Langkah)
1. `shallow` hanya salin level pertama.
2. `shallow.user` masih reference yang sama dengan `original.user`.
3. `deep` membuat object nested baru.
4. Ubah `deep.user` tidak memengaruhi `original.user`.

## 7) Jebakan Umum
- Mengira spread selalu cukup untuk update nested.
- Memakai deep copy berlebihan pada hot path sehingga boros performa.
- Mengabaikan batasan clone untuk tipe data khusus.

## 8) Prediksi Output Drill
```js
const a = { nested: { x: 1 } };
const b = Object.assign({}, a);
b.nested.x = 9;
console.log(a.nested.x);
```

### Kunci Jawaban Drill
- Output: `9`
- Alasan: `Object.assign` juga shallow copy.

## 9) Debug Story
Kasus: state lama ikut berubah saat membuat draft edit.
Langkah debug:
1. Cek apakah draft dibuat dengan shallow copy.
2. Jika nested dimodifikasi, gunakan deep copy terkontrol.
3. Validasi ulang dengan snapshot sebelum/sesudah update.

## 10) Checkpoint
- [ ] Bisa membedakan shallow vs deep copy.
- [ ] Bisa memilih strategi copy sesuai bentuk data.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik 03.
2. Latih eksperimen nested object 2-3 level.

