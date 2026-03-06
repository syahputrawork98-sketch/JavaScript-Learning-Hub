# 04 - JavaScript Object Model

Track ini fokus memahami mekanisme object system JavaScript.

## Tujuan
- Memahami object internals yang relevan untuk praktik.
- Memahami prototype chain, constructors, dan class syntax.

## Scope
- Objects
- Property descriptors
- Prototype chain
- `[[Prototype]]`
- Constructors
- `new` operator
- Class syntax
- Composition vs inheritance decision
- `Object.create` dan delegation patterns
- Descriptor lanjutan dan kontrol mutasi property
- Internal methods `[[Get]]`, `[[Set]]`, `[[DefineOwnProperty]]`
- Method dispatch dan `this` pada object context
- Built-in objects behavior dan risiko patch prototype global
- Proxy/Reflect dasar untuk metaprogramming

## Out of Scope
- Framework-specific OOP patterns.
- Proposal non-standar sebagai materi inti.

## Output
- Materi object model + latihan reasoning prototype/inheritance/composition.

## Struktur Konten
- `topics/`: materi utama yang dipakai belajar.
- `docs/`: jalur belajar dan catatan pendukung.
- `assets/`: visualisasi object model untuk memperjelas mental model.

## Visualisasi Konsep
- `assets/object-prototype-basics-map.svg`: peta own property vs prototype delegation.
- `assets/prototype-chain-advanced-map.svg`: peta shadowing, delegation, dan mutasi shared prototype.
- `assets/prototype-chain-lookup-map.svg`: peta lookup property sampai terminal `null`.
- `assets/property-descriptor-map.svg`: peta descriptor (`writable`, `enumerable`, `configurable`, `get/set`).
- `assets/class-constructor-new-map.svg`: peta lifecycle `new` dan prototype method sharing.
- `assets/composition-vs-inheritance-map.svg`: peta keputusan desain composition vs inheritance.

## Mulai Belajar
1. Buka `docs/learning-path.md`.
2. Ikuti urutan di `topics/README.md`.
3. Lanjut ke track 05 saat mulai membahas memory lifecycle dan reference behavior mendalam.

## Exit Criteria
- Bisa menjelaskan hubungan object, prototype, dan inheritance.
- Bisa menganalisis bug dasar terkait object mutation dan lookup property.
- Bisa melacak sumber property (own vs inherited) secara konsisten.
- Bisa menentukan kapan memakai inheritance vs composition.
