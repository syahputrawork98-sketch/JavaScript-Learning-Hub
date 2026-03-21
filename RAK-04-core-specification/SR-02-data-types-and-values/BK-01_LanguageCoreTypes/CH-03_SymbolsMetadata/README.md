# CH-03: Symbols and Global Metadata

> **"Kunci Identitas Unik. `Symbols and Global Metadata` membedah tipe data 'Ghost' yang menjamin keunikan properti objek tanpa risiko tabrakan nama."**

**Source Hub**: 
- [ECMA-262: The Symbol Type](https://tc39.es/ecma262/#sec-ecmascript-language-types-symbol-type)
- [ECMA-262: Well-Known Symbols](https://tc39.es/ecma262/#sec-well-known-symbols)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Symbol** adalah primitif unik yang tidak bisa dibuat ulang. Meskipun memiliki deskripsi yang sama, setiap pemanggilan `Symbol()` menghasilkan identitas yang berbeda di seluruh Hub. **Well-known Symbols** (seperti `Symbol.iterator`) adalah protokol internal Hub yang memungkinkan Anda menyuntikkan logika kustom ke dalam algoritma standar.

---

## 2. Visualisasi Sistem: Symbol Uniqueness

```mermaid
graph TD
    S1[Symbol('key')] --> ID1[ID: #001]
    S2[Symbol('key')] --> ID2[ID: #002]
    
    ID1 == ID2 --> Result[false]
    
    Global[Global Registry] -->|Symbol.for| Shared[Shared Symbol]
```

---

## 3. Mekanisme & Hubungan

### Kategori Simbol (Clause 6.1.5)
1.  **Private-like Keys**: Simbol sering digunakan sebagai kunci properti objek yang tidak muncul dalam iterasi biasa (`Object.keys`), memberikan tingkat enkapsulasi "lembut".
2.  **The Global Registry**: Melalui `Symbol.for(key)`, Anda dapat berbagi satu identitas simbol yang sama di seluruh Realm (misal: antara main script dan iFrame), yang memungkinkan komunikasi antar-sirkuit yang aman.
3.  **Cross-Rack Linking**: Simbol adalah jantung dari metadata mesin. Ia menghubungkan **RAK-04** (Internal Spec) dengan **RAK-02** (Developer API) melalui Well-known symbols.

---

## 4. Arsitek Mindset
Gunakan Symbol untuk mendefinisikan "Interface" internal pada objek Anda yang tidak boleh diakses atau dirusak secara tidak sengaja oleh pihak luar. Simbol adalah instrumen utama untuk *meta-programming* yang rapi.

---

## 5. Lab Praktis
Eksperimen di folder `examples/` membedah dua pilar utama:
1.  **[Uniqueness & Hidden Keys](./examples/01_uniqueness_hidden.js)**: Menggunakan simbol untuk properti privat dan melacak visibilitasnya.
2.  **[Meta-Programming Iterator](./examples/02_metaprogramming_iterator.js)**: Mengimplementasikan protokol iterasi kustom menggunakan `Symbol.iterator`.

---
*Status: [status.md](../../../../../status.md)*
