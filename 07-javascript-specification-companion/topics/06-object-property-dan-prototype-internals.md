# 06 - Object Property dan Prototype Internals

## Tujuan
Menghubungkan behavior property/prototype dengan internal methods dan slots.

## Fokus Istilah
- Internal slot `[[Prototype]]`
- Internal methods `[[Get]]`, `[[Set]]`
- Property descriptor
- Ordinary object internal methods

## Mapping ke Spec
- Ordinary Object Internal Methods: `https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots`
- Property Descriptor Specification Type: `https://tc39.es/ecma262/#sec-property-descriptor-specification-type`

## Workflow Baca (Topik Ini)
1. Mulai dari internal methods object ordinary.
2. Baca alur `[[Get]]` saat property dibaca.
3. Baca alur `[[Set]]` saat assignment dilakukan.
4. Hubungkan descriptor formal ke `Object.defineProperty`.

## Contoh Mapping Praktik
- `obj.x` memicu internal method `[[Get]]`.
- Jika property tidak ada di object saat ini, lookup lanjut ke rantai `[[Prototype]]`.
- `Object.defineProperty` bekerja lewat descriptor formal.

## Mini Mapping Contoh
```js
const base = { x: 1 };
const obj = Object.create(base);

console.log(obj.x);
obj.x = 2;
console.log(obj.x, base.x);
```
Cara baca:
1. Peta baca pertama melalui `[[Get]]` (lookup ke prototype).
2. Peta assignment dengan `[[Set]]` (kemungkinan shadowing own property).
3. Verifikasi output terhadap behavior descriptor default.

## Checkpoint
- [ ] Bisa menjelaskan peran `[[Get]]` dan `[[Set]]` pada contoh sederhana.
- [ ] Bisa membedakan own property vs inherited property dari model internal methods.
- [ ] Bisa menyebutkan peran descriptor saat mendefinisikan property.

## Jebakan Umum
- Menganggap inheritance menyalin property parent ke child.
- Tidak membedakan data property vs accessor property.
