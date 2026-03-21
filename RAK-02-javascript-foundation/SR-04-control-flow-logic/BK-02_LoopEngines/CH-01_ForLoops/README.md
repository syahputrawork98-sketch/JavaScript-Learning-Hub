# CH-01: For Loops (Measured Iteration)

> **"For loop adalah mesin pengulangan terukur di Hub Energi. Kita menggunakannya saat kita tahu persis berapa kali sebuah sirkuit harus berputar."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- **Technical Reference**: [ECMA-262 - The for Statement](https://tc39.es/ecma262/#sec-for-statement)

## 🎓 Senior Terminology
- **Initialization & Condition**: Tahap awal penyiapan variabel penghitung dan aturan batas yang menentukan kapan pengulangan harus berhenti.
- **Iteration Head**: Bagian kepala dari loop yang berisi deklarasi variabel, kondisi, dan langkah perubahan nilai (increment/decrement).
- **Infinite Loop**: Kondisi berbahaya di mana loop tidak pernah mencapai titik henti, yang dapat menyebabkan sistem *hang* atau kehabisan sumber daya.

## 1. Mental Model: "The Orbit"

Bayangkan **For Loop** sebagai sebuah **Satelit yang Berorbit** di sekitar Hub Energi. Sebelum meluncur, Anda sudah menentukan tiga hal:
1.  **Titik Luncur**: Dari mana orbit dimulai (`i = 0`).
2.  **Bahan Bakar**: Berapa lama satelit boleh berputar (Kondisi: `i < 10`).
3.  **Dorongan Mesin**: Apa yang dilakukan di setiap akhir putaran (Langkah: `i++`).

![Iteration Orbit](./assets/iteration_orbit.svg)

---

## 2. Anatomi Standard Loop

Sirkuit `for` tradisional adalah cara paling fleksibel untuk mengulang proses:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Checking Circuit ${i}...`);
}
```

---

## 3. Orbit Modern: `for...of` & `for...in`

Untuk menghemat tenaga mental, JavaScript menyediakan orbit otomatis:
- **`for...of`**: Digunakan untuk mengambil isi (kargo) dari array satu per satu. **Gunakan ini untuk data.**
- **`for...in`**: Digunakan untuk mengambil label (kunci) dari sebuah objek. **Gunakan ini untuk inspeksi objek.**

```javascript
const hubs = ["Alpha", "Beta"];
for (const hub of hubs) {
    console.log(hub); // "Alpha", then "Beta"
}
```

---

## 4. Kontrol Navigasi: `break` & `continue`

- **`break`**: Ledakkan satelit dan hentikan seluruh orbit segera (digunakan jika target sudah ditemukan).
- **`continue`**: Lewati putaran orbit saat ini dan langsung dorong mesin ke putaran berikutnya (digunakan untuk melewati data yang rusak).

---

## Arsitek Mindset: Cegah Infinite Loop!

Pastikan kondisi orbit Anda suatu saat akan bernilai `false`. Jika tidak, satelit Anda akan berputar selamanya, menghisap seluruh energi Hub (CPU), dan menyebabkan sistem *crash*.

---

## Hands-on: Lab Pemindaian Sektor
Buka file `examples/for_loops_lab.js` untuk melihat bagaimana kita memindai ribuan sektor energi dan menggunakan `continue` untuk melewati sektor yang tidak aktif secara efisien.

---
*Back to [Loop Engines](../README.md)*
