# Chapter 02: Lexical Grammar Foundations

Sebelum engine memahami "logika" kode Anda, ia harus terlebih dahulu memecah aliran karakter mentah menjadi unit-unit bermakna yang disebut *Tokens*. Inilah tugas dari **Lexical Grammar**.

*Mental Model: "Pemecah Batu Mentah"*

## 1. Goal Symbols (Simbol Tujuan)

*Lexical Grammar* bekerja dengan cara mencari "Goal Symbol" tertentu dari serangkaian karakter Unicode.

Beberapa Goal Symbols utama:
- `InputElementDiv`: Digunakan saat simbol `/` harus dianggap sebagai operator pembagian.
- `InputElementRegExp`: Digunakan saat simbol `/` harus dianggap sebagai awal dari Regular Expression.

Engine JS sangat cerdas; ia mengganti "kacamata" Goal Symbol-nya tergantung pada konteks di mana ia berada.

## 2. Input Elements

Setiap unit yang diproduksi oleh tata bahasa leksikal disebut sebagai *Input Element*. Ini bisa berupa:
- **WhiteSpace**: Karakter spasi, tab, dsb.
- **LineTerminator**: Karakter baris baru.
- **Comment**: Komentar kode.
- **Token**: Identifier, Punctuator, NumericLiteral, StringLiteral.

## 3. Ambiguitas Leksikal: "Lensa Mikroskop"

Bayangkan Anda memiliki mikroskop dengan dua lensa.
- **Lensa Leksikal**: Melihat karakter murni (spasi, komentar, kata kunci).
- **Lensa RegExp**: Saat parser mendeteksi `/`, ia mengganti lensa ke mode RegExp berdasarkan context. Aturan leksikal biasa berhenti berlaku, dan aturan pembentukan karakter RegExp mulai mengambil alih.

Memahami hal ini menjelaskan mengapa terkadang kita butuh spasi atau tanda kurung ekstra untuk membantu parser memahami niat kita.
