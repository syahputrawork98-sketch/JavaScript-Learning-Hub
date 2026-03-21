# Chapter 09: Exclusion & Descriptions

Terkadang, blueprint arsitektur butuh aturan pengecualian: "Semua warna cat boleh digunakan, **kecuali** warna merah." Dalam tata bahasa, ini ditunjukkan melalui notasi "but not".

*Mental Model: "Aturan Pengecualian Blueprint"*

## 1. Notasi: `but not`

Digunakan untuk mempersempit jangkauan sebuah Non-terminal.

**Contoh: `Identifier : IdentifierName but not ReservedWord`**
Artinya: Nama variabel (`Identifier`) bisa berupa apa saja yang mengikuti aturan `IdentifierName`, **KECUALI** jika nama tersebut sudah dipesan sebagai kata kunci (seperti `if`, `class`, atau `while`).

## 2. Deskripsi Deskriptif

Selain notasi formal, spesifikasi kadang menggunakan kalimat deskriptif dalam kurung siku `< >` untuk menjelaskan aturan yang terlalu rumit jika ditulis secara simbolis.

**Contoh: `<any Unicode code point>`**
Ini adalah instruksi langsung yang berarti "karakter Unicode apa pun" tanpa perlu mendefinisikan ribuan terminal karakter satu per satu.

## 3. Kompleksitas Leksikal

Notasi pengecualian ini memastikan bahwa kategori besar seperti "Nama Variabel" tidak bertabrakan dengan kategori kritis seperti "Kata Kunci". Arsitek senior memahami pengecualian ini sebagai "pagar pelindung" yang menjaga integritas bahasa.
