# Bab 01: Source Text & Unicode (Karakter Mentah)

Sebelum JavaScript memahami logika `if` atau `function`, ia harus memahami karakter apa yang Anda tulis. Dalam ECMA-262 (Clause 11.1), teks sumber JavaScript dianggap sebagai urutan **Unicode Code Points**.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Source Text** adalah **Benang Mentah**. Sebelum ditenun menjadi kemeja (Program), penenun (Engine) harus memastikan tidak ada serat terlarang atau kotoran di benang tersebut. **Unicode** adalah standar alfabet universal yang memastikan penenun bisa membaca benang dari mana saja di dunia.

> **Analogi Panjang (Sinyal Telegraf):**  
> Bayangkan kamu mengirim pesan melalui Telegraf (Source Text).
> - Kamu menggunakan kode Morse (**Unicode**) agar penerima di belahan dunia lain bisa mengerti. 
> - Setiap titik dan garis adalah **Code Point**.
> - Namun, pengirim bisa saja mengirimkan karakter "Ilegal" yang tidak ada dalam kamus telegraf. Saat itu terjadi, operator telegraf (Engine) akan langsung berteriak: **"SyntaxError: Invalid character"**. 
> - Proses memastikan setiap denyut sinyal adalah karakter yang legal di dalam "Kamus JavaScript" adalah langkah pertama dalam Lexical Analysis.

---

## Bagaimana JavaScript Membaca Teks?

JavaScript menggunakan skema **UTF-16** untuk merepresentasikan teks (internal string). Namun, pada tahap *Source Text*, spesifikasi menuntut agar file dibaca sebagai deretan **Unicode Code Points** yang valid.

### Komponen Source Text:
1. **White Space**: Karakter seperti Spasi, Tab, dan spasi lebar Unicode lainnya yang biasanya diabaikan oleh engine.
2. **Line Terminators**: Karakter pemindah baris (LF, CR, dll) yang sangat penting bagi algoritma ASI.
3. **Comments**: Penjelasan manusia yang akan dibuang oleh engine sebelum kode dieksekusi.

## Normalisasi Unicode

Ada hal menarik: dua karakter yang terlihat sama bisa saja memiliki Code Point yang berbeda (contoh: huruf "é" bisa berupa satu code point atau gabungan "e" + tanda petik). Meskipun terlihat sama di editor, JavaScript bisa saja memperlakukannya secara berbeda tergantung bagaimana mereka ditulis di file sumber.

## Mengapa Arsitek Harus Peduli?

Memahami *Source Text* membantu kita:
- Menggunakan Emoji atau karakter internasional secara aman di dalam Identifier.
- Memahami batasan karakter pada sistem lama (BMP vs Supplementary Planes).
- Mencegah bug "Invisible Character" yang sering merusak build sistem.

## Contoh Eksekusi
Lihat bagaimana JavaScript menangani karakter Unicode unik dan membedakan spasi normal dengan spasi khusus pada folder [examples/](./examples/).
