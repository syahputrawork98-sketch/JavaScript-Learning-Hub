# Bab 03: Exception Handling (Jaring Keselamatan)

Bahkan kode yang ditulis dengan sempurna pun bisa menghadapi masalah (seperti jaringan putus atau input user yang aneh). Untuk itulah JavaScript menyediakan mekanisme **Exception Handling** menggunakan `try`, `catch`, `finally`, dan `throw` (Clause 14.15 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Exception Handling** adalah **Jaring Keselamatan (Safety Net)** di bawah sirkus akrobat. Akrobat (Kode) akan tetap mencoba melakukan atraksi berbahaya. Jika dia jatuh (Error), ia tidak akan hancur menabrak tanah (App Crash), melainkan ditangkap oleh jaring dan diarahkan ke tempat aman.

> **Analogi Panjang (Laboratorium Kimia):**  
> Bayangkan seorang ilmuwan sedang melakukan eksperimen berbahaya:
> - **`try` (Ruang Eksperimen)**: Di sini eksperimen dilakukan. Ilmuwan tahu ada risiko meledak, tapi ia tetap melakukannya di dalam ruangan tertutup.
> - **`throw` (Meledak!)**: Saat sesuatu berjalan salah (suhu terlalu tinggi), sebuah alarm berbunyi dan eksperimen dihentikan paksa. Kita melemparkan "masalah" tersebut keluar ruangan.
> - **`catch` (Tim Medis)**: Tim yang menunggu di luar ruangan. Jika eksperimen meledak, mereka segera bertindak menangani masalah tersebut agar tidak merembet ke seluruh gedung.
> - **`finally` (Protokol Kebersihan)**: Apa pun hasilnya—apakah eksperimen sukses atau meledak—ilmuwan harus tetap mencuci tangan dan membersihkan alat. Ini adalah perintah "Pasti Dijalankan" sebagai penutup.

---

## Anatomi Penanganan Error

1. **`try`**: Blok kode yang dipantau dari potensi error.
2. **`catch`**: Dijalankan **hanya jika** terjadi error di dalam blok `try`. Ia menerima objek error yang berisi informasi apa yang salah.
3. **`finally`**: Jalur terakhir yang akan dijalankan tidak peduli apa pun yang terjadi sebelumnya. Sangat berguna untuk menutup koneksi database atau membersihkan memori.
4. **`throw`**: Cara manual bagi Anda untuk membuat error sendiri jika sebuah kondisi bisnis tidak terpenuhi (misal: `throw new Error("Umur tidak valid")`).

## Mengapa Arsitek Harus Peduli?

Aplikasi yang tangguh (*Resilient*) adalah aplikasi yang tahu cara gagal dengan elegan (*Fail Gracefully*).
- Jangan biarkan `catch` kosong. Berikan log atau pesan yang bermakna.
- Gunakan `finally` untuk menjamin integritas sistem (pembersihan state).
- Pahami bahwa error bisa "gelembung" naik ke atas (*Bubble Up*) jika tidak ditangkap di tingkat bawah. Seorang arsitek harus merancang di tingkat mana error harus dikelola.

## Contoh Eksekusi
Lihat bagaimana `finally` tetap berjalan meskipun ada `return` di dalam `try` pada folder [examples/](./examples/).
