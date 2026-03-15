# Bab 01: Block & Variable Statements (Sekat Ruangan)

Sebelum JavaScript menjalankan logika bercabang, ia harus memahami bagaimana mengelompokkan instruksi ke dalam **Blocks** (`{ }`) dan bagaimana menyimpan data menggunakan deklarasi variabel (`var`, `let`, `const`).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Block Statement** adalah **Sekat Ruangan** di sebuah rumah besar. Tanpa sekat, apa pun yang kamu taruh di satu area akan terlihat oleh semua orang di rumah tersebut (**Global Scope**). Dengan sekat (`{ }`), kamu bisa memiliki privasi dan membatasi akses barang hanya untuk orang di dalam ruangan tersebut (**Block Scope**).

> **Analogi Panjang (Sistem Loker Kantor):**  
> Bayangkan sebuah kantor dengan berbagai jenis loker (Variable Declarations).
> - **`var` (Loker Aula)**: Ini adalah loker lama yang ditaruh di aula utama. Meskipun kamu menaruhnya di dalam ruangan rapat (Block), loker ini secara magis "terangkat" ke aula utama (*Hoisting*). Siapa pun di kantor bisa melihatnya.
> - **`let` & `const` (Loker Ruangan)**: Ini adalah loker modern yang dipaku mati di dalam ruangan tertentu. Loker ini tidak bisa dipindah-pindah. Jika kamu berada di luar ruangan tersebut, kamu bahkan tidak tahu loker itu ada (*Block Scoping*).
> - **Blocks (`{ }`)**: Adalah dinding ruangan itu sendiri. Ia mengumpulkan instruksi dan membatasi "wilayah kekuasaan" loker modern.

---

## Memahami Block Statement

Sebuah **Block** (Clause 14.2) adalah urutan nol atau lebih *Statements* yang dibungkus kurung kurawal. Kegunaan utamanya adalah untuk mengelompokkan beberapa perintah agar bisa dijalankan sebagai satu unit (misal di dalam `if` atau `for`).

## Pertempuran Deklarasi: `var` vs `let` vs `const`

JavaScript memiliki dua "zaman" deklarasi variabel:

### 1. Zaman Lama: `var`
- **Function Scoped**: Ia hanya peduli pada fungsi, mengabaikan blok `{ }`.
- **Hoisting**: Variabelnya bisa diakses (sebagai `undefined`) sebelum baris deklarasinya dijalankan.

### 2. Zaman Modern: `let` & `const`
- **Block Scoped**: Ia sangat patuh pada kurung kurawal `{ }`.
- **Temporal Dead Zone (TDZ)**: Kamu tidak bisa menyentuhnya sebelum baris deklarasi dijalankan (Error!).
- **`const`**: Sama seperti `let`, tapi "label" pada variabelnya tidak bisa dipindahkan ke nilai lain (Immutability referensi).

## Mengapa Arsitek Harus Peduli?

Kesalahan memahami *Scoping* dan *Hoisting* adalah sumber utama bug "Invisible Variables" dan tabrakan nama variabel di aplikasi besar. Seorang Senior Architect tahu:
1. **Selalu gunakan `const`** secara default untuk kejelasan maksud.
2. **Gunakan `let`** hanya jika nilai memang harus berubah.
3. **Hindari `var`** untuk mencegah kebocoran scope yang tidak disengaja.

## Contoh Eksekusi
Lihat bagaimana `var` "bocor" keluar dari blok `if` sementara `let` tetap aman dipenjara pada folder [examples/](./examples/).
