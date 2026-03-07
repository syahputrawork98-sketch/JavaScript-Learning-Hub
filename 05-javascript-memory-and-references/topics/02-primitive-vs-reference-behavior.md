# Primitive vs Reference Behavior

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/primitive-vs-reference-map.svg`](../assets/primitive-vs-reference-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`2` pada Buku 05.
- Prasyarat langsung: `01-memory-lifecycle-garbage-collection.md`.
- Lanjut setelah ini: `03-mutation-vs-immutability.md`.

Prasyarat topik:
- Sudah paham value/type dasar.
- Sudah paham object dan array dasar.

Referensi remedial:
- [`../../02-javascript-runtime-first-principles/topics/01-values-types-coercion.md`](../../02-javascript-runtime-first-principles/topics/01-values-types-coercion.md)
- [`../../02-javascript-runtime-first-principles/docs/prasyarat/object-dasar.md`](../../02-javascript-runtime-first-principles/docs/prasyarat/object-dasar.md)

Kamus mini topik:
- `[baru]` Copy by value: penyalinan nilai langsung.
- `[baru]` Copy by reference: penyalinan acuan/alamat object.
- `[ulang]` Primitive: data dasar yang tidak mutable secara in-place.

## Pengantar Singkat Topik
Topik ini menjelaskan kenapa assignment primitive dan object menghasilkan efek berbeda saat data diubah.

## 1) Big Picture
Bug state sering terjadi ketika developer mengira assignment object membuat salinan baru, padahal hanya menyalin reference. Topik ini membantu membedakan copy-by-value dan copy-by-reference supaya efek perubahan data bisa diprediksi.

## 2) Small Picture
1. Primitive (`number`, `string`, `boolean`) disalin sebagai nilai baru.
2. Object/array/function disalin sebagai reference.
3. Dua variabel bisa menunjuk object yang sama di memori.
4. Perubahan lewat satu variabel akan terlihat di variabel lain yang share reference.

## 3) Wireframe
```text
[assign primitive] -> [copy value] -> [ubah A tidak mengubah B]
[assign object] -> [copy reference] -> [ubah A ikut mengubah B]
```

## 4) Analogi
- Primitive = fotokopi dokumen (masing-masing punya lembar sendiri).
- Reference = dua orang pegang alamat lemari yang sama.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: analisis bug state object/array.
- Alasan pakai: mencegah efek samping tak sengaja antar modul.

## 6) Contoh Sederhana
```js
let a = 10;
let b = a;
a = 20;

const x = { score: 1 };
const y = x;
x.score = 9;

console.log(b);       // 10
console.log(y.score); // 9
```

### Bedah Output (Langkah Demi Langkah)
1. `b` menyimpan salinan nilai `a` saat assignment.
2. Saat `a` berubah, `b` tetap 10.
3. `y` menyimpan reference yang sama dengan `x`.
4. Ubah `x.score` berarti ubah object yang juga dilihat `y`.

## 7) Jebakan Umum
- Mengira `const` membuat object immutable total.
- Mengira spread satu level cukup untuk semua nested object.

## 8) Prediksi Output Drill
```js
const p = { v: 1 };
const q = p;
q.v = 7;
console.log(p.v);
```

### Kunci Jawaban Drill
- Output: `7`
- Alasan: `p` dan `q` menunjuk object yang sama.

## 9) Debug Story
Kasus: data form berubah di komponen lain tanpa sengaja.
Langkah debug:
1. Cek apakah object state dibagikan reference langsung.
2. Buat copy terkontrol sebelum modifikasi.
3. Pastikan update state tidak memutasi object asal.

## 10) Checkpoint
- [ ] Bisa menjelaskan beda copy primitive vs reference.
- [ ] Bisa memprediksi efek assignment object sederhana.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik values-types di buku 02.
2. Jalankan contoh dengan object dan array kecil.


