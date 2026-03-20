# CH-04: Exponentiate & Multiply (The Power Multiplier)

> **"Operasi perkalian adalah jantung dari amplifikasi energi. `exponentiate` (**) dan `multiply` (*) adalah 'Pengganda Daya' (The Power Multiplier) — mesin yang menghitung akumulasi beban secara eksponensial maupun linear di dalam Grid."**

*Pemetaan ECMA-262: Clause 6.1.6.1.3 & 6.1.6.1.4*

## 1. Mental Model: "The Power Multiplier"

- **`multiply` (*)**: Seperti menghubungkan beberapa mesin secara paralel untuk menggandakan output.
- **`exponentiate` (**)**: Seperti umpan balik berantai yang menggandakan dirinya sendiri berulang kali. Perkembangan energinya jauh lebih cepat dan berbahaya bagi stabilitas Hub.

---

## 2. Aturan Penggandaan (Edge Cases)

Hub memiliki aturan ketat untuk perkalian yang melibatkan sinyal khusus:
- **`Any * NaN`**: Hasilnya pasti `NaN` (Sinyal rusak merambat).
- **`Infinity * 0`**: Hasilnya adalah `NaN`. (Kehampaan dikali ketidakterhinggaan membuat sensor bingung).
- **Sign Rules**: Positif * Negatif = Negatif.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Pengganda Daya ---");

// 1. Perkalian Standar
console.log(`5 * 5 = ${5 * 5}`);

// 2. Eksponensial (ES2016)
console.log(`2 ** 10 = ${2 ** 10}`); // 1024 (1 KB di memori Hub)

// 3. Sinyal Rusak
console.log(`Infinity * 0 = ${Infinity * 0}`); // NaN
```

---

## Arsitek Mindset: Overflow Eksponensial

Sebagai arsitek Hub:
- Gunakan `**` untuk perhitungan pertumbuhan data yang cepat, tetapi waspadalah terhadap **Infinity**. Angka di JavaScript mencapai `Infinity` sangat cepat jika dipangkatkan (sekitar $10^{308}$).
- Perhatikan urutan operasi: `a ** b ** c` dihitung dari kanan ke kiri (`a ** (b ** c)`). Ini adalah satu-satunya operator di Hub yang memiliki assosiativitas kanan-ke-kiri.

---
*Status: [status.md](../../../docs/status.md)*
