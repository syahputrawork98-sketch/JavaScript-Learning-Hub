# CH-01: The Global Grid (Global Objects & Functions)

> **"Setiap Hub membutuhkan protokol universal yang bisa diakses dari sirkuit mana pun tanpa perlu instalasi tambahan. `The Global Grid` adalah 'Unit Pemrosesan Global'—kumpulan fungsi dan objek fundamental yang mendasari seluruh operasi energi."**

*Pemetaan ECMA-262: Clause 19*

## 1. Mental Model: "The Built-in Utilities"

Global Objects menyediakan fungsi dasar yang "selalu menyala" di Hub:
- **`globalThis`**: Identitas universal Hub. Tidak peduli Anda berada di Script (window) atau Module (undefined), `globalThis` selalu merujuk ke pusat kendali utama.
- **URI Processors**: `encodeURI` dan `decodeURI` adalah protokol transmisi untuk memastikan sinyal teks aman saat dikirim antar-Hub.
- **Evaluation Engine**: `eval()` adalah unit yang sangat kuat namun berbahaya, karena ia bisa mengeksekusi teks mentah sebagai sinyal energi aktif.

---

## 2. Global Constants

Hub mendefinisikan konstanta dasar yang tidak bisa diubah:
- **`Infinity`**: Sinyal energi yang melampaui batas kapasitas angka Hub.
- **`NaN`**: Indikator bahwa hasil pemrosesan bukan merupakan angka yang valid (Malfungsi Numerik).
- **`undefined`**: Status sirkuit yang belum terisi energi.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Mengakses Global Utility
const rawSignal = "https://hub.energy/core specs";
const safeSignal = encodeURI(rawSignal);

console.log("Safe Transmission:", safeSignal);

// Cek Malfungsi
const result = "POWER" / 10;
if (isNaN(result)) {
    console.log("ALARM: Numerical Malfunction Detected!");
}
```

---

## Arsitek Mindset: Keamanan Grid

Sebagai arsitek Hub:
- Hindari penggunaan **`eval()`**. Ini setara dengan membiarkan sirkuit luar menyuntikkan energi tanpa filter ke inti Hub, yang bisa menyebabkan kegagalan keamanan sistem.
- Hindari menambah properti baru ke `globalThis`. Gunakan **Modules** untuk manajemen variabel agar Inti Hub tetap bersih dan tidak tercemar oleh tabrakan sinyal dari berbagai sirkuit.

---
*Status: [status.md](../../../docs/status.md)*
