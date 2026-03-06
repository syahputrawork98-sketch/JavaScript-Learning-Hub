# 08 - Completion Record dan Abrupt Completion

## Tujuan
Menjelaskan kenapa throw/return/break/continue bisa dimodelkan konsisten oleh spec.

## Fokus Istilah
- Completion Record
- Normal completion
- Abrupt completion
- Throw completion

## Mapping ke Spec
- Completion Record Specification Type: `https://tc39.es/ecma262/#sec-completion-record-specification-type`
- Shorthands for unwrapping completion records: `https://tc39.es/ecma262/#sec-shorthands-for-unwrapping-completion-records`
- ReturnIfAbrupt shorthand: `https://tc39.es/ecma262/#sec-returnifabrupt`

## Contoh Mapping Praktik
- `throw` menghasilkan abrupt completion type throw.
- `return` menghasilkan completion type return yang dibawa keluar function.
- `try/catch` memproses completion agar alur bisa dipulihkan.

## Jebakan Umum
- Mengira `throw` hanya efek implementasi engine, bukan model formal alur eksekusi.
- Sulit membaca algoritme karena tidak mengenali kapan completion diteruskan.
