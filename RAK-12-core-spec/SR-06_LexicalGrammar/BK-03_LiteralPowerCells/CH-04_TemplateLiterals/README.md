# CH-04: Template Literals (Raw vs Cooked Signals)

> **"Beberapa sinyal data mengandung instruksi pemformatan yang kompleks. `Template Literals` adalah 'Sinyal Fleksibel' — mekanisme yang memungkinkan penggabungan string dan energi (Interpolasi) dengan dua mode pembacaan: *Cooked* (Terproses) dan *Raw* (Mentah)."**

*Pemetaan ECMA-262: Clause 11.8.6 (Template Literals)*

## 1. Mental Model: "The Flexible Signals"

Template literals adalah unit yang dikelilingi oleh backticks (`` ` ``).
- **Interpolasi (`${...}`)**: Lubang di dalam sinyal tempat Anda bisa memasukkan daya dari unit lain.
- **Multi-line**: Tidak seperti string biasa, sinyal ini tidak terputus meskipun melewati pemutus baris (Line Terminators).

---

## 2. Cooked vs Raw

Setiap kali Hub membaca Template Literal, ia menyimpan dua versi:
1.  **Cooked**: Versi di mana karakter escape (seperti `\n`) sudah diubah menjadi instruksi nyata (baris baru).
2.  **Raw**: Versi asli apa adanya, di mana `\n` tetap dibaca sebagai karakter `\` dan `n`. Sangat berguna untuk alat seperti `String.raw`.

---

## 3. Praktik Lapangan (Lab)

```javascript
const powerIndex = 9;
const msg = `Daya di Hub: 
SEKTOR_${powerIndex}`; // Interpolasi & Multi-line

console.log(msg);

// Mengetes Sinyal Mentah (Raw)
const path = String.raw`C:\Units\Node\Reactor`;
console.log(path); // Backslash tidak diproses sebagai escape!
```

---

## Arsitek Mindset: Pembangkit Konten Dinamis

Sebagai arsitek Hub:
- Gunakan Template Literals untuk membangun laporan status atau log yang dinamis dan multi-baris agar lebih mudah dibaca oleh teknisi manusia.
- Gunakan **Tagged Templates** jika Anda ingin mencegat sinyal ini dan memprosesnya secara khusus sebelum ditampilkan di Grid (misal: untuk filtrasi keamanan XSS).

---
*Status: [status.md](../../../docs/status.md)*
