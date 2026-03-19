# CH-03: String Exotics (The Read-Only Sequence)

> **"Beberapa unit penyimpanan data bersifat statis dan tidak bisa diubah sirkuitnya. `StringExoticObject` adalah 'Urutan Baca-Saja' (The Read-Only Sequence) — mesin yang memetakan karakter ke indeks numerik yang hanya bisa dibaca namun tidak bisa ditulis ulang."**

*Pemetaan ECMA-262: Clause 10.4.3 (String Exotic Objects)*

## 1. Mental Model: "The Read-Only Sequence"

Bayangkan sebuah pita data yang berisi serangkaian kode.
- Hub secara otomatis membuat unit eksotis setiap kali Anda membalut teks mentah menjadi obyek.
- Unit ini memiliki properti `length` yang statis (berdasarkan jumlah karakter).
- Ia juga memiliki properti numerik (seperti `arr[0]`) yang memetakan langsung ke karakter di posisi tersebut.

---

## 2. Kenapa Ini 'Eksotis'?

String memodifikasi metode internal **`[[GetOwnProperty]]`**.
Saat Anda mencoba mengakses `str[0]`, secara internal Hub melakukan:
1.  Jika indeks adalah angka yang valid.
2.  Jika indeks < `length`.
3.  Hub membuat "Virtual Property Descriptor" yang berisi karakter tersebut, dengan aturan: `writable: false` dan `enumerable: true`.

Inilah sebabnya `str[0] = "X"` tidak akan pernah berhasil di JavaScript. Sirkuit internalnya menolak penulisan pada indeks numerik.

---

## 3. Praktik Lapangan (Lab)

```javascript
const msg = "HUB";
console.log(msg[0]); // "H"

msg[0] = "Z"; // Tidak ada efek (Silently fail atau Error di strict mode)
console.log(msg[0]); // Tetap "H"
```

---

## Arsitek Mindset: Kekekalan Data

Sebagai arsitek Hub:
- Gunakan sifat *immutable* (kekal) dari unit String untuk menjamin keamanan data antar unit.
- Jika Anda perlu mengubah data per karakter secara intensif, konversikan unit String menjadi unit **Array** (`split('')`), lakukan modifikasi, lalu kembalikan menjadi String (`join('')`). Ini jauh lebih efisien daripada mencoba memodifikasi String secara langsung.

---
*Status: [status.md](../../../docs/status.md)*
