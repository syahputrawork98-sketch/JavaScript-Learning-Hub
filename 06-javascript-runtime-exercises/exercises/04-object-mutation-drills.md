# 04 - Object Mutation Drills

## Tujuan
Melatih deteksi bug akibat reference sharing dan mutation pada object/array.

## Drill 1
```js
const a = { nilai: 10 };
const b = a;
b.nilai = 99;

console.log(a.nilai);
console.log(b.nilai);
```

Tugas:
- Prediksi output.
- Jelaskan kenapa perubahan `b` memengaruhi `a`.

## Drill 2
```js
const state = {
  user: { nama: "Ari" },
};

const nextState = { ...state };
nextState.user.nama = "Bima";

console.log(state.user.nama);
console.log(nextState.user.nama);
```

Tugas:
- Prediksi output.
- Jelaskan kenapa spread di level atas belum cukup untuk nested object.

## Checkpoint
- [ ] Bisa jelaskan perbedaan copy reference vs copy value.
- [ ] Bisa memilih strategi update yang aman untuk nested structure.
