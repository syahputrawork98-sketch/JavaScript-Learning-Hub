# Chapter 04: Grammar Notation Basic

Untuk membaca spesifikasi tanpa pusing, Anda harus menguasai "Legenda" atau simbol-simbol yang digunakan dalam Blueprint tata bahasa.

*Mental Model: "Membaca Legenda Peta"*

## 1. Gaya Font (Visual Cues)

Spesifikasi menggunakan tipografi untuk membedakan kategori:

- **Sans-serif font**: Merujuk pada **Terminal symbols**. Simbol ini harus muncul *persis* seperti yang tertulis. Contoh: `if`, `{`.
- ***Italic font***: Merujuk pada **Non-terminal symbols**. Ini adalah kategori yang harus dicari definisi produksinya. Contoh: *Identifier*.

## 2. Jenis Produksi (Colon Notation)

Spesifikasi membedakan level tata bahasa melalui jumlah titik dua:
- **`::` (Double Colon)**: Digunakan untuk **Lexical Grammar**. Mengolah karakter ke token.
- **`:` (Single Colon)**: Digunakan untuk **Syntactic Grammar**. Menyusun token ke logika program.
- **`:::` (Triple Colon)**: Digunakan untuk **Numeric String Grammar**. Aturan khusus konversi teks ke angka.

## 3. Parameter dan Kondisi

JS memiliki fitur canggih di mana satu aturan tata bahasa bisa berperilaku berbeda tergantung konteks. Contohnya: `[Yield]` parameter. Jika sebuah fungsi adalah generator, spek mengaktifkan jalur tata bahasa yang mengizinkan kata kunci `yield`.

Simbol `[Yield]` adalah saklar yang menentukan aturan gerbang mana yang berlaku dalam blueprint arsitektur kode Anda.
