# CH-02: Callbacks (The Reminder Note)

> **"Jangan menunggu di depan pintu gudang sampai barang datang. Tinggalkan sebuah catatan pengingat (Callback) di meja petugas, dan mintalah mereka menghubungi Anda saat barang sudah siap."**

Dalam dunia asinkron, kita sering melakukan tugas yang hasilnya tidak instan. Alih-alih membekukan sistem, kita memberikan sebuah **Callback** — yaitu fungsi yang akan dijalankan "nanti" setelah tugas utama selesai.

## Source Hub
- **Primary Source**: [MDN Web Docs - Callback functions](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- **Practical Guide**: [Understanding JavaScript Callbacks](https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/)

## Senior Terminology
- **Callback Hell**: Kondisi di mana terlalu banyak fungsi callback yang bersarang (`nested`) sehingga kode menjadi sulit dibaca dan dipelihara.
- **Error-First Callback**: Pola penulisan di mana parameter pertama dari callback digunakan untuk menangkap error, baru diikuti oleh data hasil.
- **Inversion of Control**: Masalah di mana kita menyerahkan kendali eksekusi kode kita kepada fungsi pihak ketiga (Library) melalui callback.

## 1. Mental Model: "Catatan Pengingat" (Delegation)

- **Main Task**: Perintah untuk melakukan sesuatu (misal: "Isi daya sektor Alpha").
- **Callback**: Instruksi tindak lanjut ("Setelah penuh, matikan saklar induk").
- **`setTimeout`**: Adalah alat pengatur waktu Hub yang menjalankan instruksi setelah jeda tertentu.

## 2. Pola Dasar Callback

Callback sebenarnya hanyalah fungsi reguler yang dikirimkan sebagai argumen ke fungsi lain.

```javascript
function requestEnergy(amount, callback) {
    console.log(`Meminta energi sebesar ${amount}kW...`);
    // Simulasi proses asinkron (delay)
    setTimeout(() => {
        console.log("Energi telah tersedia!");
        callback(); // Jalankan instruksi tindak lanjut
    }, 2000);
}

requestEnergy(500, () => {
    console.log("Instruksi Lanjutan: Distribusikan ke pemukiman.");
});
```

## 3. Callback Hell (Piramida Keputusasaan)

Masalah muncul saat kita memiliki banyak tugas asinkron yang saling bergantung. Kode akan mulai menjorok ke kanan dan menjadi sangat sulit dibaca.

```javascript
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                // Sulit dikelola!
            });
        });
    });
});
```

---

## Arsitek Mindset: Pendelegasian yang Cerdas

Sebagai arsitek, belajarlah untuk mendelegasikan tugas. Namun, berhati-hatilah dengan Callback Hell. Jika arsitektur instruksi Anda mulai terlihat seperti piramida, itu tandanya sistem Anda memerlukan standarisasi yang lebih modern (yang akan kita pelajari di bab **Promises**).

---

## Hands-on: Protokol Pendelegasian
Buka file `examples/callback_protocol.js` untuk melihat bagaimana kita menangani alur energi menggunakan callback sederhana hingga simulasi "Hell" yang rumit.

---
*Back to [Asynchronous JS](../README.md)*
