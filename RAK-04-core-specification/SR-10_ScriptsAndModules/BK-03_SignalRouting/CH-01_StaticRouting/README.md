# CH-01: Static Routing (Permanent Bindings)

> **"Hub membutuhkan jalur distribusi yang pasti dan tidak berubah selama operasi. `Static Routing` adalah 'Koneksi Permanen' (Permanent Bindings)—jalur ekspor dan impor yang dikunci saat fase pembangunan sirkuit (Parsing)."**

*Pemetaan ECMA-262: Clause 16.2.1.1*

## 1. Mental Model: "The Fixed Cable"

Ekspor dan Impor statis bersifat **Live Bindings**. Ini bukan sekadar menyalin nilai, melainkan menghubungkan kabel langsung ke sumber energinya:
- **`export`**: Menandai kabel atau komponen agar bisa diakses oleh sirkuit lain.
- **`import`**: Menyambungkan kabel ke komponen yang diekspor oleh modul lain.

Jika nilai di dalam modul sumber berubah, semua modul yang mengimpornya akan langsung melihat perubahan tersebut secara instan tanpa perlu sinkronisasi ulang.

---

## 2. Default vs Named Exports

- **Named Exports**: Anda bisa mengekspor banyak komponen dengan nama spesifik. Modul pengimpor harus menggunakan nama yang sama (atau alias).
- **Default Export**: Ekspor utama modul. Satu modul hanya boleh memiliki satu default export. Ini seperti "Pintu Utama" distribusi energi.

---

## 3. Praktik Lapangan (Lab)

```javascript
// engine.js
export const state = "RUNNING"; // Named Export
export default function start() { ... } // Default Export

// main.js
import startEngine, { state } from './engine.js';
```

---

## Arsitek Mindset: Kejelasan Aliran

Sebagai arsitek Hub:
- Gunakan **Named Exports** sesering mungkin. Ini memudahkan teknisi pelacak malfungsi untuk menemukan dari mana asal sebuah sirkuit tertentu hanya dengan mencari nama komponennya.
- Hindari `import * as namespace`. Meskipun ringkas, ini membuat fitur *Tree Shaking* menjadi kurang efisien karena Hub harus memuat seluruh isi modul meskipun Anda hanya butuh satu kabel kecil.

---
*Status: [status.md](../../../docs/status.md)*
