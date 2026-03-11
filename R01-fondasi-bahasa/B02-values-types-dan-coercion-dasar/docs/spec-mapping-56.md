# Spec Mapping B02 (56 Section)

Dokumen ini memetakan cakupan B02 ke 56 section ECMAScript yang relevan untuk domain values, types, coercion, dan comparison.

## Baseline Sumber

- Referensi: ECMAScript 2025 multipage (`tc39.es/ecma262/2025/multipage`).
- Tanggal snapshot mapping: 2026-03-11.
- Batas cakupan:
  - `6.1.*` (ECMAScript Language Types, dipilih yang relevan ke B02)
  - `7.1.*` (Type Conversion)
  - `7.2.*` (Testing and Comparison Operations)

## Master List (56 Section)

### Group A - Clause 6.1.* (11)

1. `6.1` ECMAScript Language Types
2. `6.1.1` The Undefined Type
3. `6.1.2` The Null Type
4. `6.1.3` The Boolean Type
5. `6.1.4` The String Type
6. `6.1.5` The Symbol Type
7. `6.1.5.1` Well-Known Symbols
8. `6.1.6` Numeric Types
9. `6.1.6.1` The Number Type
10. `6.1.6.2` The BigInt Type
11. `6.1.7` The Object Type

### Group B - Clause 7.1.* (30)

1. `7.1` Type Conversion
2. `7.1.1` ToPrimitive ( input [ , preferredType ] )
3. `7.1.1.1` OrdinaryToPrimitive ( O, hint )
4. `7.1.2` ToBoolean ( argument )
5. `7.1.3` ToNumeric ( value )
6. `7.1.4` ToNumber ( argument )
7. `7.1.4.1` ToNumber Applied to the String Type
8. `7.1.4.1.1` StringToNumber ( str )
9. `7.1.4.1.2` Runtime Semantics: StringNumericValue
10. `7.1.4.1.3` RoundMVResult ( n )
11. `7.1.5` ToIntegerOrInfinity ( argument )
12. `7.1.6` ToInt32 ( argument )
13. `7.1.7` ToUint32 ( argument )
14. `7.1.8` ToInt16 ( argument )
15. `7.1.9` ToUint16 ( argument )
16. `7.1.10` ToInt8 ( argument )
17. `7.1.11` ToUint8 ( argument )
18. `7.1.12` ToUint8Clamp ( argument )
19. `7.1.13` ToBigInt ( argument )
20. `7.1.14` StringToBigInt ( str )
21. `7.1.14.1` StringIntegerLiteral Grammar
22. `7.1.14.2` Runtime Semantics: MV
23. `7.1.15` ToBigInt64 ( argument )
24. `7.1.16` ToBigUint64 ( argument )
25. `7.1.17` ToString ( argument )
26. `7.1.18` ToObject ( argument )
27. `7.1.19` ToPropertyKey ( argument )
28. `7.1.20` ToLength ( argument )
29. `7.1.21` CanonicalNumericIndexString ( argument )
30. `7.1.22` ToIndex ( value )

### Group C - Clause 7.2.* (15)

1. `7.2` Testing and Comparison Operations
2. `7.2.1` RequireObjectCoercible ( argument )
3. `7.2.2` IsArray ( argument )
4. `7.2.3` IsCallable ( argument )
5. `7.2.4` IsConstructor ( argument )
6. `7.2.5` IsExtensible ( O )
7. `7.2.6` IsRegExp ( argument )
8. `7.2.7` Static Semantics: IsStringWellFormedUnicode ( string )
9. `7.2.8` SameType ( x, y )
10. `7.2.9` SameValue ( x, y )
11. `7.2.10` SameValueZero ( x, y )
12. `7.2.11` SameValueNonNumber ( x, y )
13. `7.2.12` IsLessThan ( x, y, LeftFirst )
14. `7.2.13` IsLooselyEqual ( x, y )
15. `7.2.14` IsStrictlyEqual ( x, y )

## Mapping Ke Chapter B02 (C01-C12)

Catatan: mapping bersifat non-eksklusif. Satu section spec boleh muncul di lebih dari satu chapter saat memang relevan secara pedagogis.

1. `C01-values-dan-types-overview.md`
   - `6.1`, `7.1`, `7.2`
2. `C02-primitive-types-dasar.md`
   - `6.1.1`, `6.1.2`, `6.1.3`, `6.1.4`, `6.1.5`, `6.1.5.1`, `6.1.6`, `6.1.6.1`, `6.1.6.2`
3. `C03-non-primitive-dan-reference-intro.md`
   - `6.1.7`, `7.1.18`, `7.2.2`, `7.2.3`, `7.2.4`, `7.2.5`, `7.2.6`
4. `C04-typeof-dan-deteksi-tipe-praktis.md`
   - `7.2.2`, `7.2.3`, `7.2.8`
5. `C05-truthy-falsy-dan-konteks-boolean.md`
   - `7.1.2`
6. `C06-equality-strict-vs-loose.md`
   - `7.2.9`, `7.2.10`, `7.2.11`, `7.2.12`, `7.2.13`, `7.2.14`
7. `C07-coercion-ke-number.md`
   - `7.1.3`, `7.1.4`, `7.1.4.1`, `7.1.4.1.1`, `7.1.4.1.2`, `7.1.4.1.3`
   - `7.1.5`, `7.1.6`, `7.1.7`, `7.1.8`, `7.1.9`, `7.1.10`, `7.1.11`, `7.1.12`
   - `7.1.20`, `7.1.21`, `7.1.22`
8. `C08-coercion-ke-string.md`
   - `7.1.1`, `7.1.1.1`, `7.1.17`, `7.1.19`
9. `C09-coercion-ke-boolean.md`
   - `7.1.2` (pendalaman di konteks flow control)
10. `C10-null-vs-undefined.md`
    - `6.1.1`, `6.1.2`, `7.2.1`
11. `C11-nan-infinity-dan-negative-zero.md`
    - `6.1.6`, `6.1.6.1`, `7.1.4`, `7.1.5`, `7.1.6`, `7.1.7`
12. `C12-coercion-debugging-checklist.md`
    - `7.1.13`, `7.1.14`, `7.1.14.1`, `7.1.14.2`, `7.1.15`, `7.1.16`

## Penggunaan Praktis

1. Saat menulis atau revisi bab, gunakan section mapping di atas sebagai checklist coverage.
2. Saat menemukan edge case, cari operation yang paling dekat di `7.1.*` atau `7.2.*` sebelum menulis aturan praktis.
3. Saat QA pra-rilis B02, pastikan contoh (`examples/`) tidak bertentangan dengan behavior dari section yang dipetakan.
