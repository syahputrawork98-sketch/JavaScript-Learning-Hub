# this Binding Lanjutan
## Metadata Migrasi
- Status: `normalized`
- Source: `02-javascript-first-principles (decommissioned legacy source)`
- Boundary:
  - Async queue detail -> ../../03-asynchronous-javascript-model/topics/
  - Object/prototype detail -> ../../04-javascript-object-model/topics/
  - Memory/reference detail -> ../../05-javascript-memory-and-references/topics/

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)

Alur topik:
- Topik ini ada di urutan ke-`2` pada Advanced.
- Prasyarat langsung: `05-closure-patterns.md`, `04-this-binding-dasar.md`.
- Lanjut setelah ini: `07-execution-context-lifecycle.md`.

Prasyarat topik:
- Sudah paham 4 rule dasar `this` (default, implicit, explicit, new).
- Sudah paham risiko context hilang saat method dipass sebagai callback.

Referensi remedial:
- [`./04-this-binding-dasar.md`](./04-this-binding-dasar.md)
- [`../docs/prasyarat/function-dasar.md`](../docs/prasyarat/function-dasar.md)
- [`05-closure-patterns.md`](./05-closure-patterns.md)

Kamus mini topik:
- `[baru]` Hard binding: mengunci `this` permanen dengan `bind`.
- `[baru]` Soft binding: fallback context jika call-site tidak memberi context.
- `[baru]` Callback context loss: hilangnya context saat function dipanggil di tempat lain.
- `[baru]` Method borrowing: meminjam method object lain via `call/apply`.
- `[ulang]` Explicit binding: menentukan `this` manual lewat `call/apply/bind`.

## Pengantar Singkat Topik
`this` binding lanjutan fokus pada kontrol context di skenario callback, utility reusable, dan integrasi antar modul. Tujuannya agar perilaku function tetap stabil walau dipanggil dari call-site yang berbeda-beda.

## 1) Big Picture
Masalah context bug sering terjadi saat method dipindahkan jadi callback sehingga nilai `this` tidak lagi menunjuk object yang diharapkan. Topik ini menjelaskan teknik kontrol binding (`bind`, `call`, `apply`, dan strategi arrow/closure) agar perilaku function tetap konsisten di berbagai call-site. Setelah paham, kamu bisa mengambil keputusan kapan context perlu dikunci, kapan cukup dipinjam sementara, dan kapan lebih aman menghindari `this` sama sekali.

## 2) Small Picture
1. `this` tetap ditentukan oleh call-site, bukan lokasi penulisan function.
2. Saat function dipass sebagai callback, receiver object sering hilang.
3. `bind` bisa mengunci `this` agar stabil di mana pun function dipanggil.
4. `call/apply` bisa dipakai untuk method borrowing lintas object.
5. Arrow function berguna saat kita ingin mewarisi `this` dari scope luar, bukan membuat `this` baru.

## 3) Wireframe
```text
Alur utama:
[Method object] -> [dipass sebagai callback] -> [this berisiko hilang]

Alur jalan:
[bind/call/apply diterapkan] -> [context terkontrol] -> [hasil stabil]

Alur error:
[callback dipanggil tanpa binding] -> [this undefined/salah object] -> [TypeError/bug logika]
```

## 4) Analogi
Bayangkan `this` seperti badge akses ruangan:
- Method adalah orang yang butuh badge untuk buka pintu data.
- Saat orang dipindah ke ruangan lain tanpa badge yang benar, akses gagal.
- `bind` itu seperti menempelkan badge permanen ke orang tersebut.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: event handler, timer callback, reusable utilities, object API lintas modul.
- Alasan pakai: menjaga perilaku function konsisten walau dipanggil dari banyak tempat.
- Kapan tidak dipakai: jika binding berlapis-lapis membuat kode sulit dibaca, pertimbangkan closure atau parameter eksplisit.

## 6) Contoh Sederhana
```js
const cart = {
  owner: 'Ari',
  total: 100,
  print(prefix) {
    return `${prefix} ${this.owner}: ${this.total}`;
  },
};

const detached = cart.print;

// Risiko context hilang:
// console.log(detached('Cart')); // TypeError di strict mode

const fixed = detached.bind(cart);
console.log(fixed('Cart')); // Cart Ari: 100

const otherCart = { owner: 'Bima', total: 250 };
console.log(detached.call(otherCart, 'Cart')); // Cart Bima: 250
```

### Bedah Output (Langkah Demi Langkah)
1. `detached` menyimpan function `print` tanpa object receiver.
2. Jika dipanggil langsung di strict mode, `this` jadi `undefined` dan akses property gagal.
3. `bind(cart)` menghasilkan function baru dengan `this` terkunci ke `cart`.
4. Maka `fixed('Cart')` selalu aman dan konsisten.
5. `call(otherCart, 'Cart')` meminjam function yang sama untuk object lain.

## 7) Jebakan Umum
- Menganggap `bind` hanya kosmetik padahal mengembalikan function baru.
- Mengira `call` dan `apply` permanen seperti `bind` (padahal hanya untuk satu panggilan).
- Overuse arrow function untuk semua method meski butuh `this` dinamis.
- Tidak sadar callback framework/event emitter memanggil function dengan context berbeda.

## 8) Prediksi Output Drill
```js
const profile = {
  name: 'Naya',
  show() {
    return this.name;
  },
};

const show = profile.show;
const bound = show.bind(profile);

console.log(bound());
console.log(show.call({ name: 'Raka' }));
```

### Kunci Jawaban Drill
- `bound()` -> `Naya`
- `show.call({ name: 'Raka' })` -> `Raka`
- Alasan: `bound` mengunci context ke `profile`, `call` memberi context sekali pakai.

## 9) Debug Story
Kasus: tombol klik memanggil method class/object tapi data user selalu `undefined`.
Langkah debug:
1. Cek apakah method dipass langsung sebagai handler tanpa binding.
2. Jika iya, gunakan `bind` saat registrasi handler atau wrapper function.
3. Verifikasi kembali dengan log `this` di dalam handler.

## 10) Checkpoint
- [ ] Bisa menjelaskan perbedaan `call`, `apply`, dan `bind` dengan contoh.
- [ ] Bisa memperbaiki callback context loss pada kasus event/timer.
- [ ] Bisa memilih kapan pakai `this` binding vs closure untuk menjaga keterbacaan kode.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik dasar: `./04-this-binding-dasar.md`.
2. Buat eksperimen kecil: method dipanggil langsung, via `bind`, dan via `call`.
3. Catat output tiap skenario sampai polanya jelas.





