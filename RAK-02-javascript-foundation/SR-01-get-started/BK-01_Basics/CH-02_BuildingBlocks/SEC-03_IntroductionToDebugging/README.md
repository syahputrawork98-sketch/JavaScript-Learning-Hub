# CH-03: Introduction to Debugging (The Circuit Tester)

> **"Bahkan arsitek terbaik pun pernah membuat sirkuit yang korslet. Perbedaannya terletak pada cara mereka menemukan dan memperbaiki kebocoran tersebut."**

Dalam dunia JavaScript, kesalahan (bug) adalah hal yang wajar. Namun, membiarkannya tetap ada di sirkuit Hub adalah bahaya. Dalam bab ini, kita akan mempelajari cara menggunakan **Circuit Tester** (Alat Tes Sirkuit) untuk mendiagnosis masalah.

## 1. Mental Model: "Circuit Tester"

Bayangkan Anda memiliki alat tester dengan lampu indikator:
- **`console.log()`**: Memberi tahu Anda status energi di titik tertentu. "Di titik A, energi bernilai 50."
- **Breakpoints**: Menghentikan aliran listrik secara instan agar Anda bisa memeriksa setiap komponen secara tenang tanpa takut overheat.
- **Debugger**: "Sensor darurat" yang menghentikan sistem tepat di tempat yang Anda curigai bermasalah.

---

## 2. Pengecekan Manual: `console.log()`

Ini adalah cara termudah untuk memeriksa nilai variabel saat kode berjalan:

```javascript
const power = getPowerLevel();
console.log("Status Daya:", power); // Mencetak status ke terminal/konsol
```

---

## 3. Alat Pro: Browser DevTools (Sources)

Semua browser modern memiliki alat canggih untuk membedah kode.
1. Tekan `F12` atau `Inspect`.
2. Klik tab **Sources** (atau Debugger).
3. Klik pada nomor baris untuk memasang **Breakpoint**.
4. Saat halaman dijalankan, JavaScript akan **berhenti** di baris tersebut. Anda bisa melihat isi variabel di panel "Scope".

---

## 4. Perintah `debugger`

Anda bisa memaksa browser untuk berhenti di titik tertentu dengan menuliskan kata kunci `debugger` langsung di kode Anda.

```javascript
function heavyCalculation() {
    let result = 0;
    debugger; // Browser akan otomatis berhenti di sini jika DevTools terbuka
    // ... proses kompleks
}
```

---

## Arsitek Mindset: Detektif Energi

Jangan panik saat melihat pesan error merah di konsol. Error adalah **pesan dari sistem** yang membantu Anda. Bacalah pesan tersebut dengan teliti:
- **Apa jenis error-nya?** (ReferenceError? TypeError?)
- **Di baris mana error terjadi?** (Line number).
Semakin sering Anda men-debug, semakin tajam intuisi Anda dalam membangun sirkuit yang stabil.

---

## Hands-on: Memperbaiki Sirkuit Bocor
Buka file `examples/broken_circuit.js`. File ini berisi fungsi yang tidak berjalan sebagaimana mestinya. Gunakan `console.log` atau DevTools untuk menemukannya!

---
*Status: [status.md](../../../../status.md)*
