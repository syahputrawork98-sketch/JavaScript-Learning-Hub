# CH-02: Function Environments (The Command Centers)

> **"Setiap fungsi di Hub adalah 'Pusat Komando' (The Command Center) kecil yang memiliki aturan otoritasnya sendiri. `Function Environment Record` adalah sistem yang mengelola akses ke instansi khusus seperti `this` dan `super`."**

*Pemetaan ECMA-262: Clause 9.1.1.2 (Function Environment Records)*

## 1. Mental Model: "The Command Center"

Bayangkan sebuah pusat komando mandiri yang memiliki:
- **`[[ThisValue]]`**: Kabel yang menunjuk ke siapa pemilik pusat komando ini saat ini.
- **`[[ThisBindingStatus]]`**: Status apakah `this` sudah boleh diakses (Sangat penting di `constructor` subclass).
- **`[[HomeObject]]`**: Alamat gedung tempat fungsi ini dibangun (Digunakan oleh `super`).

---

## 2. This Binding: Siapa yang Menyetir?

Di JavaScript, `this` tidak ditentukan saat fungsi dibuat, melainkan saat **terminal diaktifkan** (Execution Context dibuat).
- **Arrow Functions**: Tidak memiliki Command Center sendiri; mereka meminjam kabel `this` dari baki di bawahnya (Lexical `this`).
- **Standard Functions**: Membuat `this` baru berdasarkan cara mereka dipanggil.

---

## 3. Praktik Lapangan (Lab)

```javascript
const hubManual = {
    model: "X-200",
    checkModel: function() {
        console.log(this.model); // 'this' menunjuk ke hubManual
    }
};

const orphanCheck = hubManual.checkModel;
orphanCheck(); // undefined (atau error di strict mode) karena 'this' menunjuk ke Global Stage
```

---

## Arsitek Mindset: Otoritas Konteks

Sebagai arsitek Hub:
- Gunakan Arrow Functions jika Anda ingin fungsi tersebut tetap setia pada konteks tempat ia dilahirkan (seperti di dalam event listener atau timeout).
- Sadarilah bahwa `super` memerlukan `[[HomeObject]]` yang statis, itulah sebabnya Anda tidak bisa memindahkan metode yang menggunakan `super` ke objek lain secara sembarangan di dalam Grid.

---
*Status: [status.md](../../../docs/status.md)*
