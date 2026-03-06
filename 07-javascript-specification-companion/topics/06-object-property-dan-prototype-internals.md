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

## Contoh Mapping Praktik
- `obj.x` memicu internal method `[[Get]]`.
- Jika property tidak ada di object saat ini, lookup lanjut ke rantai `[[Prototype]]`.
- `Object.defineProperty` bekerja lewat descriptor formal.

## Jebakan Umum
- Menganggap inheritance menyalin property parent ke child.
- Tidak membedakan data property vs accessor property.
