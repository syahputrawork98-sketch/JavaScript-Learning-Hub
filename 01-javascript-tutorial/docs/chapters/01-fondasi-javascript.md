# Bab 1 - Fondasi JavaScript

## 1. Tujuan Bab
Setelah bab ini, kamu harus bisa:
- Menentukan kapan pakai `let` dan `const`.
- Membedakan tipe data dasar (`string`, `number`, `boolean`, `null`, `undefined`).
- Memakai operator dasar dan perbandingan dengan benar.
- Menulis logika keputusan dengan `if/else` dan `switch`.

Indikator terukur:
- [ ] Bisa prediksi output 5 potongan kode dasar.
- [ ] Bisa bikin program keputusan sederhana tanpa copy-paste.

## 2. Gambaran Besar
Bab ini adalah pondasi. Kalau pondasi goyang, bab setelahnya ikut goyang.

Cara lihatnya gampang:
- Variabel = tempat simpan data.
- Tipe data = bentuk data yang disimpan.
- Operator = cara mengolah/ membandingkan data.
- `if/else` dan `switch` = cara program ambil keputusan.

## 3. Gambaran Kecil
### Variabel
- Pakai `const` kalau nilainya tidak diganti.
- Pakai `let` kalau nilainya bisa berubah.

```js
const appName = "Belajar JS";
let score = 0;
score = score + 10;
console.log(appName, score); // Belajar JS 10
```

### Tipe Data Dasar
```js
const username = "syahputra"; // string
const age = 20;                // number
const isActive = true;         // boolean
const emptyValue = null;       // null
let notAssigned;               // undefined
```

### Operator Dasar
```js
const a = 10;
const b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

### Perbandingan yang Aman
Utamakan `===` dan `!==`.

```js
console.log(5 === "5"); // false
console.log(5 == "5");  // true (karena coercion)
```

### Kontrol Alur
```js
const score = 78;

if (score >= 80) {
  console.log("Lulus dengan baik");
} else if (score >= 70) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}
```

```js
const role = "editor";

switch (role) {
  case "admin":
    console.log("Akses penuh");
    break;
  case "editor":
    console.log("Akses edit konten");
    break;
  default:
    console.log("Akses terbatas");
}
```

## 4. Analogi Sederhana
Bayangkan kamu jaga gerbang:
- Variabel = kartu catatan tamu.
- Tipe data = jenis info di kartu (nama, umur, status).
- Operator = aturan baca kartu (umur >= 17?).
- `if/else` = keputusan buka/tolak gerbang.

Kenapa relevan:
- Program tiap hari melakukan pola ini: simpan data, cek kondisi, putuskan aksi.

Batas analogi:
- Di JavaScript, data bisa berubah cepat dan perlu aturan sintaks yang ketat.

## 5. Contoh Kode Inti
Kasus: cek diskon berdasarkan status member dan total belanja.

```js
const isMember = true;
const totalBelanja = 175000;
let diskon = 0;

if (isMember && totalBelanja >= 150000) {
  diskon = 0.15;
} else if (isMember) {
  diskon = 0.1;
} else {
  diskon = 0.05;
}

const totalBayar = totalBelanja - totalBelanja * diskon;
console.log(totalBayar);
```

Prediksi output:
- `148750`

Alasan teknis:
- Kondisi pertama `true` karena member dan belanja >= 150000.
- Maka diskon 15% dipakai.
- `175000 - (175000 * 0.15) = 148750`.

## 6. Debug Corner
Gejala error umum:
- Kondisi selalu lolos/patah di tempat yang tidak semestinya.

Contoh salah:
```js
let age = 18;
if (age = 17) {
  console.log("Boleh masuk");
}
```

Masalah:
- `age = 17` itu assignment, bukan perbandingan.
- Nilai `age` diubah jadi 17, lalu kondisi dianggap truthy.

Perbaikan:
```js
let age = 18;
if (age === 17) {
  console.log("Boleh masuk");
} else {
  console.log("Umur tidak sesuai");
}
```

Langkah diagnosis cepat:
1. Cek operator di kondisi (`=`, `==`, `===`).
2. `console.log` nilai sebelum masuk kondisi.
3. Cek cabang yang dieksekusi dan cocokkan dengan ekspektasi.

## 7. Latihan Bertahap
### Level 1 - Dasar
1. Buat variabel `nama`, `umur`, `isStudent`, lalu tampilkan nilainya.
2. Hitung luas persegi panjang dari `panjang` dan `lebar`.

### Level 2 - Menengah
1. Buat program cek kelulusan:
- `nilai >= 75` -> "Lulus"
- selain itu -> "Tidak lulus"
2. Buat program cek angka ganjil/genap.

### Level 3 - Menantang
1. Buat kalkulator diskon bertingkat:
- Member + belanja >= 200000 -> 20%
- Member + belanja < 200000 -> 10%
- Non-member + belanja >= 200000 -> 5%
- Selain itu -> 0%

## 8. Checkpoint Lulus Bab
- [ ] Bisa jelaskan beda `let` dan `const`.
- [ ] Bisa jelaskan beda `==` dan `===` dengan contoh.
- [ ] Bisa bikin 2 program keputusan (`if/else`, `switch`).
- [ ] Bisa menemukan dan memperbaiki bug operator kondisi.

## 9. Ringkasan Bab
1. JavaScript dasar selalu berputar di data, operasi, dan keputusan.
2. Kebiasaan pakai `===` membantu mencegah bug coercion dasar.
3. Debugging dasar dimulai dari cek nilai, cek operator, cek cabang eksekusi.
