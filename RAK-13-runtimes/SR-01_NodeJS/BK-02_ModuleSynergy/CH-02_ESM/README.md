# CH-02: ESM (import & export)

ECMAScript Modules (ESM) adalah standar resmi JavaScript yang kini didukung penuh oleh Node.js.

## 🚀 Karakteristik ESM
1. **Asynchronous**: Pemuatan modul dapat dilakukan secara paralel.
2. **Static Analysis**: Struktur modul diketahui sebelum kode dijalankan (memungkinkan Tree-Shaking).
3. **Top-level Await**: Anda dapat menggunakan `await` di tingkat atas file.

## 🛠️ Contoh Penggunaan (package.json: "type": "module")

```javascript
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
console.log(add(2, 3));
```

---
*Kembali ke [BK-02](../README.md)*
