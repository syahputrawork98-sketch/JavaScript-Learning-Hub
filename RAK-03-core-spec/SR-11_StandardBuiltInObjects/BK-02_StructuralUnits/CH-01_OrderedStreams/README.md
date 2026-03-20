# CH-01: Ordered Streams (Arrays & TypedArrays)

> **"Untuk mendistribusikan energi dalam jumlah besar secara berurutan, Hub menggunakan jalur pipa khusus. `Ordered Streams` adalah 'Unit Kontainer Linear'—perangkat untuk mengelola koleksi data yang terindeks."**

*Pemetaan ECMA-262: Clause 23 & 25*

## 1. Mental Model: "The Number Line"

- **`Array`**: Koleksi serbaguna dan dinamis. Ia bisa menyimpan berbagai tipe energi (angka, teks, objek) dalam satu sirkuit. Memiliki metode built-in yang sangat kuat untuk transformasi data (`map`, `filter`, `reduce`).
- **`TypedArrays`**: Pipa transmisi berkinerja tinggi. Berbeda dengan array biasa, TypedArrays memiliki tipe data tetap (misal: hanya `Int32`) dan ukuran tetap. Digunakan untuk manipulasi data biner mentah (seperti audio, video, atau data sensor Hub).

---

## 2. Array Methods: Transmutasi Energi

Metode array memungkinkan Anda memproses seluruh stream data secara deklaratif:
- **`push/pop`**: Menambah/menghapus energi dari ujung pipa.
- **`map`**: Mengubah setiap unit energi dalam stream menjadi bentuk baru.
- **`filter`**: Membuang energi yang tidak memenuhi kriteria keamanan.

---

## 3. Praktik Lapangan (Lab)

```javascript
// 1. Array Dinamis
const powerNodes = [100, 200, 300];
const boostedNodes = powerNodes.map(n => n * 1.1);

// 2. TypedArray untuk Data Biner
const buffer = new ArrayBuffer(16); // Alokasi 16 byte
const int32View = new Int32Array(buffer);
int32View[0] = 42;

console.log("Raw Binary View:", int32View);
```

---

## Arsitek Mindset: Pilih Pipa yang Tepat

Sebagai arsitek Hub:
- Gunakan **`Array`** untuk sebagian besar logika bisnis dan manipulasi data tingkat tinggi.
- Gunakan **`TypedArrays`** (bersama `ArrayBuffer`) jika Anda membangun sistem yang membutuhkan kecepatan eksekusi ekstrem atau interaksi langsung dengan perangkat keras/grafis (WebGPU/WebGL).
- Selalu gunakan metode fungsional (`map`, `filter`) daripada loop `for` manual jika memungkinkan, untuk menjaga blueprint kode tetap bersih dan mudah dipahami oleh teknisi lain.

---
*Status: [status.md](../../../docs/status.md)*
