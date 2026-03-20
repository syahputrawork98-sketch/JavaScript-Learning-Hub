# CH-01: Unary Operators (Point Interaction)

> **"Terkadang Anda hanya membutuhkan satu titik interaksi pada sirkuit. Unary Operators adalah alat genggam Arsitek untuk diagnosis cepat dan modifikasi muatan tunggal tanpa butuh operand kedua."**

Operator unary hanya bekerja pada satu operand (angka, string, atau objek).

## 1. Mental Model: "Point Interaction"

### `typeof`: Sensor Tipe Sinyal
Mendeteksi apakah muatan yang mengalir adalah `number`, `string`, `object`, atau `function`. Ini adalah alat diagnosa paling dasar.
```javascript
console.log(typeof 42); // "number"
```

### `delete`: Pemutus Kabel
Menghapus properti dari sebuah objek. Seperti memutus kabel yang tidak lagi diperlukan dari terminal pusat.
```javascript
const hub = { port: 8080 };
delete hub.port;
```

### `void`: Peredam Sinyal
Mengevaluasi ekspresi tapi mengembalikan `undefined`. Digunakan untuk menjalankan logika tanpa menghasilkan aliran data keluaran.

---

## 2. Unary Plus & Minus: Penyeimbang Muatan

- **`+` (Unary Plus)**: Mencoba mengubah muatan menjadi angka (Konversi cepat).
- **`-` (Unary Negation)**: Membalikkan polaritas angka (Positif jadi Negatif).

```javascript
console.log(+"100"); // 100 (Sekarang tipe Number)
```

---

## Hands-on: Lab Interaksi Titik
Buka file `examples/unary_lab.js` untuk mencoba berbagai alat inspeksi sistem dan memahami bagaimana memutus koneksi properti secara aman.

---
*Status: [status.md](../../../status.md)*
