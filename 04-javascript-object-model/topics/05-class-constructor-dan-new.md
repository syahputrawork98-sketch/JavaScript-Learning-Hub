# Class, Constructor, dan `new`

## Tujuan Pembelajaran

- Bisa menjelaskan apa yang dilakukan `new` secara berurutan.
- Bisa membedakan own property instance vs method prototype.
- Bisa menjelaskan class sebagai sugar di atas prototype.

## Konsep Utama

- Constructor function: fungsi pembuat instance saat dipanggil dengan `new`.
- Instance: object hasil instansiasi.
- `this` in constructor: referensi ke instance baru saat `new` dijalankan.
- Prototype method: method yang dibagi lintas instance.

### Prasyarat dan Kamus Mini

Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)
- Visual map: [`../assets/class-constructor-new-map.svg`](../assets/class-constructor-new-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`5` pada Buku 04.
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

## Penjelasan

### Pengantar Singkat Topik

`class` di JavaScript adalah syntax sugar di atas prototype system. Topik ini membantu memahami apa yang benar-benar terjadi saat `new` dipanggil supaya pemakaian class tidak sekadar hafalan syntax.

### Big Picture

Banyak kode class terlihat rapi tetapi tetap membingungkan saat bug `this` atau inheritance muncul. Topik ini menjelaskan hubungan constructor, `new`, instance, dan prototype method agar model mental class tetap sinkron dengan mekanisme object model JS.

### Small Picture

1. `new Ctor()` membuat object instance baru.
2. Instance dihubungkan ke `Ctor.prototype`.
3. Constructor dieksekusi dengan `this` mengarah ke instance baru.
4. Method class disimpan di prototype (bukan disalin ke tiap instance).
5. `class` mempermudah syntax, tetapi perilaku dasarnya tetap prototype-based.

## Diagram Konsep (Opsional)

![Class, Constructor, dan `new` Map](../assets/class-constructor-new-map.svg)

### Wireframe

```text
Alur utama:
[new User()] -> [buat instance] -> [link ke User.prototype] -> [jalankan constructor]

Alur jalan:
[akses method instance] -> [cek own property] -> [naik ke prototype method]

Alur error:
[lupa pakai new pada constructor function] -> [this salah konteks] -> [bug state]
```

## Contoh Kode

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

## Analogi Singkat (Opsional)

Bayangkan pabrik:
- Constructor/class = blueprint.
- `new` = mesin produksi.
- Instance = produk jadi.
- Prototype methods = panduan operasi yang dibagi ke semua produk.

## Eksperimen Kode

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

## Common Misconception (Opsional)

- Mengira method class menjadi own property tiap instance.
- Memanggil constructor function tanpa `new`.
- Menggunakan arrow function secara berlebihan di class field sampai boros memori.

## Cakupan dan Batasan

- Dipakai untuk: membangun banyak object serupa dengan behavior konsisten.
- Alasan pakai: struktur lebih rapi dan method tidak diduplikasi di setiap instance.
- Kapan tidak dipakai: jika cukup object literal kecil tanpa kebutuhan instansiasi berulang.

## Latihan

1. Implementasikan class sederhana, lalu tunjukkan method mana yang shared di prototype dan mana yang instance-specific.
2. Tuliskan ulang class menjadi function constructor + prototype untuk melihat kesetaraan modelnya.
3. Eksperimen dengan memanggil constructor tanpa 
ew (jika memungkinkan), lalu analisis konsekuensinya.

### Debug Story

Kasus: method class kehilangan `this` saat dipass sebagai callback.
Langkah debug:
1. Cek call-site apakah method dipanggil langsung dari instance atau dipisah.
2. Gunakan `.bind(this)` atau wrapper function jika butuh context stabil.
3. Hindari asumsi `this` tetap sama saat function dipindah.

### Checkpoint

- [ ] Bisa menjelaskan apa yang dilakukan `new` secara berurutan.
- [ ] Bisa membedakan own property instance vs method prototype.
- [ ] Bisa menjelaskan class sebagai sugar di atas prototype.

### Bacaan Remedial

1. Ulangi `02-prototype-chain-lanjutan.md`.
2. Buat contoh constructor function dan versi class, lalu bandingkan.
3. Cek `hasOwnProperty` untuk property dan method.

## Ringkasan

- Syntax class adalah lapisan deklaratif di atas mekanisme constructor dan prototype JavaScript.
- Operator 
ew membentuk instance, mengikat prototype, dan mengatur konteks inisialisasi object.
- Memahami proses internal 
ew membantu menghindari bug instansiasi yang sulit dilacak.

## Lanjut Setelah Ini

- [06-composition-vs-inheritance.md](./06-composition-vs-inheritance.md)


