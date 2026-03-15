# Bab 02: Arrow Functions & Lexical 'this' (Kamera 360 Derajat)

Diperkenalkan pada ES6, **Arrow Functions** (`=>`) bukan sekadar cara singkat menulis fungsi. Ia memiliki perbedaan fundamental dalam cara menangani konteks eksekusi, terutama kata kunci `this` (Clause 15.3 pada ECMA-262).

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Regular Function** adalah **Kamera Mirrored**. Setiap kali kamu memindahkannya ke lokasi baru (objek baru), cermin di dalamnya berputar dan fokus pada lokasi tersebut (`this` berubah). **Arrow Function** adalah **Kamera 360 Derajat**. Ia tidak punya cermin yang bisa diputar; ia hanya menangkap pemandangan dari posisi di mana ia pertama kali dipasang dan tetap fokus ke sana selamanya (`lexical this`).

> **Analogi Panjang (Stempel Paspor):**  
> Bayangkan kamu sedang melakukan perjalanan bisnis (Eksekusi Kode):
> - **Regular Function (`function`)**: Setiap kali fungsi ini dipanggil oleh sebuah Objek, ia meminta "Stempel Paspor" baru dari objek tersebut. Nilai `this`-nya adalah siapa pun yang memanggilnya saat itu.
> - **Arrow Function (`=>`)**: Ia membawa paspor yang sudah distempel secara permanen sejak ia lahir di kantor pusatnya (Scope induk). Ia tidak peduli siapa yang memanggilnya di kemudian hari; ia akan selalu menunjukkan identitas dari tempat kelahirannya.

---

## Karakteristik Arrow Functions

Arrow Functions memiliki batasan dan fitur unik:
1. **Lexical `this`**: Ia tidak menciptakan `this` sendiri. Ia mengambil `this` dari *Environment* di sekitarnya saat ia didefinisikan.
2. **Tidak memiliki `arguments`**: Gunakan *Rest Parameters* sebagai gantinya.
3. **Tidak bisa digunakan sebagai Constructor**: Kamu tidak bisa memanggil `new` pada Arrow Function karena ia tidak memiliki internal method `[[Construct]]`.
4. **Sintaks Ringkas**: Menghilangkan kata kunci `function`, kurung kurawal (untuk satu pernyataan), dan `return` (implisit).

## Perbedaan Utama: Bound vs Unbound

- **Regular Function**: `this` bersifat dinamis (terikat saat pemanggilan).
- **Arrow Function**: `this` bersifat statis (terikat saat penulisan/definisi).

## Mengapa Arsitek Harus Peduli?

Pemilihan antara `function` dan `=>` adalah keputusan desain yang krusial:
- Gunakan **Arrow Function** untuk *Callback* (seperti dalam `map`, `filter`, atau *timer*) agar Anda tidak kehilangan konteks `this` dari class atau objek utama.
- Gunakan **Regular Function** untuk *Method* objek jika Anda ingin mengakses properti objek tersebut menggunakan `this`.
- Memahami perbedaan ini mencegah bug klasik `this is undefined` yang sering menghantui pemula dan pengembang menengah.

## Contoh Eksekusi
Lihat pembuktian bagaimana `this` pada Arrow Function tetap setia pada penciptanya pada folder [examples/](./examples/).
