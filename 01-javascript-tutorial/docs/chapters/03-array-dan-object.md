# Bab 3 - Array dan Object

## 1. Tujuan Bab
Setelah bab ini, kamu harus bisa:
- Membuat dan mengakses data array dan object.
- Melakukan update data (create/read/update sederhana).
- Memakai method dasar: `push`, `map`, `filter`, `find`.
- Mengelola data nested sederhana.

Indikator terukur:
- [ ] Bisa memodelkan data dunia nyata ke array/object.
- [ ] Bisa melakukan operasi data tanpa merusak struktur utama.

## 2. Gambaran Besar
Kalau function itu mesin proses, maka array/object adalah bahan bakunya.

Di dunia nyata, data hampir selalu berbentuk kumpulan:
- Daftar user
- Daftar produk
- Daftar tugas

Karena itu, kamu harus nyaman dengan dua hal:
- Array untuk list.
- Object untuk detail atribut satu entitas.

## 3. Gambaran Kecil
### Array Dasar
```js
const buah = ["apel", "mangga", "jeruk"];
console.log(buah[0]); // apel
```

### Object Dasar
```js
const user = {
  nama: "Syahputra",
  umur: 20,
  aktif: true,
};

console.log(user.nama); // Syahputra
```

### Update Data
```js
const tugas = ["belajar variabel"];
tugas.push("belajar function");
console.log(tugas);

const profil = { nama: "Arta", kota: "Bandung" };
profil.kota = "Jakarta";
console.log(profil);
```

### Method Penting
```js
const angka = [10, 20, 30, 40];

const tambah5 = angka.map((n) => n + 5); // [15, 25, 35, 45]
const diAtas20 = angka.filter((n) => n > 20); // [30, 40]
const pertamaDiAtas25 = angka.find((n) => n > 25); // 30

console.log(tambah5, diAtas20, pertamaDiAtas25);
```

### Nested Data
```js
const siswa = {
  nama: "Nina",
  nilai: {
    matematika: 88,
    bahasa: 92,
  },
};

console.log(siswa.nilai.matematika); // 88
```

## 4. Analogi Sederhana
Bayangkan kamu punya lemari arsip:
- Array = deretan map berurutan.
- Object = isi detail di satu map.

Kenapa relevan:
- Program sering butuh "list + detail" sekaligus.

Batas analogi:
- Di JavaScript, data bisa diproses otomatis lewat method; tidak sekadar disimpan statis.

## 5. Contoh Kode Inti
Kasus: kelola daftar produk sederhana.

```js
const produk = [
  { id: 1, nama: "Keyboard", harga: 250000, stok: 10 },
  { id: 2, nama: "Mouse", harga: 150000, stok: 0 },
  { id: 3, nama: "Headset", harga: 350000, stok: 5 },
];

const produkReady = produk.filter((item) => item.stok > 0);
const namaProduk = produkReady.map((item) => item.nama);
const produkMahal = produk.find((item) => item.harga > 300000);

console.log(produkReady);
console.log(namaProduk);
console.log(produkMahal);
```

Prediksi output:
- `produkReady`: Keyboard dan Headset.
- `namaProduk`: `["Keyboard", "Headset"]`.
- `produkMahal`: object Headset.

Alasan teknis:
- `filter` menyaring data berdasarkan kondisi.
- `map` mentransformasi bentuk output.
- `find` mengambil elemen pertama yang cocok.

## 6. Debug Corner
Gejala error umum:
- `Cannot read properties of undefined`.

Contoh salah:
```js
const users = [
  { id: 1, profil: { nama: "Ari" } },
];

console.log(users[1].profil.nama);
```

Masalah:
- `users[1]` tidak ada, jadi `undefined`.
- Lanjut akses `.profil` langsung error.

Perbaikan:
```js
const users = [
  { id: 1, profil: { nama: "Ari" } },
];

const namaUser = users[1]?.profil?.nama;
console.log(namaUser ?? "Data user tidak ditemukan");
```

Langkah diagnosis cepat:
1. Cek index array valid atau tidak.
2. Cek properti object memang ada atau tidak.
3. Pakai optional chaining (`?.`) untuk akses aman.

## 7. Latihan Bertahap
### Level 1 - Dasar
1. Buat array `angka` berisi 5 angka, lalu tampilkan angka pertama dan terakhir.
2. Buat object `produk` dengan properti `nama`, `harga`, `stok` lalu tampilkan.

### Level 2 - Menengah
1. Dari array angka, buat array baru berisi kuadrat tiap angka pakai `map`.
2. Dari daftar produk, tampilkan hanya produk dengan stok > 0 pakai `filter`.

### Level 3 - Menantang
1. Buat fungsi `cariProdukById(list, id)` yang return produk sesuai id.
2. Buat ringkasan total nilai stok: `harga * stok` untuk semua produk.

## 8. Checkpoint Lulus Bab
- [ ] Bisa jelaskan kapan pakai array dan kapan pakai object.
- [ ] Bisa pakai `map`, `filter`, `find` dengan kasus sederhana.
- [ ] Bisa mengakses nested data tanpa error.
- [ ] Bisa perbaiki bug akses property pada data yang belum ada.

## 9. Ringkasan Bab
1. Array dipakai untuk list, object dipakai untuk detail entitas.
2. Method array membuat proses data lebih cepat dan rapi.
3. Waspadai akses data yang belum ada untuk mencegah runtime error.
