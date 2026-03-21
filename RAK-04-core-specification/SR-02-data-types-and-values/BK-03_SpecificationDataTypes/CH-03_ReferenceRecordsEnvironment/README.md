# CH-03: Reference Records and Environment

> **"Mekanisme Resolusi Identitas. `Reference Records and Environment` membedah bagaimana Hub melacak di mana sebuah variabel disimpan dan bagaimana ia diakses secara internal."**

**Source Hub**: 
- [ECMA-262: Reference Record Specification Type](https://tc39.es/ecma262/#sec-reference-record-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Saat Anda menulis `x = 10`, Hub tidak langsung merujuk pada nilai di memori. Ia menciptakan **Reference Record**—sebuah kompas internal yang menunjuk ke **Environment Record** (wadah variabel). Reference menyimpan informasi tentang pemilik variabel (`[[Base]]`), nama variabel (`[[ReferencedName]]`), dan apakah akses tersebut dilakukan dalam mode ketat (`[[Strict]]`).

---

## 2. Visualisasi Sistem: Identity Resolution

```mermaid
graph LR
    Ref[Reference Record] --> Base[[[Base: Environment/Object]]]
    Ref --> Name[[[ReferencedName: 'x']]]
    Ref --> Strict[[[Strict: true/false]]]
    
    Base --> Storage[Memory Storage]
    
    style Ref fill:#e1f5fe,stroke:#01579b
```

---

## 3. Mekanisme & Hubungan

### Lapisan Lingkungan (Clause 6.2.5)
1.  **The [[Base]] Component**: Base bisa berupa sebuah **Environment Record** atau sebuah **Object**. Jika Base bernilai `undefined`, Hub tahu bahwa variabel tersebut "Unresolvable" (melempar ReferenceError).
2.  **Binding Loss**: Dalam operasi `getValue(ref)`, Hub melakukan inspeksi pada sirkuit lingkungan. Jika rujukan tidak ditemukan, Hub akan naik satu tingkat ke lingkungan induk (*Outer Environment*) sampai mencapai sirkuit Global.
3.  **Strict Mode Integrity**: Jika `[[Strict]]` bernilai benar, Hub melarang pembuatan variabel baru secara otomatis pada Base global, memaksa arsitek untuk selalu mendeklarasikan variabel.

---

## 4. Arsitek Mindset
Reference Error berarti kompas internal Hub kehilangan arah (`[[Base]]` tidak ditemukan). Selalu pastikan setiap identitas "terdaftar" di lingkungan yang tepat agar sirkuit resolusi Hub tidak memutus aliran eksekusi Anda.

---

## 5. Lab Praktis
Eksperimen di folder `examples/` membedah pilar utama:
1.  **[Reference Resolution](./examples/01_reference_resolution.js)**: Simulasi bagaimana Hub mencari dan mengekstrak nilai dari sebuah sirkuit lingkungan.

---
*Status: [status.md](../../../../../status.md)*
