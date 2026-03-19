# CH-01: CommonJS (require & exports)

CommonJS (CJS) adalah sistem modul default di Node.js selama bertahun-tahun.

## 📦 Karakteristik CJS
1. **Synchronous**: Modul dimuat secara berurutan.
2. **Runtime Loading**: Keputusan pemuatan dilakukan saat aplikasi berjalan.
3. **Caching**: Modul yang sudah dimuat akan disimpan dalam memori (`require.cache`).

## 🛠️ Contoh Penggunaan

```javascript
// math.js
exports.add = (a, b) => a + b;

// main.js
const math = require('./math');
console.log(math.add(2, 3));
```

---
*Kembali ke [BK-02](../README.md)*
