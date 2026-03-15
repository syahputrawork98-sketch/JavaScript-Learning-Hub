# Bab 02: Numeric Special Values (NaN, Infinity, -0)

Dalam dunia angka JavaScript (IEEE 754), tidak semua angka berperilaku normal seperti matematika sekolah. Terdapat "penghuni istimewa" yang memiliki aturan main sendiri: **NaN**, **Infinity**, dan **-0**. Memahami mereka adalah kunci untuk menghindari bug logika yang sangat halus.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> - **NaN** adalah **Kertas Kosong di Kotak Angka**. Dia ditaruh di sana karena sistem tidak tahu angka apa itu, tapi dia tetap butuh label "Angka".
> - **Infinity** adalah **Ujung Jalan yang Tak Terputus**. Begitu kamu sampai di sana, melangkah sejauh apapun lagi tetap di ujung yang sama.
> - **-0** adalah **Arah Putar Balik**. Dia tetap nol, tapi dia ingat "sejarah" perjalanannya dari arah negatif.

> **Analogi Panjang (Laboratorium Kimia Gagal):**  
> Bayangkan kamu sedang mencampur zat kimia di lab:
> - Kamu mencoba mencampur Cairan Angka dengan Cairan Teks. Hasilnya meledak dan berubah menjadi zat abu-abu yang tidak bisa diidentifikasi. Asisten lab memberinya label **NaN** (*Not-a-Number*). Zat ini aneh; jika kamu bandingkan zat abu-abu ini dengan zat abu-abu lain dari ledakan berbeda, mereka dianggap **tidak sama**.
> - Kamu menuangkan cairan ke dalam wadah yang terlalu kecil sampai tumpah tak terhingga. Itulah **Infinity**.
> - Kamu mendinginkan wadah sampai suhu nol, tapi kamu mencatat bahwa pendinginannya datang dari arah kutub utara (Negatif). Meskipun termometer menunjukkan 0, catatan sejarahnya tetap **-0**.

---

## 1. NaN (Not-a-Number)

Secara teknis, `NaN` adalah hasil dari operasi matematika yang tidak terdefinisi atau gagal.
- **Sifat Unik**: `NaN` adalah satu-satunya nilai di JavaScript yang **tidak sama dengan dirinya sendiri** (`NaN === NaN` adalah `false`).
- **Deteksi**: Gunakan `Number.isNaN()` (Ketat) untuk mengecek apakah sebuah nilai benar-benar `NaN`. Hindari fungsi global `isNaN()` karena ia melakukan coercion yang menyesatkan.

## 2. Infinity & -Infinity

Terjadi ketika hasil perhitungan melampaui batas maksimum angka yang bisa ditampung JavaScript.
- `1 / 0` menghasilkan `Infinity`.
- `-1 / 0` menghasilkan `-Infinity`.
- Operasi apapun pada `Infinity` (kecuali yang menghasilkan `NaN`) biasanya mengembalikan `Infinity` kembali.

## 3. Negative Zero (-0)

JavaScript membedakan antara `0` (atau `+0`) dan `-0`. Meskipun secara nilai matematis mereka setara (`+0 === -0` adalah `true`), mereka berperilaku berbeda dalam beberapa operasi.
- **Deteksi**: Gunakan `Object.is(0, -0)` yang akan menghasilkan `false`.
- **Pemicu**: Biasanya hasil dari pembagian nol oleh angka negatif atau perkalian angka negatif dengan nol.

---

## Mengapa Arsitek Harus Peduli?
Bayangkan kamu membuat aplikasi navigasi. Jika kamu salah menangani `-0`, arah mobil bisa berputar 180 derajat secara tidak sengaja karena "ingatan" arah negatifnya. Jika kamu tidak validasi `NaN`, seluruh kalkulasi harga di keranjang belanja user bisa hancur total.

## Contoh Eksekusi
Lihat pembuktian sifat-sifat anomali angka ini pada folder [examples/](./examples/).
