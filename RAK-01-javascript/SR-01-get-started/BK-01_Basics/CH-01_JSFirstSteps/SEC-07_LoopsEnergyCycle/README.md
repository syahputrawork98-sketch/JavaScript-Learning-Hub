# CH-07: Loops (The Energy Cycle)

> **"Looping adalah sistem pengulangan yang memastikan setiap bagian sistem mendapatkan energi secara merata dan terus-menerus."**

Dalam sebuah Hub Energi, kita sering melakukan hal yang sama berulang kali: mengecek status 100 baterai, mengisi daya 5 sektor secara bergantian, atau menunggu hingga tegangan stabil. Inilah fungsi **Loop (Perulangan)**.

## 1. Mental Model: "Siklus Generator"

Bayangkan sebuah generator yang berputar:
- **`for`**: Ibarat putaran yang sudah diatur jumlahnya. "Putar generator sebanyak 10 kali."
- **`while`**: Ibarat putaran yang bergantung pada kondisi. "Putar terus selama bahan bakar masih ada."

---

## 2. Putaran Terencana: `for` Loop

Gunakan `for` jika Anda tahu persis berapa kali energi harus dialirkan:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Mengisi Baterai ke-${i}...`);
}
```

---

## 3. Putaran Berulang: `while` & `do...while`

Gunakan `while` jika pengulangan bergantung pada kondisi dinamis:

```javascript
while (energyAvailable > 0) {
    // Alirkan energi
    energyAvailable -= 10;
}
```

- **`do...while`**: Memastikan sirkuit dijalankan **minimal satu kali** sebelum mengecek kondisi sensor.

---

## 4. Kontrol Siklus: `break` & `continue`

Kadang kita perlu menginterupsi siklus:
- **`break`**: Hentikan paksa seluruh siklus (misal: ada korsleting).
- **`continue`**: Lewati putaran saat ini dan lanjut ke putaran berikutnya (misal: satu baterai rusak, lewati ke baterai lain).

---

## Arsitek Mindset: Bahaya Infinite Cycle

Hati-hati dengan "Infinite Loop" (Perulangan Tak Terhingga). Jika sensor kondisi tidak pernah berubah menjadi False dalam `while` loop, sistem Anda akan hang (Overheat). Selalu pastikan ada mekanisme untuk mengakhiri siklus.

---

## Hands-on: Simulasi Pengisian Berantai
Buka file `examples/cycle_demo.js` untuk melihat bagaimana kita menggunakan loops untuk mengelola pengisian daya massal.

---
*Status: [status.md](../../../../status.md)*
