# Bab 01: The Global Stage (Realms & Contexts)

Sebelum baris pertama kode Anda dijalankan, JavaScript sudah menyiapkan "Panggung Utama". Panggung ini disebut sebagai **Realm** yang berisi lingkungan global tempat kode Anda akan hidup.

Dalam terminologi ECMA-262 (Clause 9.3), setiap kali *Engine* mulai bekerja, ia membuat sebuah **Global Execution Context**. Ini adalah fondasi dari segalanya.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Realm** adalah **Stadion Olahraga**. Sebelum atlet (Kode) datang, stadion sudah memiliki rumput (Global Object), lampu (Built-in functions), dan wasit (Engine). **Global Execution Context** adalah udara di dalam stadion tersebut yang menyelimuti seluruh pertandingan.

> **Analogi Panjang (Membangun Kota Baru):**  
> Bayangkan *Engine* JavaScript sedang membangun sebuah kota.
> - **Realm** adalah lahan tanah dan infrastruktur dasar (listrik, air, hukum fisika). Kota ini sudah punya fasilitas umum bawaan seperti Perpustakaan (`Object`), Kalkulator Raksasa (`Math`), dan Jam Dunia (`Date`).
> - **Global Execution Context** adalah Balai Kota. Ini adalah pusat administrasi pertama yang berdiri. Semua variabel global yang kamu buat akan didaftarkan di Balai Kota ini (dalam *Global Environment Record*). 
> - Kota ini hanya punya satu Balai Kota Utama, dan ia tidak akan pernah hancur selama kota itu masih ada (aplikasi masih berjalan).

---

## Apa itu Realm?

Sebuah **Realm** terdiri dari:
1. **Intrinsics**: Objek bawaan seperti `Object.prototype`, `Array`, `String`, dll.
2. **Global Object**: Objek `window` (browser) atau `global` (Node.js).
3. **Global Env Record**: Catatan semua variabel yang dideklarasikan di lingkup global.

## Global Execution Context (GEC)

GEC adalah konteks eksekusi paling dasar. Karakteristik utamanya:
- **Hanya ada satu**: Tidak peduli seberapa besar kodenya, hanya ada satu konteks global.
- **Paling Bawah**: Dalam tumpukan eksekusi (*Call Stack*), GEC selalu berada di posisi paling dasar.
- **Abadi**: GEC hanya akan hancur ketika kamu menutup tab browser atau menghentikan proses Node.js.

## Perbedaan Mencolok: Global Object vs Global Scope

Meskipun sering dianggap sama, mereka berbeda secara teknis:
- **Global Object**: Objek fisik tempat properti seperti `console` atau `setTimeout` berada.
- **Global Scope**: Ruang lingkup tempat variabel `let` dan `const` global berada. Variabel `let/const` di tingkat global **TIDAK** menjadi properti dari Global Object (`window`), sedangkan `var` akan menjadi properti Global Object.

## Contoh Eksekusi
Lihat bagaimana JavaScript menyiapkan panggung global dan perbedaan antara `window` vs `let/const` pada folder [examples/](./examples/).
