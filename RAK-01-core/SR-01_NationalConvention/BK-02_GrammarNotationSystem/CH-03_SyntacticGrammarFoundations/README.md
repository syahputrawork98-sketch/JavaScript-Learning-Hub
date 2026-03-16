# Chapter 03: Syntactic Grammar Foundations

Setelah *Lexical Grammar* (CH-02) menghasilkan Token, **Syntactic Grammar** mengambil alih untuk menyusun Token tersebut menjadi struktur yang lebih besar: *Statements* dan *Expressions*.

*Mental Model: "Arsitek Struktur Bangunan"*

## 1. Goal Symbols di Tingkat Sintaksis

Berbeda dengan level leksikal, di level sintaksis, Goal Symbol menentukan "Jenis File" apa yang sedang dibaca engine:

- **Script**: Konteks tradisional (global scope).
- **Module**: Konteks modern (ES Modules, strict by default).

Aturan tata bahasa bisa berubah drastis! Misalnya, kata kunci `await` hanya valid di tingkat atas (top-level) jika Goal Symbol-nya adalah `Module`.

## 2. Chain of Production (Rantai Produksi)

Sintaksis bekerja seperti pohon keputusan.
`Script` -> `ScriptBody` -> `StatementList` -> `Statement` -> `VariableStatement` ... dan seterusnya hingga mencapai Terminal (Token).

Jika Anda menulis `let x = ;`, engine akan berhenti di `VariableDeclaration` karena ia mengharapkan `AssignmentExpression` setelah tanda `=`, tapi malah menemukan terminal `;`.

## 3. Context-Dependent Syntax

Banyak aturan sintaksis di JS yang berubah berdasarkan konteks (seperti mode `Strict`). Spesifikasi menggunakan parameter tata bahasa (seperti `[In]`, `[Return]`, `[Await]`) untuk menangani hal ini secara formal.

Paham perbedaan antara "Script" dan "Module" adalah kunci untuk mengerti perilaku fundamental scope di JS.
