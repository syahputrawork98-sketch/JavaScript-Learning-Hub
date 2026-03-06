# 01 - Closure Behavior Drills

## Tujuan
Melatih pemahaman closure dari state sederhana hingga kasus loop dan async callback.

## Level 1 - Dasar
```js
function buatCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c1 = buatCounter();
console.log(c1());
console.log(c1());
const c2 = buatCounter();
console.log(c2());
```

Tugas:
- Prediksi output.
- Jelaskan kenapa `c1` dan `c2` tidak berbagi state.

## Level 2 - Menengah
```js
function pembuatPesan(prefix) {
  return function (nama) {
    return `${prefix} ${nama}`;
  };
}

const halo = pembuatPesan("Halo");
const hai = pembuatPesan("Hai");

console.log(halo("Budi"));
console.log(hai("Budi"));
```

Tugas:
- Prediksi output.
- Jelaskan nilai apa saja yang tertangkap oleh closure.

## Level 3 - Lanjutan
```js
function buatHandlers() {
  const handlers = [];
  for (var i = 1; i <= 3; i++) {
    handlers.push(() => console.log("index", i));
  }
  return handlers;
}

const hs = buatHandlers();
hs[0]();
hs[1]();
hs[2]();
```

Tugas:
- Prediksi output.
- Jelaskan kenapa semua handler bisa menghasilkan nilai sama.
- Usulkan perbaikan minimal agar tiap handler menyimpan indeks yang benar.

## Checkpoint
- [ ] Level 1: Bisa menjelaskan shared state vs isolated state pada closure.
- [ ] Level 2: Bisa menyebut lexical environment yang tertangkap function.
- [ ] Level 3: Bisa memperbaiki bug closure pada loop secara tepat.
