# 01 - Closure Behavior Drills

## Tujuan
Melatih pemahaman closure: kapan state tersimpan, kapan tidak, dan bagaimana efeknya ke output.

## Drill 1
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

## Drill 2
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
- Jelaskan nilai apa saja yang "tertangkap" oleh closure.

## Checkpoint
- [ ] Bisa menjelaskan closure tanpa menyebut "magic".
- [ ] Bisa membedakan shared state vs isolated state.
