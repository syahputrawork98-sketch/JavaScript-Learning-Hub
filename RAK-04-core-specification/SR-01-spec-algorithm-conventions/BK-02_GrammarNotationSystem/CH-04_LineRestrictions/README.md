# CH-04: Line Terminator and ASI Logic

> **"Misteri pemisah baris otomatis. `Line Terminator and ASI Logic` membedah aturan rahasia Hub yang memungkinkan sirkuit tetap berjalan meski tanda baca hilang."**

**Source Hub**: 
- [ECMA-262: Automatic Semicolon Insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Hub memiliki aturan **Automatic Semicolon Insertion (ASI)** untuk menangani titik di mana grammar mewajibkan titik koma (`;`) tapi teknisi tidak menyediakannya. Selain itu, ada **Line Terminator Restrictions** (`[no LineTerminator here]`) yang melarang jeda baris di antara dua simbol tertentu (seperti antara `return` dan nilainya).

**Model Mental**:
- **ASI**: Seperti asisten yang otomatis menaruh tanda titik di akhir kalimat jika Anda lupa, tapi hanya jika asisten itu yakin dia tahu di mana kalimat berakhir.
- **[no LineTerminator here]**: Seperti kabel yang tidak boleh putus di tengah. Jika Anda memutus baris di titik terlarang ini, Hub akan menganggap sirkuit tersebut sudah selesai secara prematur.

---

## 2. Visualisasi Sistem: ASI Decision Logic

```mermaid
graph TD
    Err[Grammar Error found?] --> ASI{Can we insert ';'?}
    ASI -->|Yes: Offending symbol is '}'| Fix[Insert ';' & Continue]
    ASI -->|Yes: Prev symbol is LineTerminator| Fix
    ASI -->|No: Restricted by Grammar| Fail[Throw SyntaxError]
    
    style Fix fill:#a8e6cf,stroke:#333
    style Fail fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Aturan Keamanan (Clause 12.9)
1. **The Offending Symbol Rule**: Jika teks yang melanggar grammar diawali oleh `}`, Hub akan mencoba menyuntikkan `;`.
2. **Restricted Productions**: Ada titik kritis (seperti setelah `return`, `throw`, `break`, `continue`) di mana Hub melarang keras pemisahan baris. Jika Anda melakukannya, Hub akan menyuntikkan `;` secara otomatis di baris atasnya, seringkali mengubah logika program Anda secara drastis.
3. **The Semicolon Necessity**: Memahami kapan ASI *pasti* gagal (misal: kode diawali dengan `(` atau `[` di baris baru).

### Arsitek Mindset: Defensive Punctuation
- Meskipun Hub memiliki asisten otomatis (ASI), jangan pernah mengandalkannya sepenuhnya untuk logika sirkuit yang sensitif. Selalu gunakan titik koma secara eksplisit untuk menjamin bahwa niat arsitektural Anda tidak disalahartikan oleh aturan otomatis Hub.

---

## 4. Lab Praktis
Buka file `examples/asi_hazard_lab.js` untuk melihat bagaimana sebuah pernyataan `return` yang diputus barisnya mengembalikan nilai `undefined`, meskipun nilai aslinya tertulis tepat di bawahnya.

---
*Status: [status.md](../../../../../status.md)*
