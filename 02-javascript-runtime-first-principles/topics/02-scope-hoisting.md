# Scope dan Hoisting
## Metadata Migrasi
- Status: 
ormalized
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
- Topik ini ada di urutan ke-`2` pada Foundations.
- Prasyarat langsung: `01-values-types-coercion.md`.
- Lanjut setelah ini: `03-function-closure-dasar.md`.

Prasyarat topik:
- Sudah paham variabel `let`, `const`, `var`.
- Sudah paham fungsi dasar.

Referensi remedial:
- [`../docs/prasyarat/variabel-dasar.md`](../docs/prasyarat/variabel-dasar.md)
- [`../docs/prasyarat/function-dasar.md`](../docs/prasyarat/function-dasar.md)

Kamus mini topik:
- `[baru]` Scope: wilayah akses variabel.
- `[baru]` Hoisting: perilaku deklarasi yang diproses lebih awal saat fase pembuatan konteks eksekusi.
- `[baru]` TDZ (Temporal Dead Zone): area saat variabel `let`/`const` sudah ada tetapi belum boleh diakses.
- `[ulang]` Declaration: proses deklarasi variabel/fungsi.

## Pengantar Singkat Topik
Scope dan hoisting membahas di mana variabel bisa diakses dan kapan deklarasi dianggap tersedia saat kode dijalankan. Topik ini penting supaya kamu bisa membaca urutan eksekusi dengan benar dan menghindari error akses variabel.

## 1) Big Picture
Error akses variabel sering terjadi karena developer tidak membedakan batas scope dan timing hoisting saat kode dieksekusi. Topik ini menjelaskan hubungan scope, creation phase, execution phase, dan TDZ agar perilaku `var`, `let`, `const`, serta function declaration jadi jelas. Setelah paham, kamu bisa memutuskan penempatan deklarasi dengan aman dan menghindari `ReferenceError` yang membingungkan.

## 2) Small Picture
1. Saat kode masuk, JavaScript membuat execution context.
2. Di fase creation, deklarasi function disiapkan penuh, `var` diinisialisasi `undefined`, sedangkan `let`/`const` masuk TDZ.
3. Di fase execution, baris kode dijalankan berurutan dan nilai sebenarnya diisi.

## 3) Wireframe
```text
Alur utama:
[Kode dibaca] -> [Creation phase] -> [Execution phase] -> [Akses variabel]

Alur jalan:
[Akses var sebelum assignment] -> [nilai awal undefined] -> [lanjut eksekusi]

Alur error:
[Akses let/const sebelum deklarasi] -> [kena TDZ] -> [ReferenceError]
```

## 4) Analogi
Bayangkan kantor:
- Creation phase = daftar meja pegawai disiapkan.
- Execution phase = pegawai mulai duduk dan bekerja.
- `var` seperti meja kosong dengan label "belum ada orang".
- `let/const` seperti meja yang masih ditutup kain, belum boleh dipakai sebelum waktunya (TDZ).

## 5) Dipakai untuk Apa + Alasan
- Dipakai untuk: menghindari error akses variabel, merancang blok kode aman.
- Alasan pakai: mencegah bug dari kebingungan urutan deklarasi dan akses.
- Kapan tidak dipakai: jangan gunakan `var` untuk kode modern kecuali memang butuh perilaku lama.

## 6) Contoh Sederhana
```js
console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError
let b = 20;

hello(); // 'halo'
function hello() {
  console.log('halo');
}
```

### Bedah Output (Langkah Demi Langkah)
1. `var a` sudah terdaftar saat creation phase dengan nilai awal `undefined`.
2. Maka `console.log(a)` pertama mencetak `undefined`, bukan error.
3. `let b` ada di TDZ sampai baris deklarasinya dijalankan; akses sebelum itu memicu `ReferenceError`.
4. Function declaration `hello` sudah siap penuh saat creation phase, jadi bisa dipanggil sebelum posisinya.

## 7) Jebakan Umum
- Mengira hoisting berarti kode dipindah secara fisik ke atas.
- Mengira `let` dan `var` sama perilakunya saat diakses sebelum deklarasi.
- Mengira function expression bisa dipanggil sebelum deklarasi seperti function declaration.

## 8) Prediksi Output Drill
```js
console.log(x);
var x = 1;

// console.log(y);
let y = 2;

say();
function say() {
  console.log('ok');
}
```

### Kunci Jawaban Drill
- `console.log(x)` -> `undefined`
- `console.log(y)` jika diaktifkan -> `ReferenceError`
- `say()` -> mencetak `ok`

## 9) Debug Story
Kasus: aplikasi crash saat mengambil nilai config di awal file.
Langkah debug:
1. Cek apakah variabel config dideklarasikan dengan `let/const` setelah pemakaian.
2. Cek apakah function yang dipanggil adalah declaration atau expression.
3. Pindahkan akses variabel ke bawah deklarasi jika memang perlu.

## 10) Checkpoint
- [ ] Bisa menjelaskan beda hoisting `var`, `let`, `const`.
- [ ] Bisa menjelaskan kenapa TDZ memunculkan `ReferenceError`.
- [ ] Bisa membedakan function declaration vs function expression terkait hoisting.

## Jika Masih Bingung, Baca Ini Dulu
1. Ulangi contoh `var` vs `let` sampai hasilnya bisa diprediksi.
2. Buat eksperimen kecil sendiri dengan 3 baris kode.
3. Fokus ke dua fase: creation dan execution.




