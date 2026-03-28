
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
