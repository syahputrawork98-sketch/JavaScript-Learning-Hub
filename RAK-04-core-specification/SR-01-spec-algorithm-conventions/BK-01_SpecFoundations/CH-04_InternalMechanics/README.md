# CH-04: Properties and Internal Slots

> **"Mekanisme tersembunyi di balik objek. `Properties and Internal Slots` membedah bagaimana Hub menyimpan metadata dan instruksi rahasia di dalam setiap unit data."**

**Source Hub**: 
- [ECMA-262: Property Attributes](https://tc39.es/ecma262/#sec-property-attributes)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Setiap properti di Hub bukan sekadar nilai, melainkan sebuah struktur kecil yang dipagari oleh **Attributes** (seperti `Enumerable` atau `Configurable`). Selain itu, ada **Internal Slots** (ditulis dengan kurung siku ganda `[[ ]]`) yang merupakan variabel rahasia Hub untuk menyimpan status objek (seperti status privat sebuah kelas atau target sebuah Proxy).

**Model Mental**:
Bayangkan laci (Property) di Hub.
- **Value**: Barang di dalam laci.
- **Attributes**: Kunci laci. Apakah bisa dibuka (Enumerable)? Apakah bisa diganti kuncinya (Configurable)?
- **Internal Slots**: Ruang rahasia di bawah laci yang hanya bisa dibuka oleh teknisi pusat Hub menggunakan alat khusus.

---

## 2. Visualisasi Sistem: Anatomy of a Property

```mermaid
graph TD
    Prop[Property: 'energy'] --> Attr[Attributes]
    Attr --> W[Writable: true/false]
    Attr --> E[Enumerable: true/false]
    Attr --> C[Configurable: true/false]
    
    Obj[Object] --> Slot[[[Prototype]]]
    Obj --> Slot2[[[PrivateElements]]]
    
    style Attr fill:#f1c40f,stroke:#333
    style Slot fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Komponen Internal (Clause 4.4.32 - 4.4.38)
1. **Property Attributes**: Menentukan perilaku meta-data dari sebuah identitas. Ini adalah cara Hub melindungi sirkuit penting agar tidak terhapus secara tidak sengaja.
2. **Internal Slots & Methods**: Jantung dari spesifikasi. Mereka mendefinisikan *apa* yang dilakukan objek, bukan *bagaimana* ia melakukannya.
3. **Data vs Accessor**: Properti bisa menyimpan energi langsung (Data) atau bertindak sebagai portal menuju fungsi lain (Accessor: Get/Set).

### Arsitek Mindset: Defensive Coding
- Gunakan `Object.defineProperty()` untuk menciptakan properti yang tidak bisa diubah (`writable: false`). Hal ini sangat krusial saat Anda membangun framework atau library di mana status internal sistem tidak boleh diotak-atik oleh pengguna luar.

---

## 4. Lab Praktis
Buka file `examples/property_descriptors_audit.js` untuk membongkar atribut tersembunyi dari sebuah properti objek menggunakan `Object.getOwnPropertyDescriptor()`.

---
*Status: [status.md](../../../../../status.md)*
