# Referential Equality

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/referential-equality-map.svg`](../assets/referential-equality-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`4` pada Buku 05.
- Prasyarat langsung: `03-mutation-vs-immutability.md`.
- Lanjut setelah ini: `05-memory-leak-patterns-dan-cleanup.md`.

Prasyarat topik:
- Sudah paham primitive/reference behavior.

Referensi remedial:
- [`02-primitive-vs-reference-behavior.md`](./02-primitive-vs-reference-behavior.md)
- [`03-mutation-vs-immutability.md`](./03-mutation-vs-immutability.md)

Kamus mini topik:
- `[baru]` Referential equality: dua variabel menunjuk reference object yang sama.
- `[baru]` Structural equality: isi data sama tapi reference bisa berbeda.
- `[ulang]` Strict equality (`===`): membandingkan identity/reference untuk object.

## Pengantar Singkat Topik
Topik ini membahas kenapa dua object dengan isi sama bisa `false` saat dibandingkan, dan kenapa ini penting untuk optimasi/render logic.

## 1) Big Picture
Banyak bug conditional/update terjadi karena salah asumsi pada `===` untuk object. Dengan memahami referential equality, kamu bisa mendesain comparison yang tepat untuk state, cache, dan memoization.

## 2) Small Picture
1. Untuk primitive, `===` membandingkan nilai.
2. Untuk object/array/function, `===` membandingkan reference.
3. Dua object literal sama isi tetap reference berbeda.
4. Equality berbasis isi butuh strategi tambahan (custom compare/serialization bijak).

## 3) Wireframe
```text
[objA === objB] -> [cek reference identity]
[sama isi belum tentu sama reference]
```

## 4) Analogi
Dua rumah dengan desain sama bukan berarti alamatnya sama.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: cek perubahan state, cache invalidation, memoization decisions.
- Alasan pakai: mencegah update/render salah trigger.

## 6) Contoh Sederhana
```js
const a = { id: 1 };
const b = { id: 1 };
const c = a;

console.log(a === b); // false
console.log(a === c); // true
```

### Bedah Output (Langkah Demi Langkah)
1. `a` dan `b` dibuat sebagai object berbeda.
2. `c` menunjuk reference yang sama dengan `a`.
3. Karena itu hanya `a === c` yang true.

## 7) Jebakan Umum
- Mengira object sama isi pasti `=== true`.
- Membandingkan nested data kompleks dengan pendekatan terlalu mahal di hot path.

## 8) Prediksi Output Drill
```js
const x = [1, 2];
const y = [1, 2];
const z = x;

console.log(x === y);
console.log(x === z);
```

### Kunci Jawaban Drill
- `x === y` -> `false`
- `x === z` -> `true`

## 9) Debug Story
Kasus: komponen tidak rerender saat data berubah.
Langkah debug:
1. Cek apakah update mutasi in-place sehingga reference tidak berubah.
2. Pastikan update menghasilkan object baru ketika dibutuhkan.
3. Uji ulang branch yang memakai `===`.

## 10) Checkpoint
- [ ] Bisa menjelaskan referential equality untuk object/array.
- [ ] Bisa memprediksi hasil `===` pada kombinasi assignment umum.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik 02 dan 03.
2. Latih perbandingan `===` pada primitive vs object.


