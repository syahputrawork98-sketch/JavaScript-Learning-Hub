# CH-03: Dependency Management (Bun install vs Deno cache)

Kedua runtime ini menangani paket dengan cara yang sangat berbeda.

## 📦 Bun: The Speed King
`bun install` mengunduh paket dari NPM berkali-kali lebih cepat daripada `npm install` berkat implementasi sistem file yang dioptimalkan di Zig.

## 🛡️ Deno: The Security King
Deno tidak menggunakan `package.json` secara default. Ia meng-cache dependensi dari URL langsung ke dalam direktori global.

---
*Kembali ke [BK-04](../README.md)*
