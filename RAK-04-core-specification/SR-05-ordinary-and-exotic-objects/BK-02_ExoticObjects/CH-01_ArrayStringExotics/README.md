# CH-01: Array and String Exotics

> **"Kelebihan struktural yang unik. `Array and String Exotics` menjelaskan mengapa beberapa objek standar di Hub memiliki 'sihir' yang tidak dimiliki objek biasa."**

**Source Hub**: 
- [ECMA-262: Array Exotic Objects](https://tc39.es/ecma262/#sec-array-exotic-objects)
- [ECMA-262: String Exotic Objects](https://tc39.es/ecma262/#sec-string-exotic-objects)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Objek Eksotis adalah objek yang mendefinisikan ulang metode internal esensialnya. **Array** adalah contoh paling umum; ia memodifikasi `[[DefineOwnProperty]]` agar properti `length` selalu sinkron dengan jumlah elemen. **String** eksotis memodifikasi `[[GetOwnProperty]]` agar karakter individual bisa diakses seolah-olah mereka adalah properti numerik (`str[0]`).

**Model Mental**:
- **Ordinary Object**: Kotak standar. Isinya apa pun yang Anda taruh.
- **Array Exotic**: Kotak pintar dengan layar penghitung di luar. Setiap kali Anda memasukkan barang, layar (length) bertambah otomatis.
- **String Exotic**: Buku catatan yang sudah dicetak halamannya. Anda tidak bisa menambah halaman, hanya bisa membacanya melalui nomor halaman (index).

---

## 2. Visualisasi Sistem: Array Length Sync

```mermaid
graph TD
    User[User: arr[10] = 'X'] --> Array[[Array Object]]
    Array --> Define[[Internal: [[DefineOwnProperty]]]]
    Define --> Check{Is Index > length?}
    Check -->|Yes| UpdateLength[Update length to Index + 1]
    Check -->|No| NormalValue[Regular Property Update]
    
    style Array fill:#a8e6cf,stroke:#333
    style UpdateLength fill:#f1c40f,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Karakteristik Array (Clause 10.4.2)
- Saat properti `length` dikurangi, Hub secara otomatis menjalankan `[[Delete]]` pada semua properti numerik yang indeksnya lebih besar dari panjang baru. Ini adalah mekanisme penghapusan massal yang sangat efisien di level internal.

### Karakteristik String (Clause 10.4.3)
- Objek String memiliki properti indeks virtual. Jika Anda mengakses `str[0]`, Hub sebenarnya memanggil metode internal yang secara dinamis mengekstrak karakter dari data mentah string tersebut.

### Arsitek Mindset: Semantic Accuracy
- Jangan mencoba mensimulasikan Array hanya dengan objek biasa dan manual update length. Anda tidak akan pernah bisa menyamai efisiensi dan keakuratan "Magic" yang sudah ditanamkan Hub ke dalam sirkuit Array Eksotis bawaan.

---

## 4. Lab Praktis
Buka file `examples/exotic_behavior_lab.js` untuk melihat bagaimana perubahan `length` pada Array secara otomatis menghapus elemen-elemen di dalamnya.

---
*Status: [status.md](../../../../../status.md)*
