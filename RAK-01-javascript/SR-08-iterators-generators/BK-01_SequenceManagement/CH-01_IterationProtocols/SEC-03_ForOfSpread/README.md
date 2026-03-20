# CH-03: for...of & Spread (Automatic Conveyors)

> **"Menekan tombol `next()` secara manual mungkin melelahkan untuk aliran energi besar. JavaScript menyediakan 'Ban Berjalan Otomatis' (Automatic Conveyors) dalam bentuk `for...of` dan Spread Operator yang secara otomatis mengelola seluruh protokol iterasi di balik layar."**

Gula sintaksis ini memudahkan kita memproses objek yang sudah tersertifikasi sebagai **Iterable**.

## 1. Mental Model: "Automatic Conveyors"

Bayangkan ban berjalan di pabrik yang sudah terhubung ke pintu `Symbol.iterator`. Anda tidak perlu menekan tombol satu per satu; cukup letakkan wadah (`for...of`) di ujung ban, dan data akan mengalir masuk sampai habis (`done: true`).

---

## 2. Pemanfaatan Utama

### A. Pengulangan `for...of`
Alat paling umum untuk memproses data berurutan. Ia secara otomatis mengekstrak `.value` dan berhenti saat `.done` bernilai `true`.

```javascript
const energyUnits = ["10MW", "20MW", "30MW"];

for (const unit of energyUnits) {
    console.log(`Mengirim: ${unit}`);
}
```

### B. Spread Operator `[...]`
Membuka seluruh segel data iterable dan menyebarkannya ke dalam wadah baru.

```javascript
const alphaGrid = [1, 2];
const combinedGrid = [...alphaGrid, 3, 4]; // [1, 2, 3, 4]
```

---

## 3. Keuntungan Arsitektural

- **Kebersihan Kode**: Menghindari hitungan indeks manual yang rawan kesalahan (*off-by-one errors*).
- **Interoperabilitas**: Cara ini bekerja pada semua jenis iterable kustom Anda secara seragam.

---

## Arsitek Mindset: Otomasi Grid

Sebagai arsitek Hub:
- Pilih `for...of` daripada loop `for` tradisional (dengan indeks `i`) jika Anda hanya butuh data berurutannya saja.
- Gunakan spread operator untuk menggabungkan atau menyalin aliran data secara efisien.
- Ingat bahwa `for...of` hanya bekerja pada objek yang memiliki kontrak **Iterable**. Objek biasa `{}` tidak akan bisa masuk ke ban berjalan otomatis ini secara default.

---

## Hands-on: Lab Ban Berjalan Otomatis
Buka file `examples/conveyor_lab.js` untuk membandingkan kemudahan pemrosesan data menggunakan alat otomatis ini dibandingkan manual `next()`.

---
*Status: [status.md](../../../status.md)*
