# 05 - Promise Error Propagation Drills

## Tujuan
Melatih pelacakan alur error dari Promise chain sederhana ke kombinasi `async/await`.

## Level 1 - Dasar
```js
Promise.resolve("start")
  .then((v) => {
    console.log(v);
    throw new Error("boom");
  })
  .then(() => console.log("after-then"))
  .catch((err) => {
    console.log("caught:", err.message);
    return "recovered";
  })
  .then((v) => console.log("final:", v));
```

Tugas:
- Prediksi output.
- Jelaskan kenapa `then` setelah `throw` dilewati.

## Level 2 - Menengah
```js
async function run() {
  try {
    await Promise.reject(new Error("gagal"));
    console.log("tidak jalan");
  } catch (err) {
    console.log("handle:", err.message);
  }
  console.log("selesai");
}

run();
```

Tugas:
- Prediksi output.
- Jelaskan hubungan `await` rejection dengan `try/catch`.

## Level 3 - Lanjutan
```js
Promise.resolve()
  .then(() => {
    throw new Error("A");
  })
  .catch((err) => {
    console.log("catch-1", err.message);
    throw new Error("B");
  })
  .catch((err) => {
    console.log("catch-2", err.message);
    return Promise.reject(new Error("C"));
  })
  .then(() => console.log("then-end"))
  .catch((err) => console.log("catch-final", err.message));
```

Tugas:
- Prediksi output.
- Bedakan efek `throw` vs `return Promise.reject(...)` di chain.

## Checkpoint
- [ ] Level 1: Bisa melacak skip pada `then` saat Promise rejected.
- [ ] Level 2: Bisa menjelaskan mapping rejection ke `try/catch`.
- [ ] Level 3: Bisa membaca error propagation lintas banyak `catch`.
