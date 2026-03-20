# Bab 01: Maps & Sets (Loker Cerdas)

Meskipun Objek dan Array sangat berguna, mereka memiliki batasan. **Map** dan **Set** diperkenalkan untuk memberikan struktur data yang lebih spesifik dan berkinerja tinggi (Clause 24.1 - 24.2 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Map** adalah **Loker Cerdas dengan Label Bebas**. Berbeda dengan loker lama (Object) yang hanya mau menerima label berupa teks, loker cerdas ini mau menerima apa pun sebagai label: kunci fisik, kartu member, bahkan loker lain! **Set** adalah **Daftar Tamu Eksklusif**. Jika namamu sudah ada di daftar, kamu tidak bisa masuk dua kali. Ia hanya menyimpan tamu-tamu yang unik.

> **Analogi Panjang (Resepsionis Hotel):**  
> Bayangkan seorang resepsionis hotel (Map):
> - **Object vs Map**: Jika kamu menggunakan buku tamu lama (Object), kuncinya selalu direduksi menjadi string. Jika kamu punya dua kunci berbeda tapi bentuknya sama, mereka akan tertukar.
> - **Map (Modern)**: Resepsionis mencatat kunci fisikmu sebagai penanda. Meskipun ada dua orang bernama "Budi", jika mereka membawa kunci fisik yang berbeda, resepsionis tahu mereka ada di kamar yang berbeda.
> - **Set (Keamanan)**: Satpam di depan hotel memegang daftar tamu (Set). Setiap kali ada orang masuk, satpam mengecek: "Apakah orang ini sudah ada di dalam?". Jika sudah, dia tidak boleh masuk lagi. Tidak ada tamu duplikat di hotel ini.

---

## Karakteristik Map

1. **Kunci Fleksibel**: Bisa menggunakan objek, fungsi, atau primitif apa pun sebagai kunci.
2. **Size**: Memiliki properti `.size` yang akurat (Objek harus dihitung manual).
3. **Iterasi**: Menjamin urutan penyisipan (*Insertion Order*) saat diiterasi.

## Karakteristik Set

1. **Uniqueness**: Secara otomatis membuang nilai duplikat.
2. **Efficient Search**: Pengecekan `.has(value)` sangat cepat dibandingkan `array.includes(value)`.
3. **No Index**: Set tidak memiliki indeks; ia hanya sebuah koleksi nilai unik.

## Mengapa Arsitek Harus Peduli?

- **Performa**: `Map` jauh lebih cepat untuk operasi penambahan dan penghapusan data dalam jumlah besar dibandingkan Objek biasa.
- **Integritas Data**: Gunakan `Set` saat Anda ingin menjamin tidak ada duplikasi data (seperti ID user unik atau daftar tag) tanpa perlu menulis logika pengecekan manual.
- **Keterbacaan**: Kode yang menggunakan `Map` dan `Set` menunjukkan niat yang lebih jelas (*Clear Intent*) dibandingkan memaksakan Objek untuk semua hal.

## Contoh Eksekusi
Lihat bagaimana `Map` menangani kunci objek dan bagaimana `Set` menyaring duplikasi pada folder [examples/](./examples/).
