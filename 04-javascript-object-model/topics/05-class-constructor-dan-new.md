# Class, Constructor, dan `new`

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/class-constructor-new-map.svg`](../assets/class-constructor-new-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`5` pada Track 04.
- Prasyarat langsung: `04-property-descriptors-dasar.md`.
- Lanjut setelah ini: `06-composition-vs-inheritance.md`.

Prasyarat topik:
- Sudah paham prototype chain.
- Sudah paham function dasar.

Referensi remedial:
- [`02-prototype-chain-lanjutan.md`](./02-prototype-chain-lanjutan.md)
- [`../../02-javascript-runtime-first-principles/docs/prasyarat/function-dasar.md`](../../02-javascript-runtime-first-principles/docs/prasyarat/function-dasar.md)

Kamus mini topik:
- `[baru]` Constructor function: fungsi pembuat instance saat dipanggil dengan `new`.
- `[baru]` Instance: object hasil instansiasi.
- `[baru]` `this` in constructor: referensi ke instance baru saat `new` dijalankan.
- `[ulang]` Prototype method: method yang dibagi lintas instance.

## Pengantar Singkat Topik
`class` di JavaScript adalah syntax sugar di atas prototype system. Topik ini membantu memahami apa yang benar-benar terjadi saat `new` dipanggil supaya pemakaian class tidak sekadar hafalan syntax.

## 1) Big Picture
Banyak kode class terlihat rapi tetapi tetap membingungkan saat bug `this` atau inheritance muncul. Topik ini menjelaskan hubungan constructor, `new`, instance, dan prototype method agar model mental class tetap sinkron dengan mekanisme object model JS.

## 2) Small Picture
1. `new Ctor()` membuat object instance baru.
2. Instance dihubungkan ke `Ctor.prototype`.
3. Constructor dieksekusi dengan `this` mengarah ke instance baru.
4. Method class disimpan di prototype (bukan disalin ke tiap instance).
5. `class` mempermudah syntax, tetapi perilaku dasarnya tetap prototype-based.

## 3) Wireframe
```text
Alur utama:
[new User()] -> [buat instance] -> [link ke User.prototype] -> [jalankan constructor]

Alur jalan:
[akses method instance] -> [cek own property] -> [naik ke prototype method]

Alur error:
[lupa pakai new pada constructor function] -> [this salah konteks] -> [bug state]
```

## 4) Analogi
Bayangkan pabrik:
- Constructor/class = blueprint.
- `new` = mesin produksi.
- Instance = produk jadi.
- Prototype methods = panduan operasi yang dibagi ke semua produk.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: membangun banyak object serupa dengan behavior konsisten.
- Alasan pakai: struktur lebih rapi dan method tidak diduplikasi di setiap instance.
- Kapan tidak dipakai: jika cukup object literal kecil tanpa kebutuhan instansiasi berulang.

## 6) Contoh Sederhana
```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, ${this.name}`;
  }
}

const u1 = new User('Ari');
const u2 = new User('Bima');

console.log(u1.greet()); // Hi, Ari
console.log(u1.greet === u2.greet); // true
```

### Bedah Output (Langkah Demi Langkah)
1. `new User('Ari')` membuat instance baru dan mengikat `this`.
2. `name` menjadi own property instance.
3. `greet` tidak disalin ke instance, melainkan ada di `User.prototype`.
4. Karena method dibagi, referensi method `u1.greet` dan `u2.greet` sama.

## 7) Jebakan Umum
- Mengira method class menjadi own property tiap instance.
- Memanggil constructor function tanpa `new`.
- Menggunakan arrow function secara berlebihan di class field sampai boros memori.

## 8) Prediksi Output Drill
```js
function Person(name) {
  this.name = name;
}
Person.prototype.say = function () {
  return this.name;
};

const p = new Person('Nia');
console.log(p.say());
console.log(p.hasOwnProperty('say'));
```

### Kunci Jawaban Drill
- `p.say()` -> `Nia`
- `p.hasOwnProperty('say')` -> `false`
- Alasan: `say` berada di prototype, bukan own property.

## 9) Debug Story
Kasus: method class kehilangan `this` saat dipass sebagai callback.
Langkah debug:
1. Cek call-site apakah method dipanggil langsung dari instance atau dipisah.
2. Gunakan `.bind(this)` atau wrapper function jika butuh context stabil.
3. Hindari asumsi `this` tetap sama saat function dipindah.

## 10) Checkpoint
- [ ] Bisa menjelaskan apa yang dilakukan `new` secara berurutan.
- [ ] Bisa membedakan own property instance vs method prototype.
- [ ] Bisa menjelaskan class sebagai sugar di atas prototype.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi `02-prototype-chain-lanjutan.md`.
2. Buat contoh constructor function dan versi class, lalu bandingkan.
3. Cek `hasOwnProperty` untuk property dan method.


