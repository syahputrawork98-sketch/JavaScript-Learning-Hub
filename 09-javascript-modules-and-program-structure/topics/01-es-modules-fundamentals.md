# 01 - ES Modules Fundamentals

## Tujuan
Memahami model dasar ES Modules dari perspektif dependency, linking, dan evaluation.

## Fokus Istilah
- Module
- Export
- Import
- Module graph
- Linking
- Evaluation

## Mapping Konsep
- Setiap file modul menjadi node pada module graph.
- `import` membentuk edge dependency antar node.
- Engine melakukan linking (menghubungkan binding) sebelum evaluation.
- Setelah linking valid, modul dieksekusi sesuai urutan graph.

## Workflow Baca (Topik Ini)
1. Mulai dari dua file modul kecil (`math.js` dan `app.js`).
2. Petakan siapa mengimpor siapa.
3. Pahami bahwa import binding disiapkan lebih dulu (linking).
4. Baru setelah itu eksekusi body modul (evaluation).

## Mini Mapping Contoh
`math.js`
```js
export const base = 10;
export function add(a, b) {
  return a + b;
}
```

`app.js`
```js
import { base, add } from "./math.js";

console.log(base);
console.log(add(2, 3));
```
Cara baca:
1. `app.js` punya dependency ke `math.js`.
2. Binding `base` dan `add` dihubungkan saat linking.
3. `math.js` dievaluasi lalu `app.js` dievaluasi sesuai graph.

## Checkpoint
- [ ] Bisa menjelaskan beda linking vs evaluation.
- [ ] Bisa menggambar module graph sederhana dari 3 file.
- [ ] Bisa memprediksi urutan eksekusi modul dasar.

## Jebakan Umum
- Mengira import dieksekusi seperti function call biasa.
- Menganggap urutan file di folder menentukan urutan evaluasi.
