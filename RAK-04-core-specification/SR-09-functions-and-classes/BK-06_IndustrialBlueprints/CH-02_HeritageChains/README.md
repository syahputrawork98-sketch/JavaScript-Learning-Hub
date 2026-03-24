# CH-02: Heritage Chains (Inheritance)

> **"Infrastruktur baru tidak perlu dibangun dari nol jika sudah ada basis yang stabil. `Heritage Chains` adalah 'Rantai Pewarisan' (Heritage Chains)—mekanisme untuk menurunkan kemampuan generator induk ke unit turunan."**

*Pemetaan ECMA-262: Clause 15.7.3*

## 1. Mental Model: "The Energy Heritage"

- **`extends`**: Menghubungkan blueprint baru ke blueprint induk. Unit turunan akan mewarisi seluruh "resep" metode dari induknya.
- **`super`**: Kabel penghubung ke induk. Digunakan di dalam konstruktor untuk memicu instalasi basis induk sebelum memasang komponen tambahan pada turunan.

---

## 2. Overriding: Modifikasi Sinyal

Unit turunan bisa memiliki metode dengan nama yang sama dengan induknya. Ini disebut **Overriding**. Arus akan mengalir ke metode turunan terlebih dahulu. Jika turunan ingin memanggil perilaku induk di tengah prosesnya, ia bisa menggunakan `super.methodName()`.

---

## 3. Praktik Lapangan (Lab)

```javascript
class Generator {
    produce() { return "RAW_ENERGY"; }
}

class SolarGenerator extends Generator {
    produce() {
        const base = super.produce(); // Ambil dasar dari induk
        return `${base}_CLEAN_SOLAR`; // Modifikasi sinyal
    }
}

const solar = new SolarGenerator();
console.log(solar.produce());
```

---

## Arsitek Mindset: Komposisi vs Pewarisan

Sebagai arsitek Hub:
- Gunakan **Inheritance** (`extends`) hanya jika unit turunan benar-benar merupakan tipe dari unit induk (*"is-a" relationship*).
- Jangan membuat rantai pewarisan yang terlalu panjang (Deep Inheritance). Rantai yang terlalu panjang membuat pelacakan malfungsi sinyal menjadi sangat sulit karena energi harus melewati terlalu banyak lapisan prototipe.

---
*Status: [status.md](../../../docs/status.md)*
