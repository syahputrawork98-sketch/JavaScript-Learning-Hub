# CH-08: The Boolean Type & Objects

Dunia biner di JavaScript: `true` atau `false`. (Clause 4.4.17 - 4.4.19).

## 1. Boolean Value & Type (4.4.17 - 4.4.18)
Kumpulan nilai yang hanya berisi dua anggota: `true` dan `false`. Primitif ini sangat efisien dan digunakan untuk semua kontrol logika.

## 2. Boolean Object (4.4.19)
Ini adalah anggota tipe **Object** yang merupakan instansi dari built-in constructor `Boolean`. 
> **PERINGATAN:** Jangan pernah menggunakan `new Boolean()`. Objek boolean selalu bernilai `truthy` meskipun nilai internalnya `false`. 
> ```javascript
> let x = new Boolean(false);
> if (x) { /* Kode ini akan dieksekusi! */ }
> ```

---
> [!TIP]
> **Best Practice:** Gunakan selalu nilai primitif `true`/`false`. Objek boolean hanya ada untuk keperluan internal spesifikasi saat melakukan pembungkusan (*Autoboxing*).
