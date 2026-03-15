# Chapter 02: Lexical Grammar Foundations

Di tingkat terendah, spesifikasi mendefinisikan bagaimana karakter mentah diubah menjadi token melalui *Lexical Grammar*.

## 1. Goal Symbols

Sistem tata bahasa sering memiliki titik masuk yang berbeda tergantung apa yang sedang diparsing.

### Analogi Singkat: "Lensa Mikroskop"
Bayangkan Anda memiliki mikroskop dengan dua lensa.
- **Lensa Leksikal**: Melihat karakter murni (spasi, komentar, kata kunci).
- **Lensa RegExp**: Saat parser mendeteksi `/`, ia mengganti lensa ke mode RegExp. Aturan leksikal biasa berhenti berlaku, dan aturan pembentukan karakter RegExp mulai mengambil alih.

## 2. Input Elements

Setiap unit yang diproduksi oleh tata bahasa leksikal disebut sebagai *Input Element*. Ini bisa berupa:
- WhiteSpace
- LineTerminator
- Comment
- Token (Identifier, Punctuator, NumericLiteral, StringLiteral)

## 3. Ambiguitas Leksikal

Mengapa `/` bisa berarti pembagian atau awal dari RegExp? Spesifikasi menggunakan *Goal Symbols* yang berbeda (`InputElementDiv` vs `InputElementRegExp`) untuk membedakan konteks ini secara absolut.

Memahami hal ini menjelaskan mengapa terkadang kita butuh spasi atau tanda kurung ekstra untuk membantu parser memahami niat kita.
