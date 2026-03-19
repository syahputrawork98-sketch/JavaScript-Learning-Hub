# CH-03: Memory Tools (The Lab)

Memahami teori saja tidak cukup. Sebagai developer, Anda harus bisa melihat apa yang terjadi di dalam RAM.

## 🛠️ Chrome DevTools (Memory Tab)
Gunakan tab **Memory** di Chrome untuk:
1. **Heap Snapshot**: Melihat objek apa saja yang memakan memori di waktu tertentu.
2. **Allocation Instrumentation**: Melihat objek mana yang tidak dibersihkan oleh GC (Memory Leaks).

## 🧪 Profiling di Node.js
Anda dapat menghasilkan snapshot memori langsung dari kodingan:

```javascript
const fs = require('fs');
const v8 = require('v8');

const fileName = `./snapshot-${Date.now()}.heapsnapshot`;
const stream = v8.getHeapSnapshot();
stream.pipe(fs.createWriteStream(fileName));
```

Snapshot ini bisa dibuka di Chrome DevTools untuk analisis lebih lanjut.

---
*Kembali ke [BK-01](../README.md)*
