# Bab 4 - Loop dan Problem Solving Dasar

## 1. Tujuan Bab
Setelah bab ini, kamu harus bisa:
- Memakai `for`, `while`, dan `for...of` di kasus yang tepat.
- Menulis proses berulang tanpa infinite loop.
- Menggabungkan loop + kondisi untuk menyelesaikan masalah sederhana.
- Memecah soal kecil jadi langkah logis berurutan.

Indikator terukur:
- [ ] Bisa memilih jenis loop yang sesuai untuk 3 kasus berbeda.
- [ ] Bisa menyelesaikan soal iterasi tanpa duplikasi kode manual.

## 2. Gambaran Besar
Loop dipakai saat kamu melakukan hal yang sama berkali-kali.
Tanpa loop, kode jadi panjang dan rawan typo.

Pola berpikirnya:
- Tentukan data awal.
- Tentukan kondisi berhenti.
- Tentukan apa yang berubah setiap iterasi.

Kalau tiga ini jelas, loop biasanya aman.

## 3. Gambaran Kecil
### `for`
Cocok saat jumlah pengulangan sudah jelas.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-", i);
}
```

### `while`
Cocok saat loop berjalan selama kondisi tertentu masih benar.

```js
let saldo = 100;
while (saldo > 0) {
  console.log("Saldo:", saldo);
  saldo -= 25;
}
```

### `for...of`
Cocok untuk membaca isi array langsung.

```js
const buah = ["apel", "mangga", "jeruk"];
for (const item of buah) {
  console.log(item);
}
```

### `break` dan `continue`
```js
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;      // berhenti total
  if (i % 2 === 0) continue; // lewati angka genap
  console.log(i);
}
```

## 4. Analogi Sederhana
Bayangkan kamu cek daftar hadir kelas:
- Kamu mulai dari nama pertama.
- Cek satu per satu.
- Berhenti kalau daftar habis.

Kenapa relevan:
- Loop juga begitu: proses item satu per satu sampai kondisi selesai.

Batas analogi:
- Di kode, kamu harus eksplisit menentukan perubahan per langkah (misal `i++`). Kalau lupa, loop bisa tidak selesai.

## 5. Contoh Kode Inti
Kasus: hitung total nilai dan cari nilai tertinggi dari array.

```js
const nilai = [78, 85, 90, 67, 88];

let total = 0;
let tertinggi = nilai[0];

for (const n of nilai) {
  total += n;

  if (n > tertinggi) {
    tertinggi = n;
  }
}

const rataRata = total / nilai.length;

console.log("Total:", total);
console.log("Rata-rata:", rataRata);
console.log("Tertinggi:", tertinggi);
```

Prediksi output:
- Total: `408`
- Rata-rata: `81.6`
- Tertinggi: `90`

Alasan teknis:
- Loop membaca seluruh elemen.
- `total` ditambah terus di tiap iterasi.
- `tertinggi` hanya diupdate saat ketemu nilai lebih besar.

## 6. Debug Corner
Gejala error umum:
- Program hang karena loop tidak berhenti.

Contoh salah:
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  // lupa i++
}
```

Masalah:
- Kondisi `i <= 5` selalu true karena `i` tidak berubah.
- Terjadi infinite loop.

Perbaikan:
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

Langkah diagnosis cepat:
1. Cek variabel kontrol loop berubah atau tidak.
2. Cek kondisi berhenti realistis tercapai atau tidak.
3. Tambah log `i` per iterasi untuk melihat pergerakan nilai.

## 7. Latihan Bertahap
### Level 1 - Dasar
1. Tampilkan angka 1 sampai 10 pakai `for`.
2. Tampilkan angka genap dari 2 sampai 20.

### Level 2 - Menengah
1. Dari array angka, hitung total semua elemen.
2. Dari array angka, hitung berapa jumlah angka yang lebih besar dari 50.

### Level 3 - Menantang
1. Buat fungsi `cariNilaiTertinggi(arr)` tanpa `Math.max`.
2. Buat fungsi `hapusDuplikat(arr)` dengan loop dasar.

## 8. Checkpoint Lulus Bab
- [ ] Bisa jelaskan beda penggunaan `for`, `while`, dan `for...of`.
- [ ] Bisa bikin loop dengan kondisi berhenti yang benar.
- [ ] Bisa menyelesaikan 2 soal iterasi data sederhana.
- [ ] Bisa menemukan penyebab infinite loop dan memperbaikinya.

## 9. Ringkasan Bab
1. Loop dipakai untuk proses berulang supaya kode tidak duplikatif.
2. Kunci loop aman: nilai awal, kondisi berhenti, dan perubahan nilai tiap iterasi.
3. Problem solving dasar dengan loop melatih cara berpikir bertahap dan terstruktur.
