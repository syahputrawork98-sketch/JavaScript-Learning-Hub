# 04 - This Binding, Call, dan Function Object

## Tujuan
Menjelaskan aturan `this` dan pemanggilan function dari perspektif spec.

## Fokus Istilah
- This value
- Call operation
- Function object
- Bound function exotic object

## Mapping ke Spec
- ECMAScript Function Objects: `https://tc39.es/ecma262/#sec-ecmascript-function-objects`
- Function.prototype.bind: `https://tc39.es/ecma262/#sec-function.prototype.bind`
- Function.prototype.call: `https://tc39.es/ecma262/#sec-function.prototype.call`
- OrdinaryCallBindThis (binding `this` saat pemanggilan biasa): `https://tc39.es/ecma262/#sec-ordinarycallbindthis`

## Workflow Baca (Topik Ini)
1. Mulai dari model function object dan call evaluation.
2. Baca `OrdinaryCallBindThis` untuk kasus function biasa.
3. Lanjut ke `bind` untuk memahami bound function exotic object.
4. Validasi dengan perbedaan call-site.

## Contoh Mapping Praktik
- `obj.fn()` membawa base object sebagai context pemanggilan.
- `const f = obj.fn; f()` kehilangan base object sehingga `this` berubah.
- `bind` membuat function baru dengan `this` yang sudah dipatok.

## Mini Mapping Contoh
```js
const obj = {
  name: "Nina",
  show() {
    return this.name;
  },
};

const fn = obj.show;
console.log(obj.show());
console.log(fn());
```
Cara baca:
1. Petakan call-site pertama (`obj.show()`).
2. Petakan call-site kedua (`fn()`) tanpa base object.
3. Jelaskan perubahan `this` berdasarkan aturan binding di spec.

## Checkpoint
- [ ] Bisa menjelaskan kenapa call-site menentukan `this`.
- [ ] Bisa membedakan ordinary call vs bound call.
- [ ] Bisa memetakan satu bug detached method ke aturan spec yang relevan.

## Jebakan Umum
- Mengira lokasi deklarasi function menentukan `this`.
- Tidak membedakan arrow function dengan function biasa untuk `this`.
