# Lab: Dependency Management (Bun Install)

Bun menyertakan pengelola paket (Package Manager) yang dirancang untuk menjadi yang tercepat di planet ini.

## 🚀 Speed Comparison (Simulasi)

| Tool | Install Time (Node Modules empty) | Lockfile Cache |
| :--- | :--- | :--- |
| **npm** | 20.5s | 5.2s |
| **yarn**| 12.1s | 3.8s |
| **pnpm**| 8.4s  | 2.1s |
| **bun** | **0.8s** | **0.1s** |

## 🛠️ Mengapa Sangat Cepat?
1. **Binary Lockfile**: Bun menggunakan format biner untuk `bun.lockb`, yang jauh lebih cepat dibaca daripada JSON.
2. **Parallel Downloads**: Melakukan ribuan request download sekaligus.
3. **Zero-copy Cloning**: Menggunakan fitur sistem operasi (seperti hardlinks atau reflinks) untuk memindahkan file tanpa benar-benar menyalin data byte-per-byte.

## 📝 Cara Pakai
- Ganti `npm install` dengan `bun install`.
- Ganti `npm run dev` dengan `bun dev`.

Bun akan secara otomatis membaca file `package.json` yang sudah ada, sehingga Anda tidak perlu mengubah struktur proyek Anda.
