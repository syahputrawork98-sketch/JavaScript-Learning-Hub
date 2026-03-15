# Bab 02: Conditional & Iteration (Rel Kereta Api)

Setelah kita memiliki variabel dan blok, kita perlu cara untuk mengarahkan alur eksekusi. Di sinilah **Selection** (`if`, `switch`) dan **Iteration** (`for`, `while`) berperan (Clause 14.6 - 14.7 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Control Flow** adalah **Rel Kereta Api**. Tanpa instruksi khusus, kereta akan melaju lurus hingga akhir. **Conditional Statements** adalah **Wesel (Railway Switch)** yang memindahkan kereta ke jalur berbeda berdasarkan kondisi tertentu. **Iteration** adalah **Jalur Lingkar (Loop Line)** yang memaksa kereta melewati stasiun yang sama berkali-kali sampai batas waktu tertentu.

> **Analogi Panjang (Sistem Sortir Buah Otomatis):**  
> Bayangkan sebuah pabrik penyortiran buah:
> - **`if...else` (Sensor Tunggal)**: Sebuah sensor melihat buah yang lewat. JIKA berat > 100g, pindahkan ke Jalur A, SELAIN ITU pindahkan ke Jalur B. Ini adalah pilihan biner sederhana.
> - **`switch` (Mesin Sortir Bertingkat)**: Buah masuk ke mesin dengan banyak lobang. Mesin mencocokkan jenis buah. Jika "Apel" masuk lobang 1, jika "Jeruk" masuk lobang 2, dst. Lebih efisien untuk banyak pilihan kategori.
> - **`while` (Proses Pembersihan)**: Selama buah masih kotor, siram terus dengan air. Kita tidak tahu berapa lama, yang penting syarat "bersih" terpenuhi.
> - **`for` (Sistem Batching)**: Proses tepat 100 buah. Kita tahu persis kapan harus mulai, kapan harus berhenti, dan bagaimana menghitung setiap langkahnya.

---

## Pernyataan Kondisional

1. **`if...else`**: Fondasi logika. Selalu membutuhkan ekspresi yang akan dikonversi menjadi *Boolean*.
2. **`switch`**: Menggunakan perbandingan **Strict Equality** (`===`). Jangan lupa `break`, atau Anda akan mengalami "Fall-through" (eksekusi melompat ke case bawahnya tanpa permisi).

## Pernyataan Iterasi (Pengulangan)

1. **`for`**: Raja pengulangan terpimpin. Memiliki 3 bagian: Inisialisasi, Kondisi, dan Increment.
2. **`while`**: Pengulangan berbasis kondisi. Bisa berbahaya jika kondisinya tidak pernah menjadi `false` (Infinite Loop!).
3. **`for...in` vs `for...of`**: 
   - `for...in` untuk mengintip **properti** (key) sebuah objek.
   - `for...of` untuk mengambil **nilai** dari koleksi yang bisa diiterasi (Array, Map, String).

## Mengapa Arsitek Harus Peduli?

Algoritma yang efisien tergantung pada pemilihan jenis loop yang tepat.
- Gunakan `if` untuk logika kompleks, tapi pertimbangkan `switch` untuk keterbacaan jika pilihannya banyak.
- Hindari `for...in` pada Array karena ia juga akan mengiterasi properti non-indeks jika ada.
- Pahami cara kerja `break` dan `continue` untuk memegang kendali penuh atas alur iterasi.

## Contoh Eksekusi
Lihat perbedaan `for...in` vs `for...of` dan bahaya *fall-through* pada `switch` di folder [examples/](./examples/).
