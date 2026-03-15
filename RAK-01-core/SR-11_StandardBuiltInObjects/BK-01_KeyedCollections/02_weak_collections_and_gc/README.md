# Bab 02: Weak Collections & GC (Loker Berhantu)

Selain koleksi standar, JavaScript memiliki varian "lemah" (*Weak*): **WeakMap** dan **WeakSet**. Mereka dirancang khusus untuk efisiensi memori (Clause 24.3 - 24.4 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **WeakMap/WeakSet** adalah **Loker Berhantu**. Loker ini hanya mau menerima sebuah benda fisik (Objek) sebagai kunci. Namun, loker ini tidak memegang benda tersebut dengan erat. Jika bendanya sudah tidak ada yang memiliki di dunia nyata, loker ini akan menguap secara magis bersama isinya tanpa meninggalkan jejak.

> **Analogi Panjang (Sistem Tanda Pengenal Tamu):**  
> Bayangkan sebuah acara pesta besar:
> - **Map (Loker Kuat)**: Tamu menitipkan tas dan diberikan kartu nomor. Resepsionis memegang data tas tersebut dengan sangat kuat. Meskipun tamu sudah pulang dan lupa mengambil tasnya, tas itu akan tetap tersimpan di gudang hotel selamanya, memakan tempat (kebocoran memori), kecuali resepsionis membuangnya secara manual.
> - **WeakMap (Tanda Pengenal)**: Hotel menempelkan stiker kecil pada tamu. Stiker ini menyimpan informasi privasi tamu. Segera setelah tamu tersebut keluar dari gedung hotel dan tidak terlihat lagi oleh siapa pun, stiker itu akan langsung hancur menjadi debu secara otomatis. Hotel tidak perlu repot membersihkan sisa data tamu yang sudah pulang.

---

## Karakteristik Weak Collection

1. **Hanya Objek**: Kuncinya (pada WeakMap) atau nilainya (pada WeakSet) **harus** berupa Objek. Mengapa? Karena hanya Objek yang memiliki identitas unik yang bisa dilacak oleh *Garbage Collector*.
2. **Tidak Bisa Diiterasi**: Kamu tidak bisa memanggil `.size`, `.keys()`, atau melakukan loop pada WeakMap/WeakSet. Mengapa? Karena kondisinya tidak pasti; sebuah objek bisa saja dihapus oleh Engine di tengah-tengah kamu sedang menghitungnya.
3. **Weak Reference**: Ia tidak mencegah *Garbage Collector* untuk menghapus objek yang menjadi kuncinya.

## Kapan Arsitek Menggunakan Mereka?

1. **Metadata Objek**: Menyimpan informasi tambahan tentang sebuah objek tanpa merubah objek itu sendiri dan tanpa mencegah objek itu dihapus saat sudah tidak terpakai.
2. **Private Data**: Menyimpan state privat dari sebuah instans class. Saat instans class dihapus, datanya di WeakMap akan ikut bersih otomatis.
3. **Caching/Memoization**: Menyimpan hasil perhitungan berat yang terkait dengan sebuah objek.

## Mengapa Arsitek Harus Peduli?

Memahami kelemahan (*Weakness*) ini adalah tanda kematangan seorang Senior Architect:
- **Zero Memory Leaks**: Dengan menggunakan WeakMap untuk data sementara yang terkait dengan elemen DOM atau objek besar, Anda menjamin memori aplikasi tetap ramping tanpa perlu manajemen manual yang rumit.
- **Security**: Data di dalam WeakMap benar-benar privat dan tidak bisa "diintip" oleh pihak luar melalui iterasi.

## Contoh Eksekusi
Lihat bagaimana data di WeakMap menghilang mengikuti siklus hidup objek pada folder [examples/](./examples/).
