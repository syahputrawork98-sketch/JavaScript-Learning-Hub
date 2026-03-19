# CH-03: TypeScript Native (TSC vs SWC)

Deno mendukung TypeScript secara out-of-the-box tanpa perlu `tsconfig.json` atau build step manual.

## ⚡ SWC vs TSC
Deno awalnya menggunakan `tsc` (TypeScript Compiler) milik Microsoft, namun kini beralih ke `swc` (Rust-based) untuk parsing yang sangat cepat, sementara `tsc` tetap digunakan untuk type-checking di balik layar.

## 🛠️ No Config
Cukup buat file `.ts` dan jalankan:
```bash
deno run main.ts
```

---
*Kembali ke [BK-01](../README.md)*
