# 02 - This Binding Edge Cases

## Tujuan
Melatih reasoning `this` di berbagai pola pemanggilan function.

## Drill 1
```js
const user = {
  nama: "Nina",
  sapa() {
    return `Halo ${this.nama}`;
  },
};

const fn = user.sapa;
console.log(user.sapa());
console.log(fn());
```

Tugas:
- Prediksi output.
- Jelaskan kenapa hasil `fn()` berbeda.

## Drill 2
```js
function tampilkan() {
  return this.nilai;
}

const a = { nilai: 10, tampilkan };
const b = { nilai: 20, tampilkan };

console.log(a.tampilkan());
console.log(b.tampilkan());
```

Tugas:
- Prediksi output.
- Jelaskan aturan binding yang sedang terjadi.

## Checkpoint
- [ ] Bisa jelaskan `this` berdasarkan cara pemanggilan, bukan lokasi deklarasi.
- [ ] Bisa mendeteksi bug karena function reference lepas dari object.
