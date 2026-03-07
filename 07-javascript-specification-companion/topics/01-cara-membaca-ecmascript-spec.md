# 01 - Cara Membaca ECMAScript Spec

## Tujuan
Membangun kebiasaan membaca spec secara efektif tanpa tenggelam di detail.

## Fokus Istilah
- Clause
- Normative text
- Informative note
- Abstract operation

## Mapping ke Spec
- Spec root: `https://tc39.es/ecma262/`
- Notational Conventions: `https://tc39.es/ecma262/#sec-notational-conventions`
- Algorithm Conventions: `https://tc39.es/ecma262/#sec-algorithm-conventions`

## Workflow Baca (Template)
1. Tentukan konsep yang ingin dipetakan (contoh: coercion, `this`, promise job).
2. Temukan clause utama dan baca definisi istilah formalnya dulu.
3. Baca algoritme dari atas ke bawah, tandai:
- input
- kondisi cabang
- output/completion
4. Catat istilah yang tidak dikenal, lalu buka definisinya.
5. Validasi pemahaman dengan snippet runtime kecil.

## Cara Baca Praktis
1. Cari keyword konsep yang kamu butuhkan.
2. Baca definisi istilah dulu.
3. Ikuti langkah algoritme dari atas ke bawah sambil menandai input/output.
4. Validasi dengan snippet kecil di runtime.

## Mini Mapping Contoh
Kasus: kenapa `setTimeout(..., 0)` tidak selalu lebih dulu daripada `Promise.then(...)`.
1. Baca topik jobs di spec (model Promise reaction job).
2. Bedakan istilah normatif spec (Job/Job Queue) dengan istilah host runtime (microtask/task).
3. Uji snippet:
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```
4. Cocokkan output dengan model job + host scheduling.

## Checkpoint
- [ ] Bisa menjelaskan beda normative text vs informative note.
- [ ] Bisa menyebutkan minimal satu abstract operation dan input/output-nya.
- [ ] Bisa memetakan satu perilaku runtime ke clause spec yang relevan.

## Jebakan Umum
- Langsung loncat ke langkah tengah algoritme tanpa konteks.
- Mengira semua note bersifat aturan wajib.
- Mencampur istilah tutorial dengan istilah normatif tanpa pemetaan.
