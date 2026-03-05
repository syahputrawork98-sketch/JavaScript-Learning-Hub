# Bab 2 - Function dan Modular Thinking

## 1. Tujuan Bab
Setelah bab ini, kamu harus bisa:
- Menulis function dengan declaration dan expression.
- Memakai parameter dan return dengan benar.
- Memecah masalah besar jadi fungsi-fungsi kecil.
- Memahami scope dasar agar tidak salah akses variabel.

Indikator terukur:
- [ ] Bisa bikin minimal 3 function reusable untuk kasus berbeda.
- [ ] Bisa jelaskan alur input -> proses -> output pada function.

## 2. Gambaran Besar
Di bab 1 kamu belajar bikin logika.
Di bab 2 kamu belajar bikin logika itu rapi dan bisa dipakai ulang.

Tanpa function, kode cepat jadi panjang dan berulang.
Dengan function, kode jadi:
- Lebih pendek.
- Lebih gampang dibaca.
- Lebih gampang dites dan diperbaiki.

## 3. Gambaran Kecil
### Function Declaration
```js
function sapa(nama) {
  return `Halo, ${nama}!`;
}

console.log(sapa("Syahputra"));
```

### Function Expression
```js
const hitungLuas = function (panjang, lebar) {
  return panjang * lebar;
};

console.log(hitungLuas(5, 3)); // 15
```

### Parameter dan Return
- Parameter = input function.
- Return = output function.

```js
function tambah(a, b) {
  return a + b;
}

const hasil = tambah(10, 7);
console.log(hasil); // 17
```

### Scope Dasar
Variabel di dalam function tidak bisa diakses dari luar function.

```js
function contohScope() {
  const pesan = "Saya hanya ada di dalam function";
  console.log(pesan);
}

contohScope();
// console.log(pesan); // Error
```

## 4. Analogi Sederhana
Bayangkan function itu seperti mesin kopi otomatis:
- Parameter = bahan yang kamu masukkan.
- Isi function = proses di dalam mesin.
- Return = kopi yang keluar.

Kenapa relevan:
- Mesin yang sama bisa dipakai berkali-kali dengan bahan berbeda.
- Sama seperti function reusable.

Batas analogi:
- Function bisa punya kondisi bercabang dan interaksi data yang jauh lebih kompleks dari mesin sederhana.

## 5. Contoh Kode Inti
Kasus: hitung total belanja dengan pajak dan diskon.

```js
function hitungSubtotal(harga, qty) {
  return harga * qty;
}

function hitungDiskon(subtotal, isMember) {
  if (isMember && subtotal >= 200000) return subtotal * 0.1;
  if (isMember) return subtotal * 0.05;
  return 0;
}

function hitungPajak(subtotal) {
  return subtotal * 0.11;
}

function hitungTotalBayar(harga, qty, isMember) {
  const subtotal = hitungSubtotal(harga, qty);
  const diskon = hitungDiskon(subtotal, isMember);
  const pajak = hitungPajak(subtotal - diskon);
  return subtotal - diskon + pajak;
}

const total = hitungTotalBayar(50000, 5, true);
console.log(total);
```

Prediksi output:
- Subtotal = 250000
- Diskon = 25000 (10%)
- Dasar pajak = 225000
- Pajak 11% = 24750
- Total = 249750

Alasan teknis:
- Tiap function pegang satu tanggung jawab.
- Function utama tinggal mengorkestrasi alur perhitungan.

## 6. Debug Corner
Gejala error umum:
- Function dipanggil tapi hasilnya `undefined`.

Contoh salah:
```js
function kali(a, b) {
  a * b;
}

const hasil = kali(4, 3);
console.log(hasil); // undefined
```

Masalah:
- Tidak ada `return`, jadi output default `undefined`.

Perbaikan:
```js
function kali(a, b) {
  return a * b;
}

const hasil = kali(4, 3);
console.log(hasil); // 12
```

Langkah diagnosis cepat:
1. Cek apakah function mengembalikan nilai (`return`).
2. Cek urutan argumen saat pemanggilan.
3. Log nilai parameter di awal function.

## 7. Latihan Bertahap
### Level 1 - Dasar
1. Buat function `celsiusKeFahrenheit(c)`.
2. Buat function `luasPersegi(sisi)`.

### Level 2 - Menengah
1. Buat function `hitungNilaiAkhir(tugas, uts, uas)`.
2. Buat function `cekKelulusan(nilaiAkhir)` yang return "Lulus" atau "Tidak Lulus".

### Level 3 - Menantang
1. Refactor program diskon agar jadi 4 function kecil:
- validasiInput
- hitungSubtotal
- hitungDiskon
- hitungTotalAkhir

## 8. Checkpoint Lulus Bab
- [ ] Bisa jelaskan beda function declaration vs expression.
- [ ] Bisa menjelaskan peran parameter dan return dengan contoh.
- [ ] Bisa memecah 1 kasus jadi minimal 3 function kecil.
- [ ] Bisa memperbaiki bug `undefined` karena lupa `return`.

## 9. Ringkasan Bab
1. Function membuat kode lebih modular, rapi, dan reusable.
2. Parameter adalah input, return adalah output.
3. Scope membantu menjaga variabel tetap pada tempat yang tepat.
