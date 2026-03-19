# CH-01: Selection Units (The Logic Selectors)

> **"Di setiap persimpangan Grid, energi harus diarahkan ke jalur yang benar. `Selection Units` adalah 'Selektor Logika' (The Logic Selectors)—modul pengambilan keputusan yang mengevaluasi sinyal input dan membuka gerbang menuju sirkuit spesifik."**

*Pemetaan ECMA-262: Clause 14.6 & 14.12*

## 1. Mental Model: "Decision Gates"

Bayangkan Hub memiliki sensor cerdas yang memantau aliran:
- **`if` Statement**: Gerbang biner sederhana. Jika sinyal `true` (aktif), jalan lurus. Jika `false` (mati), lari ke jalur alternatif (`else`).
- **`switch` Statement**: Panel distribusi multi-jalur. Ia membandingkan sinyal input dengan banyak kabel cadangan (`case`) dan hanya mengalirkan energi ke jalur yang cocok secara identik.

---

## 2. Fitur Keamanan: `break` di Switch

Dalam `switch` unit, energi akan terus mengalir ke jalur berikutnya (*fall-through*) kecuali Anda memasang **Sakelar Pemutus (`break`)**. Tanpa sakelar ini, sirkuit di bawahnya akan ikut menyala secara tidak sengaja, yang bisa menyebabkan beban berlebih (bug logika).

---

## 3. Praktik Lapangan (Lab)

```javascript
const powerLevel = 85;

// Selection Biner (If-Else)
if (powerLevel > 90) {
    console.log("CRITICAL: Reduce Load");
} else {
    console.log("STATUS: Normal Operation");
}

// Selection Multi-Jalur (Switch)
const sector = "A1";
switch (sector) {
    case "A1":
        console.log("Routing to Primary Grid");
        break; // Sakelar pemutus wajib!
    case "B2":
        console.log("Routing to Backup Grid");
        break;
}
```

---

## Arsitek Mindset: Kejelasan Aliran

Sebagai arsitek Hub:
- Gunakan `if` untuk logika bercabang sederhana (1-3 opsi).
- Gunakan `switch` saat Anda menghadapi pemetaan nilai yang banyak dan berskala sama, karena `switch` sering lebih mudah dibaca dan dioptimalkan oleh mesin Hub untuk pencarian rute yang cepat.
- Berhati-hatilah dengan *Truthiness*. Ingat bahwa Hub menganggap `0`, `""`, `null`, `undefined`, dan `NaN` sebagai sinyal mati (`false`).

---
*Status: [status.md](../../../docs/status.md)*
