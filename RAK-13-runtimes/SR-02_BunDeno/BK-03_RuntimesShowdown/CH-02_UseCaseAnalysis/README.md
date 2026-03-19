# CH-02: Use Case Analysis (Where to use what)

Setiap runtime memiliki kelebihan dan kekurangan masing-masing.

## 🏆 Kapan Memilih Node.js?
- Proyek legacy atau ekosistem yang sangat bergantung pada library CJS tua.
- Stabilitas jangka panjang (LTS) yang sangat teruji.
- Tim yang sudah sangat familiar dengan ekosistem NPM standar.

## 🏆 Kapan Memilih Deno?
- Fokus utama pada keamanan dan auditability.
- Ingin menghindari `node_modules` dan `package.json`.
- Aplikasi kecil hingga menengah yang membutuhkan kesederhanaan.

## 🏆 Kapan Memilih Bun?
- Membutuhkan performa maksimal (High-frequency trading, IoT).
- Ingin toolset all-in-one (test runner + bundler + runtime).
- Pengembangan frontend yang intensif (Next.js, Vite) di mana waktu build sangat krusial.

---
*Kembali ke [BK-03](../README.md)*
