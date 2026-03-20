# CH-03: Object Property Attributes (Energy Locksmiths)

> **"Object Property Attributes adalah 'Sistem Pengunci' yang menentukan siapa yang boleh melihat, mengubah, atau menghapus komponen energi di dalam objek Anda."**

Di JavaScript, sebuah properti bukan sekadar pasangan kunci-nilai. Setiap properti memiliki "atribut" tersembunyi yang mengatur perilakunya.

## 1. Mental Model: "The Energy Locksmiths"

Bayangkan Anda adalah ahli kunci di Hub Energi. Beberapa saklar boleh diubah siapa saja (**Writable**), beberapa saklar hanya untuk dilihat (**Read-only**), dan beberapa sirkuit sangat rahasia sehingga tidak boleh dihapus atau dipindahkan (**Configurable**).

![Property Locksmith](./assets/property_locksmith.svg)

---

## 2. Mengenal Property Descriptors

Setiap properti memiliki 4 atribut utama (untuk data descriptor):
1.  **`value`**: Nilai sebenarnya dari properti.
2.  **`writable`**: Jika `false`, nilai tidak bisa diubah (seperti `const` untuk properti).
3.  **`enumerable`**: Jika `false`, properti tidak muncul saat kita melakukan pengulangan (`for...in` atau `Object.keys`).
4.  **`configurable`**: Jika `false`, atribut properti tidak bisa diubah lagi dan properti tidak bisa dihapus.

```javascript
const transformer = {};
Object.defineProperty(transformer, 'id', {
    value: 'TR-99',
    writable: false,     // Tidak bisa diubah
    enumerable: true,
    configurable: false  // Tidak bisa dihapus
});
```

---

## 3. Keamanan Tingkat Objek

Selain mengatur properti satu per satu, Anda bisa mengunci seluruh objek sekaligus:

- **`Object.preventExtensions(obj)`**: Tidak bisa menambah properti baru.
- **`Object.seal(obj)`**: Tidak bisa menambah/menghapus, tapi properti yang ada (jika writable) masih bisa diubah nilainya.
- **`Object.freeze(obj)`**: Kunci total! Tidak bisa tambah, hapus, atau ubah nilai. Ini adalah status **Immutability**.

---

## Arsitek Mindset: Keamanan & Integritas Data

Sebagai arsitek, gunakan `Object.freeze()` untuk objek konfigurasi global atau data yang bersifat konstan di seluruh aplikasi. Gunakan `writable: false` untuk properti ID atau metadata sensitif. Ini mencegah bug yang disebabkan oleh perubahan data yang tidak disengaja di sirkuit lain yang jauh.

---

## Hands-on: Lab Penguncian Properti
Buka file `examples/props_lab.js` untuk melihat apa yang terjadi saat kita mencoba merusak objek yang sudah dikunci oleh "Energy Locksmith".

---
*Status: [status.md](../../../status.md)*
