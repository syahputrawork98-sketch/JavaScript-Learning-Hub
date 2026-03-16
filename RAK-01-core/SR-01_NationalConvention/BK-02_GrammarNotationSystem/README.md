# Buku 02: Grammar Notation System

Dalam spesifikasi ECMA-262, aturan pembentukan kode (apa yang valid secara sintaks) didefinisikan melalui sistem notasi tata bahasa (*Grammar*). Buku ini menjelaskan bagaimana blueprint bahasa disusun secara leksikal dan sintaksis.

*Mental Model: "Blueprint Tata Bahasa"*

## Daftar Chapter

1. **[CH-01: Context-Free Grammars](./CH-01_ContextFreeGrammars/)** - Dasar Terminal dan Non-terminal.
2. **[CH-02: Lexical Grammar Foundations](./CH-02_LexicalGrammarFoundations/)** - Goal symbols dan Input elements.
3. **[CH-03: Syntactic Grammar Foundations](./CH-03_SyntacticGrammarFoundations/)** - Token hingga Script/Module.
4. **[CH-04: Grammar Notation Basic](./CH-04_GrammarNotationBasic/)** - Terminal, Non-terminal, dan Layout.
5. **[CH-05: Optional & Alternates](./CH-05_OptionalAndAlternates/)** - `opt`, `one of`, dan `[empty]`.
6. **[CH-06: Grammatical Parameters](./CH-06_GrammaticalParameters/)** - Parameter kontekstual (misal: `[Yield]`).
7. **[CH-07: Lookahead Restrictions](./CH-07_LookaheadRestrictions/)** - Logika lookahead negatif.
8. **[CH-08: Line Terminator Restrictions](./CH-08_LineTerminatorRestrictions/)** - Batasan tata bahasa terkait ASI.
9. **[CH-09: Exclusion & Descriptions](./CH-09_ExclusionAndDescriptions/)** - `but not` dan frase bantu spesifikasi.
10. **[CH-10: Numeric String & JSON Grammars](./CH-10_NumericAndJSONGrammars/)** - Tata bahasa khusus angka dan data.
11. **[CH-11: Grammar Puzzles](./CH-12_GrammarPuzzles/)** - Studi kasus kompleksitas parsing (ASI, dll).
12. **[CH-12: Advanced Notation (Planned)](./)** - Pendalaman notasi otomatis.

## Prasyarat Pembaca
- Telah membaca [BK-01: Spec Foundations](../BK-01_SpecFoundations/).
- Memahami konsep dasar Parsing atau Tokenizing (opsional namun membantu).
