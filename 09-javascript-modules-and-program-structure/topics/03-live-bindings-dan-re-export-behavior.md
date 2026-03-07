# 03 - Live Bindings dan Re-export Behavior

## Tujuan
Memahami efek live bindings pada desain API modul dan alur data lintas modul.

## Fokus Istilah
- Live binding
- Named export
- Re-export
- Binding identity

## Mapping Konsep
- Import membaca binding hidup dari export sumber.
- Re-export meneruskan binding, bukan menyalin nilai statis.
- Perubahan binding di sumber bisa terlihat di pengimpor sesuai timing evaluation.

## Workflow Baca (Topik Ini)
1. Buat modul sumber dengan satu binding mutable.
2. Import binding itu dari modul lain.
3. Ubah binding di sumber via function API.
4. Observasi bagaimana pengimpor melihat nilai terbaru.

## Mini Mapping Contoh
`counter.js`
```js
export let count = 0;
export function inc() {
  count += 1;
}
```

`view.js`
```js
import { count, inc } from "./counter.js";

console.log(count); // 0
inc();
console.log(count); // 1
```

Cara baca:
1. `count` di `view.js` adalah live binding ke `counter.js`.
2. `inc()` mengubah binding sumber.
3. Pembacaan berikutnya di pengimpor melihat nilai terbaru.

## Checkpoint
- [ ] Bisa membedakan live binding vs snapshot value.
- [ ] Bisa menjelaskan dampak re-export ke dependency trace.
- [ ] Bisa memprediksi perubahan binding lintas modul sederhana.

## Jebakan Umum
- Mengira import adalah salinan nilai statis.
- Menyembunyikan alur binding lewat re-export berlapis tanpa dokumentasi.
