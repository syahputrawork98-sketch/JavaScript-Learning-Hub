# CH-07: The Symbol Type

*Pemetaan ECMA-262: Clause 6.1.5*

Tipe **Symbol** adalah tipe data primitif yang nilainya bersifat unik dan tidak dapat diubah (immutable). Simbol sering digunakan sebagai kunci properti objek yang tidak akan bertabrakan dengan kunci string lainnya.

## 🏗️ Unique Atoms

```mermaid
graph TD
    S1[Symbol 'A']
    S2[Symbol 'A']
    S3[Symbol 'B']
    
    S1 ---X|Not Equal| S2
    S2 ---X|Not Equal| S3
    
    style S1 fill:#9b59b6,stroke:#333,color:#fff
    style S2 fill:#9b59b6,stroke:#333,color:#fff
```

## 🔍 Mengapa Symbol?
1. **Uniqueness**: Menjamin tidak ada tabrakan nama properti jika Anda menggabungkan dua library yang berbeda.
2. **Privacy (Subtle)**: Properti bersimbol tidak muncul dalam pengulangan `for...in` atau `Object.keys()`, memberikan tingkat "kerahasiaan" tertentu.

> [!NOTE]
> **Internalist Insight**: Dalam spesifikasi, Symbol didefinisikan sebagai "Unique identifier". Mereka tidak memiliki representasi literal (tidak bisa ditulis langsung seperti `"string"`). Anda harus selalu memanggil fungsi `Symbol()`.

---
*Lihat Lab: [Eksperimen Uniqueness](./examples/symbol_uniqueness.js)*  
*Kembali ke [BK-01](../README.md)*
