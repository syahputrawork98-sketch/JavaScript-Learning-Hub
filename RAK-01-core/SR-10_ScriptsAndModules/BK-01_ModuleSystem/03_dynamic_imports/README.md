# Bab 03: Dynamic Imports (Kurir Instan)

Kadang kita tidak ingin memuat seluruh aplikasi di awal. Kita hanya butuh kode tertentu saat pengguna mengklik tombol atau masuk ke halaman tertentu. Di sinilah **Dynamic Import** (`import()`) berperan (Clause 13.3.10 dan Clause 16.2.1.8 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Static Import** adalah **Rak Buku di Rumah**. Semua buku sudah ada di rak sebelum kamu mulai membaca. **Dynamic Import** adalah **Jasa Kurir Instan**. Kamu baru memesan buku tersebut saat kamu benar-benar ingin membacanya, dan kurir akan mengantarkannya beberapa saat kemudian.

> **Analogi Panjang (Menu Restoran Digital):**  
> Bayangkan kamu duduk di sebuah restoran:
> - **Static Import**: Pelayan membawakan semua jenis makanan ke mejamu sekaligus di awal. Mejamu jadi penuh, sesak, dan banyak makanan jadi dingin (Memori penuh dan loading lama).
> - **Dynamic Import**: Kamu hanya diberikan daftar menu (Kode utama). Kamu baru memesan "Steak" saat kamu lapar. Dapur akan memasaknya dan mengantarkannya hanya saat diminta. Sambil menunggu "Steak" datang, kamu tetap bisa ngobrol dan minum jus (Proses Non-blocking).

---

## Cara Kerja `import()`

Berbeda dengan *Static Import*, `import()` adalah sebuah fungsi yang:
1. Bisa dipanggil di mana saja (di dalam `if`, fungsi, atau event handler).
2. Mengembalikan sebuah **Promise**.
3. Memuat modul secara asinkron tanpa menunda eksekusi kode lainnya.

## Keuntungan Utama: Code Splitting

Bagi seorang Arsitek, `import()` adalah alat perang utama untuk:
- **Optimization**: Mengurangi ukuran file awal (*Initial Bundle Size*). Hanya muat apa yang perlu.
- **Conditional Loading**: Memuat modul yang berbeda tergantung pada sistem operasi user, bahasa, atau izin akses.
- **Performance**: Meningkatkan skor *First Contentful Paint* karena browser tidak perlu men-download file raksasa di awal.

## Strategi Penggunaan

- **Lazy Loading**: Memuat komponen UI hanya saat akan ditampilkan.
- **Prefetching**: Memuat modul di latar belakang saat browser sedang menganggur (*Idle*), menebak modul apa yang mungkin akan digunakan user selanjutnya.

## Contoh Eksekusi
Lihat bagaimana memuat modul secara kondisional menggunakan Promise dan `async/await` pada folder [examples/](./examples/).
