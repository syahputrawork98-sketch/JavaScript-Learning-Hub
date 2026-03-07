# Mutation vs Immutability

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/mutation-vs-immutability-map.svg`](../assets/mutation-vs-immutability-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`3` pada Buku 05.
- Prasyarat langsung: `02-primitive-vs-reference-behavior.md`.
- Lanjut setelah ini: `04-referential-equality.md`.

Prasyarat topik:
- Sudah paham shared reference.

Referensi remedial:
- [`02-primitive-vs-reference-behavior.md`](./02-primitive-vs-reference-behavior.md)

Kamus mini topik:
- `[baru]` Mutation: mengubah object/array yang sama secara in-place.
- `[baru]` Immutability: membuat nilai baru tanpa mengubah sumber.
- `[ulang]` Side effect: dampak perubahan pada bagian lain.

## Pengantar Singkat Topik
Topik ini membahas kapan mutasi aman dipakai dan kapan pendekatan immutable lebih aman untuk mencegah side effect.

## 1) Big Picture
Mutasi langsung cepat ditulis tetapi sering memicu bug tersembunyi pada state bersama. Immutability membantu trace perubahan lebih jelas dengan biaya copy data. Pilihan yang tepat tergantung konteks, bukan dogma.

## 2) Small Picture
1. Mutasi mengubah object lama.
2. Immutability membuat object baru.
3. Untuk nested object, copy dangkal tidak cukup.
4. Pilih strategi yang konsisten per modul.

## 3) Wireframe
```text
[mutasi langsung] -> [state lama berubah] -> [potensi side effect]
[immutable update] -> [state baru dibuat] -> [alur perubahan lebih aman]
```

## 4) Analogi
Mutasi = mengedit file asli.
Immutability = simpan versi baru file.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: state management, debugging perubahan data.
- Alasan pakai: mengurangi bug akibat perubahan tersembunyi.

## 6) Contoh Sederhana
```js
const user = { name: 'Ari', meta: { city: 'BDG' } };

const mutated = user;
mutated.name = 'Bima';

const immutable = { ...user, name: 'Cici' };

console.log(user.name);      // Bima
console.log(immutable.name); // Cici
```

### Bedah Output (Langkah Demi Langkah)
1. `mutated` dan `user` reference sama.
2. Ubah `mutated.name` ikut mengubah `user.name`.
3. `immutable` dibuat object baru level pertama.

## 7) Jebakan Umum
- Mengira spread membuat deep copy.
- Mencampur pola mutate dan immutable tanpa aturan.

## 8) Prediksi Output Drill
```js
const a = { nested: { x: 1 } };
const b = { ...a };
b.nested.x = 9;
console.log(a.nested.x);
```

### Kunci Jawaban Drill
- Output: `9`
- Alasan: spread hanya shallow copy; `nested` masih share reference.

## 9) Debug Story
Kasus: undo/redo tidak stabil karena state lama ikut berubah.
Langkah debug:
1. Audit titik update yang masih mutasi in-place.
2. Terapkan immutable update bertahap.
3. Tambah test untuk memastikan snapshot lama tetap sama.

## 10) Checkpoint
- [ ] Bisa membedakan mutasi in-place dan update immutable.
- [ ] Bisa menjelaskan risiko shallow copy pada nested object.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik 02.
2. Coba eksperimen nested object dengan spread.


