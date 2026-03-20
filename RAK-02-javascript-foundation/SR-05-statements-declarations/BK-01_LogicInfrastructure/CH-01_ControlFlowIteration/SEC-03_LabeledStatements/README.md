# CH-03: Labeled Statements (The Sector Overrides)

> **"Saat Hub berada dalam kondisi darurat, terkadang kita tidak bisa sekadar berhenti di satu titik—kita perlu melompat keluar dari seluruh sektor sirkuit. Labeled Statements adalah 'ID Sektor' yang memungkinkan perintah `break` atau `continue` menjangkau area yang lebih luas."**

`labeled statements` memberikan nama (label) pada sebuah blok kode atau loop, sehingga kita bisa berinteraksi dengannya secara spesifik.

## 1. Mental Model: "Sector Overrides"

Bayangkan Anda memiliki **Grid Luar** dan **Modul Dalam**. Jika modul dalam mengalami gangguan fatal, Anda tidak hanya ingin menghentikan modul tersebut, tapi Anda ingin mematikan **seluruh Grid** tersebut. Label adalah "Nama Sektor" yang Anda panggil untuk melakukan override ini.

---

## 2. Labeled Break

Gunakan ini untuk melompat keluar dari pengulangan bersarang (*nested loops*) ke tingkat yang lebih tinggi.

```javascript
SektorUtama: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2) {
            console.log("Bahaya di Sektor Utama! Memutus Jalur...");
            break SektorUtama; // Melompat keluar dari kedua loop!
        }
        console.log(`Unit ${i}-${j}: OK`);
    }
}
```

---

## 3. Labeled Continue

Gunakan ini untuk melewati sisa siklus saat ini dan langsung ke iterasi berikutnya pada loop yang diberi label.

```javascript
SirkuitLuar: for (let r = 1; r <= 2; r++) {
    for (let c = 1; c <= 2; c++) {
        if (c === 1) continue SirkuitLuar; // Melewati seluruh c untuk baris ini
        console.log(`Scan: ${r}-${c}`);
    }
}
```

---

## Arsitek Mindset: Gunakan dengan Bijak

Sebagai pengelola Grid:
- **Hindari penggunaan label yang berlebihan**. Terlalu banyak lompatan membuat alur logika sulit dilacak (seperti kabel yang semrawut).
- Label paling sering berguna pada algoritma pencarian di dalam data matriks atau grid yang memiliki kedalaman bertingkat (*nested structures*).

---

## Hands-on: Lab Lompatan Sektor
Buka file `examples/sector_override_lab.js` untuk melihat bagaimana kita menggunakan label untuk menghentikan pemindaian di seluruh grid energi saat ditemukan anomali kritis.

---
*Status: [status.md](../../../status.md)*
