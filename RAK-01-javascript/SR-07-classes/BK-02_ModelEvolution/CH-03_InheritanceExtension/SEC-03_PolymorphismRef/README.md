# CH-03: Polymorphism Ref (Versatile Output)

> **"Pusat Grid dapat mengirimkan satu perintah tunggal 'Operasikan!', namun setiap model unit akan merespons dengan cara yang berbeda sesuai dengan keahliannya. Polymorphism adalah 'Output Serbaguna' (Versatile Output) yang memungkinkan standarisasi perintah untuk berbagai jenis unit."**

Polimorfisme (banyak bentuk) dalam OOP memungkinkan kita menggunakan antarmuka yang sama untuk berbagai jenis objek yang mendasarinya.

## 1. Mental Model: "Versatile Output"

Bayangkan Hub memiliki tombol besar berlabel `ACTIVATE_ALL`.
- Unit **Solar** akan merespons dengan membuka panel.
- Unit **Nuclear** akan merespons dengan memutar turbin uap.
- Unit **Battery** akan merespons dengan melepaskan arus DC.

Pusat tidak perlu tahu **bagaimana** masing-masing unit bekerja; ia hanya perlu tahu bahwa semua unit tersebut memiliki metode `activate()`.

---

## 2. Implementasi Polimorfisme

Ini biasanya dicapai melalui pewarisan di mana setiap class anak mendefinisikan ulang (*override*) metode yang sama dari induknya.

```javascript
class BaseModule {
    produceEnergy() { /* Dasar */ }
}

class Solar extends BaseModule {
    produceEnergy() { console.log("Energy from SUN"); }
}

class Wind extends BaseModule {
    produceEnergy() { console.log("Energy from WIND"); }
}

const modules = [new Solar(), new Wind()];
modules.forEach(m => m.produceEnergy()); // Satu perintah, banyak hasil!
```

---

## 3. Manfaat Arsitektural

- **Flexibility**: Hub bisa menambah jenis unit baru tanpa perlu mengubah kode sistem pusat.
- **Simplification**: Anda bisa mengelola daftar unit yang beragam dalam satu koleksi seragam.

---

## Arsitek Mindset: Antarmuka yang Seragam

Sebagai arsitek Hub:
- Gunakan polimorfisme untuk menstandarisasi kontrak (metode) di seluruh sistem.
- Pastikan setiap unit anak mematuhi tanda tangan metode (*method signature*) yang sama agar sistem pusat tidak mengalami kegagalan saat memanggil perintah.

---

## Hands-on: Lab Output Serbaguna
Buka file `examples/polymorphism_lab.js` untuk melihat bagaimana berbagai jenis unit merespons perintah `activate()` yang sama dengan cara mereka masing-masing.

---
*Status: [status.md](../../../status.md)*
