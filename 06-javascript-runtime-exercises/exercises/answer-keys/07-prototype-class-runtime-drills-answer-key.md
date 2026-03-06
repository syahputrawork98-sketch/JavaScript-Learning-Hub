# 07 - Prototype and Class Runtime Drills (Answer Key)

## Level 1
Output:
```txt
Rina
guest
false
```
Alasan: `nama` adalah own property, `role` didapat dari prototype (`base`).

## Level 2
Output umum:
```txt
1
TypeError
```
Alasan: class method berjalan di strict mode; saat `fn()` dipanggil lepas dari instance, `this` menjadi `undefined`.

## Level 3
Output umum:
```txt
X-BASE-CHILD
TypeError
```
Alasan: `obj.getLabel()` valid karena `this` adalah instance `Child`. Pada `detached()`, method dipanggil tanpa receiver object; `super.getLabel()` tetap ter-resolve, tetapi `Base.getLabel()` butuh `this.prefix`, sehingga di strict/module mode menghasilkan `TypeError`.
