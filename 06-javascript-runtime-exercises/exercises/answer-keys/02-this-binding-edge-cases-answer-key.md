# 02 - This Binding Edge Cases (Answer Key)

## Level 1
Output umum (script non-strict):
```txt
Halo Nina
Halo undefined
```
Alasan: `user.sapa()` bind `this` ke `user`; `fn()` dipanggil sebagai function biasa sehingga `this` tidak lagi `user`.
Catatan strict/module mode: `fn()` biasanya melempar `TypeError` karena `this` bernilai `undefined`.

## Level 2
Output:
```txt
10
20
```
Alasan: binding ditentukan call-site: `a.tampilkan()` -> `this === a`, `b.tampilkan()` -> `this === b`.

## Level 3
Output umum (script non-strict):
```txt
detik: NaN
```
Alasan: callback `function () {}` pada `setTimeout` tidak mewarisi `this` dari `timer`, sehingga `this.detik` bukan milik object `timer`.
Catatan strict/module mode: callback bisa melempar `TypeError` saat akses `this.detik`.
Perbaikan 1: gunakan arrow function.
Perbaikan 2: `setTimeout(function () { ... }.bind(this), 0)`.
