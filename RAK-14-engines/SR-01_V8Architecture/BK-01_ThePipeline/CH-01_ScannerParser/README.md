# CH-01: Scanner & Parser (From Source to AST)

Langkah pertama V8 adalah memahami struktur kode Anda sebelum bisa menjalankannya.

## 🔍 The Scanner (Lexical Analysis)
Scanner memecah aliran karakter teks menjadi urutan **Tokens** (seperti `function`, `variable`, `(`, `{`).

## 🌳 The Parser (Syntactic Analysis)
Parser mengambil token-token dari scanner dan membangun **Abstract Syntax Tree (AST)**. AST adalah representasi pohon dari struktur logis kode Anda.

V8 menggunakan dua jenis parsing:
1. **Full Parsing**: Untuk kode yang akan dijalankan segera.
2. **Pre-parsing**: Untuk fungsi yang belum dipanggil, guna mempercepat startup time dengan melewatkan detail eksekusi.

---
*Kembali ke [BK-01](../README.md)*
