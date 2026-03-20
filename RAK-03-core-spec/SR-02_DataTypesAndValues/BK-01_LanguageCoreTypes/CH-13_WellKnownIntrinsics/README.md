# CH-13: Well-known Intrinsics

*Pemetaan ECMA-262: Clause 6.1.7.4 (Table 6)*

**Well-known Intrinsics** adalah kumpulan objek built-in yang sudah ada sebelumnya (pre-existing) dan direferensikan oleh algoritma spesifikasi menggunakan nama yang diawali dengan tanda persen (misal: `%Object.prototype%`).

## 🏗️ The Intrinsic Vault

```mermaid
graph TD
    Realm[Ecma Realm] --> Vault[Intrinsic Vault]
    Vault --> O["%Object.prototype%"]
    Vault --> A["%Array.prototype%"]
    Vault --> F["%Function.prototype%"]
    
    MyObj[Your {}] -->|Links to| O
```

## 🔍 Peran Intrinsics
1. **Pondasi**: Memberikan fungsionalitas dasar untuk semua tipe data (seperti `.toString()`, `.map()`, dsb).
2. **Spec Language**: Saat spek mengatakan "panggil method [[Get]] dari %Array.prototype%", ia merujuk pada objek fisik ini.
3. **Realm Bound**: Setiap Realm (misalnya `iframe` di browser) memiliki set Intrinsics yang berbeda. Inilah alasan mengapa `[] instanceof Array` bisa `false` jika array-nya dikirim dari iframe lain.

---
*Lihat Lab: [Atlas Intrinsik](./examples/intrinsic_atlas.js)*  
*Kembali ke [BK-01](../README.md)*
