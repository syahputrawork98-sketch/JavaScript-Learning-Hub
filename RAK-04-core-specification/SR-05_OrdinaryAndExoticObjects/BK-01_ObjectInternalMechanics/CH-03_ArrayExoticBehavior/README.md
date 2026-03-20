# Bab 03: Array Exotic Behavior (Sihir Properti Length)

Semua orang tahu cara menggunakan `Array`, tapi sedikit yang tahu bahwa secara teknis di dalam spesifikasi ECMA-262 (Clause 10.4.2), Array disebut sebagai **Exotic Object**. Mengapa "Eksotis"? Karena ia memiliki perilaku ajaib yang tidak dimiliki oleh objek biasa, terutama pada hubungan antara elemen data dan properti `length`.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Array** adalah **Gedung dengan Pagar Otomatis**. Setiap kali kamu membangun satu ruangan baru (menambah elemen), pagar otomatisnya akan bergeser menjauh secara otomatis untuk melindungi semua ruangan. Jika kamu menarik pagar itu mendekat (memperkecil `length`), ruangan yang berada di luar pagar akan dihancurkan seketika.

> **Analogi Panjang (Katalog Rak Buku Dinamis):**  
> Bayangkan sebuah rak buku yang memiliki label nomor di setiap slotnya (0, 1, 2...).
> - **Objek Biasa**: Seperti rak buku yang label nomornya hanyalah coretan spidol. Menambah buku di slot nomor 99 tidak memengaruhi apapun selain slot nomor 99 itu sendiri.
> - **Array (Exotic)**: Rak ini memiliki sensor digital. Saat kamu menaruh buku di slot nomor 99, layar di ujung rak akan langsung mendeteksi: "Total Kapasitas: 100". 
> - Yang lebih gila lagi, jika kamu secara paksa menekan tombol di layar tersebut dan mengecilkan angka kapasitas menjadi "2", sensor rak akan menyalakan mesin penghancur dan membuang semua buku dari slot nomor 2 hingga 99 secara otomatis. Sensor yang saling terhubung ini disebut **`[[DefineOwnProperty]]`** khusus untuk Array.

---

## Mengapa Array Disebut Eksotis?

Objek biasa menggunakan metode internal standar. Array menggunakan versi modifikasi yang disebut **`Array [[DefineOwnProperty]]`**. Inilah yang membuat sihir ini terjadi:

1. **Sinkronisasi Otomatis**: Menambah elemen dengan indeks angka (misal: `arr[5] = 'A'`) secara otomatis memperbarui properti `length`.
2. **Penghancuran Massal**: Memperkecil `length` (misal: `arr.length = 2`) akan menghapus semua elemen yang indeksnya lebih besar atau sama dengan nilai `length` baru tersebut.

## Indeks vs Properti

Penting untuk diingat bahwa Array tetaplah objek. Kamu bisa menambahkan properti teks ke array, tapi itu **TIDAK** akan memengaruhi `length`:
```javascript
const arr = [1, 2];
arr["warna"] = "merah";
console.log(arr.length); // Tetap 2!
```
Hanya properti yang berupa "Angka Indeks" (unsigned 32-bit integer) yang terhubung dengan sihir `length`.

## Mengapa Arsitek Harus Peduli?

Memahami perilaku eksotis ini mencegah bug fatal saat memanipulasi data massal. Banyak pengembang tidak sadar bahwa `arr.length = 0` adalah cara tercepat untuk mengosongkan array karena ia memicu mekanisme internal engine untuk menghapus referensi elemen di dalamnya secara efisien.

## Contoh Eksekusi
Lihat pembuktian "Sihir Length" dan perbedaan indeks vs properti teks pada folder [examples/](./examples/).
