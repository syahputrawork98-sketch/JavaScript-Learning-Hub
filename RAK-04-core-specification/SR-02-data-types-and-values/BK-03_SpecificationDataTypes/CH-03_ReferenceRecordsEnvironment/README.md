# CH-03: Reference Records and Environment

> **"Mekanisme Resolusi Identitas. `Reference Records and Environment` membedah bagaimana Hub melacak di mana sebuah variabel disimpan dan bagaimana ia diakses secara internal."**

**Source Hub**: 
- [ECMA-262: Reference Record Specification Type](https://tc39.es/ecma262/#sec-reference-record-specification-type)
- [ECMA-262: Environment Records](https://tc39.es/ecma262/#sec-environment-records)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Saat Anda menulis `x = 10`, Hub tidak langsung menaruh nilai ke memori. Ia menciptakan **Reference Record**—sebuah kompas internal yang menunjuk ke **Environment Record** (wadah variabel). Reference menyimpan informasi tentang siapa pemilik variabel tersebut (`[[Base]]`) dan apakah ia bisa diubah atau tidak.

**Model Mental**:
- **Environment Record**: Lemari arsip tempat data disimpan.
- **Reference Record**: Cabut (sticky note) yang memberi tahu Anda: "Cari di lemari A, laci nomor 5."

---

## 2. Visualisasi Sistem: Identity Resolution

```mermaid
graph LR
    Ref[Reference Record] --> Base[[[Base: Environment/Object]]]
    Ref --> Name[[[ReferencedName: 'x']]]
    Ref --> Strict[[[Strict: true/false]]]
    
    Base --> Storage[Memory Storage]
    
    style Ref fill:#e1f5fe,stroke:#01579b
    style Base fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Lapisan Lingkungan (Clause 6.2.5 - 9.1)
1. **Declarative Environment**: Digunakan untuk menyimpan variabel dari `let`, `const`, dan `class`. Sangat efisien dan berada di level mesin.
2. **Object Environment**: Digunakan untuk objek global (`window` / `globalThis`) atau blok `with`. Kurang efisien karena harus mencari properti di dalam objek dinamis.
3. **Unresolvable Reference**: Jika `[[Base]]` adalah `undefined`, Hub tahu bahwa variabel tersebut tidak ada (melempar `ReferenceError` di mode ketat).

### Arsitek Mindset: Scope Performance
- Setiap akses variabel melibatkan pembacaan **Reference Record**. Meminimalkan rantai pencarian identitas (Scope Chain) dengan cara tidak membuat scope yang terlalu dalam akan meningkatkan throughput energi di sirkuit Hub Anda.

---

## 4. Lab Praktis
Buka file `examples/reference_logic_lab.js` untuk melihat simulasi bagaimana Hub mendeteksi variabel yang tidak didefinisikan melalui mekanisme `GetBase([[Reference]])`.

---
*Status: [status.md](../../../../../status.md)*
