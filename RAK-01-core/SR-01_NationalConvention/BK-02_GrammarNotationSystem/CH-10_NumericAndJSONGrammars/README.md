# Chapter 10: Numeric & JSON Grammars

JavaScript memiliki beberapa tata bahasa khusus yang berdiri sendiri untuk menangani data spesifik. Ini seperti memiliki blueprint terpisah untuk sistem kelistrikan dan sistem perairan dalam satu gedung.

*Mental Model: "Blueprint Sistem Khusus"*

## 1. Numeric String Grammar (`:::`)

Pernahkah Anda menggunakan fungsi `Number("123")`? Saat itulah engine menggunakan **Numeric String Grammar**.

- **Notasi**: Ditandai dengan tiga titik dua (`:::`).
- **Tujuan**: Mengatur bagaimana sebuah string teks diubah menjadi nilai angka teoretis. Aturan di sini jauh lebih sederhana dibandingkan tata bahasa leksikal penuh, karena ia tidak perlu menangani komentar atau kata kunci.

## 2. JSON Grammar

Saat Anda melakukan `JSON.parse()`, engine tidak menggunakan seluruh aturan JavaScript. Ia menggunakan sub-set yang disebut **JSON Grammar**.

- **Batasan**: Dalam JSON Grammar, Anda tidak boleh menggunakan `undefined`, fungsi, atau koma terakhir (*trailing comma*).
- **Keamanan**: Dengan menggunakan blueprint yang lebih terbatas, engine bisa melakukan parsing jauh lebih cepat dan aman daripada menggunakan `eval()`.

## 3. String Numeric vs Numeric Literal

Penting bagi arsitek untuk membedakan antara:
- **Numeric Literal**: Angka yang tertulis langsung di kode (diatur oleh Lexical Grammar `::`).
- **String Numeric**: Teks yang dikonversi jadi angka (diatur oleh Numeric String Grammar `:::`).

Aturan pembulatan dan presisi di kedua blueprint ini harus sinkron agar hasil program konsisten.
