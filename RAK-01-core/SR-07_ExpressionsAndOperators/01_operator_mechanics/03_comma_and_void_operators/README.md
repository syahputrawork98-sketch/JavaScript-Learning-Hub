# Bab 03: Comma & Void Operators (Niche Operators)

Di luar operator matematika dan logika yang populer, JavaScript memiliki beberapa operator "Niche" (tersembunyi) yang jarang digunakan namun memiliki fungsi spesifik yang sangat berguna bagi seorang arsitek: **Comma Operator** (`,`) dan **Void Operator** (`void`).

## 1. Comma Operator (`,`)

Operator koma (Clause 13.16 pada ECMA-262) memungkinkan Anda mengevaluasi beberapa ekspresi, namun hanya mengembalikan nilai dari **ekspresi terakhir**.

### Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Comma Operator** adalah **Pembersih Meja**. Ia membereskan banyak barang di atas meja, tapi hanya satu barang paling ujung yang akhirnya ia serahkan kepada Anda.

> **Analogi Panjang (Instruksi Beruntun):**  
> Bayangkan kamu memberi perintah pada asistenmu: "Ambilkan kopi, rapikan berkas, dan **bawakan laptop saya**."
> - Asisten akan mengambil kopi (ekspresi 1) dan merapikan berkas (ekspresi 2). 
> - Tetapi, hasil akhir yang benar-benar kamu terima dan simpan di tanganmu adalah laptop (ekspresi 3). 
> - Proses sebelumnya tetap terjadi (berkas jadi rapi), tapi tidak disimpan sebagai hasil akhir.

---

## 2. Void Operator (`void`)

Operator `void` (Clause 13.5.1) mengevaluasi ekspresi yang diberikan, namun selalu mengembalikan nilai **`undefined`**.

### Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Void Operator** adalah **Lubang Hitam (Black Hole)**. Apa pun yang kamu lemparkan ke dalamnya akan diproses, tapi tidak ada yang pernah keluar kembali (hasilnya selalu kosong/hampa).

> **Analogi Panjang (Mesin Penghancur Kertas):**  
> Bayangkan kamu ingin menghancurkan sebuah dokumen penting.
> - Kamu memasukkan dokumen tersebut ke mesin (evaluasi ekspresi). 
> - Mesin bekerja (dokumen hancur), tapi saat kamu membuka laci penampung, yang kamu dapatkan hanyalah debu tak bermakna (*undefined*). 
> - Dokumen itu sudah diproses, tapi nilainya sudah hilang selamanya.

---

## Kapan Arsitek Menggunakan Mereka?

Meskipun jarang, operator ini memiliki tempat khusus:
- **Comma Operator**: Sering digunakan di dalam pengulangan `for` untuk memperbarui dua variabel sekaligus. 
  `for (let i = 0, j = 10; i < j; i++, j--) { ... }`
- **Void Operator**: 
  1. Memaksa fungsi yang mengembalikan sesuatu menjadi tidak mengembalikan apa-apa.
  2. Digunakan pada `javascript:void(0)` di HTML untuk mencegah halaman *refresh* saat link diklik.
  3. Menjalankan IIFE secara aman.

## Mengapa Harus Berhati-hati?

Penggunaan operator ini secara berlebihan dapat membuat kode sulit dibaca. Comma operator sering kali membingungkan karena terlihat seperti pemisah argumen fungsi. Selalu prioritaskan kejelasan kode (*readability*) di atas trik-trik singkat.

## Contoh Eksekusi
Lihat bagaimana comma operator "membuang" nilai awal dan bagaimana `void` selalu menghasilkan kehampaan pada folder [examples/](./examples/).
