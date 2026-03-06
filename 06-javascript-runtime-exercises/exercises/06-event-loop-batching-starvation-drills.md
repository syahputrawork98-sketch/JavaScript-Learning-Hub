# 06 - Event Loop Batching and Starvation Drills

## Tujuan
Melatih prediksi event loop dari batching microtask ke gejala starvation.

## Level 1 - Dasar
```js
setTimeout(() => console.log("timer"), 0);

Promise.resolve()
  .then(() => {
    console.log("micro-1");
  })
  .then(() => {
    console.log("micro-2");
  });

console.log("sync");
```

Tugas:
- Prediksi output.
- Jelaskan kenapa semua microtask selesai sebelum timer.

## Level 2 - Menengah
```js
let i = 0;
function flood() {
  if (i >= 3) return;
  i++;
  Promise.resolve().then(() => {
    console.log("micro", i);
    flood();
  });
}

setTimeout(() => console.log("timer done"), 0);
flood();
console.log("start");
```

Tugas:
- Prediksi output.
- Jelaskan bagaimana microtask beruntun menunda macrotask.

## Level 3 - Lanjutan
```js
setTimeout(() => {
  console.log("T1");
  Promise.resolve().then(() => console.log("M-in-T1"));
}, 0);

setTimeout(() => console.log("T2"), 0);

Promise.resolve().then(() => {
  console.log("M1");
  Promise.resolve().then(() => console.log("M2"));
});

console.log("S");
```

Tugas:
- Prediksi urutan output lengkap.
- Jelaskan kapan microtask yang dibuat di dalam timer dieksekusi.

## Checkpoint
- [ ] Level 1: Bisa menjelaskan prioritas microtask vs macrotask.
- [ ] Level 2: Bisa mengenali starvation sederhana.
- [ ] Level 3: Bisa memetakan antrean saat task saling menambahkan task baru.
