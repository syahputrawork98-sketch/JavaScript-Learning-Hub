# Chapter 01: Context-Free Grammars

Dalam spesifikasi ECMA-262, aturan pembentukan kode didefinisikan melalui sistem *Context-Free Grammar* (CFG). Ini adalah fondasi yang menentukan apakah deretan karakter yang Anda tulis bisa disebut "JavaScript" atau hanya "teks acak".

*Mental Model: "Batu Bata dan Blueprint"*

## 1. Terminal dan Non-terminal

Konsep paling dasar dalam tata bahasa adalah membedakan antara "Benda Nyata" dan "Kategori".

- **Terminal (Batu Bata)**: Simbol yang muncul secara fisik dalam kode Anda. Contoh: huruf `a`, angka `5`, tanda kurung `{`, atau kata kunci `if`. Terminal tidak bisa dipecah lagi.
- **Non-terminal (Blueprint)**: Nama kategori yang didefinisikan oleh aturan tata bahasa. Contoh: `Statement`, `Expression`, atau `PrimaryExpression`. Satu Non-terminal bisa terdiri dari banyak Terminal atau Non-terminal lainnya.

## 2. Production Rules (Aturan Produksi)

Spesifikasi menggunakan aturan produksi untuk menjelaskan bagaimana satu Non-terminal dibentuk.

**Notasi: `NonTerminal : expansion`**

Contoh sederhana:
```
BooleanLiteral :
  true
  false
```
Artinya: Non-terminal `BooleanLiteral` bisa digantikan oleh terminal `true` ATAU terminal `false`.

## 3. Hierarki Bahasa

Sebuah bahasa pemrograman bukanlah kumpulan karakter acak. Ia adalah struktur pohon (*Abstract Syntax Tree*). Arsitek harus paham bahwa kesalahan sintaks sebenarnya adalah ketidakmampuan *Parser* untuk memetakan "Pasir" (Karakter) Anda ke dalam "Pohon" (Non-terminal) yang valid.

Jika satu langkah terlewati, struktur bangunan (logika kode) tidak akan terbentuk.
