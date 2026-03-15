# Bab 02: Tokens & Identifiers (Satuan Makna)

Setelah JavaScript memastikan karakter yang Anda tulis adalah legal, langkah selanjutnya adalah mengelompokkan karakter-karakter tersebut menjadi unit terkecil yang memiliki makna, yang disebut **Tokens** (Clause 12.5 pada ECMA-262). 

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Tokens** adalah **Balok LEGO**. Kamu tidak bisa membangun istana hanya dengan plastik cair (Karakter). Kamu butuh balok-balok yang sudah jadi (Token). **Identifiers** adalah **Label Nama** pada balok tersebut; kamu bebas menulis nama apa saja, asalkan tidak menggunakan nama yang sudah dipesan oleh pabrik LEGO (**Reserved Words**).

> **Analogi Panjang (Pemilah Surat Otomatis):**  
> Bayangkan sebuah mesin pemilah surat di kantor pos.
> - Surat-surat masuk sebagai tumpukan kertas mentah (*Source Text*).
> - Mesin (Lexer) memecah kertas-kertas tersebut menjadi kategori:
>     - **Keywords**: Surat resmi dari pemerintah (misal: `if`, `class`, `return`). Kamu tidak boleh memalsukannya.
>     - **Identifiers**: Nama penerima surat. Kamu bebas menamai orang, tapi mesin punya aturan: nama tidak boleh diawali dengan angka.
>     - **Punctuators**: Tanda baca seperti titik koma atau kurawal yang menentukan di mana satu instruksi berakhir.
>     - **Literals**: Isi paket atau nilai nyata (misal: angka `100` atau teks `"Halo"`).
> - Jika mesin menemukan potongan kertas yang tidak cocok dengan kategori manapun, ia akan berhenti dan mengeluarkan peringatan.

---

## Apa itu Token?

Token adalah unit terkecil dalam bahasa pemrograman. Ada beberapa jenis token utama:
1. **Reserved Words**: Kata-kata yang sudah dipesan oleh bahasa (misal: `break`, `export`, `while`). Mereka tidak bisa dijadikan nama variabel.
2. **Punctuators**: Simbol seperti `(`, `)`, `{`, `}`, `;`, `,`, `<`, `>`, dll.
3. **Identifiers**: Nama yang didefinisikan oleh pengembang (nama variabel, fungsi, class).
4. **Literals**: Representasi nilai tetap (Numeric, String, Boolean, Null).

## Aturan Penamaan Identifier

Dalam JavaScript, sebuah Identifier harus mengikuti aturan (Clause 12.1):
- Harus dimulai dengan: Huruf, `$`, atau `_`.
- Karakter selanjutnya boleh berupa: Huruf, `$`, `_`, atau **Angka**.
- **TIDAK BOLEH** menggunakan *Reserved Words*.

## Kata-kata Terlarang (Reserved Words)

Daftar ini mencakup kata-kata yang sedang digunakan (misal: `async`, `await`, `yield`) dan beberapa kata yang dipesan untuk masa depan (misal: `enum`, `implements` dalam strict mode). Memahami daftar ini membantu Anda menghindari error "Unexpected token" saat mendeklarasikan variabel.

## Mengapa Arsitek Harus Peduli?

Memahami proses *Tokenization* (Leksing) membantu Anda:
- Menulis kode yang lebih bersih dengan penamaan yang valid secara sintaksis.
- Memahami mengapa beberapa pola penamaan (seperti Hungarian Notation atau CamelCase) tetap harus tunduk pada aturan leksikal engine.
- Debugging error sintaks yang disebabkan oleh penggunaan kata kunci di tempat yang salah.

## Contoh Eksekusi
Lihat daftar kata terlarang dan pengujian nama variabel yang valid pada folder [examples/](./examples/).
