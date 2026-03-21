# CH-01: CFG and Primary Notation

> **"Abjad tata bahasa Hub. `CFG and Primary Notation` menjelaskan bagaimana teks kode didekonstruksi menjadi simbol-simbol yang dimengerti oleh engine."**

**Source Hub**: 
- [ECMA-262: Context-Free Grammars](https://tc39.es/ecma262/#sec-context-free-grammars)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
JavaScript menggunakan **Context-Free Grammar (CFG)** untuk mendefinisikan struktur bahasanya. **Terminal Symbols** adalah karakter tetap (seperti `if`, `{`, `+`), sedangkan **Nonterminal Symbols** adalah nama kategori (seperti *Statement*, *Expression*) yang bisa dipecah lagi menjadi simbol-simbol lain melalui **Productions** (Aturan).

**Model Mental**:
Bayangkan Hub sedang merakit kalimat.
- **Nonterminal**: Subjek, Predikat, Objek.
- **Terminal**: Nama orang ("Andi"), Kata kerja ("Makan").
- **Production**: Aturan yang menyatakan "Kalimat terdiri dari Subjek + Predikat".

---

## 2. Visualisasi Sistem: Production Chain

```mermaid
graph TD
    S[Nonterminal: Statement] --> If[Production 1: 'if' ( Terminal )]
    S --> Block[Production 2: Block]
    Block --> LCurly["'{' ( Terminal )"]
    Block --> RCurly["'}' ( Terminal )"]
    
    style If fill:#a8e6cf,stroke:#333
    style LCurly fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Anatomi Produksi (Clause 5.1.1 - 5.1.4)
1. **Left-Hand Side (LHS)**: Simbol non-terminal yang sedang didefinisikan (di sebelah kiri tanda `:`).
2. **Right-Hand Side (RHS)**: Daftar simbol (terminal/non-terminal) yang membentuk LHS (di sebelah kanan tanda `:`).
3. **Chain Productions**: Saat sebuah non-terminal merujuk ke non-terminal lain tanpa teks terminal tambahan, menciptakan rantaian validasi di Hub.

### Arsitek Mindset: Structural Strictness
- Pahami bahwa setiap karakter yang Anda ketik di Hub harus lolos dari saringan Grammar ini. Jika struktur Anda tidak sesuai dengan rantaian produksi, Hub akan langsung menolak sirkuit Anda sebelum satu baris kode pun diproses (Syntax Error).

---

## 4. Lab Praktis
Buka file `examples/grammar_production_audit.js` untuk melihat bagaimana sebuah fungsi sederhana diurai menjadi rantaian produksi di level internal spesifikasi.

---
*Status: [status.md](../../../../../status.md)*
