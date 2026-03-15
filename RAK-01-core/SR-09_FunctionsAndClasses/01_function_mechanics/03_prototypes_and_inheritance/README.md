# Bab 03: Prototypes & Inheritance (DNA & Cetakan Kue)

JavaScript tidak menggunakan pewarisan berbasis kelas (seperti Java atau C++) secara asli. Di bawah tenda, ia menggunakan **Prototypal Inheritance**. Objek di JavaScript memiliki tautan internal ke objek lain yang disebut **Prototype** (Clause 10.1 dan Clause 14.3.5 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Prototype** adalah **DNA** atau **Cetakan Kue**. Jika kamu ingin membuat kue cokelat, kamu tidak perlu mendesain bentuk bulat dari nol; kamu menggunakan cetakan yang sudah ada. Jika cetakan itu punya pola bintang, semua kue yang lahir dari cetakan itu akan punya pola bintang. Objek "mewarisi" sifat dari cetapannya.

> **Analogi Panjang (Sistem Delegasi Tugas):**  
> Bayangkan seorang Karyawan Magang (Objek) yang diminta mengerjakan tugas:
> - Jika Magang tahu caranya, dia langsung kerjakan (**Own Property**).
> - Jika Magang tidak tahu, dia bertanya ke Supervisor (**Prototype**).
> - Jika Supervisor tidak tahu, dia bertanya ke Manajer (**Prototype dari Prototype**).
> - Rantai bertanya ini disebut **Prototype Chain**. Jika sampai ke level CEO (Object.prototype) masih tidak ada yang tahu, barulah mereka menyerah (**undefined/null**).

---

## Mekanika Internal

1. **`[[Prototype]]`**: Properti internal (sering disebut sebagai `__proto__` di browser) yang menunjuk ke objek indukan.
2. **`prototype` property**: Properti yang hanya dimiliki oleh Fungsi. Ia adalah "cetakan" yang akan diberikan kepada objek baru saat fungsi tersebut dipanggil dengan `new`.
3. **Constructor Functions**: Fungsi yang digunakan untuk memfabrikasi objek baru.

## Mengapa Bukan "Kelas"?

Walaupun kita menggunakan kata "Inheritance", sebenarnya yang terjadi adalah **Delegasi**. Objek tidak menyalin sifat dari induknya; ia hanya memiliki "nomor telepon" induknya untuk dihubungi saat ia tidak memiliki properti yang diminta.

## Mengapa Arsitek Harus Peduli?

Memahami Prototype adalah kunci untuk:
- **Optimization**: Menaruh *Method* di Prototype (bukan di dalam constructor) menghemat banyak memori karena semua instans berbagi fungsi yang sama.
- **Polymorphism**: Mengubah perilaku standar objek dengan memodifikasi prototype-nya.
- **Debugging**: Tahu kenapa sebuah properti bisa ada atau hilang (apakah ia properti asli atau warisan?).

## Contoh Eksekusi
Lihat bagaimana objek mencari jalannya melalui *Prototype Chain* pada folder [examples/](./examples/).
