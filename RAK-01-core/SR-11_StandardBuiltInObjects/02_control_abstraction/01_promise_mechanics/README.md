# Bab 01: Promise Mechanics (Surat Perjanjian)

JavaScript adalah bahasa yang *single-threaded*, namun ia harus menangani operasi yang memakan waktu lama (seperti mengambil data dari internet). **Promise** adalah objek yang mewakili penyelesaian (atau kegagalan) akhirnya dari operasi asinkron tersebut (Clause 27.2 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Promise** adalah **Surat Perjanjian** atau **Kwitansi Pesanan**. Saat kamu memesan burger di restoran cepat saji, kamu tidak langsung dapat burger, tapi dapat kwitansi. Kwitansi itu berjanji: "Nanti kamu akan dapat burger (**Fulfilled**) atau uangmu kembali jika burger habis (**Rejected**) atau kamu masih dalam antrean (**Pending**)".

> **Analogi Panjang (Layanan Jasa Kurir):**  
> Bayangkan kamu mengirim paket penting:
> - **Pending (Sedang Dikirim)**: Paket sudah dibawa kurir. Kamu belum tahu sukses atau gagal. Kamu memegang nomor resi (Promise Object).
> - **Fulfilled (Tersampaikan)**: Paket sampai ke tujuan. Kurir memberikan bukti tanda tangan (Value). Kamu bisa lanjut ke langkah berikutnya (menggunakan `.then()`).
> - **Rejected (Gagal Ekspedisi)**: Alamat tidak ketemu atau barang rusak. Kurir memberikan alasan kegagalan (Reason). Kamu harus menangani masalah ini (menggunakan `.catch()`).
> - **Settled**: Apa pun hasilnya (Sukses/Gagal), proses pengiriman sudah selesai. Kamu bisa membereskan administrasi (menggunakan `.finally()`).

---

## Tiga Kondisi (States) Promise

Sebuah Promise pasti berada di salah satu dari 3 kondisi:
1. **Pending**: Operasi asinkron sedang berjalan.
2. **Fulfilled**: Operasi berhasil diselesaikan.
3. **Rejected**: Operasi gagal.

## Mekanika Internal: Jobs & Microtasks

Saat sebuah Promise diselesaikan, JavaScript tidak langsung menjalankan `.then()`. Ia memasukkannya ke dalam **Microtask Queue** (sering disebut sebagai *Promise Jobs*). Microtasks memiliki prioritas lebih tinggi daripada Macrotasks (seperti `setTimeout`). Ini memastikan logika asinkron kita berjalan secepat mungkin setelah tumpukan eksekusi saat ini kosong.

## Mengapa Arsitek Harus Peduli?

- **Avoid Callback Hell**: Promise memungkinkan penulisan kode asinkron yang terlihat sekuensial dan mudah dibaca (terutama dengan `async/await`).
- **Error Propagation**: Sistem `.catch()` memungkinkan penanganan error secara terpusat di sepanjang rantai asinkron.
- **Race vs All**: Arsitek bisa mengatur strategi pemuatan data: menunggu semua request selesai (`Promise.all`) atau mengambil yang tercepat datang (`Promise.race`).

## Contoh Eksekusi
Lihat bagaimana Promise berubah kondisi dan urutan eksekusi Microtask pada folder [examples/](./examples/).
