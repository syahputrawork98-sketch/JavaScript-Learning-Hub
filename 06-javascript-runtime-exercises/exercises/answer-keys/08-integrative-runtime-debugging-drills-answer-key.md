# 08 - Integrative Runtime Debugging Drills (Answer Key)

## Level 1
Output umum (script non-strict):
```txt
undefined 1
```
Alasan: callback `function () {}` pada `then` tidak bind `this` ke object pemanggil `run`. `user.count` tetap naik karena closure menangkap `user`.
Catatan strict/module mode: bisa muncul `TypeError` saat akses `this.nama`.
Sumber bug: binding `this` di callback async dan asumsi `this.nama` tetap tersedia.

## Level 2
Output:
```txt
state: [ 1, 2, 3 ]
result: [ 1, 2, 3 ]
```
Alasan: spread hanya copy level atas; `items` tetap reference yang sama.
Perbaikan minimal:
```js
const copy = { ...next, items: [...next.items] };
```

## Level 3
Output umum (script non-strict):
```txt
[ NaN ]
```
Alasan:
- Binding: `fn()` membuat `this` bukan `mod`.
- Async timing: push ke `logs` terjadi di microtask setelah `inc` dipanggil.
- Mutation/reference: `cfg.logs` dimutasi dari callback async.
Catatan strict/module mode: `fn()` bisa gagal lebih awal dengan `TypeError` pada `this.count++`.
Patch minimal:
```js
const fn = mod.inc.bind(mod);
fn();
```
Atau hindari `this` di method dengan closure ke object target yang eksplisit.
