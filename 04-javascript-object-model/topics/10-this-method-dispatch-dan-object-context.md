# This, Method Dispatch, dan Object Context

## 0) Prasyarat dan Kamus Mini
Rujukan cepat:
- Dasar umum: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Alur topik: [`../docs/learning-path.md`](../docs/learning-path.md)\n- Visual map: [`../assets/this-method-dispatch-object-context-map.svg`](../assets/this-method-dispatch-object-context-map.svg)

Alur topik:
- Topik ini ada di urutan ke-`10` pada Track 04.
- Prasyarat langsung: `09-internal-methods-get-set-dan-defineownproperty.md`.
- Lanjut setelah ini: `11-built-in-objects-dan-behavior-khusus.md`.

Prasyarat topik:
- Sudah paham call-site `this` dari track 02.
- Sudah paham method pada object/prototype.

Referensi remedial:
- [`05-class-constructor-dan-new.md`](./05-class-constructor-dan-new.md)
- `../../02-javascript-runtime-first-principles/topics/06-this-binding-lanjutan.md`

Kamus mini topik:
- `[baru]` Method dispatch: cara runtime menentukan method dan context panggil.
- `[baru]` Detached method: method yang dipanggil tanpa receiver object asal.
- `[ulang]` Call-site: bentuk pemanggilan yang menentukan `this`.

## Pengantar Singkat Topik
Topik ini fokus ke perilaku `this` saat method object dipanggil langsung, diwariskan, atau terlepas dari object asal.

## 1) Big Picture
Banyak bug object model sebenarnya bug dispatch + context. Dengan memahami cara method dipilih dan bagaimana `this` ditetapkan, kamu bisa menghindari bug `undefined`, `NaN`, atau side-effect ke object yang salah.

## 2) Small Picture
1. `obj.fn()` memberi context `this = obj`.
2. `const f = obj.fn; f()` melepas context asal.
3. Method inherited tetap dieksekusi dengan `this` receiver aktual.
4. `bind/call/apply` bisa mengunci atau mengganti context.
5. Arrow function tidak punya `this` dinamis seperti function biasa.

## 3) Wireframe
```text
Alur utama:
[method call] -> [tentukan receiver] -> [this binding]

Alur jalan:
[inherited method] -> [receiver tetap object pemanggil]

Alur error:
[detached method] -> [this hilang] -> [TypeError/hasil salah]
```

## 4) Analogi
Seperti kartu akses kantor: nama fungsi sama, tapi hak akses tergantung siapa yang men-scan kartu saat dipanggil.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: desain method object/class yang aman dari context leak.
- Alasan pakai: mengurangi bug runtime saat method dipassing sebagai callback.
- Kapan tidak dipakai: jika fungsi benar-benar pure dan tidak butuh `this`.

## 6) Contoh Sederhana
```js
const counter = {
  value: 0,
  inc() {
    this.value++;
    return this.value;
  },
};

const f = counter.inc;
console.log(counter.inc());
console.log(f());
```

### Bedah Output (Langkah Demi Langkah)
1. `counter.inc()` valid dengan `this = counter`.
2. `f()` dipanggil lepas, receiver hilang.
3. Pada strict mode, `this` jadi `undefined` dan bisa TypeError.
4. Pada non-strict, bisa memicu hasil tidak diinginkan.

## 7) Jebakan Umum
- Menyimpan method ke variabel lalu dipanggil tanpa bind.
- Menggunakan arrow method di object literal tanpa memahami lexical `this`.
- Mengira method inherited otomatis bind permanen.

## 8) Prediksi Output Drill
```js
const obj = {
  n: 1,
  get() { return this.n; },
};

const other = { n: 5, get: obj.get };
console.log(other.get());
```

### Kunci Jawaban Drill
- Output: `5`
- Alasan: call-site `other.get()` membuat `this = other`.

## 9) Debug Story
Kasus: method class dipassing sebagai callback event dan value jadi undefined.
Langkah debug:
1. Cek apakah callback dipanggil tanpa receiver asli.
2. Gunakan `bind` saat registrasi callback.
3. Alternatif: bungkus dengan arrow function di lokasi pemanggilan.

## 10) Checkpoint
- [ ] Bisa menjelaskan `this` berdasarkan call-site method.
- [ ] Bisa mendeteksi bug detached method.
- [ ] Bisa memilih solusi bind/call/arrow sesuai konteks.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi topik `06-this-binding` di track 02.
2. Uji perbedaan `obj.fn()` vs `const f=obj.fn; f()`.
3. Praktikkan `bind` pada callback nyata.

