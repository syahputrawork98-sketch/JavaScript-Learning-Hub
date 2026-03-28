# SEC-02: Relational Operators (Connection Scoping)

> **"Setiap komponen di Hub saling terhubung. Relational Operators memungkinkan Anda memindai apakah sebuah kabel terhubung ke port tertentu atau apakah sebuah modul adalah turunan dari cetak biru (blueprint) tertentu."**

Operator relasional membandingkan operand dan mengembalikan Boolean berdasarkan hubungan antar keduanya.

## 1. Mental Model: "Connection Scoping"

### `in`: Pemindai Port
Mengecek apakah sebuah properti (kabel) ada di dalam objek (Hub). Berlaku juga untuk properti yang diwariskan dari Prototype Chain.

```javascript
const engine = { speed: 100 };
console.log("speed" in engine); // true
```

### `instanceof`: Verifikator Blueprint
Mengecek apakah sebuah objek (mesin) dibuat berdasarkan cetak biru (Constructor) tertentu. Sangat penting untuk memverifikasi jenis komponen sebelum melakukan integrasi.

```javascript
const myCar = new Car();
console.log(myCar instanceof Car); // true
```

---

## 2. Perbedaan Krusial

`in` mencari **Nama Properti**, sedangkan `instanceof` mencari **Silsilah Objek**. Pastikan Anda menggunakan pemindai yang tepat untuk kebutuhan diagnosa Anda!

---

## Hands-on: Lab Cakupan Koneksi
Buka file `examples/relational_lab.js` untuk mempraktikkan pemindaian properti objek dan verifikasi identitas modul menggunakan blueprint.

---
*Status: [status.md](../../../status.md)*
