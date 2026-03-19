# CH-01: File System (fs & path)

Node.js menyediakan modul `fs` untuk berinteraksi dengan sistem file dan modul `path` untuk menangani path file secara lintas platform.

## 📂 Manajemen File
Node.js menyediakan tiga cara untuk menggunakan `fs`:
1. **Synchronous**: Blokir eksekusi hingga operasi selesai (`fs.readFileSync`).
2. **Callback-based**: Non-blocking menggunakan callback (`fs.readFile`).
3. **Promise-based**: Modern dan bersih (`fs.promises.readFile`).

## 🗺️ Modul Path
Gunakan `path.join()` untuk menggabungkan path agar kompatibel dengan Windows (`\`) dan POSIX (`/`).

```javascript
const path = require('path');
const fullPath = path.join(__dirname, 'data', 'config.json');
```

---
*Kembali ke [BK-03](../README.md)*
