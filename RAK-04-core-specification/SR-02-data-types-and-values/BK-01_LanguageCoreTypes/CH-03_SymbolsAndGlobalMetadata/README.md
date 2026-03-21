# CH-03: Symbols and Global Metadata

> **"Kunci unik yang tak kasat mata. `Symbols and Global Metadata` menyediakan identitas unik yang dijamin tidak akan pernah bertabrakan di dalam seluruh ekosistem Hub."**

**Source Hub**: 
- [ECMA-262: The Symbol Type](https://tc39.es/ecma262/#sec-ecmascript-language-types-symbol-type)
- [ECMA-262: Well-Known Symbols](https://tc39.es/ecma262/#sec-well-known-symbols)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Symbol** adalah tipe data primitif yang unik dan tidak dapat diubah (*immutable*). Symbol sering digunakan sebagai kunci properti objek untuk menghindari tabrakan nama (name collisions), terutama saat berinteraksi dengan API pihak ketiga atau sirkuit lain di luar kendali kita.

**Model Mental**:
Bayangkan setiap Symbol adalah sebuah sidik jari elektromagnetik yang unik secara universal. Meskipun Anda memberinya nama yang sama ("Debug"), sidik jarinya akan selalu berbeda.

---

## 2. Visualisasi Sistem: Symbol Uniqueness

```mermaid
graph TD
    S1[Symbol('A')]
    S2[Symbol('A')]
    S1 --- Match{Compare?}
    S2 --- Match
    Match -->|Result| False[Not Equal]
    
    subgraph Registry [Global Symbol Registry]
        GS[Symbol.for('X')]
    end
    
    style Registry fill:#fff9c4,stroke:#fbc02d
```

---

## 3. Mekanisme & Hubungan

### Well-Known Symbols
Hub menyediakan sekumpulan Symbol bawaan yang digunakan untuk mengubah perilaku internal objek:
1. **`Symbol.iterator`**: Memberi tahu Hub bagaimana cara melakukan iterasi pada objek ini.
2. **`Symbol.toStringTag`**: Mengubah label yang muncul saat `toString()` dipanggil.
3. **`Symbol.hasInstance`**: Mengatur perilaku operator `instanceof`.

### Arsitek Mindset: Hidden Channels
- Gunakan Symbol untuk menyimpan metadata atau status internal pada objek yang akan dibagikan ke sirkuit lain. Ini memastikan sirkuit lain tidak secara tidak sengaja menimpa atau membaca data rahasia Anda melalui loop `for...in` biasa.

---

## 4. Lab Praktis
Buka file `examples/symbol_metadata_lab.js` untuk melihat bagaimana menciptakan kunci objek yang tersembunyi dan menggunakan *Well-Known Symbols* untuk kustomisasi perilaku sirkuit.

---
*Status: [status.md](../../../../../status.md)*
