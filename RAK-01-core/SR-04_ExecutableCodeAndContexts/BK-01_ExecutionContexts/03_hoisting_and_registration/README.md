# Bab 03: Hoisting dan Registration (Environment Records)

Banyak pengembang bingung mengapa mereka bisa memanggil fungsi sebelum fungsi itu ditulis, atau mengapa `var` memberikan `undefined` sedangkan `let` memberikan error. Rahasianya terletak pada **Environment Records** (Clause 9.1 pada ECMA-262) dan proses eksekusi dua fase.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Environment Record** adalah **Buku Induk Penduduk**. Sebelum sebuah kota (Program) beroperasi, asisten walikota berkeliling mencatat siapa saja yang akan tinggal di sana. Saat kota mulai beroperasi, asisten sudah tahu semua nama penduduknya, meskipun orangnya belum keluar rumah.

> **Analogi Panjang (Skenario Panggung Teater):**  
> Bayangkan sebuah pertunjukan teater.
> - **Fase 1: Gladi Resik (Creation Phase):** Sutradara (Engine) melirik naskah dari atas ke bawah. Dia belum menyuruh aktor berakting. Dia hanya mencatat: "Oh, ada aktor bernama Budi (Fungsi), ada pemeran pengganti bernama Iwan (var), dan ada aktor tamu bernama Susi (let)".
> - **Hoisting:** Sutradara menaruh Budi (Fungsi) langsung di atas panggung karena dia sudah siap. Tapi Iwan (var) hanya dicatat namanya saja (diberi status **undefined**). Sedangkan Susi (let) dilarang masuk panggung sampai gilirannya tiba (**Temporal Dead Zone**).
> - **Fase 2: Pertunjukan (Execution Phase):** Tirai dibuka. Baris demi baris perintah dijalankan. Sekarang Budi mulai bicara, Iwan mulai berganti pakaian (assignment), dan Susi baru diperbolehkan masuk panggung.

---

## Dua Fase Eksekusi

### 1. Creation Phase (Fase Pendaftaran)
Sesaat setelah *Execution Context* dibuat, *Engine* melakukan pemindaian kode:
- Menciptakan **Environment Record**.
- Mendaftarkan fungsi (Function Declaration) dan menyimpannya secara utuh (Inilah mengapa fungsi bisa dipanggil di mana saja).
- Mendaftarkan variabel `var` dan menginisialisasi nilainya dengan `undefined`.
- Mendaftarkan `let` dan `const` tapi **TIDAK** menginisialisasi nilainya. Mereka berada di zona "terlarang" (TDZ).

### 2. Execution Phase (Fase Eksekusi)
*Engine* menjalankan kode baris demi baris:
- Melakukan *assignment* nilai ke variabel.
- Menjalankan logika fungsi.

## Apa itu Hoisting?

**Hoisting** bukanlah memindahkan kode ke atas secara fisik. Hoisting adalah **efek samping** dari fase pendaftaran. Karena fungsi dan variabel sudah terdaftar di *Environment Record* sebelum eksekusi dimulai, mereka seolah-olah "terangkat" ke atas.

## Temporal Dead Zone (TDZ)

Ini adalah masa sejak variabel `let/const` didaftarkan hingga variabel tersebut diberikan nilai secara eksplisit di kode. Jika kamu mencoba mengaksesnya di masa ini, JavaScript akan melempar `ReferenceError`. Ini adalah fitur keselamatan untuk mencegah kamu menggunakan variabel yang belum siap.

## Contoh Eksekusi
Lihat pembuktian fase pendaftaran dan jebakan TDZ pada folder [examples/](./examples/).
