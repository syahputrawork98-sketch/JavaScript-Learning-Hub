# CH-03: Grammar Restrictions

> **"Aturan tambahan yang menjaga integritas Grid. `Grammar Restrictions` adalah parameter kontekstual dan batasan tak kasat mata yang menentukan validitas kode di situasi tertentu."**

**Source Hub**: 
- [ECMA-262: Grammatical Parameters](https://tc39.es/ecma262/#sec-grammatical-parameters)
- [ECMA-262: Lookahead Restrictions](https://tc39.es/ecma262/#sec-lookahead-restrictions)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Terkadang tata bahasa dasar tidak cukup untuk mendefinisikan validitas. Spesifikasi menggunakan **Grammatical Parameters** (seperti `[Yield]`), **Lookahead Restrictions**, dan **Empty/But-Not notations** untuk memberikan batasan tambahan yang bergantung pada konteks penggunaan.

**Model Mental**:
Bayangkan sebuah gerbang di Hub. Gerbang itu terbuka atau tertutup bukan hanya tergantung siapa yang datang, tapi dari arah mana mereka datang dan apa yang mereka bawa (Parameter Konteks).

---

## 2. Visualisasi Sistem: Context-Aware Parsing

```mermaid
graph TD
    Code[Code: a = b] --> Parse{Parser Context}
    Parse -->|In [Yield] context| Error[Forbidden if used as yield]
    Parse -->|Regular context| Success[Valid Assignment]
    
    Parse -.->|Lookahead| Next[Check next token]
    Next -->|if { then...| Case1[Object]
    Next -->|if code then...| Case2[Block]
```

---

## 3. Mekanisme & Hubungan

### Batasan Canggih
1. **Grammatical Parameters**: Ditulis sebagai `Nonterminal[Yield, Await]`. Mengubah aturan produksi berdasarkan apakah kita berada di dalam fungsi generator atau async.
2. **Lookahead Restrictions (`[lookahead ∉ { ... }]`)**: Melarang sebuah aturan digunakan jika karakter berikutnya adalah simbol tertentu (Sangat krusial untuk membedakan antara *Object Literal* dan *Block Statement*).
3. **No LineTerminator here**: Batasan yang melarang adanya baris baru di posisi tertentu, dasar dari mekanisme **Automatic Semicolon Insertion (ASI)**.
4. **But Not Notation**: `SourceCharacter but not '` - Mengizinkan semua karakter KECUALI yang disebutkan.

### Arsitek Mindset: Context Awareness
- Sadari bahwa sebuah ekspresi yang sama (`yield x`) bisa valid di satu file Hub tapi ilegal di file lain, murni karena parameter konteks yang aktif.

---

## 4. Lab Praktis
Buka file `examples/restriction_scenarios.js` untuk melihat bagaimana `lookahead` dan `LineTerminator` memengaruhi cara Hub menginterpretasikan kode Anda secara berbeda.

---
*Status: [status.md](../../../../../status.md)*
