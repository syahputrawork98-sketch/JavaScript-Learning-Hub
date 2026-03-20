# CH-04: Basic Operations (The Energy Flow)

> **"Operasi adalah cara kita mengarahkan, menggabungkan, dan mengubah aliran energi dalam Web Hub kita."**

Setelah kita memiliki baterai (variabel) dan bentuk energi (tipe data), kita perlu cara untuk memanipulasi energi tersebut. Dalam JavaScript, kita menggunakan **Operator** untuk menciptakan aliran energi.

## 1. Mental Model: "Konektor Sirkuit"

Bayangkan operator sebagai konektor atau gerbang dalam sebuah sirkuit listrik:
- **Arithmetic (+, -, *, /)**: Menggabungkan daya atau membagi beban kerja.
- **Concatenation (+)**: Menyambung dua kabel informasi menjadi satu aliran pesan.

---

## 2. Kalkulasi Daya: Arithmetic Operators

JavaScript mendukung operasi matematika standar untuk tipe data **Number**:

| Operator | Fungsi | Contoh (Energi) |
| :--- | :--- | :--- |
| `+` | Penjumlahan (Add) | `bateraiA + bateraiB` |
| `-` | Pengurangan (Subtract) | `totalDaya - bebanLampu` |
| `*` | Perkalian (Multiply) | `dayaPerUnit * jumlahUnit` |
| `/` | Pembagian (Divide) | `totalEnergi / waktu` |
| `%` | Sisa Bagi (Modulo) | `sisaDaya % kapasitas` |

---

## 3. Aliran Informasi: String Operations

Untuk tipe data **String**, operator `+` berfungsi sebagai penyambung (Concatenator).

```javascript
let greeting = "Hello";
let hubName = "Web Energy Hub";
let message = greeting + " from " + hubName; // "Hello from Web Energy Hub"
```

### Modern Approach: Template Literals
Arsitek modern lebih suka menggunakan backticks (`` ` ``) untuk menyisipkan energi langsung ke dalam string:
```javascript
let report = `Status Hub: ${hubName} sedang aktif!`;
```

---

## Arsitek Mindset: Prioritas Operasi (Operator Precedence)

Sama seperti sirkuit nyata, urutan aliran itu penting. JavaScript mengikuti aturan matematika (PEMDAS): Perkalian dan Pembagian dilakukan lebih dulu daripada Penjumlahan. Gunakan tanda kurung `()` untuk mengontrol aliran energi secara eksplisit.

---

## Hands-on: Mengelola Aliran Energi
Buka file `examples/flow_demo.js` untuk melihat simulasi kalkulasi daya dan penggabungan laporan status hub.

---
*Status: [status.md](../../../../status.md)*
