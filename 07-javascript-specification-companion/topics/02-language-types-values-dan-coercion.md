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

## Contoh Mapping Praktik
- `String(x)` mengacu ke abstract operation terkait konversi ke string.
- `x + y` bisa memicu ToPrimitive sebelum operasi numerik/string concat.
- Perbandingan longgar (`==`) melibatkan beberapa langkah konversi tipe.

## Jebakan Umum
- Menganggap coercion sepenuhnya acak padahal berurutan dan deterministik.
- Tidak memisahkan behavior operator `+` (numeric vs string concatenation).
