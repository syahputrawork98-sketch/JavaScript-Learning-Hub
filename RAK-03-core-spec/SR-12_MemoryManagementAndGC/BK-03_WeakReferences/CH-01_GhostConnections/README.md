# CH-01: Ghost Connections (WeakRef)

> **"Terkadang kita perlu memantau sebuah unit energi tanpa harus menahan keberadaannya di Grid. `Ghost Connections` adalah 'Referensi Lemah' (WeakRef)—jalur pantau yang tidak dihitung sebagai koneksi kabel keras oleh tim pembersih Hub."**

*Pemetaan ECMA-262: Clause 28.3*

## 1. Mental Model: "The Observer Node"

Berbeda dengan variabel biasa (Strong Reference) yang menjaga objek tetap "Hidup", sebuah **`WeakRef`** adalah kabel hantu:
- Ia memungkinkan Anda memegang objek, tetapi Garbage Collector diizinkan untuk menghancurkan objek tersebut jika tidak ada kabel keras lain yang terhubung.
- Jika objek sudah didaur ulang, `WeakRef` akan mengembalikan `undefined` saat Anda mencoba memanggilnya kembali (`deref()`).

---

## 2. Kenapa Menggunakan Referensi Hantu?

Sangat berguna untuk skema **Caching**:
- Anda ingin menyimpan objek besar di memori untuk mempercepat akses, tetapi Anda tidak ingin objek tersebut membebani Warehouse jika Hub sudah mulai kehabisan ruang.
- Dengan `WeakRef`, Hub bebas menghapus cache tersebut saat memori dibutuhkan untuk operasi yang lebih kritis.

---

## 3. Praktik Lapangan (Lab)

```javascript
let core = { power: "MAX" };
const ghostLink = new WeakRef(core);

// Cek status energi via jalur hantu
const status = ghostLink.deref();
if (status) {
    console.log("Core is still alive:", status.power);
} else {
    console.log("Core has been recycled.");
}
```

---

## Arsitek Mindset: Ketidakpastian Hub

Sebagai arsitek Hub:
- Jangan pernah mengandalkan keberadaan objek di dalam `WeakRef` untuk logika bisnis yang kritis. Objek tersebut bisa hilang kapan saja tergantung pada kapan tim pembersih (GC) memutuskan untuk bergerak.
- Gunakan `WeakRef` hanya untuk optimasi (seperti cache atau pemetaan metadata opsional) di mana jika data hilang, Hub masih bisa berfungsi dengan mengambil data dari sumber aslinya lagi.

---
*Status: [status.md](../../../docs/status.md)*
