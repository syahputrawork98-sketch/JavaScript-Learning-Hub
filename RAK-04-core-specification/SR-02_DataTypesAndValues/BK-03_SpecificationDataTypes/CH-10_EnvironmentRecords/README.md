# CH-10: Environment Records (The Variable Ledger)

*Pemetaan ECMA-262: Clause 9.1*

**Environment Record** adalah tipe data spesifikasi (abstraksi) yang digunakan untuk mendefinisikan asosiasi dari *Identifier* ke variabel dan fungsi berdasarkan struktur leksikal kode.

## 🏗️ Scope Ledger Hierarchy

```mermaid
graph TD
    Global[Global Env Record] --> Outer[Outer Env Record]
    Outer --> Local[Local/Function Env Record]
    
    Local -- "Search for 'x'" --> Local
    Local -- "Not found" --> Outer
    Outer -- "Not found" --> Global
```

## 🔍 Komponen Utama
- **Declarative Environment Record**: Menyimpan binding variabel (`let`, `const`, `function`).
- **Object Environment Record**: Digunakan untuk binding global (mentransfer properti `window` atau `global` menjadi variabel).
- **Function Environment Record**: Khusus untuk fungsi, menangani `this` dan `super`.

---
*Lihat Lab: [Buku Log Scope](./examples/scope_log.js)*  
*Kembali ke [BK-03](../README.md)*
