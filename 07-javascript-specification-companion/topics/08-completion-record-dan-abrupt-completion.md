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

## Workflow Baca (Topik Ini)
1. Pahami dulu bentuk Completion Record secara konseptual.
2. Bedakan jalur normal vs abrupt completion.
3. Kenali shorthand (`?`/`!`) saat membaca algoritme spec.
4. Validasi dengan contoh `throw` dan `try/catch`.

## Contoh Mapping Praktik
- `throw` menghasilkan abrupt completion type throw.
- `return` menghasilkan completion type return yang dibawa keluar function.
- `try/catch` memproses completion agar alur bisa dipulihkan.

## Mini Mapping Contoh
```js
function run(v) {
  if (v < 0) throw new Error("negatif");
  return v * 2;
}

try {
  console.log(run(-1));
} catch (e) {
  console.log("caught", e.message);
}
```
Cara baca:
1. Petakan `throw` ke abrupt completion.
2. Petakan `catch` sebagai pemulihan alur.
3. Verifikasi bahwa alur tidak lanjut ke jalur normal setelah throw.

## Checkpoint
- [ ] Bisa membedakan normal completion vs abrupt completion.
- [ ] Bisa menjelaskan peran shorthand unwrapping saat baca algoritme.
- [ ] Bisa memetakan satu error runtime ke model completion record.

## Jebakan Umum
- Mengira `throw` hanya efek implementasi engine, bukan model formal alur eksekusi.
- Sulit membaca algoritme karena tidak mengenali kapan completion diteruskan.
