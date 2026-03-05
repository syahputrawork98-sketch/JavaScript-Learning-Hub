# Function dan Closure Dasar
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
- Topik ini ada di urutan ke-`3` pada Foundations.
- Prasyarat langsung: `01-values-types-coercion.md`, `02-scope-hoisting.md`.
- Lanjut setelah ini: `04-this-binding-dasar.md`.

Prasyarat topik:
- Sudah paham variabel dasar (`let`, `const`).
- Sudah paham scope dan hoisting dasar.

Referensi remedial:
- [`../docs/prasyarat/variabel-dasar.md`](../docs/prasyarat/variabel-dasar.md)
- [`../docs/prasyarat/function-dasar.md`](../docs/prasyarat/function-dasar.md)

Kamus mini topik:
- `[baru]` Function declaration: fungsi dengan bentuk `function nama() {}`.
- `[baru]` Function expression: fungsi disimpan ke variabel.
- `[baru]` Parameter: nama input saat definisi fungsi.
- `[baru]` Argument: nilai nyata saat fungsi dipanggil.
- `[baru]` Closure: fungsi yang "mengingat" lexical scope saat dibuat.
- `[ulang]` Scope: wilayah akses variabel.

## Pengantar Singkat Topik
Function adalah blok logika yang bisa dipanggil ulang dengan input berbeda, sedangkan closure membuat fungsi tetap bisa mengakses data dari scope saat fungsi itu dibuat. Kombinasi keduanya adalah dasar untuk menulis kode modular dan stateful.

## 1) Big Picture
Kode mudah berantakan saat logika diulang-ulang atau state disimpan sembarangan di global. Topik ini menjelaskan bagaimana function memecah logika jadi unit reusable dan bagaimana closure menjaga akses ke state dari lexical scope secara terkontrol. Setelah paham, kamu bisa memutuskan kapan membuat utility biasa, kapan memakai closure untuk state privat, dan bagaimana menjaga API tetap bersih.

## 2) Small Picture
1. Function menerima input (parameter), memproses, lalu mengembalikan output (`return`).
2. Function bisa dibuat sebagai declaration atau expression.
3. Saat function dibuat di dalam function lain, function dalam dapat mengakses variabel luar.
4. Jika function dalam dikembalikan, akses ke variabel luar tetap hidup. Inilah closure.

## 3) Wireframe
```text
Alur utama:
[Outer function dipanggil] -> [State lokal dibuat] -> [Inner function di-return]

Alur jalan:
[Inner function dipanggil berulang] -> [akses state closure yang sama] -> [state bertambah]

Alur error:
[Outer function dipanggil ulang tanpa sadar] -> [state reset] -> [hasil selalu mulai dari awal]
```

## 4) Analogi
Bayangkan kamu punya laci pribadi:
- Outer function = proses menyiapkan laci.
- Variabel lokal = isi laci.
- Inner function = kunci laci yang kamu bawa.
Walau kamu keluar ruangan, selama kuncinya masih ada, isi laci masih bisa diakses.

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: modularisasi logika, membuat utility function, menyimpan state privat sederhana.
- Alasan pakai: kode lebih reusable, rapi, dan mengurangi variabel global.
- Kapan tidak dipakai: hindari closure berlebihan jika membuat alur sulit dibaca atau menahan memori tak perlu.

## 6) Contoh Sederhana
```js
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counterA = createCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2

const counterB = createCounter();
console.log(counterB()); // 1
```

### Bedah Output (Langkah Demi Langkah)
1. `createCounter()` dipanggil untuk `counterA`, dibuat `count = 0`.
2. Fungsi dalam dikembalikan dan menyimpan akses ke `count` tersebut (closure).
3. Panggilan pertama `counterA()` menaikkan `count` jadi `1`.
4. Panggilan kedua `counterA()` menaikkan `count` yang sama jadi `2`.
5. `counterB` dibuat dari panggilan baru `createCounter()`, jadi punya `count` terpisah mulai dari `0`.
6. Maka `counterB()` menghasilkan `1`, tidak ikut nilai `counterA`.

## 7) Jebakan Umum
- Mengira semua counter berbagi state yang sama.
- Lupa `return` sehingga fungsi selalu `undefined`.
- Mengira function expression bisa di-hoist penuh seperti function declaration.

## 8) Prediksi Output Drill
```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
```

### Kunci Jawaban Drill
- `add5(2)` -> `7`
- `add10(2)` -> `12`
- Alasan: masing-masing closure menyimpan nilai `x` yang berbeda.

## 9) Debug Story
Kasus: nilai hitungan terus reset ke `1` padahal diharapkan bertambah.
Langkah debug:
1. Cek apakah `createCounter()` dipanggil ulang setiap klik/event.
2. Jika iya, pindahkan inisialisasi `const counter = createCounter()` ke luar handler.
3. Pastikan handler hanya memanggil `counter()` agar closure state tetap sama.

## 10) Checkpoint
- [ ] Bisa jelaskan beda parameter dan argument.
- [ ] Bisa jelaskan kenapa closure bisa menyimpan state.
- [ ] Bisa membuat counter sederhana berbasis closure tanpa lihat catatan.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi contoh counter, tapi log nilai `count` di setiap langkah.
2. Bandingkan hasil `counterA` dan `counterB` sampai paham state terpisah.
3. Coba ubah contoh jadi `makeMultiplier` untuk melihat pola yang sama.




