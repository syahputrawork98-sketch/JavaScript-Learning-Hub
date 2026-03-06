# 02 - This Binding Edge Cases

## Tujuan
Melatih reasoning `this` berdasarkan call-site dari kasus dasar hingga callback terlepas.

## Level 1 - Dasar
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

## Level 2 - Menengah
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

## Level 3 - Lanjutan
```js
const timer = {
  detik: 0,
  start() {
    setTimeout(function () {
      this.detik++;
      console.log("detik:", this.detik);
    }, 0);
  },
};

timer.start();
```

Tugas:
- Prediksi output/error.
- Identifikasi akar masalah binding pada callback.
- Usulkan dua perbaikan berbeda (contoh: arrow function atau `bind`).

## Checkpoint
- [ ] Level 1: Bisa jelaskan `this` saat method dipanggil langsung vs function reference.
- [ ] Level 2: Bisa memetakan `this` ke object pemanggil pada call-site.
- [ ] Level 3: Bisa memperbaiki bug binding pada callback async.
