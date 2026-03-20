# CH-01: Hoisting (Lifting the Energy Pins)

> **"Hoisting adalah mekanisme persiapan di mana JavaScript 'mengangkat' deklarasi variabel dan fungsi ke puncak sirkuit sebelum arus (eksekusi) mulai mengalir."**

Pernahkah Anda bertanya-tanya mengapa Anda bisa memanggil sebuah fungsi bahkan sebelum baris definisinya? Itu karena **Hoisting**.

## 1. Mental Model: "Lifting the Energy Pins"

Bayangkan Hub Energi kita memiliki papan sirkuit otomatis. Sebelum Hub diaktifkan (fase eksekusi), sistem akan memindai seluruh papan dan menarik semua pin koneksi (deklarasi variabel/fungsi) ke atas agar siap dihubungkan.

- **Fase Memindai (Creation Phase)**: Sistem melihat ada variabel/fungsi, lalu memesan tempat di memori.
- **Fase Mengaktifkan (Execution Phase)**: Arus listrik mengalir baris demi baris, mengisi daya ke pin-pin yang sudah terpasang.

![Hoisting Pins](./assets/hoisting_pins.svg)

---

## 2. Hoisting pada Fungsi

Fungsi yang dideklarasikan dengan kata kunci `function` diangkat sepenuhnya.

```javascript
activateCore(); // Berhasil! Padahal dipanggil di atas.

function activateCore() {
    console.log("Web Energy Hub is ONLINE.");
}
```
**Analogi**: Pin fungsi sudah terpasang kabel lengkap sejak awal.

---

## 3. Hoisting pada Variabel (`var` vs `let/const`)

Di sinilah letak perbedaan krusial yang sering membingungkan:

### A. Hoisting dengan `var`
`var` diangkat dan diberi nilai awal `undefined`.
```javascript
console.log(powerLevel); // Output: undefined (Bukan error!)
var powerLevel = 100;
```
**Analogi**: Pin sudah ada, tapi belum berisi daya sama sekali.

### B. Hoisting dengan `let` & `const`
Mereka juga diangkat, tapi **tidak diinisialisasi**. Mereka berada dalam **Temporal Dead Zone (TDZ)**.
```javascript
console.log(currentTemp); // ERROR: Cannot access before initialization
let currentTemp = 25;
```
**Analogi**: Pin sudah dipesan tempatnya, tapi ada "barikade keamanan" yang melarang Anda menyentuhnya sampai baris deklarasi yang sebenarnya terlewati.

---

## Arsitek Mindset: Alur yang Bersih

Sebagai arsitek, meskipun Hoisting memungkinkan Anda menulis kode secara acak, **selalu deklarasikan variabel di bagian atas** file atau fungsi Anda. Ini mencegah perilaku "magis" yang sulit dilacak (seperti mendapatkan `undefined` dari `var`). Gunakan `const` dan `let` untuk memanfaatkan keamanan TDZ.

---

## Hands-on: Eksperimen Pin Sirkuit
Buka file `examples/hoisting_lab.js` untuk melihat hasil eksperimen antara fungsi, `var`, dan `let` saat dipanggil sebelum waktunya.

---
*Status: [status.md](../../../status.md)*
