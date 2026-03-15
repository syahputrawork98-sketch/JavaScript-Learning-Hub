# Bab 02: Proxy & Reflect (Pintu Penjaga)

JavaScript memungkinkan kita untuk melakukan *Metaprogramming*—yaitu menulis kode yang bisa memantau, memodifikasi, atau mencegat perilaku kode lainnya. Alat utamanya adalah **Proxy** dan **Reflect** (Clause 28.2 dan Clause 28.1 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Proxy** adalah **Pintu Penjaga** atau **Sekretaris Pribadi**. Jika kamu ingin berbicara dengan Bos (Objek asli), kamu harus melewati Sekretaris dulu. Sekretaris bisa memeriksa apa yang kamu bawa (Validasi), mencatat waktu kedatanganmu (Logging), atau bahkan berbohong bahwa Bos tidak ada di tempat (Virtualization). **Reflect** adalah **Buku Panduan Standar** yang dipegang Sekretaris agar ia tidak salah saat meneruskan perintahmu ke si Bos.

> **Analogi Panjang (Layanan Keamanan VIP):**  
> Bayangkan seorang selebriti (Objek) yang memiliki agen keamanan (Proxy):
> - **Trap (Intercept)**: Setiap kali ada wartawan ingin bertanya (`get`) atau memberikan hadiah (`set`), agen keamanan mencegatnya di depan pintu.
> - **Proxy Object**: Wartawan tidak pernah menyentuh tangan selebriti secara langsung; mereka hanya berinteraksi dengan agen.
> - **Reflect (Tindakan Standar)**: Jika agen merasa permintaan wartawan wajar, dia akan bertanya pada buku panduan keamanan: "Bagaimana cara menyapa selebriti yang benar?". Reflect membantu menjalankan tindakan standar objek asli tanpa merusak alur Proxy.

---

## Cara Kerja Proxy

Proxy membutuhkan dua hal:
1. **Target**: Objek asli yang ingin diproteksi/dimodifikasi.
2. **Handler**: Objek berisi "Traps" (fungsi pencegat) seperti `get`, `set`, `has`, `deleteProperty`, dll.

## Peran Reflect

`Reflect` adalah objek built-in yang menyediakan method yang sama dengan traps pada Proxy. Mengapa pakai Reflect di dalam Proxy?
- Untuk meneruskan operasi asli dengan benar (menangani *this* context di dalam accessor).
- Mengembalikan nilai boolean yang jelas (sukses/gagal) daripada melempar error.

## Mengapa Arsitek Harus Peduli?

- **Reactivity Systems**: Framework seperti Vue.js 3 menggunakan Proxy untuk mendeteksi perubahan data dan mengupdate UI secara otomatis secara instan.
- **Validation Layers**: Memastikan sebuah objek hanya bisa diisi dengan data yang valid tanpa mengotori logika bisnis utama.
- **API Virtualization**: Membuat objek "palsu" yang mengambil data dari server hanya saat propertinya diakses (*Lazy initialization*).
- **Security**: Membuat objek yang benar-benar *read-only* atau menyembunyikan properti sensitif dari iterasi.

## Contoh Eksekusi
Lihat bagaimana Proxy memvalidasi data dan mencatat akses properti secara otomatis pada folder [examples/](./examples/).
