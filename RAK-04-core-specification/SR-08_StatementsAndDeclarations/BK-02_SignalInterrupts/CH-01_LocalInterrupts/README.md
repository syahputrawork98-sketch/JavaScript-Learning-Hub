# CH-01: Local Interrupts (Local Cut-Offs)

> **"Terkadang siklus energi harus diputus sebelum waktunya, atau dialihkan ke putaran berikutnya. `Local Interrupts` adalah 'Pemutusan Arus Lokal' (Local Cut-Offs)—sakelar instan yang mengontrol alur di dalam unit iterasi."**

*Pemetaan ECMA-262: Clause 14.8 & 14.9*

## 1. Mental Model: "The Kill Switch"

- **`break` Statement**: Sakelar pemutus total. Saat `break` aktif, siklus energi langsung berhenti dan arus dialirkan keluar dari unit iterasi menuju baris kode berikutnya.
- **`continue` Statement**: Sakelar lompatan. Saat `continue` aktif, sisa instruksi di putaran saat ini diabaikan, dan arus langsung dialirkan kembali ke gerbang sensor (Condition) untuk memulai putaran berikutnya.

---

## 2. Abrupt Completion: ~break~ & ~continue~

Secara internal, Hub menciptakan **Completion Record** dengan tipe `~break~` atau `~continue~`. Rekor ini memberitahu mesin untuk tidak melanjutkan baris berikutnya, melainkan mencari target (label atau batas loop) yang sesuai.

---

## 3. Praktik Lapangan (Lab)

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("SKIP: Diverting energy at level 3");
        continue; // Lompat ke i=4
    }
    if (i === 5) {
        console.log("STOP: Critical threshold reached");
        break; // Berhenti total
    }
    console.log(`Pumping level ${i}`);
}
```

---

## Arsitek Mindset: Target yang Jelas

Sebagai arsitek Hub:
- Gunakan `break` untuk efisiensi; jangan biarkan loop berputar jika Anda sudah menemukan data yang dicari.
- Berhati-hatilah saat menggunakan `break` di dalam loop bersarang. Secara default, ia hanya memutus loop **terdalam**. Gunakan **Labels** (akan dibahas di BK-04) jika Anda perlu memutus sirkuit dari level yang lebih tinggi.

---
*Status: [status.md](../../../docs/status.md)*
