# 03 - Async Order Drills

## Tujuan
Menguatkan prediksi urutan eksekusi sync, macrotask, dan microtask.

## Drill 1
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

Tugas:
- Prediksi urutan output.
- Jelaskan kenapa Promise callback dieksekusi sebelum `setTimeout`.

## Drill 2
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

## Checkpoint
- [ ] Bisa membedakan sync stack vs microtask queue vs macrotask queue.
- [ ] Bisa memprediksi urutan output tanpa trial-and-error.
