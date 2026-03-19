# CH-03: Interoperability (Hybrid Modules)

Menghubungkan CommonJS dan ESM seringkali membingungkan. Node.js menyediakan aturan khusus untuk ini.

## 🌉 Aturan Utama
1. **ESM dapat meng-import CJS**: Namun hanya sebagai default import atau via named exports yang diekstrak oleh Node.js.
2. **CJS TIDAK bisa require ESM**: Karena ESM bersifat asynchronous. Gunakan dynamic `import()` jika diperlukan.

## 📂 Ekstensi File
- `.mjs`: Selalu dianggap sebagai ESM.
- `.cjs`: Selalu dianggap sebagai CommonJS.
- `.js`: Bergantung pada field `"type"` di `package.json`.

---
*Kembali ke [BK-02](../README.md)*
