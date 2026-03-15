# Buku 01: Lexical Analysis

Buku ini membedah proses pertama yang dilakukan oleh *Engine* JavaScript saat menerima kode Anda: **Lexical Analysis** (Clause 11 & 12 pada ECMA-262). Kita akan belajar bagaimana karakter mentah (Unicode) diproses menjadi unit-unit yang bermakna bagi komputer (*Tokens*).

## Mengapa Mempelajari Ini?
Lexical Grammar adalah gerbang pertama. Memahami bagaimana JavaScript membaca teks adalah kunci untuk menghindari *SyntaxError* yang aneh, memahami batasan karakter Unicode, dan menguasai mekanisme otomatis seperti ASI (*Automatic Semicolon Insertion*) yang sering kali terlihat magis namun berbahaya.

## Daftar Bab

1. **[Bab 01: Source Text & Unicode (Karakter Mentah)](./01_source_text_and_unicode/)**
2. **[Bab 02: Tokens & Identifiers (Satuan Makna)](./02_tokens_and_identifiers/)**
3. **[Bab 03: Automatic Semicolon Insertion (ASI)](./03_automatic_semicolon_insertion/)**
4. **[Bab 04: Lexical Ambiguity (Dua Makna)](./04_lexical_ambiguity/)**

## Prasyarat Pembaca
- **[RAK-01-core / SR-02_DataTypesAndValues / Bab 01: String Internals](../../SR-02_DataTypesAndValues/01_primitive_types/01_string_internals/)**: Memahami dasar representasi UTF-16 yang juga digunakan dalam Source Text.
