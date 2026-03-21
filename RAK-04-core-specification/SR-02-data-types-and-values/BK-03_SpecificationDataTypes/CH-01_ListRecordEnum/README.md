# CH-01: List, Record, and Enum

> **"Blok Bangunan Spesifikasi. `List, Record, dan Enum` membedah struktur data internal yang digunakan oleh spesifikasi untuk mendefinisikan logika Hub tanpa terpengaruh oleh tipe data bahasa."**

**Source Hub**: 
- [ECMA-262: List and Record Specification Types](https://tc39.es/ecma262/#sec-list-and-record-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Tipe data ini disebut **Specification Types**—mereka tidak ada di dalam runtime JavaScript, tapi mereka adalah "bahasa pemrograman" yang digunakan untuk menulis spesifikasi Hub.
- **Record**: Koleksi field statis (seperti `{ [[Value]], [[Writable]] }`).
- **List**: Urutan nilai murni (seperti daftar argumen `« 1, 2 »`).
- **Enum**: Kumpulan konstanta unik (seperti `~empty~` atau `~normal~`).

---

## 2. Visualisasi Sistem: Specification Data Structures

```mermaid
graph TD
    SpecData[Internal Data] --> R[Record: [[Slot Name]]]
    SpecData --> L[List: Element 1, 2...]
    SpecData --> E[Enum: Constant Symbol]
    
    R --> F1["[[Value]]"]
    R --> F2["[[Configurable]]"]
    
    style R fill:#e1f5fe,stroke:#01579b
    style L fill:#fff3e0,stroke:#e65100
```

---

## 3. Mekanisme & Hubungan

### Infrastruktur Internal (Clause 6.2.1 - 6.2.3)
1.  **Record Composition**: Hampir seluruh entitas di Hub, mulai dari **Property Descriptor** hingga **Environment Record**, adalah sebuah Record. Ia bertindak sebagai wadah status yang sangat disiplin.
2.  **The Enum Role**: Enum digunakan sebagai flag status yang menentukan arah alur sirkuit. Contoh paling krusial adalah `[[Type]]` dalam **Completion Record** yang menentukan apakah eksekusi berlanjut atau meledak (throw).
3.  **Cross-Rack Linking**: Pemahaman tentang Record dalam **BK-03** adalah prasyarat untuk memahami **RAK-06** (Engine Internals), karena di sanalah Record ini dipetakan ke memori fisik mesin (V8/JavaScriptCore).

---

## 4. Arsitek Mindset
Bayangkan Specification Types sebagai "Blueprint" dari sebuah mesin. Anda tidak bisa menyentuhnya saat mesin berjalan, tapi jika Anda memahami blueprint-nya, Anda bisa memprediksi dengan tepat bagaimana mesin itu akan bereaksi terhadap setiap input yang Anda berikan.

---

## 5. Lab Praktis
Eksperimen di folder `examples/` membedah pilar utama:
1.  **[Record Structures](./examples/01_record_structures.js)**: Simulasi penyimpanan metadata internal menggunakan objek JS yang meniru perilaku Record dan List spesifikasi.

---
*Status: [status.md](../../../../../status.md)*
