# CH-02: Switch-Case (Multi-branch Selector)

> **"Saat Hub Energi harus memilih salah satu dari banyak opsi, Switch-Case bekerja lebih efisien dan rapi daripada tumpukan If-Else yang berantakan."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- **Technical Reference**: [ECMA-262 - The switch Statement](https://tc39.es/ecma262/#sec-switch-statement)

## 🎓 Senior Terminology
- **Strict Equality Comparison**: Mekanisme `switch` yang membandingkan nilai menggunakan operator `===` (tipe data dan nilai harus sama persis).
- **Fallthrough Behavior**: Karakteristik di mana eksekusi berlanjut ke `case` berikutnya jika tidak ada kata kunci `break` yang menghentikannya.
- **Default Branch**: Cadangan sirkuit yang dieksekusi jika tidak ada satupun `case` yang cocok dengan nilai sinyal masukan.

## 1. Mental Model: "The Junction"

Bayangkan **Switch-Case** sebagai sebuah **Persimpangan Rel** besar. Jika `if-else` hanya memiliki dua jalur utama, `switch` memungkinkan Anda memilih satu dari banyak jalur spesifik berdasarkan label (kunci) yang diberikan. Arus akan meluncur ke jalur yang labelnya cocok tepat dengan sinyal masukan.

![Logic Junction](./assets/logic_junction.svg)

---

## 2. Perbandingan Ketat (Strict Equality)

Satu hal yang harus diingat: `switch` menggunakan perbandingan **Strict Equality** (`===`). Artinya, ia tidak hanya membandingkan nilai, tapi juga tipe datanya.

```javascript
let mode = "1";
switch (mode) {
    case 1: // Tidak akan terpilih karena "1" !== 1
        console.log("Number mode");
        break;
    case "1": // Ini yang terpilih
        console.log("String mode");
        break;
}
```

---

## 3. Bahaya & Kekuatan Fallthrough

Jika Anda lupa menaruh `break` di akhir sebuah `case`, arus kode akan terus meluncur ke `case` di bawahnya meskipun labelnya tidak cocok. Ini disebut **Fallthrough**.

**Kapan Menggunakannya?** Saat Anda ingin beberapa kondisi menjalankan sirkuit yang sama:

```javascript
switch (hubStatus) {
    case "WARNING":
    case "CRITICAL":
        triggerAlarm(); // Dijalankan untuk dua kondisi di atas
        break;
}
```

---

## 4. Jalur Cadangan: `default`

Selalu sertakan `default` di akhir persimpangan. Ini adalah jalur pengaman jika tidak ada satupun label `case` yang cocok dengan sinyal.

---

## Arsitek Mindset: Switch vs Object Mapping

Jika Anda memiliki terlalu banyak `case` (lebih dari 10), pertimbangkan untuk mengganti `switch` dengan **Object Literal Mapper**. Ini seringkali lebih bersih dan memiliki performa pencarian yang lebih stabil dalam Hub skala besar.

---

## Hands-on: Lab Kontrol Fasilitas
Buka file `examples/switch_case_lab.js` untuk melihat bagaimana kita membangun sistem kontrol akses ruangan fasilitas yang menggunakan `switch` untuk menangani berbagai level otorisasi.

---
*Back to [Conditional Signals](../README.md)*
