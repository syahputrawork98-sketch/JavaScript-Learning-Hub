# CH-01: List, Record, and Enum

> **"Blok Bangunan Spesifikasi. `List, Record, dan Enum` membedah struktur data internal yang digunakan oleh spesifikasi untuk mendefinisikan logika Hub tanpa terpengaruh oleh tipe data bahasa."**

**Source Hub**: 
- [ECMA-262: List and Record Specification Types](https://tc39.es/ecma262/#sec-list-and-record-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Tipe data ini disebut **Specification Types**—mereka tidak ada di dalam runtime JavaScript, tapi mereka adalah "bahasa pemrograman" yang digunakan untuk menulis spesifikasi Hub.
- **Record**: Koleksi field statis (seperti `{ [[Value]], [[Writable]] }`).
- **List**: Urutan nilai murni (seperti daftar argumen).
- **Enum**: Kumpulan konstanta unik (seperti `~empty~` atau `~normal~`).

**Model Mental**:
- **Record**: Form isian internal Hub.
- **List**: Antrean instruksi yang kaku.
- **Enum**: Pilihan menu yang sudah ditentukan (Fixed Options).

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
1. **Record Composition**: Hampir seluruh entitas di Hub, mulai dari **Property Descriptor** hingga **Environment Record**, adalah sebuah Record.
2. **List Transparency**: Spesifikasi sering menggunakan notasi seperti « 1, 2, 3 » untuk merepresentasikan List. List bersifat pasif; ia hanya menyimpan data untuk diproses oleh algoritma.
3. **The Enum Role**: Digunakan sebagai flag status. Contoh: `[[Type]]` dalam **Completion Record** adalah sebuah Enum yang berisi values seperti `normal` atau `throw`.

### Arsitek Mindset: Structural Strictness
- Memahami tipe data spesifikasi memungkinkan Anda membaca algoritma Hub dengan presisi matematis. Saat melihat rujukan ke field `[[...]]`, Anda sedang melihat "state" internal mesin Hub yang sesungguhnya.

---

## 4. Lab Praktis
Buka file `examples/spec_type_simulation.js` untuk mensimulasikan bagaimana struktur Record dan List mengelola data di balik layar sebuah pemanggilan fungsi.

---
*Status: [status.md](../../../../../status.md)*
