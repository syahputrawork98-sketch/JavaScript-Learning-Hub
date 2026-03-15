# Bab 04: Closure Persistence (Lexical Environments)

Closure sering dianggap sebagai "sihir" di JavaScript. Padahal, closure adalah konsekuensi logis dari bagaimana *Engine* mengelola ingatan melalui **Lexical Environments** (Clause 9.1 pada ECMA-262). Closure memungkinkan sebuah fungsi tetap "hidup" bersama datanya meskipun fungsi induknya sudah selesai dieksekusi.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Closure** adalah **Ransel (Backpack)**. Saat sebuah fungsi lahir dari fungsi lain, ia diberikan ransel ajaib yang berisi semua barang (variabel) yang ada di sekitarnya saat itu. Kemanapun fungsi itu pergi, ia selalu membawa ransel tersebut.

> **Analogi Panjang (Kamera Keamanan dengan Rekaman Lokal):**  
> Bayangkan kamu memasang sebuah Kamera (Fungsi) di sebuah Kamar (Parent Function).
> - Di dalam kamar tersebut ada sebuah Lampu (Variabel). 
> - Kamu mengatur kamera tersebut agar memiliki tombol: "Ambil Gambar". 
> - Sekarang, kamu mengambil kamera tersebut dan membawanya ke luar rumah, bahkan kamu menghancurkan kamarnya.
> - Saat kamu menekan tombol "Ambil Gambar" di luar rumah, kamera tersebut tetap "ingat" status lampu di kamar tadi karena ia membawa **rekaman data** dari lingkungan asalnya. Inilah **Closure**.

---

## Bagaimana Closure Tercipta?

Di balik layar, setiap fungsi membawa referensi ke **Lexical Environment** di mana ia diciptakan.
1. Saat sebuah fungsi didefinisikan di dalam fungsi lain, ia "menangkap" (*capturing*) lingkungan sekitarnya.
2. Lingkungan ini tidak akan dihapus oleh *Garbage Collector* selama masih ada fungsi yang merujuk padanya.
3. Inilah yang membuat data tetap persis (bertahan hidup/ *persistence*) meskipun konteks eksekusi induknya sudah keluar dari *Call Stack*.

## Mengapa Arsitek Harus Peduli?

Closure adalah jantung dari banyak pola desain tingkat lanjut:
- **Data Privacy**: Membuat variabel "Private" yang tidak bisa diakses dari luar tapi bisa dimanipulasi melalui fungsi tertentu.
- **Factory Functions**: Membuat fungsi-fungsi spesifik dengan konfigurasi yang tetap.
- **State Management**: Menyimpan status internal tanpa mengotori *Global Scope*.

## Bahaya Terselubung: Memory Leaks

Karena closure menahan ingatan seumur hidup fungsi tersebut, penggunaan closure yang sembarangan (misalnya menyimpan data besar di dalam closure yang tidak pernah dipakai lagi) dapat menyebabkan konsumsi memori yang membengkak.

## Contoh Eksekusi
Lihat pembuktian "Ransel Ajaib" dan penerapan data privat pada folder [examples/](./examples/).
