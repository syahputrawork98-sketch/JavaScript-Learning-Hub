# Chapter 02: Abstract Operations

Chapter ini membedah sub-clause 5.2.1 dari ECMA-262. Kita akan mempelajari bagaimana operasi abstrak didefinisikan, tanda tangannya (signatures), parameter, dan pola pemanggilannya dalam spesifikasi.

*Mental Model: "Fungsi Internal Sang Chef"*

## 1. Apa itu Abstract Operations?

Jika algoritma utama adalah "Resep Besar", maka *Abstract Operations* adalah sub-resep untuk tugas-tugas spesifik (seperti "Cara Mencincang Bawang" atau "Cara Merebus Air"). Operasi ini tidak dipanggil langsung oleh kode JS Anda, melainkan oleh engine untuk menjalankan logika bahasa.

## 2. Struktur Tanda Tangan (Signatures)

Setiap operasi abstrak didefinisikan dengan nama dan daftar parameter.

**Contoh: ToNumber( argument )**
- **Nama**: `ToNumber`
- **Parameter**: `argument`

Beberapa operasi memiliki parameter opsional atau nilai default, yang biasanya dijelaskan dalam teks algoritmanya.

## 3. Pola Pemanggilan (Call Patterns)

Dalam spesifikasi, Anda akan melihat pemanggilan seperti ini:
1. Let *num* be ? ToNumber(*value*).

Tanda tanya (`?`) di sana adalah penanganan error (dibahas di CH-07), tapi `ToNumber(value)` adalah pemanggilan fungsi internalnya.

## 4. Parameter Bertipe (Typed Parameters)

Spesifikasi sering kali menentukan tipe parameter secara implisit. Misalnya, jika sebuah operasi menerima parameter bernama *O*, biasanya itu merujuk pada sebuah *Object*. Jika bernama *n*, biasanya itu merujuk pada *Number*.

Memahami bagaimana operasi-operasi ini saling memanggil adalah kunci untuk menelusuri alur eksekusi yang kompleks dalam spesifikasi.
