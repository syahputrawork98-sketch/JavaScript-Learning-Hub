# CH-03: Interoperability (Bridging the Gap)

Bagaimana CJS dan ESM hidup berdampingan? Node.js menyediakan mekanisme "jembatan" untuk migrasi bertahap.

## 🌉 The Rules of Attraction
Ada aturan ketat tentang siapa yang bisa memanggil siapa:

1. **ESM can import CJS**: Dapat dilakukan dengan `import` standar atau `createRequire`.
2. **CJS cannot import ESM**: Karena ESM bersifat asinkronus sedangkan `require` sinkronus. Satu-satunya cara adalah menggunakan `dynamic import()`.

```mermaid
graph LR
    ESM((ESM)) -- "import (Supported)" --> CJS((CJS))
    CJS -- "require (X Failed)" --> ESM
    CJS -- "Dynamic import() (Supported)" --> ESM
    
    style ESM fill:#3498db,stroke:#333
    style CJS fill:#ecf0f1,stroke:#333
```

## 🛠️ Strategi Dual-Stack
Banyak pembuat library menyediakan dua versi sekaligus menggunakan field `exports` di `package.json`:
```json
"exports": {
  "import": "./dist/index.mjs",
  "require": "./dist/index.cjs"
}
```

> [!WARNING]
> **Dual-Package Hazard**: Jika sebuah aplikasi mengimpor library yang sama via CJS dan ESM sekaligus, Node.js akan menganggap keduanya sebagai modul yang berbeda, yang bisa menyebabkan bug status singleton (misal: dua instance database global).

---
*Lihat Lab: [Demo Interop](./examples/interop_demo.mjs)*  
*Kembali ke [BK-02](../README.md)*
