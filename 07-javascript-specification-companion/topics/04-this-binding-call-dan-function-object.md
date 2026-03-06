# 04 - This Binding, Call, dan Function Object

## Tujuan
Menjelaskan aturan `this` dan pemanggilan function dari perspektif spec.

## Fokus Istilah
- This value
- Call operation
- Function object
- Bound function exotic object

## Mapping ke Spec
- Ordinary and exotic objects behavior: `https://tc39.es/ecma262/#sec-ecmascript-function-objects`
- Function.prototype.bind: `https://tc39.es/ecma262/#sec-function.prototype.bind`
- Function.prototype.call: `https://tc39.es/ecma262/#sec-function.prototype.call`
- OrdinaryCallBindThis (binding `this` saat pemanggilan biasa): `https://tc39.es/ecma262/#sec-ordinarycallbindthis`

## Contoh Mapping Praktik
- `obj.fn()` membawa base object sebagai context pemanggilan.
- `const f = obj.fn; f()` kehilangan base object sehingga `this` berubah.
- `bind` membuat function baru dengan `this` yang sudah dipatok.

## Jebakan Umum
- Mengira lokasi deklarasi function menentukan `this`.
- Tidak membedakan arrow function dengan function biasa untuk `this`.
