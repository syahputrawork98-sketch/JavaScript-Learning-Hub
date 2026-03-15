# Chapter 03: Syntactic Grammar Foundations

Setelah karakter diubah menjadi token oleh *Lexical Grammar*, kini giliran *Syntactic Grammar* untuk menyusun token-token tersebut menjadi struktur yang lebih besar.

## 1. Menyusun Kalimat

Tata bahasa sintaksis mendefinisikan bagaimana *Statement*, *Declaration*, dan *Expression* dibentuk.

### Analogi Singkat: "Arsitektur Bangunan"
Jika leksikal adalah tentang kualitas batu bata (Tokens), maka sintaksis adalah tentang cetak biru (Blueprint) bangunan. Anda tidak bisa meletakkan jendela (Statement) di atas lantai tanpa fondasi yang benar. Cetak biru menentukan urutan peletakan yang valid agar bangunan tidak roboh secara logis.

## 2. Context-Dependent Syntax

Banyak aturan sintaksis di JS yang berubah berdasarkan konteks (seperti mode `Strict` atau di dalam `Module`). Spesifikasi menggunakan parameter tata bahasa (seperti `[In]`, `[Return]`, `[Await]`) untuk menangani hal ini secara formal.

## 3. Script vs Module

Spek memiliki dua titik masuk sintaksis utama:
- **Script**: Konteks tradisional (global scope, `this` menunjuk ke window).
- **Module**: Konteks modern (strict by default, scope terisolasi).

Pemahaman tentang struktur sintaksis ini adalah gerbang menuju pemahaman mendalam tentang **SR-08_StatementsAndDeclarations**.
