# 04 - Object Mutation Drills

## Tujuan
Melatih deteksi bug akibat reference sharing dari object sederhana sampai nested array.

## Level 1 - Dasar
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

## Level 2 - Menengah
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
- Jelaskan kenapa spread level atas belum cukup untuk nested object.

## Level 3 - Lanjutan
```js
const source = {
  profile: { nama: "Lia" },
  tags: ["js", "runtime"],
};

const clone = {
  ...source,
  profile: { ...source.profile },
};

clone.tags.push("debug");
clone.profile.nama = "Mila";

console.log(source.profile.nama, source.tags.length);
console.log(clone.profile.nama, clone.tags.length);
```

Tugas:
- Prediksi output.
- Identifikasi properti mana yang masih berbagi reference.
- Usulkan strategi copy aman untuk struktur campuran object + array.

## Checkpoint
- [ ] Level 1: Bisa membedakan copy reference vs copy value.
- [ ] Level 2: Bisa mengidentifikasi efek shallow copy pada nested object.
- [ ] Level 3: Bisa memilih strategi copy yang aman sesuai bentuk data.
