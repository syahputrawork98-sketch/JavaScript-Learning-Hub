# Bab 01: Anatomy & Parameters (Resep & Koki)

Fungsi adalah unit dasar logika yang dapat digunakan kembali. Dalam ECMA-262 (Clause 15.1 - 15.2), fungsi didefinisikan sebagai objek khusus yang memiliki internal method `[[Call]]` dan opsional `[[Construct]]`.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Function** adalah sebuah **Resep Masakan**. Ia berisi daftar bahan (**Parameters**) dan langkah-langkah memasak (**Body**). Namun, resep hanyalah kertas mati sampai seorang **Koki** (Engine) memanggilnya (**Invocate**) untuk mulai memasak.

> **Analogi Panjang (Layanan Pesan Antar):**  
> Bayangkan kamu memesan makanan melalui sebuah aplikasi:
> - **Function Declaration**: Toko yang sudah terdaftar di peta (terkena *Hoisting*). Kamu bisa memanggilnya meskipun kamu belum melewati fisiknya.
> - **Function Expression**: Pedagang kaki lima yang baru kamu ketahui saat kamu berjalan melewatinya (tidak terkena *Hoisting* deklaratif).
> - **Parameters (Bahan Baku)**: Apa yang koki butuhkan. 
>     - **Default Params**: Jika kamu tidak membawa bumbu sendiri, koki sudah menyiapkan bumbu standarnya.
>     - **Rest Params (`...args`)**: Kantong plastik besar yang menampung semua bumbu tambahan apa pun yang kamu bawa.
> - **Return (Hasil Akhir)**: Makanan yang akhirnya diantarkan ke tanganmu. Tanpa `return`, koki hanya memasak tapi tidak pernah memberikan makanannya padamu (*undefined*).

---

## Anatomi Fungsi

Sebuah fungsi memiliki beberapa komponen utama:
1. **Name**: Identitas fungsi (opsional pada expression).
2. **Parameter List**: Pintu masuk data.
3. **Function Body**: Blok `{ }` tempat logika dieksekusi.
4. **Return Statement**: Pintu keluar data.

## Evolusi Parameter

JavaScript sangat fleksibel (atau berbahaya) dalam menangani parameter:
- **Default Parameters**: Memberikan nilai awal jika argumen tidak diberikan.
- **Rest Parameters**: Mengumpulkan sisa argumen menjadi sebuah Array asli.
- **Arguments Object**: (Zaman Lama) Objek mirip array yang berisi semua argumen. Hindari ini di zaman modern, gunakan *Rest Params*.

## Declarations vs Expressions

- **Function Declaration**: `function halo() { ... }`. Terkena *Hoisting* penuh. Bisa dipanggil sebelum baris deklarasi.
- **Function Expression**: `const halo = function() { ... }`. Tersimpan dalam variabel. Harus dideklarasikan dulu sebelum dipanggil.

## Mengapa Arsitek Harus Peduli?

Memahami bagaimana fungsi diinisialisasi membantu Anda:
- Mengonstruksi kode yang bersih dengan pemanfaatan *Default Parameters*.
- Memahami kapan harus menggunakan *Declaration* (untuk fungsi helper global) vs *Expression* (untuk logika lokal/privat).
- Menghindari bug parameter yang hilang dengan memberikan perlindungan di tingkat tanda tangan fungsi (*Signature*).

## Contoh Eksekusi
Lihat perbedaan antara parameter standar, default, dan rest, serta pembuktian hoisting pada folder [examples/](./examples/).
