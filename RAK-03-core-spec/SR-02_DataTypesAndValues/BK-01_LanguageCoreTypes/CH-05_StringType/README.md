# CH-05: The String Type

*Pemetaan ECMA-262: Clause 6.1.4*

Tipe **String** adalah urutan elemen integer 16-bit tanpa tanda (unsigned) yang mewakili unit kode UTF-16.

## 🏗️ UTF-16 Memory Mapping

```mermaid
graph LR
    subgraph "BMP (Common)"
        C1["'A' (0x0041)"]
    end
    subgraph "Supplementary (Surrogates)"
        C2["High (0xD83D)"] --> C3["Low (0xDE80)"]
    end
    
    style C2 fill:#e67e22,stroke:#333
    style C3 fill:#e67e22,stroke:#333
```

## 🔍 Karakteristik Unit Kode
- **Length**: Properti `.length` menghitung jumlah unit 16-bit, bukan jumlah karakter visual.
- **Empty String**: String dengan panjang 0.
- **Immutability**: Sekali dibuat, isi string tidak bisa diubah. Operasi seperti `.toUpperCase()` menghasilkan string baru di memori.

> [!IMPORTANT]
> **Surrogate Pairs**: Untuk karakter di atas `0xFFFF` (seperti kebanyakan emoji), ECMAScript menggunakan dua unit kode. Inilah alasan mengapa `"🚀".length` adalah `2`. Untuk menghitung karakter visual secara akurat, gunakan iterator: `[..."🚀"].length`.

---
*Lihat Lab: [Eksperimen Encoding](./examples/string_encoding.js)*  
*Kembali ke [BK-01](../README.md)*
