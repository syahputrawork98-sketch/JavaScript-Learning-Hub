# 03 - Hidden Classes, Shapes, dan Inline Cache

## Tujuan
Memahami bagaimana stabilitas shape object memengaruhi performa akses property.

## Fokus Istilah
- Hidden class / shape
- Monomorphic / polymorphic call-site
- Inline cache

## Mapping Konsep
- Object dengan layout property konsisten memudahkan optimasi.
- Perubahan shape berulang membuat inline cache kurang efektif.
- Call-site monomorphic biasanya lebih mudah dioptimasi.

## Workflow Baca (Topik Ini)
1. Buat dua object dengan urutan properti sama.
2. Buat variasi object dengan urutan/properti berbeda.
3. Uji call-site yang membaca properti sama berulang.
4. Bandingkan jalur stabil vs jalur shape campuran.

## Mini Mapping Contoh
```js
function readX(o) {
  return o.x + 1;
}

const a = { x: 1, y: 2 };
const b = { x: 3, y: 4 };

for (let i = 0; i < 10000; i++) {
  readX(i % 2 === 0 ? a : b);
}
```
Cara baca:
1. `readX` menjadi call-site akses `x`.
2. Jika shape konsisten, inline cache lebih mudah stabil.
3. Jika shape sering berubah, cache menjadi lebih kompleks/mahal.

## Checkpoint
- [ ] Bisa menjelaskan apa itu shape stability secara praktis.
- [ ] Bisa menjelaskan hubungan monomorphic call-site dengan inline cache.
- [ ] Bisa menyebutkan pola kode yang merusak stabilitas shape.

## Jebakan Umum
- Menambah properti object secara acak di jalur panas.
- Menggabungkan banyak bentuk object berbeda pada call-site yang sama.
