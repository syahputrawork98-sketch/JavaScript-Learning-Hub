# CH-01: Bundlers (Bun build vs Deno bundle)

Dahulu kita membutuhkan Webpack atau Rollup untuk menggabungkan file-file JavaScript untuk produksi. Kini, Bun dan Deno menyediakannya secara native.

## 🚀 Bun Build
Bun memiliki transpiler dan bundler tercepat di dunia saat ini.
```bash
bun build ./index.ts --outdir ./dist
```

## 📦 Deno Bundle
Deno menggunakan `deno bundle` (deprecated di versi terbaru, beralih ke `deno compile` untuk single executable).

---
*Kembali ke [BK-04](../README.md)*
