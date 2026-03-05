# this Binding Dasar

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`4` pada Foundations.
- Prasyarat langsung: `02-scope-hoisting.md`, `03-function-closure-dasar.md`.
- Lanjut setelah ini: `05-object-prototype-dasar.md`.

Prasyarat topik:
- Sudah paham function dasar.
- Sudah paham object dasar.

Referensi remedial:
- [`../docs/prasyarat/function-dasar.md`](../docs/prasyarat/function-dasar.md)
- [`../docs/prasyarat/object-dasar.md`](../docs/prasyarat/object-dasar.md)

Kamus mini topik:
- `[baru]` `this`: referensi ke object konteks saat function dijalankan.
- `[baru]` Method call: fungsi dipanggil lewat object, misalnya `obj.fn()`.
- `[baru]` Explicit binding: mengikat `this` manual dengan `call`, `apply`, atau `bind`.
- `[baru]` Arrow function: fungsi yang tidak punya `this` sendiri, mengambil `this` dari scope luar.
- `[ulang]` Function call: pemanggilan fungsi biasa tanpa object receiver.

## Pengantar Singkat Topik
`this` bukan milik fungsi secara tetap; nilainya ditentukan dari cara fungsi dipanggil. Topik ini membantu kamu membaca konteks eksekusi function agar tidak salah akses data object.

## 1) Big Picture
Bug context sering muncul ketika function yang sama dipanggil dari call-site berbeda sehingga nilai `this` berubah tanpa disadari. Topik ini menjelaskan aturan dasar binding (`method call`, `function call`, explicit binding, dan arrow behavior) agar perubahan context bisa diprediksi. Setelah paham, kamu bisa memutuskan kapan memakai `bind/call/apply`, kapan cukup method call biasa, dan kapan lebih jelas memakai closure.

## 2) Small Picture
1. Nilai `this` ditentukan saat function dipanggil, bukan saat ditulis (kecuali arrow function).
2. Jika dipanggil sebagai method (`obj.fn()`), `this` menunjuk ke `obj`.
3. Jika dipanggil dengan `call/apply/bind`, `this` mengikuti object yang kamu tentukan.
4. Arrow function tidak membuat `this` baru, tapi mewarisi `this` dari lingkungan luarnya.

## 3) Wireframe
```text
Alur utama:
[Function yang sama] -> [cara panggil berubah] -> [nilai this ditentukan saat call]

Alur jalan:
[obj.fn()] -> [this = obj] -> [property object terbaca]

Alur error:
[fn dipanggil langsung] -> [this hilang/undefined di strict mode] -> [TypeError atau hasil tak terduga]
```

## 4) Analogi
Bayangkan `this` seperti kartu identitas ruangan rapat:
- Function = pembicara.
- Cara memanggil function = ruangan tempat pembicara diundang.
- `this` = identitas ruangan aktif saat pembicara mulai bicara.
Undangannya beda, identitas ruangannya juga bisa beda.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: akses properti object saat membuat method, callback berbasis context, dan API object-oriented sederhana.
- Alasan pakai: menjaga function tetap generik tapi bisa bekerja pada object berbeda.
- Kapan tidak dipakai: hindari pola `this` rumit jika closure atau parameter eksplisit lebih jelas.

## 6) Contoh Sederhana
```js
const user = {
  name: 'Ari',
  sayName() {
    console.log(this.name);
  },
};

user.sayName(); // Ari

const say = user.sayName;
// say(); // TypeError di mode strict, atau output global value di non-strict

const admin = { name: 'Bima' };
say.call(admin); // Bima
```

### Bedah Output (Langkah Demi Langkah)
1. `user.sayName()` dipanggil lewat object `user`, jadi `this` adalah `user`.
2. Maka `this.name` menghasilkan `'Ari'`.
3. `const say = user.sayName` memisahkan fungsi dari object asal.
4. Saat `say()` dipanggil langsung, konteks object hilang, jadi `this` bukan `user`.
5. Di mode strict, `this` menjadi `undefined` sehingga akses `this.name` memicu `TypeError`.
6. Di non-strict, `this` bisa mengarah ke object global.
7. `say.call(admin)` mengikat `this` secara eksplisit ke `admin`.
8. Maka output menjadi `'Bima'`.

## 7) Jebakan Umum
- Mengira `this` selalu menunjuk object tempat fungsi ditulis.
- Lupa konteks hilang saat method dipass sebagai callback.
- Menggunakan arrow function sebagai method object padahal butuh `this` dinamis.

## 8) Prediksi Output Drill
```js
const team = {
  name: 'Frontend',
  show() {
    console.log(this.name);
  },
};

const other = { name: 'Backend' };
const fn = team.show;

team.show();
// fn();
fn.call(other);
```

### Kunci Jawaban Drill
- `team.show()` -> `Frontend`
- `fn()` jika diaktifkan -> `TypeError` di mode strict, atau nilai global di non-strict
- `fn.call(other)` -> `Backend`

## 9) Debug Story
Kasus: method object dipakai di `setTimeout`, tapi `this.name` jadi `undefined`.
Langkah debug:
1. Cek apakah method dipass langsung tanpa binding: `setTimeout(user.sayName, 100)`.
2. Perbaiki dengan `bind`: `setTimeout(user.sayName.bind(user), 100)`.
3. Atau bungkus dengan function: `setTimeout(() => user.sayName(), 100)`.

## 10) Checkpoint
- [ ] Bisa jelaskan bahwa `this` ditentukan saat pemanggilan function.
- [ ] Bisa membedakan method call dan function call biasa.
- [ ] Bisa memperbaiki bug context hilang menggunakan `bind` atau wrapper function.

## Jika Masih Bingung, Baca Ini Dulu
1. Jalankan contoh yang sama dengan 3 cara panggil berbeda.
2. Fokus ke pertanyaan ini: "fungsi dipanggil lewat object apa?"
3. Ulangi contoh `call` sampai bisa memprediksi output tanpa menjalankan.
