# CH-01: String Foundations (Text Foundations)

> **"Setiap pesan, perintah, dan log di Hub Energi disimpan dalam bentuk String — urutan karakter 16-bit yang membentuk bahasa komunikasi kita."**

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- **Technical Reference**: [ECMA-262 - String Objects](https://tc39.es/ecma262/#sec-string-objects)

## 🎓 Senior Terminology
- **UTF-16 Code Unit**: Unit data 16-bit yang digunakan JavaScript untuk merepresentasikan karakter dalam string.
- **Immutability**: Karakteristik string di mana sekali dibuat, nilainya tidak bisa diubah (metode string selalu mengembalikan string baru).
- **Template Literals**: Sintaks string modern (backticks `` ` ``) yang mendukung ekspresi interpolasi dan string multi-baris.

## 1. Mental Model: "The Message Stream"

Bayangkan **String** sebagai **Aliran Pesan** di Hub Energi kita. Setiap pesan adalah urutan karakter yang tidak bisa diubah begitu ia dikirim. Jika Anda ingin mengubah pesan, Anda tidak mengedit pesan yang lama; Anda membuat aliran pesan baru yang berisi perubahan tersebut.

![The Message Stream](./assets/message_stream.svg)

---

## 2. Immutability: Keamanan Data Teks

Salah satu konsep terpenting di JavaScript adalah string bersifat **Immutable** (tidak dapat diubah).

```javascript
let msg = "Hub-01";
msg[0] = "X"; // Tidak akan terjadi apa-apa!
console.log(msg); // Tetap "Hub-01"
```

**Arsitek Mindset**: Karena string tidak bisa diubah di tempat, setiap operasi manipulasi string (seperti `.replace()`) akan menciptakan string baru di memori. Dalam aplikasi skala besar dengan jutaan teks, waspadalah terhadap tumpukan memori yang dihasilkan dari pembuatan string baru yang berlebihan.

---

## 3. Template Literals: Kekuatan Backticks

Modern JavaScript menggunakan backticks (`` ` ``) untuk fitur teks tingkat lanjut:
- **Interpolasi**: Memasukkan energi (variabel) langsung ke dalam pesan.
- **Multi-line**: Menulis pesan berbaris-baris tanpa perlu karakter `\n`.

```javascript
const hubName = "Alpha";
const status = `Status Hub ${hubName}:
- Power: Active
- Load: Stable`;
```

---

## 4. Karakter Spesial (Escaping)

Terkadang pesan berisi simbol yang membingungkan sistem; kita menggunakan *Backslash* (`\`) untuk "meloloskan" karakter tersebut:
- `\'` atau `\"`: Menampilkan kutipan.
- `\\`: Menampilkan backslash itu sendiri.

---

## Hands-on: Lab Pesan Terenkripsi
Buka file `examples/string_foundations.js` untuk melihat bagaimana kita memanfaatkan Template Literals untuk membangun log laporan energi yang rapi dan terorganisir.

---
*Back to [Text Processing](../README.md)*
