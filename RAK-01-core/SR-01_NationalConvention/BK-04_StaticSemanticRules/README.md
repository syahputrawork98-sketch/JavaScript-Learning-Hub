# Buku: 04 Static Semantic Rules

*Pemetaan ECMA-262: Clause 5.3 (Historical ES2016) & Early Errors*

Buku ini membedah mekanisme "Polisi" di dalam spesifikasi JavaScript. Sebelum kode dijalankan (*Runtime*), terdapat serangkaian aturan statis yang memastikan kode tersebut valid secara logika dan struktur.

## Mental Model
**"Buku Peraturan & Detektor Pelanggaran"**
Bayangkan sebuah bandara. *Grammar* (Buku 02) memastikan Anda memiliki tiket dan paspor (Format valid). *Algorithms* (Buku 03) adalah perjalanan terbangnya sendiri. Namun, *Static Semantics* adalah pemeriksaan keamanan; mereka memastikan Anda tidak membawa barang terlarang (Early Errors) sebelum Anda diizinkan masuk ke pesawat.

## Daftar Bab (PPM V3)
1. **[CH-01: Algorithm Static Semantics](./CH-01_StaticSemanticsAlgorithm/)**: Memahami aturan statis dalam algoritma.
2. **[CH-02: Grammar Static Semantics](./CH-02_StaticSemanticsGrammar/)**: Memahami aturan statis dalam notasi grammar.
3. **[CH-03: Early Error Rules](./CH-03_EarlyErrors/)**: Mekanisme deteksi kesalahan sebelum eksekusi.
4. **[CH-04: Static Scope Rules](./CH-04_ScopeRules/)**: Bagaimana scope diidentifikasi secara statis.
5. **[CH-05: Forbidden Extensions](./CH-05_Extensions/)**: Aturan pelarangan fitur non-standar.
6. **[CH-06: Constant Declarations](./CH-06_Constants/)**: Validasi statis untuk `const` dan `let`.
7. **[CH-07: Duplicate Labels](./CH-07_Labels/)**: Deteksi label duplikat dan break/continue target.
8. **[CH-08: Async/Await Restrictions](./CH-08_AsyncRestrictions/)**: Aturan penempatan keyword async/await.
9. **[CH-09: Parameter Validation](./CH-09_Parameters/)**: Aturan statis untuk parameter fungsi.
10. **[CH-10: Strict Mode Semantic](./CH-10_StrictMode/)**: Bagaimana 'use strict' mengubah aturan statis.
11. **[CH-11: Binding Initialization](./CH-11_Binding/)**: Aturan statis untuk destructuring dan binding.
12. **[CH-12: Advanced Semantic Puzzles](./CH-12_Puzzles/)**: Tantangan logika validasi spesifikasi.

---
*Status: Draft (Versi v3.01.01.04)*
