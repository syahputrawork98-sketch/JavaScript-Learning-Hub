# CH-09: Object Type Overview

*Pemetaan ECMA-262: Clause 6.1.7*

Tipe **Object** adalah kumpulan properti yang dinamis. Properti adalah pemetaan dari sebuah Key (String atau Symbol) ke sebuah Property Descriptor.

## 🏗️ Object Composition

```mermaid
graph TD
    Obj[Object Instance] --> P[Properties: Key -> Descriptor]
    Obj --> S[Internal Slots: [[SlotName]]]
    Obj --> M[Internal Methods: [[MethodName]]]
    
    subgraph "Example Internal"
        S --> S1["[[Prototype]]"]
        S --> S2["[[Extensible]]"]
    end
```

## 🔍 Karakteristik Objektif
1. **Identity**: Setiap objek baru yang dibuat (`{}`) memiliki identitas unik di memori, meskipun isinya sama.
2. **Mutable**: Anda bisa menambah, mengubah, atau menghapus properti kapan saja (kecuali jika dibekukan).
3. **Internal Methods**: Setiap objek memiliki serangkaian "instruksi rahasia" (seperti `[[Get]]`, `[[Set]]`, `[[Delete]]`) yang menentukan bagaimana ia bereaksi terhadap operasi JS.

---
*Lihat Lab: [Eksperimen Identitas Objek](./examples/object_identity.js)*  
*Kembali ke [BK-01](../README.md)*
