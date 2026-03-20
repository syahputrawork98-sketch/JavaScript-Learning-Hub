# CH-01: Label Statements (Targeting Hooks)

> **"Saat berurusan dengan sirkuit bersarang yang kompleks, teknisi membutuhkan cara untuk melompat melampaui satu level. `Label Statements` adalah 'Kait Penargetan' (Targeting Hooks)—identitas unik yang dipasang pada sirkuit untuk menjadi tujuan lompatan sinyal."**

*Pemetaan ECMA-262: Clause 14.13*

## 1. Mental Model: "The Target Hook"

Bayangkan Anda memiliki dua loop `for` yang bersarang. Secara standar, `break` hanya akan memutus loop terdalam. Dengan memberikan **Label** pada loop terluar, Anda bisa memerintahkan sinyal `break` untuk melompat sejauh yang Anda inginkan.

---

## 2. Sintaks Label

Label didefinisikan dengan nama diikuti titik dua (`:`) sebelum sebuah Statement.
```javascript
OutermostGrid: 
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) {
            break OutermostGrid; // Arus dialirkan keluar dari kedua loop!
        }
    }
}
```

---

## 3. Batasan Teknis

Sebagai arsitek Hub, Anda tidak bisa melompat ke mana saja. Label hanya bisa digunakan sebagai target oleh `break` dan `continue` di dalam sirkuit yang masih berada di bawah "payung" label tersebut. Anda tidak bisa melompat masuk ke dalam sirkuit lain yang tidak berhubungan.

---

## Arsitek Mindset: Gunakan dengan Bijak

Sebagai arsitek Hub:
- Gunakan Label hanya saat Anda benar-benar terjebak dalam logika bersarang yang dalam (Deeply Nested Loops).
- Paham bahwa penggunaan label yang berlebihan bisa membuat blueprint (kode) sulit dibaca, mirip dengan kabel yang semrawut. Selalu pertimbangkan untuk memecah sirkuit besar menjadi fungsi-fungsi kecil sebagai alternatif.

---
*Status: [status.md](../../../docs/status.md)*
