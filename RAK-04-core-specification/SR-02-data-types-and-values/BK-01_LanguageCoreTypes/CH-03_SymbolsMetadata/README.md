# CH-03: Symbols and Global Metadata

> **"Kunci Identitas Unik. `Symbols and Global Metadata` membedah tipe data 'Ghost' yang menjamin keunikan properti objek tanpa risiko tabrakan nama."**

**Source Hub**: 
- [ECMA-262: The Symbol Type](https://tc39.es/ecma262/#sec-ecmascript-language-types-symbol-type)
- [ECMA-262: Well-Known Symbols](https://tc39.es/ecma262/#sec-well-known-symbols)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Symbol** adalah primitif unik yang tidak bisa dibuat ulang. Meskipun memiliki deskripsi yang sama, setiap pemanggilan `Symbol()` menghasilkan identitas yang berbeda di seluruh Hub. **Well-known Symbols** (seperti `Symbol.iterator`) adalah protokol internal Hub yang memungkinkan Anda "ikut campur" dalam algoritma standar.

---

## 2. Visualisasi Sistem: Symbol Uniqueness

```mermaid
graph TD
    S1[Symbol('key')] --> ID1[ID: #001]
    S2[Symbol('key')] --> ID2[ID: #002]
    
    ID1 == ID2 --> Result[false]
    
    Global[Global Registry] -->|Symbol.for| Shared[Shared Symbol]
    
    style ID1 fill:#a8e6cf,stroke:#333
    style ID2 fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Kategori Simbol (Clause 6.1.5)
1. **Local Symbols**: Dibuat via `Symbol()`, hanya hidup di lingkup lokal dan tidak bisa ditembus dari luar tanpa referensi langsung.
2. **Global Registry**: Menggunakan `Symbol.for(key)` untuk berbagi identitas unik di seluruh Realm di dalam Hub Anda.
3. **Well-known Symbols**: Pintu belakang (backdoor) ke mesin Hub. Mengimplementasikan `Symbol.toPrimitive` memungkinkan Anda mengontrol bagaimana objek Anda "meleleh" menjadi primitif.

---

## 4. Lab Praktis
Buka file `examples/symbol_protocol_lab.js` untuk mengimplementasikan protokol iterasi kustom menggunakan `Symbol.iterator` dan melakukan meta-programming dengan `Symbol.species`.

---
*Status: [status.md](../../../../../status.md)*
