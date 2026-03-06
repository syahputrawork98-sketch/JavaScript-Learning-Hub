# 03 - Async Order Drills

## Tujuan
Menguatkan prediksi urutan eksekusi dari sync code ke microtask dan macrotask.

## Level 1 - Dasar
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

Tugas:
- Prediksi urutan output.
- Jelaskan kenapa callback Promise dieksekusi sebelum `setTimeout`.

## Level 2 - Menengah
```js
async function run() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("0");
run();
console.log("3");
```

Tugas:
- Prediksi output.
- Jelaskan posisi `await` dalam alur microtask.

## Level 3 - Lanjutan
```js
console.log("S");
setTimeout(() => {
  console.log("T1");
  Promise.resolve().then(() => console.log("M-in-T1"));
}, 0);

Promise.resolve().then(() => {
  console.log("M1");
  setTimeout(() => console.log("T2"), 0);
});

console.log("E");
```

Tugas:
- Prediksi urutan output lengkap.
- Jelaskan urutan saat macrotask membuat microtask baru.

## Checkpoint
- [ ] Level 1: Bisa membedakan sync stack, microtask queue, dan macrotask queue.
- [ ] Level 2: Bisa menjelaskan continuation setelah `await`.
- [ ] Level 3: Bisa melacak interaksi antrean lintas tick tanpa trial-and-error.
