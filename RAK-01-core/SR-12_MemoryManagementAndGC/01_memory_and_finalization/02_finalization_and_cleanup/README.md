# Bab 02: Finalization & Cleanup (Tukang Bersih-bersih)

Terkadang kita perlu melakukan sesuatu (seperti menutup koneksi atau membersihkan log) tepat setelah sebuah objek dihapus dari memori. **FinalizationRegistry** memberikan cara untuk mendaftarkan *callback* yang akan dipicu saat objek tertentu dihancurkan oleh GC (Clause 28.4 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **FinalizationRegistry** adalah **Tukang Bersih-bersih (Cleanup Crew)** atau **Notifikasi Kematian**. Saat seorang Tamu (Objek) check-out dari hotel dan menghilang, tukang bersih-bersih akan mendapatkan notifikasi untuk segera masuk ke kamar tersebut dan merapikannya.

> **Analogi Panjang (Layanan Berlangganan Majalah):**  
> Bayangkan kamu berlangganan majalah (Koneksi ke Objek):
> - **Registry**: Kamu mendaftarkan nama pelanggan ke sistem pusat.
> - **The Target**: Si pelanggan itu sendiri.
> - **Held Value (Token)**: Informasi tambahan (seperti alamat rumah) yang dibutuhkan sistem untuk mengirimkan edisi terakhir atau surat perpisahan saat pelanggan tersebut berhenti berlangganan.
> - **Cleanup Callback**: Saat pelanggan tersebut "menghilang" (objek dihapus GC), sistem secara otomatis mengirimkan petugas untuk membereskan sisa-sisa administrasi langganannya.

---

## Cara Kerja FinalizationRegistry

1. **Pembuatan**: `const registry = new FinalizationRegistry((heldValue) => { ... });`
2. **Pendaftaran**: `registry.register(targetObj, "Data Tambahan");`
3. **Pemuatan**: Saat `targetObj` dihapus oleh GC, fungsi di dalam constructor akan dijalankan dengan argumen `"Data Tambahan"`.

## Aturan Penting

- **No Guarantees**: Engine tidak menjamin *kapan* atau bahkan *apakah* callback akan dipanggil. Jangan gunakan ini untuk logika bisnis yang kritis (seperti menyimpan data ke database).
- **Hanya Objek**: Target yang didaftarkan harus berupa objek.

## Mengapa Arsitek Harus Peduli?

- **Resource Management**: Membersihkan file descriptor, koneksi socket, atau resource luar (C++ environment) yang terkait dengan objek JS.
- **Diagnostics**: Memantau apakah objek-objek besar di aplikasi Anda benar-benar dihapus oleh GC atau tertahan (Memory Leak).
- **Interoperability**: Sangat berguna saat bekerja dengan WebAssembly atau *native modules* untuk memastikan resource di luar JS engine ikut dibersihkan saat objek JS-nya mati.

## Contoh Eksekusi
Lihat bagaimana mendaftarkan objek ke dalam sistem pembersihan pada folder [examples/](./examples/).
