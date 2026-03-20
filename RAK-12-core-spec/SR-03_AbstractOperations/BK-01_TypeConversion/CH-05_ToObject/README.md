# CH-05: ToObject (The Materializer)

*Pemetaan ECMA-262: Clause 7.1.18 (ToObject)*

**ToObject** adalah operasi abstrak yang digunakan untuk mengubah nilai non-objek menjadi padanannya dalam bentuk objek.

## 🏗️ The Materialization Chamber

```mermaid
graph TD
    Input[Input Value] --> Type{Type Check}
    Type -->|Undefined| Error[TypeError]
    Type -->|Null| Error
    Type -->|Boolean| WrapB[New Boolean Object]
    Type -->|Number| WrapN[New Number Object]
    Type -->|String| WrapS[New String Object]
    Type -->|Symbol| WrapSym[New Symbol Object]
    Type -->|Object| Same[Return Input]
```

## 🔍 Mengapa kita butuh ToObject?
Meskipun variabel Anda mungkin menyimpan string primitif, Anda masih bisa memanggil method seperti `.toUpperCase()`. Hal ini terjadi karena secara internal, engine melakukan **ToObject** sementara untuk membungkus primitif tersebut menjadi objek sehingga method bisa diakses.

> [!CAUTION]
> **Null & Undefined**: Berbeda dengan operasi lain, `ToObject` akan melempar `TypeError` jika inputnya adalah `null` atau `undefined`. Inilah alasan mengapa `null.toString()` gagal.

---
*Lihat Lab: [Eksperimen Materialisasi](./examples/)*  
*Kembali ke [BK-01](../README.md)*
