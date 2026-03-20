# CH-02: Closures Ref (The Currying Station)

> **"Closures adalah 'Baterai Memori' yang memungkinkan fungsi membawa data dari masa lalu ke masa depan. Di level ahli, kita menggunakan ini di 'Stasiun Currying' untuk membangun fungsi yang sangat spesifik dari templat yang umum."**

Kita sudah membahas dasar-dasar Closures di RAK-02. Sekarang kita akan fokus pada aplikasi lanjutannya: **Function Currying**.

## 1. Mental Model: "The Currying Station"

Bayangkan Anda memiliki mesin pengolah energi yang membutuhkan 3 slot parameter: `(Lokasi, Tipe, Voltase)`.
Alih-alih mengisi ketiganya sekaligus, Anda bisa:
1.  Mengisi `Lokasi` saja -> Menghasilkan mesin baru yang sudah tahu lokasinya.
2.  Mengisi `Tipe` pada mesin baru tersebut -> Menghasilkan mesin sirkuit yang lebih spesifik.
3.  Akhirnya hanya mengisi `Voltase` saat dibutuhkan.

---

## 2. Apa itu Currying?

Currying adalah teknik mentransformasi fungsi yang menerima banyak argumen menjadi serangkaian fungsi yang masing-masing menerima satu argumen saja.

```javascript
// Fungsi Normal
function multiplier(a, b) { return a * b; }

// Versi Curried
function curriedMultiplier(a) {
    return function(b) {
        return a * b;
    };
}

const double = curriedMultiplier(2);
console.log(double(10)); // 20
```

---

## 3. Keuntungan Arsitektural

- **Reusability**: Menciptakan fungsi spesifik dari fungsi umum.
- **Lazy Evaluation**: Menunda eksekusi sampai semua data terkumpul.
- **Konfigurasi Awal**: Menetapkan pengaturan dasar Hub sekali, lalu menggunakannya berkali-kali.

---

## Arsitek Mindset: Membangun Pabrik Fungsi

Sebagai arsitek Hub:
- Gunakan Closures untuk enkapsulasi (menyembunyikan privasi data).
- Gunakan Currying untuk menyederhanakan pemanggilan fungsi yang sering menggunakan argumen yang sama di awal.
- Pastikan memori tidak terbebani secara berlebihan jika Anda membuat terlalu banyak Closures tanpa melepaskannya (memory management).

---

## Hands-on: Lab Stasiun Currying
Buka file `examples/currying_lab.js` untuk melihat bagaimana kita membangun sistem penghitung biaya energi yang fleksibel menggunakan teknik Currying.

---
*Status: [status.md](../../../status.md)*
