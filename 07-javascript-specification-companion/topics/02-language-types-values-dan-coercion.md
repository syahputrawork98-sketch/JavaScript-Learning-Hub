# 02 - Language Types, Values, dan Coercion

## Tujuan
Menghubungkan type/value di JavaScript sehari-hari dengan definisi formal spec.

## Fokus Istilah
- ECMAScript Language Types
- Type conversion
- ToPrimitive
- ToString / ToNumber

## Mapping ke Spec
- ECMAScript Language Types: `https://tc39.es/ecma262/#sec-ecmascript-language-types`
- Type Conversion: `https://tc39.es/ecma262/#sec-type-conversion`
- ToPrimitive: `https://tc39.es/ecma262/#sec-toprimitive`

## Workflow Baca (Topik Ini)
1. Baca definisi language types dan bedakan primitive vs object secara formal.
2. Buka section type conversion untuk melihat alur konversi implisit/eksplisit.
3. Ikuti `ToPrimitive` saat operator butuh nilai primitif.
4. Validasi dengan snippet yang memicu coercion.

## Contoh Mapping Praktik
- `String(x)` mengacu ke abstract operation konversi string.
- `x + y` bisa memicu `ToPrimitive` sebelum operasi numerik atau concatenation.
- `==` melibatkan langkah konversi tipe berurutan (bukan acak).

## Mini Mapping Contoh
```js
console.log("5" + 1);
console.log("5" - 1);
console.log(0 == false);
```
Cara baca:
1. Cek operator yang dipakai (`+`, `-`, `==`).
2. Telusuri abstract operation konversi tipe yang relevan.
3. Cocokkan output runtime dengan jalur konversi di spec.

## Checkpoint
- [ ] Bisa menjelaskan kenapa operator `+` bisa jadi concat atau numeric addition.
- [ ] Bisa membedakan `ToPrimitive` vs `ToNumber` pada kasus umum.
- [ ] Bisa menyebutkan satu contoh coercion yang deterministik tapi kontra-intuitif.

## Jebakan Umum
- Menganggap coercion sepenuhnya acak.
- Tidak memisahkan behavior operator `+` (numeric vs string concatenation).
